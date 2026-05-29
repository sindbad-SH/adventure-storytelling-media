import { Link } from "wouter";

export default function Arsenal() {
  return (
    <main id="main">
      <section className="subpage-hero">
        <div className="asm-container subpage-centered">
          <Link href="/" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
            Back to Home
          </Link>
          <div className="section-label">GEAR &amp; RECOMMENDATIONS</div>
          <h1>The <span className="turquoise">Arsenal</span></h1>
          <p className="subtitle">The gear, tools, and resources I use and recommend — from cameras to AI platforms to the events worth attending.</p>
        </div>
      </section>

      <div className="deco-line">
        <div className="deco-line-left"></div>
        <div className="deco-diamond"></div>
        <div className="deco-line-right"></div>
      </div>

      <section className="asm-section">
        <div className="asm-container subpage-centered">
          <div className="subpage-body">
            <p>The Arsenal is a curated list of the gear, software, AI tools, and resources I actually use in the field. No filler. No sponsorship-driven recommendations. If it's here, it's because I've used it on real projects and it earned its place.</p>
            <p>Categories will include camera and drone gear, editing software, AI and research tools, travel essentials, and the events and communities I think are worth your time.</p>
          </div>
          <div className="coming-soon-box">
            <div className="coming-soon-badge">COMING SOON</div>
            <p>The first recommendations are coming soon. Check back or follow along on LinkedIn for updates.</p>
            <p className="note">Some links may be affiliate links. If you purchase through them, I may earn a small commission at no extra cost to you. I only recommend tools and gear I personally use and trust.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
