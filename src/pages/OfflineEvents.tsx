import { useState } from "react";
import { FaLock, FaInstagram } from "react-icons/fa";
import VideoThumbnail from "../components/VideoThumbnail";
import { videos } from "../utils";

const RESERVE_URL = "https://superprofile.bio/e/LwKEHaNi";

export default function OfflineEvents() {
  // Exact 4 female testimonial videos matching the user request (excluding male person):
  // 1. Shubhra Shahare (Netherlands)
  // 2. Maria Dhamangaon (Yellow top)
  // 3. Pepper Black (San Francisco - USA)
  // 4. Sarah Kirmani (San Francisco)
  const femaleTitles = ["shubhra", "maria", "pepper", "sarah"];
  const attendeeVideos = femaleTitles
    .map((t) => videos.find((v) => v.title.toLowerCase().includes(t)))
    .filter(Boolean) as typeof videos;

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is this workshop for?",
      answer:
        "This experience is designed for working professionals, entrepreneurs, executives, and high achievers who feel a disconnect between their external accomplishments and inner peace or satisfaction.",
    },
    {
      question: "What should I bring to the workshop?",
      answer:
        "Just bring an open mind and a willingness to reflect. We provide all workshop materials, workbooks, and writing supplies.",
    },
    {
      question: "Is this an individual coaching session or group workshop?",
      answer:
        "This is an interactive offline group workshop with curated activities, guided self-reflection, and group discussions facilitated directly by Alisha Jaiswal.",
    },
    {
      question: "Can I transfer my slot to a friend if I can't attend?",
      answer:
        "Yes! If you are unable to attend, you can transfer your slot to a colleague or friend by informing our support team at least 24 hours prior to the event.",
    },
  ];

  return (
    <div id="content" className="site-content offline-events-page">
      {/* SECTION 1: REDESIGNED LUXURY SPLIT HERO SECTION */}
      <section className="oe-hero-split">
        <div className="oe-container">
          <div className="oe-hero-split-grid">
            {/* LEFT COLUMN: HEADLINE & CONTENT */}
            <div className="oe-hero-left">
              <div className="oe-live-badge">
                <span className="oe-pulse-dot" />
                <span>AN OFFLINE WORKSHOP BY ALISHA JAISWAL</span>
              </div>

              <h1 className="oe-hero-split-title">
                I Achieved Everything. <br />
                <span className="oe-script oe-script-gold oe-script-hero-split">
                  So Why Does Life Still Feel Empty?
                </span>
              </h1>

              <p className="oe-hero-split-subtitle">
                A 2-hour offline experience for high achievers who have checked all the boxes,
                but still feel an underlying empty void inside.
              </p>

              {/* Event Meta Specifications */}
              <div className="oe-meta-glass-bar">
                <div className="oe-meta-glass-item">
                  <span className="oe-meta-glass-lbl">DATE</span>
                  <span className="oe-meta-glass-val">27 Sept</span>
                </div>
                <div className="oe-meta-glass-sep" />
                <div className="oe-meta-glass-item">
                  <span className="oe-meta-glass-lbl">TIME</span>
                  <span className="oe-meta-glass-val">11–1 PM</span>
                </div>
                <div className="oe-meta-glass-sep" />
                <div className="oe-meta-glass-item">
                  <span className="oe-meta-glass-lbl">WHERE</span>
                  <span className="oe-meta-glass-val">Nagpur</span>
                </div>
              </div>

              {/* CTA & Limited Tag */}
              <div className="oe-hero-action-row">
                <a
                  href={RESERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="oe-gold-cta-btn"
                >
                  RESERVE YOUR SLOT NOW
                </a>
                <span className="oe-limited-tag-gold">✦ LIMITED SLOTS AVAILABLE</span>
              </div>

              {/* Target Audience Pills */}
              <div className="oe-tags-container oe-hero-tags">
                <span className="oe-tag-pill oe-pill-dark">Executives</span>
                <span className="oe-tag-pill oe-pill-dark">Founders</span>
                <span className="oe-tag-pill oe-pill-dark">Professionals</span>
                <span className="oe-tag-pill oe-pill-dark">High Performers</span>
                <span className="oe-tag-pill oe-pill-gold">100% Interactive</span>
              </div>
            </div>

            {/* RIGHT COLUMN: FEATURED PORTRAIT CARD */}
            <div className="oe-hero-right">
              <div className="oe-portrait-card">
                <div className="oe-portrait-frame">
                  <img
                    src="images/offline_events/alisha-hero.jpg"
                    alt="Alisha Jaiswal - Life & Mindset Coach"
                    className="oe-portrait-img"
                  />
                  <div className="oe-portrait-overlay" />
                </div>
                {/* Floating Badge */}
                <div className="oe-floating-badge">
                  <span className="oe-floating-badge-icon">✦</span>
                  <div>
                    <strong>Alisha Jaiswal</strong>
                    <span>Certified Life & Mindset Coach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: RELATABLE HOOK */}
      <section className="oe-hook-section">
        <div className="oe-container oe-narrow">
          <h2 className="oe-section-heading">
            <span className="oe-script oe-script-gold">My life is good...</span> <br />
            so why don't I feel <span className="oe-gold">good?</span>
          </h2>

          <div className="oe-hook-list">
            <div className="oe-hook-item">
              <span className="oe-bullet-star">✓</span>
              <p>You've built your career, achieved your goals, and earned respect.</p>
            </div>
            <div className="oe-hook-item">
              <span className="oe-bullet-star">✓</span>
              <p>You've done everything you were told would make you happy and peaceful.</p>
            </div>
            <div className="oe-hook-item">
              <span className="oe-bullet-star">✓</span>
              <p>Yet, there's a constant lingering question: <strong>"Is this really all there is?"</strong></p>
            </div>
          </div>

          <p className="oe-hook-quote">
            Maybe you aren't doing anything wrong... <br />
            <span className="oe-script oe-script-gold">Maybe you're just climbing the wrong ladder.</span>
          </p>
        </div>
      </section>

      {/* SECTION 3: WHAT WE'LL EXPLORE (BLACK & GOLD ELEGANCE) */}
      <section className="oe-explore-section">
        <div className="oe-container oe-narrow">
          <span className="oe-section-sub oe-gold" style={{ fontWeight: "normal" }}>WHAT WE WILL COVER</span>
          <h2 className="oe-section-heading oe-heading-white">
            <span style={{ color: "#e0e0e0" }}>We'll</span>{" "}
            <span className="oe-script oe-script-gold">explore</span>
          </h2>

          <div className="oe-explore-cards">
            <div className="oe-explore-card">
              <span className="oe-card-num oe-gold">01</span>
              <p>Why achieving your goals doesn't always translate into internal peace & fulfillment</p>
            </div>
            <div className="oe-explore-card">
              <span className="oe-card-num oe-gold">02</span>
              <p>The crucial difference between career success and a fulfilled, calm mind</p>
            </div>
            <div className="oe-explore-card">
              <span className="oe-card-num oe-gold">03</span>
              <p>What is actually driving the subtle feeling of dissatisfaction beneath the surface</p>
            </div>
            <div className="oe-explore-card">
              <span className="oe-card-num oe-gold">04</span>
              <p>The silent pressure of constantly proving your worth to everyone around you</p>
            </div>
            <div className="oe-explore-card">
              <span className="oe-card-num oe-gold">05</span>
              <p>Why an outwardly "good life" can still feel emotionally disconnected</p>
            </div>
            <div className="oe-explore-card">
              <span className="oe-card-num oe-gold">06</span>
              <p>How to pinpoint and realign with what your inner self truly, deeply needs</p>
            </div>
          </div>

          <div className="oe-banner-box">
            <p>
              "This isn't a motivational lecture or a temporary hype session.
              It is a structured, safe space designed for self-realization and lasting depth."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: REAL STORIES - TESTIMONIALS */}
      <section className="oe-stories-section">
        <div className="oe-container">
          <div className="oe-header-center">
            <h2 className="oe-section-heading">
              <span className="oe-script oe-script-gold oe-script-lg">Real Stories</span> <br />
              Hear it from <span className="oe-gold">past attendees</span>
            </h2>
          </div>

          <div className="oe-grid-4">
            {attendeeVideos.map((video) => (
              <div key={video.id} className="oe-story-card">
                <div className="oe-story-thumb">
                  <VideoThumbnail
                    thumbnail={video.thumbnail}
                    videoUrl={video.src}
                    title={video.title}
                  />
                </div>
                <div className="oe-story-meta">
                  <h4 className="oe-story-name">{video.title}</h4>
                  {video.profession && (
                    <span className="oe-story-prof">{video.profession}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="oe-center-cta">
            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="oe-black-btn"
            >
              RESERVE YOUR SLOT NOW
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: ABOUT THE HOST */}
      <section className="oe-host-section">
        <div className="oe-container oe-narrow">
          <div className="oe-host-box">
            <div className="oe-host-portrait">
              <img
                src="images/offline_events/alisha-about.jpg"
                alt="Alisha Jaiswal"
                className="oe-host-img"
              />
            </div>
            <span className="oe-host-sub-badge">YOUR HOST & COACH</span>
            <h2 className="oe-host-name">
              Alisha Jaiswal <br />
              <span className="oe-script oe-script-gold">Life & Mindset Coach</span>
            </h2>
            <p className="oe-host-text">
              Alisha Jaiswal is a certified Life & Mindset Coach who works with high performers,
              executives, and leaders. She helps individuals cut through the noise of external expectations,
              disentangle burnout, and navigate the journey from superficial success to deep personal fulfillment.
            </p>
            <div className="oe-host-action-btns">
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="oe-black-btn"
              >
                JOIN THE WORKSHOP
              </a>
              <a
                href="https://www.instagram.com/lifecoachalisha?igsh=dzhoaHM5dnZhcXRn"
                target="_blank"
                rel="noopener noreferrer"
                className="oe-insta-btn"
              >
                <FaInstagram className="oe-insta-icon" />
                FOLLOW ON INSTAGRAM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TICKET PRICING CARD */}
      <section className="oe-ticket-section">
        <div className="oe-container oe-narrow">
          <div className="oe-ticket-box">
            <span className="oe-ticket-sub oe-gold">REGISTER TODAY FOR ONLY</span>
            <h3 className="oe-ticket-heading">
              <span className="oe-script oe-script-gold">Beyond the Finish Line</span>
            </h3>

            <div className="oe-price-row">
              <span className="oe-currency oe-gold">₹</span>
              <span className="oe-amount oe-gold">1,100</span>
            </div>

            <div className="oe-ticket-info-grid">
              <div className="oe-info-item">
                <span className="oe-info-lbl">DATE</span>
                <span className="oe-info-val">27 Sept</span>
              </div>
              <div className="oe-info-item">
                <span className="oe-info-lbl">TIME</span>
                <span className="oe-info-val">11–1 PM</span>
              </div>
              <div className="oe-info-item">
                <span className="oe-info-lbl">WHERE</span>
                <span className="oe-info-val">Nagpur</span>
              </div>
            </div>

            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="oe-black-btn oe-btn-full"
            >
              RESERVE YOUR SLOT NOW
            </a>

            <span className="oe-guarantee-note">
              <FaLock style={{ display: "inline-block", marginRight: "6px", verticalAlign: "-1px", fontSize: "0.85em", color: "rgb(197, 168, 128)" }} />
              Instant Confirmation via Superprofile • Limited Seats
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQS */}
      <section className="oe-faq-section">
        <div className="oe-container oe-narrow">
          <div className="oe-header-center">
            <h2 className="oe-section-heading">
              <span className="oe-script oe-script-gold">Got Questions?</span> <br />
              More things <span className="oe-gold">people ask</span>
            </h2>
          </div>

          <div className="oe-faq-container">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`oe-faq-card ${openFaq === idx ? "is-open" : ""}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="oe-faq-q">
                  <span>{faq.question}</span>
                  <span className="oe-faq-toggle">{openFaq === idx ? "−" : "+"}</span>
                </div>
                {openFaq === idx && (
                  <div className="oe-faq-a">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="oe-faq-bottom">
            <p>Have specific questions regarding the venue or group bookings?</p>
            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="oe-outline-btn"
            >
              RESERVE SLOT & CONTACT
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL BANNER (BLACK & GOLD) */}
      <section className="oe-final-banner">
        <div className="oe-container">
          <h2 className="oe-final-heading">
            <span className="oe-script oe-script-gold">Don't let another year pass</span> <br />
            <span style={{ color: "#e0e0e0" }}>feeling</span> <span className="oe-gold">missing.</span>
          </h2>
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="oe-black-btn oe-btn-light"
          >
            RESERVE YOUR SLOT NOW
          </a>
        </div>
      </section>

      {/* STICKY BOTTOM FOOTER BAR */}
      <div className="oe-sticky-footer">
        <div className="oe-sticky-details">
          <span className="oe-sticky-name">Beyond the Finish Line</span>
          <span className="oe-sticky-cost oe-gold">₹ 1,100</span>
        </div>
        <a
          href={RESERVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="oe-black-btn oe-sticky-action"
        >
          RESERVE SLOT
        </a>
      </div>

      {/* STYLING WITH RGB(197, 168, 128) GOLD ACCENTS FOR HEADINGS & SCRIPT */}
      <style>{`
        .offline-events-page {
          background-color: #fcfaf7;
          color: #222222;
          font-family: 'Avenir Thin', 'Avenir', sans-serif;
          padding-bottom: 70px;
        }

        .oe-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .oe-narrow {
          max-width: 820px;
        }

        /* Gold Accent Color Class */
        .oe-gold {
          color: rgb(197, 168, 128) !important;
        }

        /* Northwell Script Font Styling */
        .oe-script {
          font-family: 'Northwell', cursive, sans-serif !important;
          font-weight: 400;
          font-style: normal;
          color: #000000;
          text-transform: none;
          display: inline-block;
          font-size: 1.65em;
          line-height: 1.25;
          letter-spacing: 0px;
          padding-top: 10px;
          margin-top: 4px;
        }

        .oe-script-gold {
          font-family: 'Northwell', cursive, sans-serif !important;
          color: rgb(197, 168, 128) !important;
        }

        .oe-script-hero {
          font-size: 1.45em;
          padding-top: 12px;
        }

        .oe-script-lg {
          font-size: 1.85em;
          padding-top: 8px;
        }

        /* Avenir Font Subheadings, Badges & Labels (font-weight normal) */
        .oe-sub-badge,
        .oe-section-sub,
        .oe-ticket-sub,
        .oe-meta-lbl,
        .oe-info-lbl,
        .oe-story-name,
        .oe-faq-q,
        .oe-meta-val,
        .oe-info-val,
        .oe-limited-tag,
        .oe-tag-pill {
          font-family: 'Avenir Thin', 'Avenir-Thin', 'Avenir', sans-serif !important;
          font-weight: normal !important;
          letter-spacing: 2px;
        }

        .oe-sub-badge {
          font-size: 0.75rem;
          margin-bottom: 18px;
          text-transform: uppercase;
        }

        .oe-section-sub {
          font-size: 0.75rem;
          display: block;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        /* Paragraph styling matching About page (Avenir Thin, font-weight normal, 18px, line-height 27px) */
        p,
        .oe-hero-subtitle,
        .oe-hook-quote,
        .oe-host-text,
        .oe-faq-a p,
        .oe-banner-box p,
        .oe-hook-item p,
        .oe-explore-card p {
          font-family: 'Avenir Thin', 'Avenir', sans-serif !important;
          font-size: 18px !important;
          font-weight: normal !important;
          line-height: 27px !important;
          letter-spacing: 0.3px !important;
          word-spacing: 1px !important;
          color: #000000;
        }

        .oe-hero-subtitle {
          max-width: 720px;
          margin-bottom: 35px;
        }

        .oe-hook-item p {
          margin: 0;
        }

        .oe-explore-card p {
          margin: 0;
          color: #e0e0e0;
        }

        .oe-host-text {
          margin-bottom: 30px;
          max-width: 680px;
        }

        /* Headings with font-weight: normal */
        .oe-hero-title {
          font-size: clamp(2.4rem, 5vw, 4rem);
          line-height: 1.4;
          color: #000000;
          margin-bottom: 24px;
          font-weight: normal;
        }

        .oe-section-heading {
          font-size: clamp(2rem, 4vw, 3.2rem);
          color: #000000;
          margin-bottom: 35px;
          font-weight: normal;
          line-height: 1.4;
        }

        .oe-heading-white {
          color: #ffffff;
        }

        .oe-host-name {
          font-size: clamp(2rem, 4vw, 3rem);
          color: #000000;
          margin-bottom: 18px;
          font-weight: normal;
          line-height: 1.4;
        }

        .oe-ticket-heading {
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          color: #ffffff;
          margin-bottom: 20px;
          font-weight: normal;
          line-height: 1.35;
        }

        .oe-final-heading {
          font-size: clamp(2rem, 4.5vw, 3.4rem);
          color: #ffffff;
          margin-bottom: 30px;
          line-height: 1.45;
          font-weight: normal;
        }

        /* Buttons */
        .oe-black-btn {
          display: inline-block;
          background: #000000;
          color: #ffffff !important;
          padding: 16px 38px;
          border-radius: 2px;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none !important;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
          text-align: center;
          border: 1px solid #000000;
        }

        .oe-black-btn:hover {
          background: #2c2c2c;
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .oe-outline-btn {
          display: inline-block;
          background: transparent;
          color: #000000 !important;
          border: 2px solid #000000;
          padding: 14px 32px;
          border-radius: 2px;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none !important;
          transition: all 0.3s ease;
          text-align: center;
        }

        .oe-outline-btn:hover {
          background: #000000;
          color: #ffffff !important;
        }

        .oe-btn-full {
          width: 100%;
          max-width: 440px;
          padding: 18px;
          font-size: 0.9rem;
        }

        .oe-btn-light {
          background: #ffffff;
          color: #000000 !important;
          border-color: #ffffff;
        }

        .oe-btn-light:hover {
          background: #f5f3f0;
          color: #000000 !important;
        }

        /* SECTION 1: REDESIGNED LUXURY SPLIT HERO SECTION (FROSTED GLASS BACKGROUND) */
        .oe-hero-split {
          position: relative;
          background: radial-gradient(circle at 80% 30%, rgba(197, 168, 128, 0.18) 0%, transparent 55%), linear-gradient(135deg, rgba(252, 250, 247, 0.88) 0%, rgba(247, 244, 239, 0.92) 100%), url('images/moments/hero.webp');
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          color: #000000;
          padding: 85px 0 75px;
          border-bottom: 3px solid rgb(197, 168, 128);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
          overflow: hidden;
        }

        .oe-hero-split-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 50px;
          align-items: center;
        }

        .oe-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        /* Live Badge with Glassmorphism & Pulse Dot */
        .oe-live-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(239, 232, 223, 0.75) !important;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(197, 168, 128, 0.5) !important;
          padding: 8px 18px;
          border-radius: 30px;
          font-size: 0.75rem;
          color: #000000;
          letter-spacing: 2px;
          font-weight: normal;
          margin-bottom: 24px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
        }

        .oe-pulse-dot {
          width: 8px;
          height: 8px;
          background-color: rgb(197, 168, 128);
          border-radius: 50%;
          box-shadow: 0 0 0 rgba(197, 168, 128, 0.6);
          animation: oePulse 2s infinite;
        }

        @keyframes oePulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(197, 168, 128, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 8px rgba(197, 168, 128, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(197, 168, 128, 0);
          }
        }

        .oe-hero-split-title {
          font-size: clamp(2.3rem, 4.5vw, 3.6rem);
          line-height: 1.35;
          color: #000000;
          margin-bottom: 20px;
          font-weight: normal;
        }

        .oe-script-hero-split {
          font-size: 1.4em;
          padding-top: 10px;
        }

        .oe-hero-split-subtitle {
          font-family: 'Avenir Thin', 'Avenir', sans-serif !important;
          font-size: 18px !important;
          font-weight: normal !important;
          line-height: 27px !important;
          letter-spacing: 0.3px !important;
          word-spacing: 1px !important;
          color: #000000 !important;
          margin-bottom: 30px;
          max-width: 620px;
        }

        /* High-Impact Standout Event Meta Specs Bar */
        .oe-meta-glass-bar {
          display: flex;
          align-items: center;
          gap: 36px;
          background: #ffffff !important;
          border: 2px solid rgb(197, 168, 128) !important;
          padding: 20px 38px;
          border-radius: 8px;
          margin-bottom: 32px;
          width: 100%;
          max-width: 580px;
          box-shadow: 0 10px 30px rgba(197, 168, 128, 0.18), 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .oe-meta-glass-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .oe-meta-glass-lbl {
          font-size: 0.72rem;
          color: rgb(197, 168, 128);
          letter-spacing: 2px;
          font-weight: 600;
        }

        .oe-meta-glass-val {
          font-size: 1.2rem;
          color: #000000;
          font-weight: 500;
        }

        .oe-meta-glass-sep {
          width: 1px;
          height: 36px;
          background-color: rgba(197, 168, 128, 0.35);
        }

        /* CTA Row */
        .oe-hero-action-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .oe-gold-cta-btn {
          display: inline-block;
          background: #000000;
          color: #ffffff !important;
          padding: 16px 38px;
          border-radius: 2px;
          font-family: 'Avenir Thin', 'Avenir', sans-serif !important;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none !important;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
          border: 1px solid #000000;
        }

        .oe-gold-cta-btn:hover {
          background: #2c2c2c;
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .oe-limited-tag-gold {
          font-size: 0.75rem;
          color: rgb(197, 168, 128);
          letter-spacing: 2px;
          font-weight: normal;
        }

        .oe-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .oe-pill-dark {
          background: #ffffff !important;
          color: #111111 !important;
          border: 1px solid #efe8df !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 0.825rem;
        }

        .oe-pill-gold {
          background: #000000 !important;
          color: #ffffff !important;
          border: 1px solid #000000 !important;
          font-weight: 500 !important;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 0.825rem;
        }

        /* RIGHT COLUMN: PORTRAIT FRAME WITH GLASS BADGE */
        .oe-portrait-card {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .oe-portrait-frame {
          width: 100%;
          max-width: 400px;
          aspect-ratio: 4/5;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          border: 3px solid rgb(197, 168, 128);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
        }

        .oe-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .oe-portrait-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.3) 100%);
        }

        .oe-floating-badge {
          position: absolute;
          bottom: 24px;
          left: 20px;
          right: 20px;
          background: rgba(18, 18, 18, 0.92) !important;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 2px solid rgb(197, 168, 128) !important;
          border-radius: 8px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(197, 168, 128, 0.25);
        }

        .oe-floating-badge-icon {
          color: rgb(197, 168, 128);
          font-size: 1.4rem;
        }

        .oe-floating-badge div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .oe-floating-badge strong {
          color: #ffffff;
          font-size: 0.98rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .oe-floating-badge span {
          color: rgb(197, 168, 128);
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        @media (max-width: 992px) {
          .oe-hero-split-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }
          .oe-hero-left {
            align-items: center;
            text-align: center;
          }
          .oe-meta-glass-bar {
            justify-content: center;
          }
          .oe-hero-action-row {
            justify-content: center;
          }
          .oe-hero-tags {
            justify-content: center;
          }
          .oe-portrait-frame {
            max-width: 340px;
          }
        }

        /* SECTION 2: RELATABLE HOOK */
        .oe-hook-section {
          padding: 85px 0;
          background: #f7f4ef;
          text-align: center;
        }

        .oe-hook-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 45px;
        }

        .oe-hook-item {
          background: #ffffff;
          padding: 24px 30px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          border: 1px solid #efe8df;
          text-align: left;
        }

        .oe-bullet-star {
          color: rgb(197, 168, 128);
          font-size: 1.25rem;
          font-weight: bold;
          flex-shrink: 0;
        }

        .oe-hook-quote {
          font-size: 1.3rem;
          color: #333333;
        }

        /* SECTION 3: EXPLORE (BLACK & GOLD ELEGANCE) */
        .oe-explore-section {
          background: #1c1c1c;
          color: #ffffff;
          padding: 95px 0;
          text-align: center;
        }

        .oe-explore-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 48px;
          text-align: left;
        }

        .oe-explore-card {
          background: #282828;
          padding: 28px;
          border-radius: 4px;
          border-left: 4px solid rgb(197, 168, 128);
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .oe-card-num {
          font-size: 1.35rem;
          font-weight: 800;
        }

        .oe-banner-box {
          background: rgba(197, 168, 128, 0.12);
          border: 1px solid rgb(197, 168, 128);
          padding: 30px;
          border-radius: 4px;
          text-align: center;
        }

        .oe-banner-box p {
          margin: 0;
          font-size: 1.1rem;
          font-style: italic;
          color: #f5f3f0;
        }

        /* SECTION 4: REAL STORIES */
        .oe-stories-section {
          padding: 95px 0;
          background: #fcfaf7;
        }

        .oe-header-center {
          text-align: center;
          margin-bottom: 55px;
        }

        .oe-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 55px;
        }

        .oe-story-card {
          background: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
          border: 2px solid #efe8df;
          display: flex;
          flex-direction: column;
          transition: all 0.35s ease;
        }

        .oe-story-card:hover {
          transform: translateY(-6px);
          border-color: rgb(197, 168, 128);
          box-shadow: 0 16px 40px rgba(197, 168, 128, 0.22);
        }

        .oe-story-thumb {
          width: 100%;
          aspect-ratio: 4/5;
          background: #000000;
        }

        .oe-story-meta {
          padding: 22px 18px;
          text-align: center;
          background: #ffffff;
          border-top: 1px solid #efe8df;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .oe-story-name {
          font-family: 'Avenir Thin', 'Avenir', sans-serif !important;
          font-size: 1.15rem !important;
          font-weight: 600 !important;
          margin: 0 0 2px 0;
          color: #000000 !important;
          letter-spacing: 0.3px;
        }

        .oe-story-prof {
          font-family: 'Avenir Thin', 'Avenir', sans-serif !important;
          font-size: 0.85rem !important;
          color: rgb(197, 168, 128) !important;
          font-weight: 500 !important;
          letter-spacing: 0.5px;
        }

        .oe-center-cta {
          text-align: center;
        }

        /* SECTION 5: ABOUT HOST (STANDOUT LUXURY CARD) */
        .oe-host-section {
          padding: 95px 0;
          background: #f7f4ef;
        }

        .oe-host-box {
          background: #ffffff;
          padding: 60px 50px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 12px 35px rgba(197, 168, 128, 0.16), 0 4px 15px rgba(0, 0, 0, 0.04);
          border: 2px solid rgb(197, 168, 128);
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .oe-host-portrait {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgb(197, 168, 128);
          margin-bottom: 24px;
          box-shadow: 0 0 25px rgba(197, 168, 128, 0.35);
        }

        .oe-host-sub-badge {
          display: inline-block;
          background: #efe8df;
          border: 1px solid rgb(197, 168, 128);
          color: #000000;
          padding: 6px 20px;
          border-radius: 20px;
          font-family: 'Avenir Thin', 'Avenir', sans-serif !important;
          font-size: 0.75rem !important;
          letter-spacing: 2px;
          font-weight: 500 !important;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .oe-host-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .oe-host-action-btns {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 10px;
        }

        .oe-insta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #000000 !important;
          border: 2px solid #000000;
          padding: 14px 28px;
          border-radius: 2px;
          font-family: 'Avenir Thin', 'Avenir', sans-serif !important;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none !important;
          transition: all 0.3s ease;
        }

        .oe-insta-btn:hover {
          background: #000000;
          color: #ffffff !important;
          border-color: #000000;
        }

        .oe-insta-icon {
          font-size: 1.25rem;
          margin-right: 8px;
          color: rgb(197, 168, 128);
          transition: color 0.3s ease;
        }

        .oe-insta-btn:hover .oe-insta-icon {
          color: rgb(197, 168, 128);
        }

        /* SECTION 6: TICKET CARD */
        .oe-ticket-section {
          padding: 95px 0;
          background: #1c1c1c;
        }

        .oe-ticket-box {
          background: linear-gradient(145deg, #262626 0%, #171717 100%);
          border: 2px solid rgb(197, 168, 128);
          border-radius: 8px;
          padding: 55px 45px;
          text-align: center;
          box-shadow: 0 12px 45px rgba(0,0,0,0.5);
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .oe-ticket-sub {
          font-size: 0.75rem;
          margin-bottom: 14px;
        }

        .oe-price-row {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 4px;
          margin-bottom: 30px;
        }

        .oe-currency {
          font-size: 1.7rem;
          font-weight: 700;
          margin-top: 6px;
        }

        .oe-amount {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1;
        }

        .oe-ticket-info-grid {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 38px;
          border-top: 1px solid rgba(197, 168, 128, 0.3);
          border-bottom: 1px solid rgba(197, 168, 128, 0.3);
          padding: 20px 0;
          width: 100%;
          max-width: 540px;
        }

        .oe-info-lbl {
          font-size: 0.7rem;
          color: #aaaaaa;
        }

        .oe-info-val {
          font-size: 1.1rem;
          color: #ffffff;
        }

        .oe-guarantee-note {
          font-size: 0.825rem;
          color: #cccccc;
          margin-top: 18px;
          font-weight: 300;
        }

        /* SECTION 7: FAQS */
        .oe-faq-section {
          padding: 95px 0;
          background: #fcfaf7;
        }

        .oe-faq-container {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 48px;
        }

        .oe-faq-card {
          background: #ffffff;
          border: 1px solid #efe8df;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .oe-faq-card.is-open {
          border-color: rgb(197, 168, 128);
        }

        .oe-faq-q {
          padding: 24px 30px;
          font-size: 1.1rem;
          color: #000000;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .oe-faq-toggle {
          font-size: 1.5rem;
          color: rgb(197, 168, 128);
          font-weight: 400;
        }

        .oe-faq-a {
          padding: 0 30px 24px;
          color: #555555;
          font-size: 1rem;
          border-top: 1px solid #f5efe9;
          padding-top: 18px;
        }

        .oe-faq-a p {
          margin: 0;
        }

        .oe-faq-bottom {
          text-align: center;
        }

        .oe-faq-bottom p {
          font-size: 1.05rem;
          color: #555555;
          margin-bottom: 20px;
        }

        /* SECTION 8: FINAL BANNER */
        .oe-final-banner {
          background: #1c1c1c;
          color: #ffffff;
          padding: 75px 0;
          text-align: center;
        }

        /* STICKY BOTTOM FOOTER BAR */
        .oe-sticky-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: #1c1c1c;
          border-top: 2px solid rgb(197, 168, 128);
          padding: 14px 28px;
          z-index: 998;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 -6px 25px rgba(0,0,0,0.25);
        }

        .oe-sticky-details {
          display: flex;
          flex-direction: column;
        }

        .oe-sticky-name {
          color: #ffffff;
          font-size: 0.95rem;
        }

        .oe-sticky-cost {
          font-size: 0.85rem;
        }

        .oe-sticky-action {
          padding: 10px 22px;
          font-size: 0.8rem;
        }

        /* RESPONSIVE DESIGN FOR MOBILE & TABLETS */
        @media (max-width: 992px) {
          .oe-hero-split {
            padding: 60px 0 50px;
          }
          .oe-hero-split-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .oe-hero-left {
            align-items: center;
            text-align: center;
          }
          .oe-meta-glass-bar {
            flex-direction: column;
            gap: 16px;
            padding: 22px 24px;
            max-width: 100%;
          }
          .oe-meta-glass-sep {
            width: 100%;
            height: 1px;
          }
          .oe-hero-action-row {
            justify-content: center;
            width: 100%;
            flex-direction: column;
          }
          .oe-gold-cta-btn {
            width: 100%;
            max-width: 360px;
          }
          .oe-hero-tags {
            justify-content: center;
          }
          .oe-portrait-frame {
            max-width: 320px;
          }
          .oe-grid-4 {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .oe-explore-cards {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .offline-events-page {
            padding-bottom: 75px;
          }
          .oe-container {
            padding: 0 16px;
          }
          .oe-hero-split-title {
            font-size: 1.95rem;
            line-height: 1.3;
          }
          .oe-section-heading {
            font-size: 1.75rem;
            margin-bottom: 25px;
          }
          .oe-hook-section,
          .oe-explore-section,
          .oe-stories-section,
          .oe-host-section,
          .oe-ticket-section,
          .oe-faq-section,
          .oe-final-banner {
            padding: 55px 0;
          }
          .oe-grid-4 {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .oe-host-box {
            padding: 38px 20px;
          }
          .oe-ticket-box {
            padding: 40px 20px;
          }
          .oe-ticket-info-grid {
            flex-direction: column;
            gap: 14px;
            padding: 16px 0;
            border-top: 1px solid rgba(197, 168, 128, 0.3);
            border-bottom: 1px solid rgba(197, 168, 128, 0.3);
          }
          .oe-info-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
          .oe-faq-q {
            padding: 18px 20px;
            font-size: 1rem;
          }
          .oe-faq-a {
            padding: 0 20px 18px;
          }
          .oe-sticky-footer {
            padding: 12px 18px;
          }
          .oe-sticky-name {
            font-size: 0.8rem;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .oe-sticky-cost {
            font-size: 0.85rem;
          }
          .oe-sticky-action {
            padding: 10px 18px;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
