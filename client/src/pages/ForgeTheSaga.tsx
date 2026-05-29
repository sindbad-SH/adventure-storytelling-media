import { useEffect } from "react";
import { Link } from "wouter";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX";
const CALENDLY = "https://calendly.com/sindbad-adventurestorytellingmedia/new-meeting";

function ScrollIndicator() {
  return (
    <div className="scroll-indicator" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
      </svg>
    </div>
  );
}

function DecoLine() {
  return (
    <div className="deco-line">
      <div className="deco-line-left"></div>
      <div className="deco-diamond"></div>
      <div className="deco-line-right"></div>
    </div>
  );
}

const stages = [
  {
    num: "01",
    name: "Story Scouting",
    subtitle: "(Market & Audience Research)",
    price: "Starts at $2,500",
    process: "Raw market intelligence. I uncover who your audience actually is, the exact language they use, and what your competitors are missing.",
    deliverable: "Field Notes Brief — A plain-language synthesis of all market research before a single word of strategy is written.",
    bestFor: "You have a product or offer but don't yet know who your real buyer is or how to talk to them.",
    icon: `${CDN}/stage-scouting-new-4aPVaAYTSZdtXCfp99wUJm.webp`,
    iconAlt: "Faceless illustrated figure with binoculars scouting the landscape from an elevated outcrop",
  },
  {
    num: "02",
    name: "Story Mapping",
    subtitle: "(Messaging Strategy & Positioning)",
    price: "Starts at $2,500",
    process: "I shape raw intelligence into narrative strategy. This maps out exactly who the audience is, what narrative arc moves them, and what that looks like as a tangible piece of content.",
    deliverable: "Core Narrative Blueprint — The strategic roadmap that drives everything I build next.",
    bestFor: "You have audience research but need someone to shape it into a clear, actionable strategic direction.",
    icon: `${CDN}/stage-mapping-new-B3qMqxd59urRXcvr3Ebvuv.webp`,
    iconAlt: "Faceless illustrated figure leaning over a holographic map with teal light tracing routes",
  },
  {
    num: "03",
    name: "Story Forging",
    subtitle: "(Asset Creation & Production)",
    price: "Starts at $5,000",
    process: "The strategy becomes reality. I build high-quality video or copy assets designed specifically for market validation. (Price scales with format complexity).",
    deliverable: "Test-Ready Creative Assets — Version 1.0 assets built to capture honest reactions from a real audience so we can optimize before your major launch.",
    bestFor: "You have a solid strategy and need the actual creative assets built and ready for market feedback.",
    icon: `${CDN}/stage-forging-new-3dKoAy6RSwhEehVygW7hrY.webp`,
    iconAlt: "Faceless illustrated figure forging at an anvil with teal sparks and fire",
  },
  {
    num: "04",
    name: "Story Testing",
    subtitle: "(A/B Testing & Analytics)",
    price: "Starts at $2,000 + Audience Acquisition",
    process: "Your assets meet a real audience. I utilize curated human panels, AI audience simulations, or both to gather targeted demographic data. (Audience acquisition and panel fees are custom-quoted based on your specific market and targeting requirements).",
    deliverable: "Live Market Data — Real-world engagement metrics and feedback.",
    bestFor: "You have a creative asset ready and want data-backed proof it works before committing your budget to distribution or ad spend.",
    icon: `${CDN}/stage-testing-new-7y83P5KNMhKjXQdFfbX8pt.webp`,
    iconAlt: "Faceless illustrated figure presenting to a group with a teal holographic projection",
  },
  {
    num: "05",
    name: "Story Assessing",
    subtitle: "(Iterative Refinement & ROI Reporting)",
    price: "Starts at $1,500",
    process: "I decode the data. I analyze what held attention, where people dropped off, what it means for your brand, and the exact steps to take next.",
    deliverable: "Action & Refinement Playbook — Concrete recommendations to either refine and retest, or green-light for full-scale publishing.",
    bestFor: "You have campaign data or audience feedback but need an expert to decode it and point the way forward.",
    icon: `${CDN}/stage-assessing-new-Z8zHEbMi6YXmrZkosNULGJ.webp`,
    iconAlt: "Faceless illustrated figure reviewing documents and data charts under teal light",
  },
];

