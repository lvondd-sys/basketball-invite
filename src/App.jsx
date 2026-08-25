const EVENT_DATE = "Sunday, August 23rd";
const EVENT_TIME = "3PM";
const EVENT_LOCATION = "Clinton Park";

const TEAMS = [
  {
    name: "Team 1",
    players: ["Jake", "Forest", "Pete / Scott", "Oz"],
    color: "#1e3a5f",
    bg: "#f0f4f8",
  },
  {
    name: "Team 2",
    players: ["Hummer", "Erik B", "Steve / Byron", "Isiah"],
    color: "#0c0a09",
    bg: "#f5f5f4",
  },
  {
    name: "Team 3",
    players: ["Gavin", "Eric M", "Nate", "Cody"],
    color: "#b8860b",
    bg: "#fffbeb",
    winner: true,
  },
  {
    name: "Team 4",
    players: ["Lucas", "Davy", "Dave", "Spencer"],
    color: "#44403c",
    bg: "#fafaf9",
  },
];

const PHOTOS = [
  "/WhatsApp Image 2026-08-23 at 21.51.01.jpeg",
  "/WhatsApp Image 2026-08-24 at 07.11.00.jpeg",
  "/WhatsApp Image 2026-08-24 at 07.11.24.jpeg",
  "/WhatsApp Image 2026-08-24 at 07.11.30.jpeg",
];

export default function App() {
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
                  ...(team.winner ? styles.teamColWinner : {}),
                  boxShadow: team.winner
                    ? `0 3px 0 0 ${team.color} inset, 0 4px 14px rgba(184,134,11,0.35)`
                    : `0 3px 0 0 ${team.color} inset, 0 2px 6px rgba(0,0,0,0.05)`,
                }}
              >
                <div
                  style={{
                    ...styles.teamNameBadge,
                    color: "#1c1917",
                  }}
                >
                  {team.winner ? "🏆 " : ""}
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
          <div style={styles.superSubs}>
            <span style={styles.superSubsLabel}>Hype Men:</span> Ben and John
          </div>
        </div>

        <div style={styles.videosSection}>
          <h2 style={styles.faqTitle}>Hype Reel</h2>
          <div style={styles.videosGrid}>
            <div style={styles.videoWrapper}>
              <iframe
                style={styles.video}
                src="https://www.youtube.com/embed/1ASKZzzqOqI"
                title="Basketball Invite Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div style={styles.videoWrapper}>
              <iframe
                style={styles.video}
                src="https://www.youtube.com/embed/myZ6jNhXCWA"
                title="Basketball Invite Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div style={styles.photosSection}>
          <h2 style={styles.faqTitle}>Photos</h2>
          <div style={styles.photosGrid}>
            {PHOTOS.map((src) => (
              <div key={src} style={styles.photoWrapper}>
                <img src={src} alt="Game highlight" style={styles.photo} />
              </div>
            ))}
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
  teamColWinner: {
    background: "linear-gradient(180deg, #fef9e7 0%, #fdf3d1 100%)",
    border: "1px solid #e3c56b",
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
  superSubs: {
    marginTop: "14px",
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "14px",
    letterSpacing: "0.02em",
    color: "#57534e",
    textAlign: "center",
  },
  superSubsLabel: {
    fontWeight: 700,
    color: "#1c1917",
  },
  videosSection: {
    marginTop: "28px",
    textAlign: "left",
  },
  videosGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  videoWrapper: {
    position: "relative",
    width: "100%",
    paddingBottom: "56.25%",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },
  faqTitle: {
    fontSize: "20px",
    fontWeight: 800,
    color: "#1c1917",
    margin: "0 0 16px",
  },
  photosSection: {
    marginTop: "28px",
    textAlign: "left",
  },
  photosGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "8px",
  },
  photoWrapper: {
    position: "relative",
    width: "100%",
    paddingBottom: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  },
  photo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
