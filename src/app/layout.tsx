import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3010"
  ),
  title: "Victor — Companion Intelligence",
  description:
    "A local-first companion intelligence layer for high-stakes teams. Keeps context alive when decisions cannot wait.",
  openGraph: {
    title: "Victor — Companion Intelligence",
    description:
      "A local-first companion intelligence layer for high-stakes teams. Keeps context alive when decisions cannot wait.",
    type: "website",
    locale: "en_US",
    siteName: "Victor Intelligence",
    images: [
      {
        url: "/victor-assets/victor-presence.png",
        width: 1200,
        height: 630,
        alt: "Victor — Companion Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor — Companion Intelligence",
    description:
      "A local-first companion intelligence layer for high-stakes teams. Keeps context alive when decisions cannot wait.",
    images: ["/victor-assets/victor-presence.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
