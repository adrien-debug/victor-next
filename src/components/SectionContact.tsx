"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function SectionContact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      organisation: (form.elements.namedItem("organisation") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  }

  if (status === "success") {
    return (
      <section id="contact" className="section-conversion">
        <div className="container-md">
          <div className="form-success">
            <h2 className="mask-text">Request received.</h2>
            <p className="hero-sub vision-intro-narrow">
              We&rsquo;ll review your context and get back to you within 48
              hours with a proposed session format.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const disabled = status === "sending";

  return (
    <section id="contact" className="section-conversion">
      <div className="container-md">
        <div className="reveal">
          <h2 className="mask-text">
            Start with a practical conversation.
          </h2>
          <p className="hero-sub vision-intro-wide">
            Share your environment, constraints, and where Victor would need
            to sit in the workflow. We&rsquo;ll propose a focused working
            session.
          </p>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label mono">
                  NAME
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="form-input"
                  required
                  placeholder="Your name"
                  autoComplete="name"
                  disabled={disabled}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label mono">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="form-input"
                  required
                  placeholder="you@organisation.com"
                  autoComplete="email"
                  disabled={disabled}
                />
              </div>
            </div>

            <div className="form-group">
              <label
                htmlFor="contact-organisation"
                className="form-label mono"
              >
                ORGANISATION{" "}
                <span className="form-optional">(optional)</span>
              </label>
              <input
                type="text"
                id="contact-organisation"
                name="organisation"
                className="form-input"
                placeholder="Your company or team"
                autoComplete="organization"
                disabled={disabled}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label mono">
                MESSAGE
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="form-input form-textarea"
                required
                placeholder="Describe your environment, team size, and what problem you're trying to solve…"
                rows={5}
                disabled={disabled}
              />
            </div>

            {status === "error" && (
              <p className="form-error" role="alert">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="btn-victor primary"
              disabled={disabled}
            >
              {disabled ? "Sending…" : "Request a working session"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
