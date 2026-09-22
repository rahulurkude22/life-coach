import { useEffect, useRef } from "react";
import { videos } from "../utils";

const RESERVE_URL = "https://superprofile.bio/e/LwKEHaNi";

export default function OnlineWorkshop() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Inject Fonts
    const fontId = "ow-fraunces-font";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap";
      document.head.appendChild(link);
    }

    // 2. Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = containerRef.current?.querySelectorAll(
      ".explore-item, .testi-card"
    );

    elements?.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(14px)";
      htmlEl.style.transition = "opacity .5s ease, transform .5s ease";
      observer.observe(htmlEl);
    });

    // 3. Pause other videos when one plays
    const videoElements = containerRef.current?.querySelectorAll<HTMLVideoElement>(
      ".testi-card video"
    );

    const handlePlay = (e: Event) => {
      const targetVideo = e.target as HTMLVideoElement;
      videoElements?.forEach((other) => {
        if (other !== targetVideo) {
          other.pause();
        }
      });
    };

    videoElements?.forEach((v) => v.addEventListener("play", handlePlay));

    return () => {
      observer.disconnect();
      videoElements?.forEach((v) => v.removeEventListener("play", handlePlay));
    };
  }, []);

  const attendeeVideos = [
    videos.find((v) => v.title.toLowerCase().includes("shubhra")),
    videos.find((v) => v.title.toLowerCase().includes("maria")),
    videos.find((v) => v.title.toLowerCase().includes("pepper")),
    videos.find((v) => v.title.toLowerCase().includes("sarah")),
  ].filter(Boolean) as typeof videos;

  return (
    <div ref={containerRef} className="ow-new-page">
      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <div className="nav-brand">
            Stop <span>Overthinking</span>
          </div>
          <a href="#reserve" className="nav-cta">
            Reserve Slot
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap center">
          <div className="hero-photo">
            <img src="images/alisha-hero.jpg" alt="Alisha Jaiswal" />
          </div>
          <div className="eyebrow">A live workshop with Alisha Jaiswal</div>
          <h1>
            Overthinking Has Cost You Your Time, Sleep &amp; Relationships.{" "}
            <em>It's Time to Stop.</em>
          </h1>
          <p className="sub">
            A 2-hour workshop to quiet your mind and take back control of your
            time, sleep, and relationships.
          </p>

          <div className="hero-cta-row">
            <a href="#reserve" className="btn-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              Reserve Your Slot Now
            </a>
            <span className="badge">Limited Seats Available</span>
          </div>

          <div className="meta-strip">
            <div className="meta-item">
              <div className="eyebrow">Date</div>
              <div className="val">27 Sept</div>
            </div>
            <div className="meta-item">
              <div className="eyebrow">Time</div>
              <div className="val">11–1 PM</div>
            </div>
            <div className="meta-item">
              <div className="eyebrow">Where</div>
              <div className="val">Online Zoom Session</div>
            </div>
          </div>

          <div className="chips">
            <div className="chip">
              <span className="dot">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </span>
              Your time
            </div>
            <div className="chip">
              <span className="dot">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </span>
              Your sleep
            </div>
            <div className="chip">
              <span className="dot">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </span>
              Your relationships
            </div>
            <div className="chip">
              <span className="dot">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </span>
              Your focus
            </div>
            <div className="chip pending">
              <span className="dot"></span>Peace of mind
            </div>
          </div>
        </div>
      </section>

      {/* REFRAME */}
      <section className="reframe">
        <div className="wrap center">
          <p className="reframe-quote">
            "I can't switch my mind <span>off.</span>"
          </p>
          <div className="reframe-lines">
            <p>Maybe you're not broken.</p>
            <p>Maybe you don't need more willpower.</p>
            <p>Maybe your mind isn't the enemy.</p>
            <p>Maybe you just never learned how to quiet it.</p>
          </div>
        </div>
      </section>

      {/* HOST LINE */}
      <section className="host-line">
        <div className="wrap">
          <p>
            In this workshop with <strong>Alisha Jaiswal</strong>, you'll learn
            to quiet the mental noise and take back control of your time,
            sleep, and relationships.
          </p>
        </div>
      </section>

      {/* EXPLORE */}
      <section className="explore">
        <div className="wrap center">
          <div className="explore-head">
            <div className="eyebrow">About the event</div>
            <h2>We'll cover</h2>
          </div>
          <div className="explore-list">
            <div className="explore-item">
              <span className="mark">—</span>
              <h3>Why your mind won't switch off, even when you want it to</h3>
            </div>
            <div className="explore-item">
              <span className="mark">—</span>
              <h3>
                The real cost of overthinking on your time, sleep &amp;
                relationships
              </h3>
            </div>
            <div className="explore-item">
              <span className="mark">—</span>
              <h3>The hidden patterns that keep the loop running</h3>
            </div>
            <div className="explore-item">
              <span className="mark">—</span>
              <h3>How to quiet racing thoughts without forcing them away</h3>
            </div>
            <div className="explore-item">
              <span className="mark">—</span>
              <h3>Simple tools to fall asleep faster and stay present</h3>
            </div>
            <div className="explore-item">
              <span className="mark">—</span>
              <h3>How to respond instead of overanalyse — starting today</h3>
            </div>
          </div>
          <p className="explore-foot">
            This isn't about never thinking again. It's about thinking on your
            terms — not overthinking's.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="wrap">
          <div className="about-photo">
            <img src="images/alisha-about.jpg" alt="Alisha Jaiswal" />
          </div>
          <div className="eyebrow">Your host</div>
          <h2>Alisha Jaiswal</h2>
          <p>
            Life coach helping overthinkers quiet their mind and take back their
            time, sleep, and relationships.
          </p>
          <a
            href="https://www.instagram.com/lifecoachalisha/"
            className="ig-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2.1.26 2.6.46.6.24 1.1.55 1.6 1.04.5.5.8 1 1.04 1.6.2.5.4 1.4.46 2.6.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.26 2.1-.46 2.6-.24.6-.55 1.1-1.04 1.6-.5.5-1 .8-1.6 1.04-.5.2-1.4.4-2.6.46-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2.1-.26-2.6-.46-.6-.24-1.1-.55-1.6-1.04-.5-.5-.8-1-1.04-1.6-.2-.5-.4-1.4-.46-2.6C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.26-2.1.46-2.6.24-.6.55-1.1 1.04-1.6.5-.5 1-.8 1.6-1.04.5-.2 1.4-.4 2.6-.46C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52 0-4.76.07-1 .05-1.5.2-1.86.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.36-.29.86-.34 1.86C3.05 8.65 3.05 9.02 3.05 12s0 3.35.07 4.6c.05 1 .2 1.5.34 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.36.14.86.29 1.86.34 1.24.07 1.6.07 4.76.07s3.52 0 4.76-.07c1-.05 1.5-.2 1.86-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.36.29-.86.34-1.86.07-1.24.07-1.6.07-4.6s0-3.35-.07-4.6c-.05-1-.2-1.5-.34-1.86-.18-.47-.4-.8-.75-1.15a3.1 3.1 0 0 0-1.15-.75c-.36-.14-.86-.29-1.86-.34C15.35 4 15 4 12 4zm0 3.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8zm5-2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
            </svg>
            @lifecoachalisha
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi">
        <div className="wrap">
          <div className="testi-head">
            <div className="eyebrow">Real stories</div>
            <h2>People who stopped overthinking</h2>
          </div>
        </div>
        <div className="testi-scroll">
          <div className="testi-card">
            <video
              src={attendeeVideos[0]?.src || "videos/IMG_0734_web.mp4"}
              poster={attendeeVideos[0]?.thumbnail || "videos/IMG_0734_web_poster.jpg"}
              controls
              playsInline
              preload="metadata"
            ></video>
          </div>
          <div className="testi-card">
            <video
              src={attendeeVideos[1]?.src || "videos/IMG_3306_web.mp4"}
              poster={attendeeVideos[1]?.thumbnail || "videos/IMG_3306_web_poster.jpg"}
              controls
              playsInline
              preload="metadata"
            ></video>
          </div>
          <div className="testi-card">
            <video
              src={attendeeVideos[2]?.src || "videos/IMG_3323_web.mp4"}
              poster={attendeeVideos[2]?.thumbnail || "videos/IMG_3323_web_poster.jpg"}
              controls
              playsInline
              preload="metadata"
            ></video>
          </div>
          <div className="testi-card">
            <video
              src={attendeeVideos[3]?.src || "videos/IMG_9365_web.mp4"}
              poster={attendeeVideos[3]?.thumbnail || "videos/IMG_9365_web_poster.jpg"}
              controls
              playsInline
              preload="metadata"
            ></video>
          </div>
        </div>
        <p className="testi-hint">← swipe to see more →</p>
      </section>

      {/* PRICING */}
      <section className="price" id="reserve">
        <div className="wrap">
          <div className="price-card">
            <div className="eyebrow">Reserve your seat</div>
            <h2>The Overthinking Reset</h2>

            <div className="price-row">
              <span className="price-old">₹1,709</span>
              <span className="price-new">₹499</span>
            </div>
            <span className="price-tag">Save ₹1,210 · Early bird</span>

            <div className="price-meta">
              <div>
                <div className="eyebrow">Date</div>
                <div className="val">27 Sept</div>
              </div>
              <div>
                <div className="eyebrow">Time</div>
                <div className="val">11–1 PM</div>
              </div>
              <div>
                <div className="eyebrow">Where</div>
                <div className="val">Online Zoom Session</div>
              </div>
            </div>

            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              Reserve Your Slot Now
            </a>
            <p className="price-fine">
              Limited seats · Venue shared after registration
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <div className="faq-head">
            <div className="eyebrow">Before you reserve</div>
            <h2>A few things people ask</h2>
          </div>
          <div className="faq-list">
            <details open>
              <summary>
                Who is this for? <span className="faq-plus">+</span>
              </summary>
              <p>
                Anyone stuck replaying conversations, decisions, or "what ifs"
                — and losing time, sleep, or peace in their relationships
                because of it.
              </p>
            </details>
            <details>
              <summary>
                Is this therapy? <span className="faq-plus">+</span>
              </summary>
              <p>
                No. It's a guided, practical workshop, not a clinical session
                — built to give you tools, not diagnose you.
              </p>
            </details>
            <details>
              <summary>
                Is this online or in-person? <span className="faq-plus">+</span>
              </summary>
              <p>
                Online, via Zoom. The exact link is shared with registered participants closer to the date.
              </p>
            </details>
            <details>
              <summary>
                Will I stop thinking altogether?{" "}
                <span className="faq-plus">+</span>
              </summary>
              <p>
                No. This isn't about switching your brain off — it's about
                switching off the loop that isn't serving you.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="wrap">
          <h2>Ready to quiet your mind?</h2>
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-gold"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            Reserve Your Slot Now
          </a>
        </div>
      </section>

      <footer>
        The Overthinking Reset — Online Zoom Session · 27 September 2026, 11:00 AM – 1:00 PM
      </footer>

      {/* STICKY MOBILE BAR */}
      <div className="sticky-bar">
        <div className="price-block">
          <span className="price-old">₹1,709</span>
          <span className="price-new">₹499</span>
        </div>
        <a
          href={RESERVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Reserve Slot
        </a>
      </div>

      {/* STYLES */}
      <style>{`
        .ow-new-page {
          --paper: #FBF7EE;
          --paper-2: #F3EAD6;
          --card: #FFFFFF;
          --ink: #241F1A;
          --gold: #AD7C33;
          --gold-deep: #8C632A;
          --gold-bright: #D9AE5F;
          --wine: #7A1220;
          --wine-light: #9C1B27;
          --muted: #8A8074;
          --muted-2: #5C554B;
          --line: rgba(36, 31, 26, 0.1);
          --line-gold: rgba(173, 124, 51, 0.28);
          font-family: 'Inter', sans-serif;
          background: var(--paper);
          color: var(--ink);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          padding-bottom: 78px;
          min-height: 100vh;
        }

        .ow-new-page img,
        .ow-new-page svg,
        .ow-new-page video {
          display: block;
          max-width: 100%;
        }

        .ow-new-page .eyebrow {
          font-family: 'Space Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 11px;
          font-weight: 700;
          color: var(--wine);
        }

        .ow-new-page h1,
        .ow-new-page h2,
        .ow-new-page h3 {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          line-height: 1.12;
          letter-spacing: -0.01em;
        }

        .ow-new-page .wrap {
          max-width: 880px;
          margin: 0 auto;
          padding: 0 22px;
        }

        .ow-new-page a {
          color: inherit;
          text-decoration: none;
        }

        .ow-new-page .center {
          text-align: center;
        }

        /* ---------- NAV ---------- */
        .ow-new-page header.nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(251, 247, 238, 0.9);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line);
        }

        .ow-new-page .nav-inner {
          max-width: 1040px;
          margin: 0 auto;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .ow-new-page .nav-brand {
          font-family: 'Fraunces', serif;
          font-size: 16px;
          font-weight: 500;
          color: var(--ink);
        }

        .ow-new-page .nav-brand span {
          color: var(--wine);
          font-style: italic;
        }

        .ow-new-page .nav-cta {
          background: var(--wine);
          color: #FBF1EA;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 10px 16px;
          border-radius: 100px;
          white-space: nowrap;
          transition: transform 0.15s ease;
        }

        .ow-new-page .nav-cta:active {
          transform: scale(0.95);
        }

        /* ---------- BUTTONS ---------- */
        .ow-new-page .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          background: linear-gradient(180deg, var(--wine-light), var(--wine));
          color: #FBEEE9 !important;
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 19px 38px;
          border-radius: 100px;
          border: 1px solid rgba(217, 174, 95, 0.55);
          box-shadow: 0 14px 30px -10px rgba(122, 18, 32, 0.5);
          transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
          cursor: pointer;
          animation: owGlow 2.6s ease-in-out infinite;
          min-height: 56px;
          width: 100%;
          max-width: 340px;
        }

        @keyframes owGlow {
          0%, 100% {
            box-shadow: 0 14px 30px -10px rgba(122, 18, 32, 0.5);
          }
          50% {
            box-shadow: 0 14px 38px -6px rgba(122, 18, 32, 0.72), 0 0 0 5px rgba(217, 174, 95, 0.12);
          }
        }

        .ow-new-page .btn-primary:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
        }

        .ow-new-page .btn-primary:active {
          transform: scale(0.97);
          filter: brightness(0.98);
        }

        .ow-new-page .btn-primary svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
        }

        .ow-new-page .btn-gold {
          background: linear-gradient(180deg, var(--gold-bright), var(--gold));
          color: #2B1D08 !important;
          border-color: rgba(122, 18, 32, 0.25);
          box-shadow: 0 14px 30px -10px rgba(140, 99, 42, 0.5);
          animation: owGlowGold 2.6s ease-in-out infinite;
        }

        @keyframes owGlowGold {
          0%, 100% {
            box-shadow: 0 14px 30px -10px rgba(140, 99, 42, 0.5);
          }
          50% {
            box-shadow: 0 14px 38px -6px rgba(140, 99, 42, 0.7), 0 0 0 5px rgba(122, 18, 32, 0.1);
          }
        }

        /* ---------- HERO ---------- */
        .ow-new-page .hero {
          background: radial-gradient(ellipse 700px 420px at 50% 0%, rgba(217, 174, 95, 0.22), transparent 65%), var(--paper);
          padding: 56px 0 52px;
          border-bottom: 1px solid var(--line);
        }

        .ow-new-page .hero-photo {
          width: 112px;
          height: 112px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 22px;
          border: 3px solid var(--card);
          box-shadow: 0 8px 24px rgba(36, 31, 26, 0.18), 0 0 0 1px var(--line-gold);
        }

        .ow-new-page .hero-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ow-new-page .hero .eyebrow {
          margin-bottom: 16px;
          justify-content: center;
          display: flex;
        }

        .ow-new-page .hero h1 {
          font-size: clamp(26px, 6.2vw, 40px);
          max-width: 21ch;
          margin: 0 auto;
          color: var(--ink);
        }

        .ow-new-page .hero h1 em {
          font-style: italic;
          color: var(--wine);
        }

        .ow-new-page .hero .sub {
          margin: 18px auto 0;
          font-size: 15.5px;
          line-height: 1.55;
          color: var(--muted-2);
          max-width: 36ch;
        }

        .ow-new-page .hero-cta-row {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .ow-new-page .hero-note {
          font-size: 11.5px;
          color: var(--muted);
          font-family: 'Space Mono', monospace;
          letter-spacing: 0.02em;
        }

        .ow-new-page .badge {
          display: inline-block;
          background: rgba(122, 18, 32, 0.08);
          border: 1px solid rgba(122, 18, 32, 0.25);
          color: var(--wine);
          font-family: 'Space Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
        }

        .ow-new-page .meta-strip {
          margin: 36px auto 0;
          display: flex;
          justify-content: center;
          max-width: 440px;
          border-top: 1px solid var(--line);
        }

        .ow-new-page .meta-item {
          flex: 1;
          padding: 16px 10px 0;
          text-align: center;
          border-right: 1px solid var(--line);
        }

        .ow-new-page .meta-item:last-child {
          border-right: none;
        }

        .ow-new-page .meta-item .eyebrow {
          color: var(--muted);
          margin-bottom: 6px;
          justify-content: center;
          display: flex;
        }

        .ow-new-page .meta-item .val {
          font-family: 'Fraunces', serif;
          font-size: 16px;
          color: var(--ink);
        }

        /* checklist chips */
        .ow-new-page .chips {
          margin: 32px auto 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          max-width: 480px;
        }

        .ow-new-page .chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 100px;
          padding: 8px 14px;
          font-size: 12.5px;
          color: var(--ink);
          opacity: 0;
          animation: owRiseIn 0.5s ease forwards;
        }

        .ow-new-page .chip:nth-child(2) { animation-delay: 0.12s; }
        .ow-new-page .chip:nth-child(3) { animation-delay: 0.32s; }
        .ow-new-page .chip:nth-child(4) { animation-delay: 0.52s; }
        .ow-new-page .chip:nth-child(5) { animation-delay: 0.9s; }

        @keyframes owRiseIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ow-new-page .chip .dot {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: var(--wine);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ow-new-page .chip .dot svg {
          width: 7px;
          height: 7px;
        }

        .ow-new-page .chip.pending {
          border-style: dashed;
          border-color: var(--gold-deep);
          color: var(--gold-deep);
          font-style: italic;
        }

        .ow-new-page .chip.pending .dot {
          background: transparent;
          border: 1.5px dashed var(--gold-deep);
          animation: owPulseBox 1.8s ease-in-out infinite;
        }

        @keyframes owPulseBox {
          0%, 100% {
            border-color: var(--gold-deep);
          }
          50% {
            border-color: var(--gold-bright);
          }
        }

        /* ---------- REFRAME ---------- */
        .ow-new-page .reframe {
          background: var(--paper-2);
          padding: 56px 0;
        }

        .ow-new-page .reframe-lines {
          max-width: 420px;
          margin: 0 auto;
        }

        .ow-new-page .reframe-lines p {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: clamp(17px, 4.4vw, 21px);
          color: var(--muted-2);
          padding: 10px 0;
        }

        .ow-new-page .reframe-lines p:last-child {
          color: var(--wine);
          font-weight: 500;
          font-style: normal;
        }

        .ow-new-page .reframe-quote {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: clamp(20px, 5vw, 27px);
          line-height: 1.4;
          max-width: 22ch;
          margin: 0 auto 28px;
          color: var(--ink);
        }

        .ow-new-page .reframe-quote span {
          color: var(--wine);
        }

        /* ---------- HOST INTRO ---------- */
        .ow-new-page .host-line {
          background: var(--paper);
          padding: 44px 0;
          text-align: center;
        }

        .ow-new-page .host-line p {
          font-size: 15px;
          line-height: 1.6;
          color: var(--muted-2);
          max-width: 38ch;
          margin: 0 auto;
        }

        .ow-new-page .host-line strong {
          color: var(--ink);
          font-weight: 600;
        }

        /* ---------- EXPLORE ---------- */
        .ow-new-page .explore {
          background: var(--ink);
          color: var(--paper);
          padding: 60px 0;
        }

        .ow-new-page .explore .eyebrow {
          color: var(--gold-bright);
          margin-bottom: 16px;
          justify-content: center;
          display: flex;
        }

        .ow-new-page .explore-head h2 {
          font-size: clamp(24px, 6vw, 32px);
          color: var(--paper);
          max-width: 16ch;
          margin: 0 auto;
        }

        .ow-new-page .explore-list {
          margin: 36px auto 0;
          max-width: 600px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .ow-new-page .explore-item {
          padding: 20px 4px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          text-align: left;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .ow-new-page .explore-item .mark {
          color: var(--gold-bright);
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 14px;
          flex-shrink: 0;
          padding-top: 2px;
        }

        .ow-new-page .explore-item h3 {
          font-family: 'Fraunces', serif;
          font-weight: 400;
          font-size: clamp(16px, 4vw, 19px);
          color: var(--paper);
          line-height: 1.35;
        }

        .ow-new-page .explore-foot {
          margin-top: 36px;
          font-size: 13.5px;
          color: rgba(251, 247, 238, 0.6);
          max-width: 36ch;
          margin-left: auto;
          margin-right: auto;
        }

        /* ---------- ABOUT ---------- */
        .ow-new-page .about {
          background: var(--paper-2);
          padding: 60px 0;
          text-align: center;
        }

        .ow-new-page .about-photo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 20px;
          border: 3px solid var(--card);
          box-shadow: 0 8px 24px rgba(36, 31, 26, 0.16);
        }

        .ow-new-page .about-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ow-new-page .about .eyebrow {
          justify-content: center;
          display: flex;
          margin-bottom: 14px;
        }

        .ow-new-page .about h2 {
          font-size: clamp(22px, 5.5vw, 28px);
          margin-bottom: 12px;
        }

        .ow-new-page .about p {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--muted-2);
          max-width: 40ch;
          margin: 0 auto 20px;
        }

        .ow-new-page .ig-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 1px solid var(--line-gold);
          background: var(--card);
          padding: 9px 16px;
          border-radius: 100px;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--wine);
        }

        .ow-new-page .ig-link svg {
          width: 14px;
          height: 14px;
        }

        /* ---------- TESTIMONIALS ---------- */
        .ow-new-page .testi {
          background: var(--paper);
          padding: 60px 0;
        }

        .ow-new-page .testi .eyebrow {
          margin-bottom: 14px;
          justify-content: center;
          display: flex;
        }

        .ow-new-page .testi-head h2 {
          font-size: clamp(22px, 5.5vw, 28px);
          max-width: 16ch;
          margin: 0 auto;
          text-align: center;
        }

        .ow-new-page .testi-scroll {
          margin-top: 32px;
          display: flex;
          justify-content: center;
          gap: 14px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding: 4px 22px 18px;
          scrollbar-width: none;
          max-width: 1040px;
          margin-left: auto;
          margin-right: auto;
        }

        .ow-new-page .testi-scroll::-webkit-scrollbar {
          display: none;
        }

        .ow-new-page .testi-card {
          flex: 0 0 auto;
          width: 200px;
          scroll-snap-align: center;
          border-radius: 16px;
          overflow: hidden;
          background: var(--card);
          border: 1px solid var(--line);
          box-shadow: 0 10px 26px -14px rgba(36, 31, 26, 0.25);
        }

        .ow-new-page .testi-card video {
          width: 200px;
          height: 355px;
          object-fit: cover;
          background: #000;
          display: block;
        }

        .ow-new-page .testi-hint {
          text-align: center;
          font-size: 11px;
          color: var(--muted);
          font-family: 'Space Mono', monospace;
          letter-spacing: 0.04em;
          margin-top: 4px;
        }

        /* ---------- PRICING ---------- */
        .ow-new-page .price {
          background: var(--ink);
          color: var(--paper);
          padding: 64px 0 68px;
          position: relative;
          overflow: hidden;
        }

        .ow-new-page .price::before {
          content: "";
          position: absolute;
          top: -160px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(217, 174, 95, 0.2), transparent 65%);
          pointer-events: none;
        }

        .ow-new-page .price-card {
          max-width: 420px;
          margin: 0 auto;
          background: #2E2820;
          border: 1px solid rgba(217, 174, 95, 0.3);
          border-radius: 22px;
          padding: 38px 26px;
          text-align: center;
          position: relative;
        }

        .ow-new-page .price-card .eyebrow {
          color: var(--gold-bright);
          margin-bottom: 14px;
          justify-content: center;
          display: flex;
        }

        .ow-new-page .price-card h2 {
          font-size: clamp(21px, 5.5vw, 26px);
          color: var(--paper);
        }

        .ow-new-page .price-row {
          margin: 26px 0 8px;
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 12px;
        }

        .ow-new-page .price-old {
          font-family: 'Space Mono', monospace;
          font-size: 16px;
          color: rgba(251, 247, 238, 0.45);
          text-decoration: line-through;
        }

        .ow-new-page .price-new {
          font-family: 'Fraunces', serif;
          font-size: 44px;
          color: var(--gold-bright);
        }

        .ow-new-page .price-tag {
          display: inline-block;
          background: rgba(122, 18, 32, 0.35);
          color: #F3B7A8;
          border: 1px solid rgba(122, 18, 32, 0.5);
          font-family: 'Space Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
        }

        .ow-new-page .price-meta {
          margin: 28px 0 28px;
          display: flex;
          justify-content: center;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 22px;
        }

        .ow-new-page .price-meta div {
          flex: 1;
          text-align: center;
        }

        .ow-new-page .price-meta .eyebrow {
          color: rgba(251, 247, 238, 0.5);
          margin-bottom: 6px;
          justify-content: center;
          display: flex;
        }

        .ow-new-page .price-meta .val {
          font-family: 'Fraunces', serif;
          font-size: 15px;
          color: var(--paper);
        }

        .ow-new-page .price-card .btn-primary {
          max-width: 100%;
        }

        .ow-new-page .price-fine {
          margin-top: 16px;
          font-size: 11px;
          color: rgba(251, 247, 238, 0.45);
          font-family: 'Space Mono', monospace;
        }

        /* ---------- FAQ ---------- */
        .ow-new-page .faq {
          background: var(--paper);
          padding: 60px 0;
        }

        .ow-new-page .faq .eyebrow {
          justify-content: center;
          display: flex;
          margin-bottom: 14px;
        }

        .ow-new-page .faq-head h2 {
          font-size: clamp(22px, 5.5vw, 26px);
          text-align: center;
        }

        .ow-new-page .faq-list {
          max-width: 560px;
          margin: 32px auto 0;
        }

        .ow-new-page details {
          border-bottom: 1px solid var(--line);
          padding: 18px 2px;
        }

        .ow-new-page details summary {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          font-family: 'Fraunces', serif;
          font-size: 16px;
          color: var(--ink);
          text-align: left;
        }

        .ow-new-page details summary::-webkit-details-marker {
          display: none;
        }

        .ow-new-page .faq-plus {
          font-family: 'Space Mono', monospace;
          font-size: 18px;
          color: var(--wine);
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .ow-new-page details[open] .faq-plus {
          transform: rotate(45deg);
        }

        .ow-new-page details p {
          margin-top: 12px;
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--muted-2);
          text-align: left;
        }

        /* ---------- FINAL CTA ---------- */
        .ow-new-page .final-cta {
          background: linear-gradient(180deg, var(--wine), #4B0A12);
          color: #FBEEE9;
          padding: 56px 0;
          text-align: center;
        }

        .ow-new-page .final-cta h2 {
          font-size: clamp(22px, 6vw, 30px);
          color: #FBEEE9;
          margin-bottom: 26px;
          max-width: 15ch;
          margin-left: auto;
          margin-right: auto;
        }

        .ow-new-page .final-cta .btn-gold {
          margin: 0 auto;
        }

        .ow-new-page footer {
          background: var(--ink);
          color: rgba(251, 247, 238, 0.55);
          padding: 26px 0;
          text-align: center;
          font-size: 11px;
          font-family: 'Space Mono', monospace;
          letter-spacing: 0.02em;
        }

        /* sticky mobile bar */
        .ow-new-page .sticky-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 60;
          background: var(--ink);
          border-top: 1px solid rgba(217, 174, 95, 0.25);
          padding: 10px 16px calc(10px + env(safe-area-inset-bottom));
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .ow-new-page .sticky-bar .price-block {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .ow-new-page .sticky-bar .price-new {
          font-size: 19px;
          color: var(--gold-bright);
        }

        .ow-new-page .sticky-bar .price-old {
          font-size: 12px;
        }

        .ow-new-page .sticky-bar .btn-primary {
          padding: 13px 22px;
          font-size: 11.5px;
          width: auto;
          max-width: none;
          animation: none;
        }

        @media (min-width: 640px) {
          .ow-new-page .hero {
            padding: 80px 0 70px;
          }
          .ow-new-page .btn-primary {
            width: auto;
          }
          .ow-new-page .explore-item {
            text-align: center;
            flex-direction: column;
            align-items: center;
          }
          .ow-new-page .testi-card,
          .ow-new-page .testi-card video {
            width: 230px;
          }
          .ow-new-page .testi-card video {
            height: 408px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ow-new-page .chip {
            animation: none;
            opacity: 1;
          }
          .ow-new-page .btn-primary,
          .ow-new-page .btn-gold {
            animation: none;
          }
          .ow-new-page .chip.pending .dot {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
