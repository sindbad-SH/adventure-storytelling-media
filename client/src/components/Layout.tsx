import { useState, useEffect, useCallback, type ReactNode } from "react";
import { Link, useLocation } from "wouter";

const CDN = "";
const CALENDLY = "https://calendly.com/sindbad-adventurestorytellingmedia/new-meeting";

export default function Layout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location] = useLocation();


  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".more-dropdown")) setDropdownOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location]);

  const handleNavClick = useCallback(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, []);

  return (
    <>
      {/* River Line SVG — weaving path effect */}
      <div className="river-line-wrapper" aria-hidden="true">
        <svg viewBox="0 0 100 4000" preserveAspectRatio="none" fill="none">
          <path
            d="M 50 0 C 30 200, 70 400, 45 600 C 20 800, 75 1000, 55 1200 C 35 1400, 65 1600, 40 1800 C 15 2000, 80 2200, 50 2400 C 20 2600, 70 2800, 45 3000 C 25 3200, 60 3400, 50 3600 C 40 3800, 55 3900, 50 4000"
            stroke="#38F8EC"
            strokeWidth="0.5"
            strokeLinecap="round"
            opacity="0.45"
          />
          <path
            d="M 50 0 C 30 200, 70 400, 45 600 C 20 800, 75 1000, 55 1200 C 35 1400, 65 1600, 40 1800 C 15 2000, 80 2200, 50 2400 C 20 2600, 70 2800, 45 3000 C 25 3200, 60 3400, 50 3600 C 40 3800, 55 3900, 50 4000"
            stroke="#38F8EC"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.08"
            filter="url(#riverGlow)"
          />
          <path
            d="M 52 0 C 32 180, 72 380, 47 580 C 22 780, 77 980, 57 1180 C 37 1380, 67 1580, 42 1780 C 17 1980, 82 2180, 52 2380 C 22 2580, 72 2780, 47 2980 C 27 3180, 62 3380, 52 3580 C 42 3780, 57 3880, 52 4000"
            stroke="#38F8EC"
            strokeWidth="0.2"
            strokeLinecap="round"
            opacity="0.25"
          />
          <defs>
            <filter id="riverGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" aria-label="Adventure Storytelling Media — Home">
            <img src={`${CDN}/logo-nav_5f29c51f.webp`} alt="Adventure Storytelling Media logo" />
          </Link>
          <button
            className="mobile-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span><span></span><span></span>
          </button>
          <div className={`nav-links${mobileOpen ? " open" : ""}`}>
            <Link href="/" className={location === "/" ? "active" : ""} onClick={handleNavClick}>Home</Link>
            <Link href="/portfolio" className={location === "/portfolio" ? "active" : ""} onClick={handleNavClick}>Portfolio</Link>
            <Link href="/forge-the-saga" className={location === "/forge-the-saga" ? "active" : ""} onClick={handleNavClick}>Services</Link>
            <div className={`more-dropdown${dropdownOpen ? " open" : ""}`}>
              <button
                className="more-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownOpen(!dropdownOpen);
                }}
              >
                More{" "}
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <Link href="/insights" onClick={handleNavClick}>Insights</Link>
                <Link href="/contact" onClick={handleNavClick}>Contact</Link>
              </div>
            </div>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-btn"
              onClick={handleNavClick}
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={`${CDN}/logo-footer_34beaa60.webp`} alt="Adventure Storytelling Media — vertical logo" />
            <p className="footer-quote">"The most powerful stories aren't just told — they are tested."</p>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/forge-the-saga">Services</Link>
            <Link href="/field-notes">Insights</Link>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <Link href="/connect">Contact</Link>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
            <a href="https://www.linkedin.com/in/sindbad-horizon-b19b4a264" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="footer-col">
            <h4>Email</h4>
            <div className="footer-blue-effect">
              <a href="mailto:sindbad@advstmedia.com" aria-label="Email Sindbad at sindbad@advstmedia.com">sindbad@advstmedia.com</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Adventure Storytelling Media</span>
          <div className="footer-bottom-links">
            <span>adventurestorytellingmedia.com</span>
            <span>&middot;</span>
            <span>advstmedia.com</span>
            <span>&middot;</span>
            <span>sindbad@advstmedia.com</span>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="floating-btn">
        Book a Call{" "}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 7h10M8 3l4 4-4 4" />
        </svg>
      </a>
    </>
  );
}
