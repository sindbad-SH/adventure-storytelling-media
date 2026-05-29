import { useEffect } from "react";
import { Link } from "wouter";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX";
const CALENDLY = "https://calendly.com/sindbad-adventurestorytellingmedia/new-meeting";

const PAGE_TITLE = "Adventure Storytelling Media | Boulder, CO";



export default function Home() {
  useEffect(() => {
    document.title = PAGE_TITLE;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, []);

  return (
    <main id="main">
      {/* Hero */}
      <section className="hero">
        <div className="hero-mountain-bg">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path d="M0,400 L0,280 L120,180 L240,260 L360,140 L480,220 L600,100 L720,200 L840,80 L960,180 L1080,60 L1200,160 L1320,120 L1440,200 L1440,400 Z" fill="#38F8EC" />
          </svg>
        </div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-location">BOULDER, CO</div>
            <h1>Your product works. <span className="turquoise">Your story isn't landing.</span></h1>
            <p className="hero-desc" style={{ fontStyle: "italic" }}>Forge the Saga is a five-stage market clarity engagement that finds the gap between what you think you're saying and what investors, customers, and partners actually hear — then closes it.</p>
            <p style={{ color: "var(--turquoise)", fontSize: "1.05rem", fontWeight: 600, letterSpacing: "0.02em", marginTop: "0.5rem" }}>Research → Narrative → Validation. Before you spend another dollar on marketing.</p>
            <div className="hero-buttons">
              <Link href="/forge-the-saga" className="btn btn-primary">
                See How Forge the Saga Works →
              </Link>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Book a Strategy Call</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX/ASM_Logo_Mark_SkyandLuminescentcyan_c4754089.webp" alt="ASM logo mark — mountain and river S design" />
          </div>
        </div>
      </section>



      {/* Section 01: About */}
      <section className="asm-section" id="about">
        <div className="asm-container">
          <span className="section-number">01</span>
          <div className="section-label">ABOUT</div>
          <div className="about-grid">
            <div className="about-text fade-in">
              <h2>The StorySmith <span style={{ fontSize: "0.6em", color: "var(--text-dim)", fontWeight: 400 }}>(Strategist & Producer)</span></h2>
              <p>Most founders can demo their product. Few can explain why it matters to someone who isn't already bought in. That gap — between what you've built and what others believe about it — is where deals stall.</p>
              <p>I'm Sindbad Horizon. I find the gap, capture the story, and test whether it actually lands — then hand you the tools to act on what I find.</p>
              <p style={{ color: "var(--turquoise)", fontWeight: 600 }}>Research → Creation → Refinement.</p>
              <Link href="/forge-the-saga" className="btn-link">Ready to forge your story? See Forge the Saga →</Link>
              <p className="italic-text" style={{ marginTop: "1.5rem" }}>Boulder is home base. The world is the territory.</p>
            </div>
            <div className="about-visual fade-in">
              <div className="smithy-container">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX/forging-saga-blacksmith-hipm7RbCBGRd5BgZnm6kbj.webp" alt="Faceless gray-toned figure at a stone forge with turquoise fire and circuit-etched anvil — techno-adventure blacksmith" />
                <div className="smithy-label">FORGING THE SAGA</div>
              </div>
              <div className="sindbad-photo-wrapper">
                <img src={`${CDN}/sindbad-photo_dbfa7430.webp`} alt="Sindbad Horizon — StorySmith and founder of Adventure Storytelling Media" className="sindbad-photo" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Section 02: Portfolio Snapshot — Cover Letter Style */}
      <section className="asm-section section-bg-lighter" id="field">
        <div className="section-field-overlay"></div>
        <div className="asm-container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-number">02</span>
          <div className="section-label">PORTFOLIO</div>
          <div className="field-header">
            <h2>The Field</h2>
          </div>
          <p className="field-subtitle">A snapshot of the worlds I've entered and the work I've delivered. For the full deep-dive, <Link href="/portfolio" style={{ color: "var(--turquoise)", textDecoration: "underline" }}>visit the portfolio</Link> — or follow along on <a href="https://www.linkedin.com/in/sindbad-horizon-b19b4a264" target="_blank" rel="noopener noreferrer" style={{ color: "var(--turquoise)", textDecoration: "underline" }}>LinkedIn</a> where I discuss many of these projects in much more detail.</p>

          {/* Snapshot Grid — Images Only */}
          <div className="pillars-grid">
            {/* Pillar 1: PitchBoulder — image + testimonial */}
            <div className="pillar-card fade-in">
              <div className="pillar-category">Core Consulting &amp; Production</div>
              <a href="https://pitchboulder.co/" target="_blank" rel="noopener noreferrer" className="pillar-image-link">
                <img src={`${CDN}/pitchboulder-image_5a2ff2a6.jpg`} alt="PitchBoulder — weekly startup pitch event in Boulder, Colorado" className="pillar-img" />
              </a>
              <h3>PitchBoulder</h3>
              <p>Embedded strategically for nearly three years, capturing weekly startup pitches to analyze the gap between what a founder says and what an investor hears.</p>
              <div className="testimonial" style={{ marginTop: "1.25rem" }}>
                <p style={{ fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "0.5rem" }}>"When we created the website for PitchBoulder, we needed a video to capture the spirit of our meetings and the energy in the room. I hired Sindbad Horizon to create a piece that would address these requirements. Did he ever! The video is sensational, and I could not be more pleased."</p>
                <div style={{ fontSize: "0.8rem" }}><strong style={{ color: "var(--turquoise)" }}>Peter Rothschild</strong> <span style={{ color: "var(--text-dim)" }}>— Founder, PitchBoulder</span></div>
              </div>
              <a href="https://pitchboulder.co/" target="_blank" rel="noopener noreferrer" className="btn-link">Visit PitchBoulder →</a>
            </div>

            {/* Pillar 2: Concours d'Elegance — image + testimonial */}
            <div className="pillar-card fade-in">
              <div className="pillar-category">Core Consulting &amp; Production</div>
              <a href="https://www.pebblebeachconcours.net/" target="_blank" rel="noopener noreferrer" className="pillar-image-link">
                <img src={`${CDN}/pebble-beach_3258d527.jpg`} alt="Pebble Beach Concours d'Elegance — Shelby Cobra 427 SC Roadster" className="pillar-img" />
              </a>
              <h3>Concours d'Elegance — Pebble Beach</h3>
              <p>Captured the legacy of a restored Shelby 427 SC Roadster at the world's most prestigious automotive showcase.</p>
              <div className="testimonial" style={{ marginTop: "1.25rem" }}>
                <p style={{ fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "0.5rem" }}>"Working with Sindbad Horizon of Adventure Storytelling Media was a great experience. He not only captured stunning footage and photographs of the Cobra at Pebble Beach, but also brought the story and character of the car to life through his editing and creative direction. The results went far beyond documentation — they conveyed the emotion, craftsmanship, and legacy behind the machine itself."</p>
                <div style={{ fontSize: "0.8rem" }}><strong style={{ color: "var(--turquoise)" }}>Jack Bell</strong> <span style={{ color: "var(--text-dim)" }}>— Owner, 1967 Shelby Cobra 427 S/C Roadster</span></div>
              </div>
              <a href="https://www.pebblebeachconcours.net/" target="_blank" rel="noopener noreferrer" className="btn-link">Visit Pebble Beach Concours →</a>
            </div>

            {/* Pillar 3: Amazing Aerial */}
            <div className="pillar-card fade-in">
              <div className="pillar-category">Global Visual Representation</div>
              <a href="https://www.amazingaerial.com/controller/portfolio/shorizon" target="_blank" rel="noopener noreferrer" className="pillar-image-link">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX/amazing-aerial-1x1_09c80853.jpg" alt="Amazing Aerial Agency — cinematic drone aerial photography of tropical island" className="pillar-img" />
              </a>
              <h3>Amazing Aerial Agency</h3>
              <p>My aerial cinematography and high-end drone work are actively represented and licensed globally by the Amazing Aerial Agency.</p>
              <a href="https://www.amazingaerial.com/controller/portfolio/shorizon" target="_blank" rel="noopener noreferrer" className="btn-link">View Amazing Aerial Portfolio →</a>
            </div>

            {/* Pillar 4: SeriesFest — compact card (relationship/involvement) */}
            <div className="pillar-card pillar-compact fade-in">
              <div className="pillar-category">Market Intelligence &amp; Immersion</div>
              <a href="https://seriesfest.com/" target="_blank" rel="noopener noreferrer" className="pillar-image-link">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX/seriesfest-2026_0087954d.webp" alt="SeriesFest Denver 2026 — independent television festival" className="pillar-img" />
              </a>
              <h3>SeriesFest</h3>
              <p>Keeping a pulse on the market by immersing in top-tier events like SeriesFest, contributing to high-level dialogues and translating industry trends into actionable insights.</p>
              <a href="https://seriesfest.com/" target="_blank" rel="noopener noreferrer" className="btn-link">Visit SeriesFest →</a>
            </div>

            {/* Pillar 5: MEME — Full-width featured (last position, biggest treatment) */}
            <div className="pillar-card pillar-featured pillar-meme fade-in">
              <div className="pillar-category">In-House Strategy &amp; Leadership</div>
              <a href="https://www.meme.ngo/" target="_blank" rel="noopener noreferrer" className="pillar-image-link">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX/meme-banner-wide_ce60d698.png" alt="MEME — Makeshift Entertainment Media Education banner" className="pillar-img" />
              </a>
              <h3>MEME <span style={{ fontSize: "0.7em", color: "var(--text-dim)", fontWeight: 400 }}>(Makeshift Entertainment Media Education)</span></h3>
              <p>Serving as Board Chair and lead marketing strategist. Beyond external consulting, I drive the internal brand architecture, audience growth, and full-stack marketing strategy for this non-profit media education organization.</p>
              <a href="https://www.meme.ngo/" target="_blank" rel="noopener noreferrer" className="btn-link">Visit MEME →</a>
            </div>
          </div>
        </div>
      </section>



      {/* Section 03: Explore — CTA Directory */}
      <section className="asm-section" id="explore">
        <div className="asm-container">
          <span className="section-number">03</span>
          <div className="section-label">EXPLORE</div>
          <div className="services-header fade-in">
            <h2>Dig Deeper</h2>
            <p>Whether you want to see the full body of work or explore how I can help your business — start here.</p>
          </div>
          <div className="services-grid">
            <div className="service-card fade-in">
              <div className="service-card-glow"></div>
              <div className="service-card-illustration">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX/story-scout-tile-new-DtMdTfE6rzpHg4eL74daRj.webp" alt="Story Scout — event coverage and production" />
              </div>
              <div className="subsection-num">01</div>
              <h3>The Portfolio</h3>
              <p>Full video work, event coverage, drone cinematography, and deep-dive case studies from PitchBoulder, Pebble Beach, the Colorado Medieval Festival, and locations across Switzerland and Italy.</p>
              <Link href="/portfolio" className="btn-link">View Full Portfolio →</Link>
            </div>
            <div className="service-card fade-in">
              <div className="service-card-glow"></div>
              <div className="service-card-illustration">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX/forging-saga-blacksmith-hipm7RbCBGRd5BgZnm6kbj.webp" alt="Forge the Saga — market clarity engagement" />
              </div>
              <div className="subsection-num">02</div>
              <h3>Forge the Saga <span style={{ fontSize: "0.65em", color: "var(--text-dim)", fontWeight: 400 }}>(Services)</span></h3>
              <p>A five-stage market clarity engagement — from raw audience research to validated story strategy. Find out what works before you spend real money finding out what doesn't.</p>
              <Link href="/forge-the-saga" className="btn-link">See Service Details →</Link>
            </div>
          </div>
        </div>
      </section>



      {/* Who This Is For */}
      <section className="asm-section section-bg-lighter" id="who-for">
        <div className="asm-container">
          <div className="fade-in" style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>WHO THIS IS FOR</div>
            <h2 style={{ marginBottom: "2rem" }}>Forge the Saga is built for:</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "Startup founders at seed to Series A who know their product works but can't get the story to land.",
                "Small business owners preparing for a pitch, rebrand, or funding round.",
                "Entrepreneurs who've been burned by generic marketing consultants and want frameworks, not vibes.",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38F8EC" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: "0.2rem" }}><path d="M20 6L9 17l-5-5" /></svg>
                  <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(56, 248, 236, 0.15)" }}>
              <p style={{ color: "var(--turquoise)", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", letterSpacing: "0.05em", marginBottom: "1.25rem" }}>
                Engagements start at $2,500.
              </p>
              <Link href="/forge-the-saga" className="btn btn-primary" style={{ fontSize: "1rem", padding: "0.85rem 2.25rem" }}>
                See Services →
              </Link>
            </div>
          </div>
        </div>
      </section>







      {/* Section: Contact */}
      <section className="asm-section section-bg-lighter" id="contact">
        <div className="asm-container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-number">04</span>
          <div className="section-label">CONTACT</div>
          <div className="contact-content fade-in">
            <h2>Let's Talk</h2>
            <p>Whether you're a founder, event organizer, or just curious — reach out.</p>
            <div className="contact-links">
              <a href="mailto:sindbad@advstmedia.com" className="contact-link" aria-label="Email Sindbad at sindbad@advstmedia.com">
                <div className="contact-link-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" /></svg>
                </div>
                <div className="contact-link-text">
                  <span className="label">Email</span>
                  <span className="value">sindbad@advstmedia.com</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/sindbad-horizon-b19b4a264" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Connect with Sindbad Horizon on LinkedIn (opens in new tab)">
                <div className="contact-link-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </div>
                <div className="contact-link-text">
                  <span className="label">LinkedIn</span>
                  <span className="value">Connect on LinkedIn</span>
                </div>
              </a>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Book a Strategy Call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><path d="M15 3h6v6" /><path d="M10 14L21 3" /></svg>
              </a>
            </div>
            <p className="contact-note">All conversations start with a message. No pitch, no pressure.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
