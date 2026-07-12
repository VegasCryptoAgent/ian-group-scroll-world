import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./theme-v2.css";
import "./globe.css";
import "./cofounder-inspired.css";
import "./effects.css";
import "./ripple-original.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iangroup.ai"),
  title: { default: "IAN Group — Turn Traction Into Intelligent Scale", template: "%s | IAN Group" },
  description: "IAN integrates AI, redesigns operations, and builds growth systems for founder-led companies with traction.",
  keywords: ["AI consulting", "AI integration", "workflow automation", "AI agents", "operational intelligence", "growth-stage companies"],
  openGraph: { title: "Turn traction into intelligent scale.", description: "AI execution for companies with traction.", type: "website", url: "https://www.iangroup.ai", images: [{ url: "/og.png", width: 1200, height: 630, alt: "IAN Group — Turn traction into intelligent scale" }] },
  twitter: { card: "summary_large_image", title: "IAN Group — Intelligent Scale", description: "AI execution for companies with traction.", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>;
}
