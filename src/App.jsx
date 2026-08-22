import { useState } from "react";

const EVENT_DATE = "Sunday, August 23rd";
const EVENT_TIME = "3PM";
const EVENT_LOCATION = "Clinton Park";

const TEAMS = [
  {
    name: "Team 1",
    players: ["Jake", "Forest", "Cody", "Oz"],
    color: "#1e3a5f",
    bg: "#f0f4f8",
  },
  {
    name: "Team 2",
    players: ["Hummer / Brandon (out)", "Erik B", "Steve", "Isiah"],
    color: "#0c0a09",
    bg: "#f5f5f4",
  },
  {
    name: "Team 3",
    players: ["Gavin (maybe)", "Eric M", "Nate", "Matt (out)"],
    color: "#2c5282",
    bg: "#eff6ff",
  },
  {
    name: "Team 4",
    players: ["Lucas", "Davy", "Dave / Pete", "Spencer"],
    color: "#44403c",
    bg: "#fafaf9",
  },
];

const FAQS = [
  {
    q: "What must you bring?",
    a: "A light shirt and a dark shirt (or jerseys) so we can tell teams apart on the court and get some good pictures.",
  },
  {
    q: "How does the tournament work?",
    a: "Round robin, then a final. Each team plays every other team once (6 games), then the top 2 records play a championship game.",
  },
  {
    q: "How do you score points?",
    a: "Buckets are worth 2 or 3 points, same as regular ball.",
  },
  { q: "What's the winning score?", a: "First team to 15 points wins." },
  {
    q: "What happens if a game runs long?",
    a: "Games are capped at 20 minutes. If nobody's hit 15 by then, it's a 5-minute overtime.",
  },
  {
    q: "What should you bring?",
    a: "A camping chair, some snacks, water, and beers.",
  },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div style={styles.page}>
      <style>{`
        @media (max-width: 480px) {
          .teams-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .rsvp-card {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .teams-section {
            margin-left: -20px !important;
            margin-right: -20px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .event-subtitle {
            font-size: 14px !important;
          }
        }
      `}</style>
      <div style={styles.bgImage} />
      <div style={styles.bgOverlay} />
      <div className="rsvp-card" style={styles.card}>
        <div
          style={styles.logoBadge}
          role="img"
          aria-label="Clinton-Sewallcrest Invitational"
        />
        <h1 style={styles.title}>Clinton-Sewallcrest Invitational</h1>
        <p className="event-subtitle" style={styles.subtitle}>
          {EVENT_DATE} &middot; {EVENT_TIME} @ {EVENT_LOCATION}
        </p>

        <div className="teams-section" style={styles.teamsSection}>
          <h2 style={styles.faqTitle}>Teams</h2>
          <div className="teams-grid" style={styles.teamsGrid}>
            {TEAMS.map((team) => (
              <div
                key={team.name}
                style={{
                  ...styles.teamCol,
                  boxShadow: `0 3px 0 0 ${team.color} inset, 0 2px 6px rgba(0,0,0,0.05)`,
                }}
              >
                <div
                  style={{
                    ...styles.teamNameBadge,
                    color: "#1c1917",
                  }}
                >
                  {team.name}
                </div>
                <div style={styles.teamPlayers}>
                  {team.players.map((player) => (
                    <div
                      key={player}
                      style={{
                        ...styles.playerChip,
                        borderColor: `${team.color}55`,
                        background: `${team.color}0d`,
                      }}
                    >
                      {player}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.faqSection}>
          <h2 style={styles.faqTitle}>Good to know</h2>
          <div style={styles.faqList}>
            {FAQS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q} style={styles.faqItem}>
                  <button
                    style={styles.faqButton}
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  >
                    <span style={styles.faqQuestion}>{item.q}</span>
                    <span style={styles.faqToggle}>{isOpen ? "–" : "+"}</span>
                  </button>
                  {isOpen && <p style={styles.faqAnswer}>{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    padding: "24px",
  },
  bgImage: {
    position: "absolute",
    inset: 0,
    backgroundImage: "url(/hoop.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "grayscale(1) contrast(1.1)",
    zIndex: 0,
  },
  bgOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(160deg, rgba(28,25,23,0.55) 0%, rgba(12,10,9,0.75) 100%)",
    zIndex: 1,
  },
  card: {
    position: "relative",
    zIndex: 2,
    background: "#fff",
    borderRadius: "20px",
    overflow: "hidden",
    padding: "40px 32px",
    width: "100%",
    maxWidth: "600px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
  },
  logoBadge: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    margin: "0 auto 12px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
    backgroundImage: "url(/logo_ball.png)",
    backgroundSize: "140%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  title: {
    fontSize: "26px",
    fontWeight: 800,
    color: "#1c1917",
    margin: "0 0 4px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#44403c",
    fontWeight: 600,
    margin: 0,
  },
  teamsSection: {
    marginTop: "28px",
    marginLeft: "-32px",
    marginRight: "-32px",
    padding: "24px 32px 4px",
    background: "#fff",
    textAlign: "left",
  },
  teamsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "8px",
  },
  teamCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px 6px 14px",
    background: "#fafaf9",
    border: "1px solid #e7e5e4",
    borderRadius: "4px",
  },
  teamNameBadge: {
    fontFamily: "'Permanent Marker', cursive",
    fontSize: "17px",
    fontWeight: 400,
    letterSpacing: "0.01em",
    marginBottom: "12px",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  teamPlayers: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    alignItems: "stretch",
    width: "100%",
  },
  playerChip: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    letterSpacing: "0.02em",
    color: "#292524",
    lineHeight: 1.2,
    textAlign: "center",
    padding: "6px 4px",
    borderRadius: "4px",
    border: "1px solid",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
  },
  faqSection: {
    marginTop: "28px",
    textAlign: "left",
  },
  faqTitle: {
    fontSize: "20px",
    fontWeight: 800,
    color: "#1c1917",
    margin: "0 0 16px",
  },
  faqList: {
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid #e7e5e4",
  },
  faqItem: {
    borderTop: "1px solid #e7e5e4",
    padding: "14px 0",
  },
  faqButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    width: "100%",
    background: "none",
    border: "none",
    padding: 0,
    margin: 0,
    cursor: "pointer",
    textAlign: "left",
    font: "inherit",
  },
  faqQuestion: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#1c1917",
  },
  faqToggle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#1c1917",
    flexShrink: 0,
    lineHeight: 1,
    width: "16px",
    textAlign: "center",
  },
  faqAnswer: {
    fontSize: "14px",
    color: "#57534e",
    lineHeight: 1.5,
    margin: "10px 0 0",
  },
};
