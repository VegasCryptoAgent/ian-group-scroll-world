"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const outcomes = [
  { value: "+25%", label: "revenue in 90 days" },
  { value: "10×", label: "ROI on an AI tool" },
  { value: "−40%", label: "operating costs" },
  { value: "1M+", label: "impressions in 30 days" },
];

const services = [
  { n: "01", title: "Operational leverage", text: "Replace manual drag with connected data, intelligent workflows, AI agents, and live decision systems.", tags: ["AI systems", "Automation", "Data intelligence"], href: "/services/operational-leverage" },
  { n: "02", title: "Growth leverage", text: "Turn expertise into distribution through positioning, creative systems, strategic partnerships, and founder visibility.", tags: ["Positioning", "6Frame Studio", "Distribution"], href: "/services/growth-leverage" },
  { n: "03", title: "Venture leverage", text: "Compress the distance between traction and scale with operator access, fundraising support, and a high-trust ecosystem.", tags: ["Accelerator", "Venture studio", "Capital readiness"], href: "/accelerator" },
];

const method = [
  { step: "01", title: "Diagnose", text: "Map the bottlenecks, economics, workflows, and data standing between traction and scale." },
  { step: "02", title: "Design", text: "Prioritize the highest-value moves and architect a practical operating blueprint." },
  { step: "03", title: "Build", text: "Integrate data, deploy AI systems, redesign workflows, and equip your team to own them." },
  { step: "04", title: "Multiply", text: "Measure the lift, optimize adoption, and add the growth systems that compound momentum." },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header"><Link href="/" className="brand" aria-label="IAN Group home"><span className="brand-mark">I</span><span>IAN</span></Link><nav className={open ? "nav open" : "nav"} aria-label="Main navigation"><Link href="#services" onClick={()=>setOpen(false)}>What we do</Link><Link href="#method" onClick={()=>setOpen(false)}>Our method</Link><Link href="/case-studies" onClick={()=>setOpen(false)}>Client results</Link><Link href="/about" onClick={()=>setOpen(false)}>About</Link><Link href="/insights" onClick={()=>setOpen(false)}>Insights</Link></nav><Link href="/assessment" className="header-cta">Get assessed <Arrow /></Link><button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><i/><i/></button></header>
}

