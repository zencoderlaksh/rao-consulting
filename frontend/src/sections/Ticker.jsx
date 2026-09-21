const tickerItems = [
  "FULL-STACK WEB DEVELOPMENT",
  "ARTIFICIAL INTELLIGENCE & ML",
  "CLOUD COMPUTING & DEVOPS",
  "LIVE INDUSTRY PROJECTS",
  "MENTORSHIP & CODE REVIEWS",
  "RESUME & PORTFOLIO ACCELERATION",
  "CAMPUS TO CORPORATE PLACEMENT",
  "ENTERPRISE PARTNERSHIPS",
];

function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {tickerItems.concat(tickerItems).map((item, index) => (
          <span key={index} className="ticker-item">
            {item} ✦
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
