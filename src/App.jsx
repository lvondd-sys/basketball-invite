import { useState, useEffect } from "react";

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
    players: ["Hummer", "Erik B", "Steve", "Isiah"],
    color: "#0c0a09",
    bg: "#f5f5f4",
  },
  {
    name: "Team 3",
    players: ["Gavin", "Eric M", "Nate / Byron", "Cody"],
    color: "#b8860b",
    bg: "#fffbeb",
    winner: true,
  },
  {
    name: "Team 4",
    players: ["Lucas", "Davy", "Dave / Pete", "Spencer"],
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

const ESSAY = {
  title: "Keep on Playin'",
  author: "by David J Kmetovic",
  sections: [
    {
      heading: "The Wednesday Night Payoff",
      paragraphs: [
        `"Nobody gets hurt, guys!" It's the standing hope and agreement in my Wednesday night basketball group. Two hours of fast, unpredictable, yet structured "play" among adults, some now in their seventies.`,
        "A father and son who somehow still compete without mercy. One retired guy, who stubbornly keeps trying a few old moves that aged well. Another who often laughs when he dribbles, seeing angles the rest of us miss. We come from three different countries, different careers. For these two hours none of that matters.",
        "We warm up and quickly shoot for teams, randomly mixing well-known styles, strengths, and weaknesses. Winners stay on.",
        "Why do we do it? What makes us ensure our schedules are clear so we can immerse ourselves in this apparent mayhem?",
        "It's the week's payoff, where everyday details, the news cycle, and anxieties fall away, are crushed into insignificance.",
      ],
    },
    {
      heading: "The Mismatch",
      paragraphs: [
        "Playing in a way that demands muscular and aerobic output, and which simultaneously requires a focus on rapid responses, seems to be one path toward maintaining lifelong health.",
        "Evolutionary biologist Daniel Lieberman has written about how the bodies of hominids evolved to allow vigorous movement, yet we now live in an environment where very little is required of us. He traces several modern health problems back to that mismatch.",
        `Of course we're all aware one should "stay in shape," and although many of us engage in activities such as walking, running, cycling, or strength training, these activities don't really demand the same constant adaptation. None of these actions taken alone seem very similar to what it took to survive for so much of human history.`,
        "Are there modern activities we can adopt where we reinforce the mind/body connection that stimulates and reengages these ancient traits?",
        "My experience says we can.",
      ],
    },
    {
      heading: "Adults at Play",
      paragraphs: [
        "This is where the role of sporting activities comes in. Tennis or basketball, for example, require constant adjustment of position, awareness of physical obstacles, and eye-hand coordination at a very rapid pace. Situations change quickly and we respond using skills sharpened over time. Hopefully, our reaction to being challenged only stimulates us to improve.",
        "Psychiatrist John J. Ratey has written extensively about the link between movement and brain function. Sport, with its constant decisions and adjustments often made under pressure, may be one of the most natural ways to activate and strengthen those connections. Pickleball, soccer, basketball—they all answer that call.",
        `Now, I can't pretend that our Wednesday night full-court hoop sessions recreate ancient life on the savanna. But I also can't ignore how "right" it feels—the sprinting, the scanning, the constant adjustments—as if some old circuitry is being exercised, not just my legs.`,
        "No time for deliberation—actions arise from the body itself, reinforced by decades of experience. It feels like a body-mind fusion where muscle memory takes over.",
        `Sporting games that include a tangible measure of success by keeping score and noting metrics of personal performance (points scored, aces, rebounds, etc.) give us inarguable measures of effectiveness. The more negative experiences, such as having a shot blocked, might also build emotional resilience through our need to quickly "shake it off" and get back in the game.`,
      ],
    },
    {
      heading: "Belonging",
      paragraphs: [
        "Another aspect of the utility of sports is that they are social activities. We are, after all, tribal creatures, and for most of human history coordinated effort has been a key to our survival. In the modern world we have sports, where we accept well-established rules and agreements, a valuable and non-violent substitute for earlier forms of both conflict and cooperation. Instant feedback, gaining insight on clever strategies, and the near constant need to adjust on the fly in a social or one-on-one context all strengthen these abilities, which mostly lay dormant in modern life.",
        "My own experience is that a palpable bond has formed in my group that regularly meets to share in the love of our chosen form of play.",
      ],
    },
    {
      heading: "If it Feels Good…",
      paragraphs: [
        "People can have a strong attraction, even an addiction, to the reward neurotransmitters our brains generate, and they seem to flow freely in the active play state. To those like us who have discovered a sport we love, heading off to play never feels like a chore or workout task we must complete: we are only too eager to get back on the court again, and happily run ourselves ragged. After a week mediated by screens, the game feels less like exercise and more like necessity. And doing well for the team carries its own quiet reward.",
      ],
    },
    {
      heading: 'Beyond Staying "In Shape"',
      paragraphs: [
        `Whatever form it takes, playing sports, as a modern echo of more primal demands, just might play a role in maintaining the health of the whole mind/body system into the later years. Though many avoid activities that embrace "competition" I find the experiences in every session—good, disappointing, or physically painful—only natural to accept in the wholeness of the experience.`,
        "Could that satisfaction—and the promise of another dose of dopamine—help our bodies heal and recover, so we can return?",
      ],
    },
    {
      heading: "Why Stop?",
      paragraphs: [
        `"Ball in!"`,
        "The ball is checked after a foul.",
        "Shoes squeak as one of us makes a quick cut to get open in the key. But he is a step slow this time and the pass is stolen. It's getting late, we're getting tired.",
        "And of course our bodies do complain. Our group has watched players drift away after a surgery, losing the battle with a chronic condition, or simply feeling the accumulation of years. Most never return. But for now, the lucky ones keep showing up, still playing through their adulthood.",
        "As I age, I feel a certain pull toward relaxation, to live a more observational and passive life. But I do push back against that tendency, and my Wednesday nights allow me to hold on to this more physical way to be in the world.",
        "The wrestling play we see exhibited by lion cubs builds essential strength and agility. Yet, just as with humans, play generally fades away as maturity and a more self-sufficient life begins.",
        "Maybe we should never give up playing.",
      ],
    },
    {
      heading: "One More Time!",
      paragraphs: [
        "We click off the lights to our creaky old gym and, in sweaty good humor, head over to the bar for the last part of the night's ritual, to finally relax. Our conversations over beer can range from the evening's court antics or MVP, to the recent death of a parent. Rae, our bartender, looks up, grabs the pint glasses.",
        "We settle in our corner booth and clink them in a quiet toast.",
        "For another week.",
        "For what we keep building.",
        "And hey, nobody got hurt.",
        "Reasons enough to keep on playin'.",
      ],
    },
  ],
};

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
  };
  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i + 1) % PHOTOS.length);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setLightboxIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((i) => (i + 1) % PHOTOS.length);
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex]);

  const onTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 50) {
      setLightboxIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
    } else if (deltaX < -50) {
      setLightboxIndex((i) => (i + 1) % PHOTOS.length);
    }
    setTouchStartX(null);
  };

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
          .lightbox-body {
            flex-direction: column !important;
          }
          .lightbox-side-arrow {
            display: none !important;
          }
          .lightbox-bottom-nav {
            display: flex !important;
          }
          .lightbox-desktop-counter {
            display: none !important;
          }
          .lightbox-image-wrap {
            height: auto !important;
            flex: 0 1 auto !important;
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
            {PHOTOS.map((src, i) => (
              <div key={src} style={styles.photoWrapper}>
                <img
                  src={src}
                  alt="Game highlight"
                  style={styles.photo}
                  onClick={() => setLightboxIndex(i)}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={styles.essaySection}>
          <h2 style={styles.faqTitle}>A Word from Dave</h2>
          <div style={styles.essayCard}>
            <h3 style={styles.essayTitle}>{ESSAY.title}</h3>
            <p style={styles.essayAuthor}>{ESSAY.author}</p>
            {ESSAY.sections.map((section) => (
              <div key={section.heading} style={styles.essaySubsection}>
                <h4 style={styles.essayHeading}>{section.heading}</h4>
                {section.paragraphs.map((p, i) => (
                  <p key={i} style={styles.essayParagraph}>
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {lightboxIndex !== null && (
          <div
            style={styles.lightboxOverlay}
            onClick={() => setLightboxIndex(null)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              style={styles.lightboxClose}
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="lightbox-body" style={styles.lightboxBody}>
              <button
                className="lightbox-side-arrow"
                style={styles.lightboxArrow}
                onClick={showPrev}
                aria-label="Previous photo"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <div className="lightbox-image-wrap" style={styles.lightboxImageWrap}>
                <img
                  src={PHOTOS[lightboxIndex]}
                  alt="Game highlight large"
                  style={styles.lightboxImage}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <button
                className="lightbox-side-arrow"
                style={styles.lightboxArrow}
                onClick={showNext}
                aria-label="Next photo"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
            <div
              className="lightbox-bottom-nav"
              style={styles.lightboxBottomNav}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={styles.lightboxArrow}
                onClick={showPrev}
                aria-label="Previous photo"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <div style={styles.lightboxCounterInline}>
                {lightboxIndex + 1} / {PHOTOS.length}
              </div>
              <button
                style={styles.lightboxArrow}
                onClick={showNext}
                aria-label="Next photo"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
            <div className="lightbox-desktop-counter" style={styles.lightboxCounter}>
              {lightboxIndex + 1} / {PHOTOS.length}
            </div>
          </div>
        )}
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
  essaySection: {
    marginTop: "28px",
    textAlign: "left",
  },
  essayCard: {
    background: "#fafaf9",
    border: "1px solid #e7e5e4",
    borderRadius: "8px",
    padding: "24px 20px",
  },
  essayTitle: {
    fontSize: "20px",
    fontWeight: 800,
    color: "#1c1917",
    margin: "0 0 4px",
    fontStyle: "italic",
  },
  essayAuthor: {
    fontSize: "13px",
    color: "#78716c",
    margin: "0 0 20px",
    fontWeight: 600,
  },
  essaySubsection: {
    marginBottom: "20px",
  },
  essayHeading: {
    fontSize: "15px",
    fontWeight: 800,
    color: "#1c1917",
    margin: "0 0 8px",
  },
  essayParagraph: {
    fontSize: "14px",
    color: "#44403c",
    lineHeight: 1.6,
    margin: "0 0 10px",
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
    cursor: "zoom-in",
  },
  lightboxOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.85)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    zIndex: 100,
    padding: "24px",
    cursor: "zoom-out",
  },
  lightboxBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: "100%",
    minHeight: 0,
    flex: "1 1 auto",
  },
  lightboxImageWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 1 auto",
    minWidth: 0,
    minHeight: 0,
    height: "100%",
  },
  lightboxImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "8px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    cursor: "default",
  },
  lightboxClose: {
    position: "absolute",
    top: "16px",
    right: "24px",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "36px",
    lineHeight: 1,
    cursor: "pointer",
    padding: 0,
    zIndex: 1,
  },
  lightboxArrow: {
    background: "rgba(255,255,255,0.15)",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    width: "48px",
    height: "48px",
    minWidth: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    padding: 0,
  },
  lightboxBottomNav: {
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    cursor: "default",
    flexShrink: 0,
  },
  lightboxCounterInline: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: 600,
    background: "rgba(0,0,0,0.4)",
    padding: "4px 12px",
    borderRadius: "12px",
    minWidth: "48px",
    textAlign: "center",
  },
  lightboxCounter: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#fff",
    fontSize: "14px",
    fontWeight: 600,
    background: "rgba(0,0,0,0.4)",
    padding: "4px 12px",
    borderRadius: "12px",
  },
};