function Footer() {
  return <footer className="footer"><div className="footer-top"><div><div className="brand footer-brand"><span className="brand-mark">I</span><span>IAN</span></div><p>The AI force multiplier for companies with traction.</p></div><div className="footer-links"><div><span>Explore</span><Link href="#services">What we do</Link><Link href="/case-studies">Client results</Link><Link href="/about">About IAN</Link></div><div><span>Programs</span><Link href="/accelerator">Accelerator</Link><Link href="/venture-studio">Venture studio</Link><Link href="/6frame-ai-studio">6Frame studio</Link></div><div><span>Connect</span><a href="https://www.linkedin.com" target="_blank">LinkedIn</a><Link href="/assessment">Book a strategy call</Link><a href="mailto:hello@iangroup.ai">hello@iangroup.ai</a></div></div></div><div className="footer-bottom"><span>© 2026 IAN Group</span><span>Built for intelligent scale.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></footer>
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>setLoaded(true), []);
  return <main className={loaded ? "site loaded" : "site"}>
    <Header />
    <section className="hero">
      <div className="hero-grid" aria-hidden="true"/><div className="orb orb-a"/><div className="orb orb-b"/>
      <div className="hero-copy"><p className="eyebrow"><span/> AI execution for companies with traction</p><h1>Turn traction into <em>intelligent scale.</em></h1><p className="lede">IAN redesigns operations, integrates AI, and builds the growth systems that help founder-led companies move faster—without adding complexity or burnout.</p><div className="hero-actions"><Link href="/assessment" className="button primary">Get your scale assessment <Arrow /></Link><Link href="/case-studies" className="text-link">Explore client results <span>↓</span></Link></div></div>
      <div className="system-card" aria-label="IAN multiplier system visualization"><div className="system-head"><span>IAN / MULTIPLIER SYSTEM</span><span className="online"><i/> ONLINE</span></div><div className="system-core"><div className="ring r1"/><div className="ring r2"/><div className="core"><b>IAN</b><small>FORCE<br/>MULTIPLIER</small></div><span className="node n1">DATA</span><span className="node n2">AI</span><span className="node n3">OPS</span><span className="node n4">GROWTH</span></div><div className="system-metrics"><div><span>OUTPUT</span><b>4.8×</b></div><div><span>FRICTION</span><b>−72%</b></div><div><span>VELOCITY</span><b>↑ 38%</b></div></div></div>
      <div className="hero-proof"><span>Selected team experience</span>{["NFL ALUMNI","DEFENSE","NETFLIX","UNIVERSAL","LLOYD’S","GM"].map(x=><b key={x}>{x}</b>)}</div>
    </section>

    <section className="outcomes"><div className="section-label"><span>00 / PROOF</span><p>Outcomes, not promises.</p></div><div className="outcome-grid">{outcomes.map((o,i)=><article key={o.value}><span>0{i+1}</span><strong>{o.value}</strong><p>{o.label}</p></article>)}</div><p className="proof-note">Selected outcomes across IAN engagements. <Link href="/case-studies">See the work <Arrow /></Link></p></section>

    <section className="ceiling"><div className="section-label light"><span>01 / THE CEILING</span><p>Traction changed the problem.</p></div><div className="ceiling-copy"><h2>Your company grew.<br/><em>Your systems didn’t.</em></h2><p>Success creates a new kind of drag. The founder becomes the operating system. Decisions wait on disconnected data. Growth creates workload faster than leverage.</p></div><div className="symptoms"><article><i>01</i><h3>Founder dependency</h3><p>Too many decisions, relationships, and workflows still route through you.</p></article><article><i>02</i><h3>Fragmented operations</h3><p>Your tools collect data, but your team still copies, reconciles, and guesses.</p></article><article><i>03</i><h3>Invisible performance</h3><p>You find out what happened after the moment to act has already passed.</p></article><article><i>04</i><h3>Unscaled attention</h3><p>The company has a strong product, but distribution still depends on bursts of effort.</p></article></div></section>

    <section className="services" id="services"><div className="section-label"><span>02 / WHAT WE DO</span><p>We build leverage where it matters.</p></div><div className="services-intro"><h2>One partner.<br/>Three multipliers.</h2><p>Most advisors stop at the deck. Most builders stop at the brief. IAN connects strategy, systems, and growth—then stays close enough to make the change stick.</p></div><div className="service-list">{services.map(s=><Link href={s.href} className="service" key={s.n}><span className="service-n">{s.n}</span><div><h3>{s.title}</h3><p>{s.text}</p><div className="tags">{s.tags.map(t=><span key={t}>{t}</span>)}</div></div><b><Arrow /></b></Link>)}</div></section>

    <section className="method" id="method"><div className="method-glow"/><div className="section-label light"><span>03 / THE METHOD</span><p>A system for becoming scalable.</p></div><div className="method-head"><div><p className="eyebrow"><span/> THE FORCE MULTIPLIER METHOD™</p><h2>From friction<br/>to <em>flow.</em></h2></div><p>AI is not the strategy. It is leverage inside a better operating model. Our method finds where intelligence can move the business, then builds the foundation, system, and adoption around it.</p></div><div className="method-grid">{method.map((m,i)=><article key={m.step} className={i===0?"active":""}><span>{m.step}</span><div className="method-line"><i/></div><h3>{m.title}</h3><p>{m.text}</p></article>)}</div><div className="method-cta"><Link href="/method" className="button ghost">Explore the method <Arrow /></Link><span>Strategy → systems → adoption → measurable lift</span></div></section>

    <section className="case-feature"><div className="section-label"><span>04 / CLIENT RESULT</span><p>Revenue growth + founder freedom.</p></div><div className="case-grid"><div className="case-story"><p className="case-kicker">THE STUDIO SALON / BEAUTY OPERATIONS</p><h2>More revenue.<br/><em>Two days back.</em></h2><p>A growing beauty business had hit an operating ceiling. We built a custom intelligence layer, redesigned pricing and workflows, and gave the owner a real-time view of performance.</p><Link href="/case-studies/studio-salon" className="button dark">Read the full case <Arrow /></Link></div><div className="case-results"><div><span>REVENUE GROWTH</span><strong>+25%</strong><small>IN 90 DAYS</small></div><div><span>OWNER WORKLOAD</span><strong>6→4</strong><small>DAYS / WEEK</small></div><div><span>AI TOOL ROI</span><strong>10×</strong><small>MEASURED RETURN</small></div><div><span>OPERATING COST</span><strong>−40%</strong><small>WITHIN A YEAR</small></div></div></div><blockquote>“When operators get real-time intelligence, they make better decisions faster.”<span>— IAN operating principle</span></blockquote></section>

    <section className="difference"><div className="section-label"><span>05 / WHY IAN</span><p>Built differently on purpose.</p></div><div className="difference-grid"><h2>Not another<br/><em>AI consultancy.</em></h2><div className="comparison"><div className="compare-head"><span>THE OLD MODEL</span><b>THE IAN MODEL</b></div>{[["Junior teams after the sale","Senior operators in the work"],["Technology-first recommendations","Business-first system design"],["A strategy deck and handoff","Strategy, build, adoption, measurement"],["More tools, more complexity","Fewer bottlenecks, more leverage"],["Activity presented as progress","Outcomes defined before the build"]].map(r=><div className="compare-row" key={r[0]}><span>{r[0]}</span><b>{r[1]}</b></div>)}</div></div></section>

    <section className="fit"><div><p className="eyebrow"><span/> BUILT FOR COMPANIES IN MOTION</p><h2>You have traction.<br/>Now build the <em>machine.</em></h2></div><div className="fit-list"><p>IAN is a strong fit if:</p>{["Demand is proven, but delivery still strains the team","The founder is still the bridge between too many functions","Your data exists, but it does not drive daily decisions","You need execution—not another round of AI theatre","You are ready to measure change in business outcomes"].map(x=><div key={x}><i>✓</i>{x}</div>)}</div></section>

    <section className="assessment"><div className="assessment-copy"><p className="eyebrow"><span/> YOUR NEXT MOVE</p><h2>Find the constraint.<br/><em>Multiply what works.</em></h2><p>Start with a focused 30-minute working session. We’ll identify the highest-leverage bottleneck, assess AI and data readiness, and map the smartest next move.</p><div className="deliverables"><span>01 / Constraint map</span><span>02 / Readiness score</span><span>03 / Priority use case</span><span>04 / Recommended path</span></div><Link href="/assessment" className="button primary">Get your AI scale assessment <Arrow /></Link><small>No generic pitch. You leave with clarity.</small></div><div className="score-card"><div className="score-head"><span>IAN / SCALE SIGNAL</span><span>CONFIDENTIAL</span></div><div className="score-ring"><strong>82</strong><span>READINESS<br/>SCORE</span></div>{[["DATA FOUNDATION","74%"],["OPERATING CLARITY","61%"],["AUTOMATION POTENTIAL","93%"],["ADOPTION CAPACITY","78%"]].map(x=><div className="score-row" key={x[0]}><span>{x[0]}</span><i><b style={{width:x[1]}}/></i><strong>{x[1]}</strong></div>)}<div className="signal">HIGHEST-LEVERAGE SIGNAL <b>WORKFLOW INTELLIGENCE ↗</b></div></div></section>
    <Footer />
  </main>
}
