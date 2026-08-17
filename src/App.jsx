import { useState } from "react";

const EVENT_DATE = "Sunday, August 23rd";
const EVENT_TIME = "3PM";
const EVENT_LOCATION = "Clinton Park";

const TEAMS = [
  {
    name: "Team 1",
    players: ["Jake", "Forest", "Cody", "Oz"],
    color: "#dc2626",
    bg: "#fef2f2",
  },
  {
    name: "Team 2",
    players: ["Brandon", "Erik B", "Steve", "Isiah"],
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    name: "Team 3",
    players: ["Gavin", "Eric M", "Nate", "Matt"],
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    name: "Team 4",
    players: ["Lucas", "Davy", "Dave", "Spencer"],
    color: "#ea580c",
    bg: "#fff7ed",
  },
];

const FAQS = [
  {
    q: "What's the tournament format?",
    a: "Round robin, then a final. Each team plays every other team once (6 games), then the top 2 records play a championship game.",
  },
  { q: "How many points is a bucket?", a: "2s and 3s" },
  { q: "How many points to win a game?", a: "15 points" },
  {
    q: "What if a game goes for too long?",
    a: "If a game reaches 20min, 5min overtime.",
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
        }
      `}</style>
      <div style={styles.bgImage} />
      <div style={styles.bgOverlay} />
      <div className="rsvp-card" style={styles.card}>
        <div style={styles.calendar}>
          <div style={styles.calendarMonth}>AUG</div>
          <div style={styles.calendarDay}>23</div>
        </div>
        <h1 style={styles.title}>Clinton-Sewallcrest Invitational</h1>
        <p style={styles.subtitle}>
          {EVENT_DATE} &middot; {EVENT_TIME}
        </p>
        <p style={styles.location}>📍 {EVENT_LOCATION}</p>

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
  calendar: {
    width: "64px",
    margin: "0 auto 8px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
    border: "1px solid #e7e5e4",
  },
  calendarMonth: {
    background: "#dc2626",
    color: "#fff",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    padding: "4px 0",
  },
  calendarDay: {
    background: "#fff",
    color: "#1c1917",
    fontSize: "26px",
    fontWeight: 800,
    padding: "4px 0 6px",
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
    margin: "0 0 6px",
  },
  location: {
    fontSize: "14px",
    color: "#78716c",
    fontWeight: 500,
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
