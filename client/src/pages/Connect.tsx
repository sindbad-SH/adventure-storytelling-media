import { useEffect } from "react";
import { Link } from "wouter";

const CALENDLY = "https://calendly.com/sindbad-adventurestorytellingmedia/new-meeting";

export default function Connect() {
  useEffect(() => {
    document.title = "Contact | Adventure Storytelling Media";
  }, []);

  return (
    <main id="main">
      <section className="subpage-hero">
        <div className="asm-container subpage-centered">
          <Link href="/" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
            Back to Home
          </Link>
          <div className="section-label">CONTACT</div>
          <h1><span className="turquoise">Let's Talk</span></h1>
          <p className="subtitle">No pitch, no pressure. Here's how to reach me.</p>
        </div>
      </section>

      <div className="deco-line">
        <div className="deco-line-left"></div>
        <div className="deco-diamond"></div>
        <div className="deco-line-right"></div>
      </div>

      <section className="asm-section">
        <div className="asm-container" style={{ maxWidth: "700px", margin: "0 auto" }}>

          {/* Primary CTA: Book a Strategy Call */}
          <div className="fade-in" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--text-bright)", marginBottom: "1rem" }}>
              Book a Strategy Call
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
              The fastest way to get started. Pick a time that works for you and we'll talk through where you are, what's not landing, and whether Forge the Saga is the right fit.
            </p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1rem", padding: "0.85rem 2rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></svg>
              Schedule a Call
            </a>
          </div>

          <div style={{ borderTop: "1px solid var(--asm-border)", margin: "2rem 0" }}></div>

          {/* Secondary CTA: Email */}
          <div className="fade-in" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)", color: "var(--text-bright)", marginBottom: "1rem" }}>
              Prefer Email?
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
              Send me a note directly. Tell me a bit about your project or what you're working on — I'll get back to you within a business day.
            </p>
            <a href="mailto:sindbad@advstmedia.com" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1rem", padding: "0.85rem 2rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" /></svg>
              sindbad@advstmedia.com
            </a>
          </div>

          <div style={{ borderTop: "1px solid var(--asm-border)", margin: "2rem 0" }}></div>

          {/* Tertiary CTA: LinkedIn */}
          <div className="fade-in" style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)", color: "var(--text-bright)", marginBottom: "1rem" }}>
              Follow Along on LinkedIn
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
              That's where I share event coverage, founder storytelling breakdowns, and behind-the-scenes looks at the work. It's the best way to see what I'm up to in real time.
            </p>
            <a href="https://www.linkedin.com/in/sindbad-horizon-b19b4a264" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1rem", padding: "0.85rem 2rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              Connect on LinkedIn
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
