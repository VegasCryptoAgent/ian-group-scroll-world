"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

declare global {
  interface Window {
    mountScrollWorld?: (node: HTMLElement, config: Record<string, unknown>) => void;
  }
}

const sections = [
  {
    id: "vision", label: "Vision", href: "/vision", still: "/scroll-world/stills/01.jpg",
    poster: "/scroll-world/stills/poster-01.jpg", posterMobile: "/scroll-world/stills/poster-01-m.jpg",
    clip: "/scroll-world/vid/leg-01.mp4", clipMobile: "/scroll-world/vid/leg-01-m.mp4",
    accent: "#6558F5", scroll: 1.85, linger: 0.32,
    eyebrow: "The first constraint", title: "See the company you could become.",
    body: "IAN turns complexity into a clear path from today’s traction to tomorrow’s intelligent operating model.",
    tags: ["AI readiness", "Scale roadmap", "Executive clarity"]
  },
  {
    id: "operations", label: "Intelligence", href: "/intelligence", still: "/scroll-world/stills/02.jpg",
    poster: "/scroll-world/stills/poster-02.jpg", posterMobile: "/scroll-world/stills/poster-02-m.jpg",
    clip: "/scroll-world/vid/leg-02.mp4", clipMobile: "/scroll-world/vid/leg-02-m.mp4",
    accent: "#63E6D3", scroll: 1.7, linger: 0.38,
    eyebrow: "Intelligent operations", title: "Make the business think together.",
    body: "Connect data, decisions, and workflows into one living system that gives every team the context to move.",
    tags: ["AI agents", "Live signals", "Human approved"]
  },
  {
    id: "growth", label: "Growth", href: "/growth", still: "/scroll-world/stills/03.jpg",
    poster: "/scroll-world/stills/poster-03.jpg", posterMobile: "/scroll-world/stills/poster-03-m.jpg",
    clip: "/scroll-world/vid/leg-03.mp4", clipMobile: "/scroll-world/vid/leg-03-m.mp4",
    accent: "#D8FF52", scroll: 1.65, linger: 0.32,
    eyebrow: "Compounding attention", title: "Turn expertise into momentum.",
    body: "One sharp insight becomes a repeatable system for creative production, distribution, authority, and demand.",
    tags: ["Founder visibility", "Distribution", "Demand systems"]
  },
  {
    id: "scale", label: "Scale", href: "/scale", still: "/scroll-world/stills/04.jpg",
    poster: "/scroll-world/stills/poster-04.jpg", posterMobile: "/scroll-world/stills/poster-04-m.jpg",
    clip: "/scroll-world/vid/leg-04.mp4", clipMobile: "/scroll-world/vid/leg-04-m.mp4",
    accent: "#6558F5", scroll: 2.05, linger: 0.45,
    eyebrow: "The force multiplier", title: "Turn traction into intelligent scale.",
    body: "Build the company behind the growth—with strategy, AI, operations, and execution moving as one.",
    tags: ["Operating leverage", "Growth leverage", "Venture leverage"],
    cta: { primary: { label: "Build your scale roadmap", href: "/assessment" }, secondary: { label: "See client outcomes", href: "/case-studies" } }
  }
];

export default function Home() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    const mount = () => {
      if (cancelled || !host.current || !window.mountScrollWorld || host.current.dataset.mounted) return;
      host.current.dataset.mounted = "true";
      window.mountScrollWorld(host.current, {
        brand: { name: "IAN GROUP", href: "/" },
        cta: { label: "Start a conversation", href: "/assessment" },
        hint: "Scroll to enter intelligence", nav: true, atmosphere: true,
        diveScroll: 1.7, connScroll: 0, crossfade: 0.14, scrollMobileFactor: 1.25,
        sections, connectors: [], connectorsMobile: []
      });
    };
    if (window.mountScrollWorld) mount();
    else {
      const script = document.createElement("script");
      script.src = "/scroll-world/scrub-engine.js";
      script.async = true;
      script.onload = mount;
      document.body.appendChild(script);
    }
    return () => { cancelled = true; };
  }, []);
  return <main className="ian-world-shell">
    <div id="ian-scroll-world" ref={host} className="ian-scroll-world">
      <div data-sw-seo>
        <h1>Turn traction into intelligent scale.</h1>
        <section><h2>See the company you could become.</h2><p>IAN turns complexity into a clear path from today’s traction to tomorrow’s intelligent operating model.</p></section>
        <section><h2>Make the business think together.</h2><p>Connect data, decisions, and workflows into one living system that gives every team the context to move.</p></section>
        <section><h2>Turn expertise into momentum.</h2><p>Build a repeatable system for creative production, distribution, authority, and demand.</p></section>
        <section><h2>Turn traction into intelligent scale.</h2><p>Build the company behind the growth with strategy, AI, operations, and execution moving as one.</p><Link href="/assessment">Build your scale roadmap</Link></section>
      </div>
    </div>
  </main>;
}
