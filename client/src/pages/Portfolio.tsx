import { useEffect, useState } from "react";
import { Link } from "wouter";

const CDN = "";
const CALENDLY = "https://calendly.com/sindbad-adventurestorytellingmedia/new-meeting";

type FilterTab = "all" | "founder" | "cinematic";

function DecoLine() {
  return (
    <div className="deco-line">
      <div className="deco-line-left"></div>
      <div className="deco-diamond"></div>
      <div className="deco-line-right"></div>
    </div>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  useEffect(() => {
    document.title = "Portfolio | Adventure Storytelling Media";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  const showSection = (categories: FilterTab[]) => {
    return activeTab === "all" || categories.includes(activeTab);
  };

  return (
    <main className="portfolio-page">
      {/* Hero */}
      <section className="portfolio-hero">
        <div className="asm-container">
          <div className="section-label">PORTFOLIO</div>
          <h1 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text-bright)", marginBottom: "1rem" }}>
            The Full Body of Work
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "700px", lineHeight: 1.7, fontStyle: "italic" }}>
            Event coverage, cinematic production, drone cinematography, and strategic media — from Boulder startup rooms to Pebble Beach lawns to Swiss alpine passes.
          </p>
        </div>
      </section>

      <DecoLine />

      {/* Filter Tabs */}
      <section style={{ padding: "0 2rem 2rem" }}>
        <div className="asm-container">
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {([
              { key: "all" as FilterTab, label: "All Work" },
              { key: "founder" as FilterTab, label: "Founder & Pitch Work" },
              { key: "cinematic" as FilterTab, label: "Cinematic & Event Production" },
            ]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: "0.6rem 1.25rem",
                  borderRadius: "6px",
                  border: activeTab === tab.key ? "1px solid var(--turquoise)" : "1px solid var(--asm-border)",
                  background: activeTab === tab.key ? "rgba(56,248,236,0.1)" : "transparent",
                  color: activeTab === tab.key ? "var(--turquoise)" : "var(--text-muted)",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase" as const,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 01: PitchBoulder — Case Study */}
      {showSection(["founder"]) && (
        <>
          <section className="asm-section" id="pitchboulder">
            <div className="asm-container">
              <span className="section-number">01</span>
              <div className="portfolio-item fade-in">
                <div className="portfolio-video">
                  <iframe src="https://www.youtube.com/embed/n7k-Bwu3KIU" title="PitchBoulder — startup pitch event highlight video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                </div>
                <div className="portfolio-info">
                  <div className="pillar-category">Case Study — Founder & Pitch Work</div>
                  <h2>PitchBoulder</h2>
                  <div className="location">BOULDER, CO</div>

                  {/* Case Study Format */}
                  <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div>
                      <div style={{ color: "var(--turquoise)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>PROBLEM</div>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>"PitchBoulder needed a single video to represent three years of weekly founder energy — something an investor or founder would watch and immediately understand what this room feels like."</p>
                    </div>
                    <div>
                      <div style={{ color: "var(--turquoise)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>APPROACH</div>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>"Embedded coverage across dozens of pitch events. Analyzed the gap between what founders said on stage and what the room heard."</p>
                    </div>
                    <div>
                      <div style={{ color: "var(--turquoise)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>RESULT</div>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>"Delivered a flagship video now used as PitchBoulder's primary website asset — directly commissioned by founder Peter Rothschild."</p>
                    </div>
                  </div>

                  {/* Inline testimonial */}
                  <div style={{ marginTop: "1.5rem", padding: "1rem 1.25rem", borderLeft: "3px solid var(--turquoise)", background: "rgba(56,248,236,0.04)", borderRadius: "0 8px 8px 0" }}>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>"When we created the website for PitchBoulder, we needed a video to capture the spirit of our meetings and the energy in the room. I hired Sindbad Horizon to create a piece that would address these requirements. Did he ever! The video is sensational, and I could not be more pleased."</p>
                    <p style={{ color: "var(--text-dim)", fontSize: "0.8rem", marginTop: "0.5rem", marginBottom: 0 }}>— Peter Rothschild, Founder of PitchBoulder</p>
                  </div>

                  <a href="https://pitchboulder.co/" target="_blank" rel="noopener noreferrer" className="btn-link" style={{ marginTop: "1.25rem", display: "inline-block" }}>Visit PitchBoulder →</a>
                </div>
              </div>
            </div>
          </section>
          <DecoLine />
        </>
      )}

      {/* Section 02: Concours d'Elegance */}
      {showSection(["cinematic"]) && (
        <>
          <section className="asm-section section-bg-lighter" id="concours">
            <div className="asm-container">
              <span className="section-number">02</span>
              <div className="portfolio-item fade-in">
                <div className="portfolio-video">
                  <iframe src="https://www.youtube.com/embed/SvIIXnM2R70" title="Shelby 427 SC Roadster — Pebble Beach Concours d'Elegance cinematic video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                </div>
                <div className="portfolio-info">
                  <div className="pillar-category">Cinematic & Event Production</div>
                  <h2>Concours d'Elegance — Pebble Beach</h2>
                  <div className="location">PEBBLE BEACH, CA</div>
                  <p>Captured the legacy of a restored 1967 Shelby 427 SC Roadster at the world's most prestigious automotive showcase. The deliverable wasn't just a video — it was a carefully crafted narrative that translated decades of craftsmanship into an emotional, high-value visual asset for the owner, Jack Bell.</p>
                  <a href="https://www.pebblebeachconcours.net/" target="_blank" rel="noopener noreferrer" className="btn-link">Visit Concours d'Elegance →</a>
                </div>
              </div>
            </div>
          </section>
          <DecoLine />
        </>
      )}

      {/* Section 03: Colorado Medieval Festival */}
      {showSection(["cinematic"]) && (
        <>
          <section className="asm-section" id="medieval">
            <div className="asm-container">
              <span className="section-number">03</span>
              <div className="portfolio-item fade-in">
                <div className="portfolio-video">
                  <iframe src="https://www.youtube.com/embed/2OMfPSibhvE" title="Colorado Medieval Festival — Knights of Mayhem jousting and performances" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                </div>
                <div className="portfolio-info">
                  <div className="pillar-category">Event Coverage & Production</div>
                  <h2>Colorado Medieval Festival</h2>
                  <div className="location">LOVELAND, CO</div>
                  <p>Most people know the Colorado Renaissance Festival south of Denver. Fewer know about this one — tucked into the forest west of Loveland at Colorado Castle. The Knights of Mayhem brought full contact jousting front and center, with performers whose credits include Game of Thrones. Drone work, ground footage, and a story hiding in plain sight.</p>
                </div>
              </div>
            </div>
          </section>
          <DecoLine />
        </>
      )}

      {/* Section 04: On Location — Amazing Aerial + YouTube Edits */}
      {showSection(["cinematic"]) && (
        <>
          <section className="asm-section section-bg-lighter" id="on-location">
            <div className="asm-container">
              <span className="section-number">04</span>
              <div className="fade-in">
                <div className="pillar-category">Drone Cinematography & Aerial Production</div>
                <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "var(--text-bright)", marginBottom: "0.5rem" }}>
                  On Location — Places Worth Going
                </h2>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--text-dim)", marginBottom: "1rem" }}>
                  SWITZERLAND & ITALY
                </div>
                <p style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "0.95rem", marginBottom: "1rem", maxWidth: "700px", lineHeight: 1.7 }}>
                  Not every story needs a client brief. Some just need someone willing to show up with a drone and a good eye. The raw clips are licensed globally through <a href="https://www.amazingaerial.com/controller/portfolio/shorizon" target="_blank" rel="noopener noreferrer" style={{ color: "var(--turquoise)" }}>Amazing Aerial Agency</a>. The edited versions below live on my YouTube channel — professional work that blends cinematic storytelling with world-class aerial footage.
                </p>

                {/* Amazing Aerial badge */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem", padding: "0.75rem 1rem", background: "rgba(56,248,236,0.05)", border: "1px solid rgba(56,248,236,0.15)", borderRadius: "8px", width: "fit-content" }}>
                  <img src="/amazing-aerial-wide_1dcbeda0.jpg" alt="Amazing Aerial" style={{ width: "60px", height: "40px", objectFit: "cover", borderRadius: "4px" }} />
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--turquoise)" }}>Represented by</div>
                    <a href="https://www.amazingaerial.com/controller/portfolio/shorizon" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-bright)", fontSize: "0.9rem", textDecoration: "none" }}>Amazing Aerial Agency</a>
                  </div>
                </div>

                <div className="video-grid">
                  {["NDSCqskuloU", "JXRdUW44Ogc", "4nCOwBhR8wY", "wscRbnML_U4", "yVSUIavDFeg", "1_YW_4ulyrs"].map((id, i) => (
                    <div className="portfolio-video" key={id}>
                      <iframe src={`https://www.youtube.com/embed/${id}`} title={`Alpine drone footage — short ${i + 1}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <DecoLine />
        </>
      )}

      {/* Section 05: More From The Field — Photo Grid */}
      <section className="asm-section" id="more-field">
        <div className="asm-container">
          <span className="section-number">05</span>
          <div className="fade-in">
            <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "var(--text-bright)", marginBottom: "1rem" }}>
              More From The Field
            </h2>
            <p style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "0.9rem", marginBottom: "1rem", maxWidth: "700px", lineHeight: 1.7 }}>
              Not every story fits a single frame. SeriesFest Denver, the American Film Market, Boulder Startup Week, Colorado Startup Week, PitchBoulder — if it's ambitious, interesting, and worth covering, a StorySmith belongs there.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "2rem", maxWidth: "700px", lineHeight: 1.7 }}>
              I discuss many of these events and my coverage of them in much more detail on{" "}
              <a href="https://www.linkedin.com/in/sindbad-horizon-b19b4a264" target="_blank" rel="noopener noreferrer" style={{ color: "var(--turquoise)", textDecoration: "underline" }}>LinkedIn</a>
              , where I regularly post breakdowns, behind-the-scenes insights, and media analysis from the field.
            </p>
            <div className="photo-grid">
              {[
                { src: `${CDN}/pebble-beach_3258d527.jpg`, alt: "Pebble Beach Concours d'Elegance — Shelby Cobra 427 SC Roadster on the lawn", label: "CONCOURS D'ELEGANCE — PEBBLE BEACH", url: "https://www.pebblebeachconcours.net/" },
                { src: `${CDN}/american-film-market_75ebac43.jpg`, alt: "American Film Market — independent film industry event coverage", label: "AMERICAN FILM MARKET", url: "https://americanfilmmarket.com/" },
                { src: `${CDN}/pitchboulder-image_5a2ff2a6.jpg`, alt: "PitchBoulder — weekly startup pitch event in Boulder, Colorado", label: "PITCHBOULDER — BOULDER, CO", url: "https://pitchboulder.co/" },
                { src: `${CDN}/outside-festival_96557afb.jpg`, alt: "Outside Days — Outside Magazine outdoor adventure and lifestyle festival", label: "OUTSIDE DAYS", url: "https://outsidedays.outsideonline.com/" },
                { src: `${CDN}/seriesfest_abf49c68.jpg`, alt: "SeriesFest Denver — independent television festival", label: "SERIESFEST DENVER", url: "https://seriesfest.com/" },
                { src: `${CDN}/fashion-in-focus_ac10b663.jpg`, alt: "Fashion in Focus — costume design and television craft celebration", label: "FASHION IN FOCUS", url: "https://seriesfest.com/" },
              ].map((img) => (
                <div className="photo-grid-item" key={img.label}>
                  <a href={img.url} target="_blank" rel="noopener noreferrer">
                    <img src={img.src} alt={img.alt} />
                    <div className="photo-grid-label">{img.label}</div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DecoLine />

      {/* Section 06: Organizations — Official Role */}
      <section className="asm-section section-bg-lighter" id="organizations">
        <div className="asm-container">
          <span className="section-number">06</span>
          <div className="fade-in">
            <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "var(--text-bright)", marginBottom: "0.5rem" }}>
              Organizations
            </h2>
            <p style={{ color: "var(--text-dim)", fontSize: "0.85rem", marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "'Barlow Condensed', sans-serif" }}>Official Organizational Role</p>

            {/* MEME — Official */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--asm-border)", borderRadius: "12px", padding: "2rem", maxWidth: "700px" }}>
              <div className="pillar-category">Board Chair & Lead Marketing Strategist</div>
              <a href="https://www.meme.ngo/" target="_blank" rel="noopener noreferrer" className="pillar-image-link">
                <img src="/meme-banner-wide_ce60d698.png" alt="MEME — Makeshift Entertainment Media Education" style={{ width: '100%', height: 'auto', objectFit: 'contain', aspectRatio: 'auto' }} />
              </a>
              <h3 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.5rem", color: "var(--text-bright)", marginBottom: "0.75rem" }}>
                MEME <span style={{ fontSize: "0.7em", color: "var(--text-dim)", fontWeight: 400 }}>(Makeshift Entertainment Media Education)</span>
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7, fontStyle: "italic" }}>
                Serving as Board Chair and lead marketing strategist. I drive the internal brand architecture, audience growth, and full-stack marketing strategy for this non-profit media education organization. This is the only organization I hold an official leadership role within.
              </p>
              <a href="https://www.meme.ngo/" target="_blank" rel="noopener noreferrer" className="btn-link" style={{ marginTop: "1rem", display: "inline-block" }}>Visit MEME →</a>
            </div>
          </div>
        </div>
      </section>

      <DecoLine />

      {/* Section 07: Coverage Relationships */}
      <section className="asm-section" id="coverage-relationships">
        <div className="asm-container">
          <span className="section-number">07</span>
          <div className="fade-in">
            <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "var(--text-bright)", marginBottom: "0.5rem" }}>
              Coverage Relationships
            </h2>
            <p style={{ color: "var(--text-dim)", fontSize: "0.85rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "'Barlow Condensed', sans-serif" }}>Extensive Coverage & Professional Engagement</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "2rem", maxWidth: "700px", lineHeight: 1.7, fontStyle: "italic" }}>
              These are organizations I've provided extensive media coverage for and built strong professional relationships with over time. While I am not officially part of these organizations, my work with them is well-recognized and ongoing.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {/* SeriesFest */}
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--asm-border)", borderRadius: "12px", padding: "1.5rem" }}>
                <a href="https://seriesfest.com/" target="_blank" rel="noopener noreferrer" className="pillar-image-link">
                  <img src="/seriesfest-2026_0087954d.webp" alt="SeriesFest Denver 2026 — independent television festival" className="pillar-img" />
                </a>
                <h3 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.25rem", color: "var(--text-bright)", marginBottom: "0.5rem" }}>SeriesFest</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                  Extensive event coverage, Q&A participation, and industry trend analysis at Denver's premier independent television festival.
                </p>
                <a href="https://seriesfest.com/" target="_blank" rel="noopener noreferrer" className="btn-link" style={{ marginTop: "0.75rem", display: "inline-block", fontSize: "0.85rem" }}>Visit SeriesFest →</a>
              </div>

              {/* PitchBoulder */}
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--asm-border)", borderRadius: "12px", padding: "1.5rem" }}>
                <a href="https://pitchboulder.co/" target="_blank" rel="noopener noreferrer" className="pillar-image-link">
                  <img src={`${CDN}/pitchboulder-image_5a2ff2a6.jpg`} alt="PitchBoulder — weekly startup pitch event" className="pillar-img" />
                </a>
                <h3 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.25rem", color: "var(--text-bright)", marginBottom: "0.5rem" }}>PitchBoulder</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                  Nearly three years of embedded weekly coverage, capturing startup pitches and analyzing founder-investor communication dynamics.
                </p>
                <a href="https://pitchboulder.co/" target="_blank" rel="noopener noreferrer" className="btn-link" style={{ marginTop: "0.75rem", display: "inline-block", fontSize: "0.85rem" }}>Visit PitchBoulder →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DecoLine />

      {/* CTA */}
      <section className="asm-section" id="portfolio-cta">
        <div className="asm-container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--text-bright)", marginBottom: "1rem" }}>
            Ready to Build Something?
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", marginBottom: "2rem", maxWidth: "550px", margin: "0 auto 2rem" }}>
            Whether you need event coverage, a cinematic asset, or a full market clarity engagement — let's talk.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/forge-the-saga" className="btn btn-primary">See Services</Link>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Book a Strategy Call</a>
          </div>
        </div>
      </section>
    </main>
  );
}
