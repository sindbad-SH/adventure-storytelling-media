import { Link } from "wouter";

const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
);
const MapPinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 10L10 2M10 2H4M10 2v6" /></svg>
);

interface EventData {
  title: string;
  time: string;
  location: string;
  url: string;
  linkLabel: string;
  description?: string;
}

const events: EventData[] = [
  { title: "PitchBoulder", time: "Weekly — Wednesdays", location: "Boulder, CO", url: "https://pitchboulder.co/", linkLabel: "PITCHBOULDER.CO", description: "The weekly startup pitch event where founders present to a room of investors, operators, and advisors. Embedded coverage since 2022." },
  { title: "SeriesFest Denver", time: "Annual — June", location: "Denver, CO", url: "https://seriesfest.com", linkLabel: "SERIESFEST.COM", description: "Independent television festival celebrating the art of episodic storytelling. Red carpet, panels, screenings, and the people behind the shows." },
  { title: "Boulder Startup Week", time: "Annual — May", location: "Boulder, CO", url: "https://boulderstartupweek.com", linkLabel: "BOULDERSTARTUPWEEK.COM" },
  { title: "Colorado Startup Week", time: "Annual — September", location: "Statewide, CO", url: "https://coloradostartupweek.com", linkLabel: "COLORADOSTARTUPWEEK.COM" },
  { title: "American Film Market", time: "Annual — February", location: "Las Vegas, NV", url: "https://americanfilmmarket.com", linkLabel: "AMERICANFILMMARKET.COM", description: "The global marketplace for independent film. Where deals get made, distribution gets negotiated, and the business side of cinema comes into focus." },
  { title: "NOCOVA", time: "Recurring", location: "Northern Colorado", url: "https://www.meme.ngo/nocova", linkLabel: "MEME.NGO/NOCOVA" },
  { title: "Makeshift Film Group", time: "Monthly", location: "Boulder, CO", url: "https://www.makeshiftfilmgroup.com", linkLabel: "MAKESHIFTFILMGROUP.COM" },
  { title: "Outside Days", time: "Annual", location: "Boulder, CO", url: "https://outsidedays.outsideonline.com/", linkLabel: "OUTSIDEDAYS.OUTSIDEONLINE.COM" },
  { title: "Golden Startup Coffee", time: "Monthly", location: "Golden, CO", url: "https://www.connectsworkspace.com/golden-startup-coffee", linkLabel: "CONNECTSWORKSPACE.COM" },
];

export default function MapPage() {
  return (
    <main id="main">
      <section className="subpage-hero">
        <div className="asm-container subpage-centered">
          <Link href="/" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
            Back to Home
          </Link>
          <div className="section-label">EVENTS &amp; TERRITORY</div>
          <h1>The <span className="turquoise">Map</span></h1>
          <p className="subtitle">Where the work happens — events, communities, and ecosystems I cover and participate in.</p>
        </div>
      </section>

      <div className="deco-line">
        <div className="deco-line-left"></div>
        <div className="deco-diamond"></div>
        <div className="deco-line-right"></div>
      </div>

      <section className="asm-section">
        <div className="asm-container">
          <p className="map-intro">Boulder is home base, but the territory extends wherever the stories are. Below is a running list of the events, communities, and ecosystems I actively cover or participate in. Some are weekly staples. Others are annual pilgrimages. All of them are worth knowing about.</p>
          <div className="map-badge">EVENTS BEING ADDED REGULARLY</div>
          <div className="event-list">
            {events.map((event) => (
              <a
                key={event.title}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="event-card"
                style={{ textDecoration: "none" }}
              >
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <span><CalendarIcon /> {event.time}</span>
                    <span><MapPinIcon /> {event.location}</span>
                  </div>
                  {event.description && <p className="event-description">{event.description}</p>}
                </div>
                <div className="event-link">
                  {event.linkLabel} <ArrowIcon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
