import { NextResponse } from "next/server";
import { Resend } from "resend";

const RATE_LIMIT = new Map<string, number>();
const RATE_WINDOW_MS = 60_000;

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL ?? "hello@victorintelligence.com";

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    const lastSubmit = RATE_LIMIT.get(ip);
    if (lastSubmit && Date.now() - lastSubmit < RATE_WINDOW_MS) {
      return NextResponse.json(
        { error: "Please wait before submitting again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, organisation, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (name.length > 200 || email.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: "One or more fields exceed the maximum length." },
        { status: 400 }
      );
    }

    RATE_LIMIT.set(ip, Date.now());

    const trimmed = {
      name: name.trim(),
      email: email.trim(),
      organisation: organisation?.trim() || null,
      message: message.trim(),
    };

    if (resend) {
      await resend.emails.send({
        from: "Victor Contact <onboarding@resend.dev>",
        to: CONTACT_EMAIL,
        replyTo: trimmed.email,
        subject: `Working session request — ${trimmed.name}`,
        text: [
          `Name: ${trimmed.name}`,
          `Email: ${trimmed.email}`,
          `Organisation: ${trimmed.organisation ?? "—"}`,
          "",
          trimmed.message,
        ].join("\n"),
      });
    } else {
      console.log(
        "[Contact — no RESEND_API_KEY, logging only]",
        JSON.stringify({
          ...trimmed,
          message: trimmed.message.slice(0, 120) + "…",
          timestamp: new Date().toISOString(),
        })
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact route error]", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