export default function ForgeTheSaga() {
  useEffect(() => {
    document.title = "Forge the Saga | Adventure Storytelling Media";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="subpage-hero">
        <div className="asm-container subpage-centered">
          <Link href="/" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
            Back to Home
          </Link>
          <div className="section-label">THE STORYSMITH PROCESS (Market Clarity & Messaging)</div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "0.75rem" }}>
            Forge the <span className="turquoise">Saga</span>
          </h1>
          <p className="subtitle" style={{ maxWidth: "600px", margin: "0 auto 1.5rem" }}>
            A Comprehensive Market Clarity & Messaging Engagement
          </p>
          <div className="fade-in" style={{ maxWidth: "680px", margin: "0 auto", textAlign: "left" }}>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
              Most businesses don't have a marketing problem. They have a story problem. You've spent months refining your pitch, your brand, your message — and you believe it's landing. But belief isn't data.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
              The gap between what you think you're saying and what people actually hear is where deals die, campaigns stall, and launches underperform. Forge the Saga closes that gap before it costs you.
            </p>
          </div>

          {/* Social Proof — Pull Quote */}
          <div style={{ marginTop: "2.5rem", padding: "1.25rem 1.5rem", borderLeft: "4px solid #38F8EC", background: "rgba(56,248,236,0.04)", borderRadius: "0 8px 8px 0", maxWidth: "600px", margin: "2.5rem auto 0", textAlign: "left" }}>
            <p style={{ color: "var(--turquoise)", fontSize: "1rem", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>"When we created the website for PitchBoulder, we needed a video to capture the spirit of our meetings and the energy in the room. I hired Sindbad Horizon to create a piece that would address these requirements. Did he ever! The video is sensational, and I could not be more pleased."</p>
            <p style={{ color: "var(--text-dim)", fontSize: "0.8rem", marginTop: "0.75rem", marginBottom: 0 }}>— Peter Rothschild, Founder of PitchBoulder</p>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <img
              src={`${CDN}/forge-hero-new-gfHK35RLRcCzgKQW9QFL2F.webp`}
              alt="Faceless illustrated figure standing at the edge of a vast unmapped landscape — teal glowing tools, dark atmospheric background"
              style={{
                maxWidth: "100%",
                width: "720px",
                height: "auto",
                borderRadius: "8px",
                filter: "drop-shadow(0 0 30px rgba(56,248,236,0.3))",
              }}
            />
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* Premium Package — The Full Saga */}
      <section className="asm-section section-bg-lighter">
        <div className="asm-container">
          <div className="fade-in" style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>THE PREMIUM PACKAGE</div>
            <h2 style={{ marginBottom: "1.5rem" }}>The Full Saga</h2>

            <div style={{
              background: "rgba(56,248,236,0.04)",
              border: "1px solid rgba(56,248,236,0.2)",
              borderLeft: "4px solid #38F8EC",
              borderRadius: "8px",
              padding: "2rem 2.5rem",
              marginBottom: "2rem",
              position: "relative" as const,
            }}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                color: "#38F8EC",
                letterSpacing: "0.05em",
                lineHeight: 1.2,
                textShadow: "0 0 20px rgba(56,248,236,0.3)",
              }}>
                Starts at $12,500
              </div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "rgba(127,252,244,0.6)",
                marginTop: "0.5rem",
              }}>
                All five stages — integrated system
              </div>
            </div>

            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
              All five stages run as an integrated system. Research shapes strategy. Strategy dictates asset creation. Assets are market-tested, and data feeds refinement. Pressure-test your story before you scale.
            </p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Book a Discovery Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><path d="M15 3h6v6" /><path d="M10 14L21 3" /></svg>
            </a>
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* The Five Stages */}
      <section className="asm-section">
        <div className="asm-container">
          <div className="fade-in" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>THE FIVE STAGES</div>
            <h2>Choose Your Entry Point</h2>
            <p style={{ color: "var(--text-muted)", fontStyle: "italic", maxWidth: "560px", margin: "0.75rem auto 0" }}>
              Not every story starts at the beginning. Each stage stands alone.
            </p>
          </div>

          <div className="fts-stages">
            {stages.map((stage) => (
              <div className="fts-stage-card fade-in" key={stage.num}>
                <div className="fts-stage-icon">
                  <img src={stage.icon} alt={stage.iconAlt} />
                </div>
                <div className="fts-stage-content">
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span className="subsection-num">{stage.num}</span>
                    <div style={{ width: "32px", height: "1px", background: "rgba(56,248,236,0.3)" }}></div>
                  </div>
                  <h3 style={{ fontSize: "1.4rem", marginBottom: "0.15rem" }}>
                    {stage.name} <span style={{ fontSize: "0.65em", color: "var(--text-dim)", fontWeight: 400 }}>{stage.subtitle}</span>
                  </h3>
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#38F8EC",
                    letterSpacing: "0.03em",
                    marginBottom: "1rem",
                  }}>
                    {stage.price}
                  </div>
                  <div style={{ marginBottom: "0.75rem" }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--turquoise)", marginBottom: "0.35rem" }}>The Process</div>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.9rem" }}>{stage.process}</p>
                  </div>
                  <div style={{ marginBottom: "0.75rem" }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--turquoise)", marginBottom: "0.35rem" }}>The Deliverable</div>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.9rem" }}>{stage.deliverable}</p>
                  </div>
                  <p style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase" as const,
                    color: "#7FFCF4",
                    padding: "0.5rem 0.75rem",
                    background: "rgba(56,248,236,0.06)",
                    borderLeft: "2px solid rgba(56,248,236,0.3)",
                    borderRadius: "0 4px 4px 0",
                  }}>
                    Best for: {stage.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* Turnkey for Founders */}
      <section className="asm-section section-bg-lighter">
        <div className="asm-container">
          <div className="fade-in" style={{ maxWidth: "640px", margin: "0 auto" }}>
            <div style={{
              background: "rgba(56,248,236,0.04)",
              border: "1px solid rgba(56,248,236,0.2)",
              borderRadius: "12px",
              padding: "2.5rem",
              textAlign: "center",
            }}>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Turnkey for Founders</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontStyle: "italic" }}>
                You are busy running your business. The Forge the Saga engagement is designed to require minimal hours of your direct time for kickoff, asset capture, and final review. I execute the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* FAQ Accordion */}
      <section className="asm-section">
        <div className="asm-container">
          <div className="fade-in" style={{ maxWidth: "700px", margin: "0 auto" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>FREQUENTLY ASKED</div>
            <h2 style={{ marginBottom: "2rem" }}>Common Questions</h2>
            {[
              {
                q: "Do I need to go through all five stages?",
                a: "No. Each stage stands alone. Most clients start with Story Scouting or Story Mapping and expand from there."
              },
              {
                q: "How much of my time does this require?",
                a: "Minimal. The engagement is designed around your schedule \u2014 kickoff, asset capture, and final review are the only required touchpoints. I execute the rest."
              },
              {
                q: "I've worked with marketing consultants before and been burned. What's different?",
                a: "Forge the Saga produces data, not opinions. Every asset is market-tested before you commit to full-scale distribution. You'll see what lands and what doesn't before you spend real money finding out."
              },
              {
                q: "Do you work with clients outside of Boulder/Denver?",
                a: "Yes. Boulder is home base. The engagement is remote-friendly for strategy and research stages. Asset capture may require an on-site visit depending on format."
              },
            ].map((faq, i) => (
              <details key={i} style={{ marginBottom: "1rem", background: "var(--bg-card)", border: "1px solid var(--asm-border)", borderRadius: "8px", overflow: "hidden" }}>
                <summary style={{ padding: "1.25rem 1.5rem", cursor: "pointer", color: "var(--text-bright)", fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", fontWeight: 600, listStyle: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {faq.q}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--turquoise)" strokeWidth="2" style={{ flexShrink: 0, marginLeft: "1rem" }}><path d="M6 9l6 6 6-6" /></svg>
                </summary>
                <div style={{ padding: "0 1.5rem 1.25rem", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* Final CTA */}
      <section className="asm-section">
        <div className="asm-container">
          <div className="cta-box fade-in" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
            <h2 style={{ marginBottom: "1rem" }}>Ready to Forge Yours?</h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Every saga starts with a conversation. Tell me where you are in the process and we'll find your exact entry point.
            </p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
              Book a Discovery Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><path d="M15 3h6v6" /><path d="M10 14L21 3" /></svg>
            </a>
            <div>
              <a href="mailto:sindbad@advstmedia.com" className="btn-link" style={{ fontSize: "0.9rem" }}>
                Or email directly: sindbad@advstmedia.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
