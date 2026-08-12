import { type ReactNode } from "react";

interface StatItem {
  icon: ReactNode;
  value: string;
  label: string;
}

interface SolutionItem {
  src: string;
  title: string;
}

interface ProgramRow {
  program: string;
  duration: string;
}

function CorporateClients() {
  const stats: StatItem[] = [
    {
      icon: (
        <svg
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        </svg>
      ),
      value: "700+",
      label: "Coaching Hours",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      value: "500+",
      label: "Lives Impacted",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      value: "NLP",
      label: "Practitioner",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      value: "Productivity &",
      label: "Life Coach",
    },
  ];

  const solutions: SolutionItem[] = [
    {
      src: "/images/corporate_clients/group_d.webp",
      title: "1:1 Coaching",
    },
    {
      src: "/images/corporate_clients/group_c.webp",
      title: "Stress & Productivity Workshops",
    },
    {
      src: "/images/corporate_clients/group_b.webp",
      title: "Women Empowerment Programme",
    },
    {
      src: "/images/corporate_clients/group_a.webp",
      title: "Team Building Workshops",
    },
  ];

  const programs: ProgramRow[] = [
    { program: "Leadership Excellence", duration: "1 Day" },
    { program: "Work Life Balance", duration: "Full day" },
    { program: "Stress Management", duration: "Full day" },
    { program: "Team Collaboration", duration: "Half Day" },
    { program: "Women Leadership Program", duration: "1 Day" },
    { program: "Mindset & Productivity Program", duration: "1 Day" },
    { program: "Mindfulness Program", duration: "Half Day" },
    { program: "Executive Coaching", duration: "1:1 Model" },
  ];

  return (
    <div id="content" className="site-content">
      <div className="ast-container">
        <div
          data-elementor-type="wp-page"
          data-elementor-id="20"
          className="elementor elementor-20"
          data-elementor-post-type="page"
        >
          {/* Section 1: Hero Banner */}
          <div className="hero-full-banner">
            <div className="hero-container container-width">
              <div className="hero-info">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <span className="scribble" style={{ fontSize: "7rem" }}>
                    Transforming People.
                  </span>
                  <h1 className="hero-title">
                    <span className="hero-title-gold">
                      {" "}
                      Elevating Performance.
                    </span>
                  </h1>
                </div>
                {/* <div className="hero-divider"></div> */}
                <ul className="hero-bullets">
                  <li>
                    <svg
                      className="bullet-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    CORPORATE COACHING
                  </li>
                  <li>
                    <svg
                      className="bullet-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    LEADERSHIP DEVELOPMENT
                  </li>
                  <li>
                    <svg
                      className="bullet-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    TEAM TRANSFORMATION
                  </li>
                </ul>
                {/* <div className="hero-branding">
                  <img
                    src="/images/alisha_jaiswal_logo.png"
                    alt="Unfold with Alisha Logo"
                    className="hero-logo"
                  />
                  <div className="branding-text">
                    <div className="branding-name">ALISHA JAISWAL</div>
                    <div className="branding-desc">
                      ICF CERTIFIED LIFE COACH, NLP TRAINER, PRODUCTIVITY COACH
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="gold-strip"></div>

          {/* Section 2: Corporate Challenges We Solve */}
          <div className="elementor-element e-flex e-con-boxed e-con e-parent section-padding white-bg">
            <div className="e-con-inner container-width">
              <div
                className="section-header-center"
                style={{ marginBottom: "2rem", padding: "50px 10px" }}
              >
                <div>
                  <div className="section-title-row">
                    <span className="scribble">Corporate</span>
                    <h2 className="challenges-title gold-word">challenges</h2>
                  </div>
                  <h2 className="challenges-title">
                    <span className="gold-text">We Solve</span>
                  </h2>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p
                      className="challenges-desc"
                      style={{
                        maxWidth: "700px",
                        margin: "0 auto",
                        textAlign: "center",
                        lineHeight: "1.7",
                      }}
                    >
                      Today's workplaces need more than strategies — they need
                      strong leaders and resilient teams. We help organizations
                      overcome critical people challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="challenges-grid">
                <div className="challenge-card">
                  <span className="challenge-icon-wrapper">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="challenge-text">
                    Leadership Effectiveness
                  </span>
                </div>

                <div className="challenge-card">
                  <span className="challenge-icon-wrapper">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="challenge-text">
                    Stress & Burnout Management
                  </span>
                </div>

                <div className="challenge-card">
                  <span className="challenge-icon-wrapper">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="challenge-text">Team Alignment</span>
                </div>

                <div className="challenge-card">
                  <span className="challenge-icon-wrapper">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </span>
                  <span className="challenge-text">Mindset & Productivity</span>
                </div>

                <div className="challenge-card">
                  <span className="challenge-icon-wrapper">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                  <span className="challenge-text">
                    Communication Breakdowns
                  </span>
                </div>

                <div className="challenge-card">
                  <span className="challenge-icon-wrapper">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="challenge-text">
                    Women Leadership Development
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: About Alisha Jaiswal */}
          <div className="elementor-element e-flex e-con-boxed e-con e-parent section-padding beige-bg">
            <div className="e-con-inner container-width">
              <div
                className="section-header-center"
                style={{ marginBottom: "3.5rem", padding: "50px 10px" }}
              >
                <div>
                  <div className="section-title-row">
                    <span className="scribble">About</span>
                    <h2 className="about-title gold-word">alisha</h2>
                  </div>
                  <h2 className="about-title" style={{ textAlign: "center" }}>
                    <span className="gold-text">Jaiswal</span>
                  </h2>
                </div>
              </div>

              <div className="split-layout align-stretch">
                <div className="about-image-wrapper">
                  <img
                    src="/images/corporate_clients/about.webp"
                    alt="Alisha Jaiswal Yellow Dress Award"
                    className="about-image"
                  />
                </div>
                <div className="about-details">
                  <div className="elementor-element elementor-widget elementor-widget-text-editor">
                    <div className="elementor-widget-container">
                      <p className="about-desc">
                        With 14+ years of business experience and 3+ years as a
                        professional coach and trainer, Alisha Jaiswal helps
                        individuals, leaders and teams unlock their full
                        potential and create meaningful transformation.
                      </p>
                      <p className="about-desc">
                        Her programs blend deep psychological insights with
                        practical tools, enabling lasting behavioural change and
                        peak performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="stats-card">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-column">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Our Solutions For Your People */}
          <div className="elementor-element e-flex e-con-boxed e-con e-parent section-padding white-bg">
            <div className="e-con-inner container-width">
              <div
                className="section-header-center"
                style={{ marginBottom: "3.5rem", padding: "50px 10px" }}
              >
                <div>
                  <div className="section-title-row">
                    <span className="scribble">Our</span>
                    <h2 className="solutions-title gold-word">solutions</h2>
                  </div>
                  <h2
                    className="solutions-title"
                    style={{ textAlign: "center" }}
                  >
                    <span className="gold-text">For Your People</span>
                  </h2>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p className="solutions-desc">
                      Customized programs that create impact and drive
                      sustainable results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="solutions-grid">
                {solutions.map((item, index) => (
                  <div key={index} className="solution-card">
                    <div className="solution-image-container">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="solution-image"
                      />
                      <div className="solution-overlay">
                        <div className="solution-card-title">{item.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Our Corporate Clients */}
          <div className="elementor-element e-flex e-con-boxed e-con e-parent section-padding beige-bg">
            <div className="e-con-inner container-width">
              <div
                className="section-header-center"
                style={{ marginBottom: "2rem", padding: "50px 10px" }}
              >
                <div>
                  <div className="section-title-row">
                    <span className="scribble">Our</span>
                    <h2 className="solutions-title gold-word">corporate</h2>
                  </div>
                  <h2 className="solutions-title" style={{ textAlign: "center" }}>
                    <span className="gold-text">Clients</span>
                  </h2>
                </div>
              </div>

              <div className="logos-container">
                <div className="logo-item">
                  <img
                    src="/images/corporate_clients/ajmera.webp"
                    alt="Ajmera Logo"
                    className="logo-img"
                  />
                </div>
                <div className="logo-item">
                  <img
                    src="/images/corporate_clients/bajaj_steel.webp"
                    alt="Bajaj Steel Logo"
                    className="logo-img"
                  />
                </div>
                <div className="logo-item">
                  <img
                    src="/images/corporate_clients/es.webp"
                    alt="ES Logo"
                    className="logo-img"
                  />
                </div>
                <div className="logo-item">
                  <img
                    src="/images/corporate_clients/growth_acad.webp"
                    alt="Growth Academy Logo"
                    className="logo-img"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Training Programs At A Glance */}
          <div className="elementor-element e-flex e-con-boxed e-con e-parent section-padding white-bg">
            <div className="e-con-inner container-width">
              <div
                className="section-header-center"
                style={{ marginBottom: "3.5rem", padding: "50px 10px" }}
              >
                <div>
                  <div className="section-title-row">
                    <span className="scribble">Training</span>
                    <h2 className="table-title gold-word">programs</h2>
                  </div>
                  <h2 className="table-title" style={{ textAlign: "center" }}>
                    <span className="gold-text">At A Glance</span>
                  </h2>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p className="table-desc">
                      Impactful learning experiences designed for measurable
                      results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="table-wrapper">
                <table className="programs-table">
                  <thead>
                    <tr>
                      <th className="th-program">PROGRAM</th>
                      <th className="th-duration">DURATION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs.map((row, index) => (
                      <tr key={index}>
                        <td className="td-program">{row.program}</td>
                        <td className="td-duration">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Gold Callout Badge */}
              <div className="gold-callout">
                <div className="callout-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                </div>
                <div className="callout-text">
                  Customized programs available as per organizational goals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .elementor-20 p {
          font-family: "Avenir Thin", Sans-serif !important;
          font-size: 18px !important;
          line-height: 1.65 !important;
          color: #8c8989 !important;
        }

        .section-padding {
          padding: 5rem 0 !important;
        }

        .white-bg {
          background-color: #ffffff !important;
        }

        .beige-bg {
          background-color: #fcfaf7 !important;
        }

        .container-width {
          max-width: 1300px;
          margin: 0 auto;
          width: 100%;
          padding: 0 15px;
        }

        .gold-text {
          color: #c5a880 !important;
        }

        /* Hero Full Width Banner */
        .hero-full-banner {
          background-image: url('/images/corporate_clients/hero.webp');
          background-size: cover;
          width: 100%;
          max-height: 700px;
          display: flex;
          align-items: center;
          box-sizing: border-box;
        }

        .hero-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .hero-info {
          max-width: 750px;
          padding: 15rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
        }

        .hero-title {
          font-size: 3.2rem;
          font-weight: bold;
          line-height: 1.15;
          margin: 0 0 1.5rem 0;
          color: #ffffff;
          letter-spacing: -1px;
        }

        .hero-title-gold {
          color: #c5a880;
          display: block;
        }

        .hero-divider {
          width: 80px;
          height: 3px;
          background-color: #c5a880;
          margin: 1.5rem 0 2rem 0;
        }

        .hero-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 3rem 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .hero-bullets li {
          font-size: 1.1rem;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-weight: 500;
        }

        .bullet-icon {
          width: 18px;
          height: 18px;
          color: #c5a880;
        }

        .hero-branding {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .hero-logo {
          width: 75px;
          height: auto;
        }

        .branding-text {
          display: flex;
          flex-direction: column;
        }

        .branding-name {
          font-size: 1.25rem;
          font-weight: bold;
          letter-spacing: 2px;
          color: #c5a880;
        }

        .branding-desc {
          font-size: 0.78rem;
          letter-spacing: 1px;
          margin-top: 0.2rem;
          line-height: 1.3;
        }

        .gold-strip {
          height: 16px;
          background-color: #c5a880;
          width: 100%;
        }

        .section-title-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          margin-top: 1rem;
        }

        .section-title-row .scribble {
          text-align: center;
          font-size: 7rem !important;
          line-height: 1 !important;
        }

        .section-title-row .gold-word {
          text-transform: lowercase;
          font-size: 3.5rem !important;
          color: #b49b78 !important;
          margin: 0 !important;
        }

        @media (max-width: 768px) {
          .section-title-row {
            gap: 8px;
          }
          .section-title-row .scribble {
            font-size: 4.5rem !important;
          }
          .section-title-row .gold-word {
            font-size: 2.1rem !important;
          }
        }

        /* Logos Section styling */
        .logos-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 4rem;
          margin-top: 3rem;
          width: 100%;
        }

        .logo-item {
          flex: 1 1 200px;
          max-width: 250px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1.5rem;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease-in-out;
          border: 1px solid rgba(197, 168, 128, 0.1);
        }

        .logo-item:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 10px 30px rgba(197, 168, 128, 0.15);
          border-color: rgba(197, 168, 128, 0.3);
        }

        .logo-img {
          max-height: 70px;
          max-width: 100%;
          object-fit: contain;
          transition: all 0.3s ease-in-out;
        }

        .logo-item:hover .logo-img {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .logos-container {
            gap: 2rem;
          }
          .logo-item {
            flex: 1 1 140px;
            max-width: 160px;
            padding: 1rem;
          }
          .logo-img {
            max-height: 50px;
          }
        }

        /* Section 2: Challenges */
        .section-header-left {
          text-align: left;
          margin-bottom: 3.5rem;
          max-width: 800px;
        }

        .challenges-title {
          font-size: 2.8rem;
          font-weight: bold;
          line-height: 1.2;
          color: #081c24;
          margin: 0 0 1rem 0;
        }

        .challenges-desc {
          font-size: 19px !important;
          color: #2c2c2c !important;
          line-height: 1.5 !important;
          margin: 0;
        }

        .split-layout {
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          justify-content: center;
          align-items: center;
        }

        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          width: 100%;
        }

        .challenge-card {
          background-color: #081c24;
          border-radius: 8px;
          padding: 3rem 2.2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
          box-sizing: border-box;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid rgba(255, 255, 255, 0.02);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .challenge-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(197, 168, 128, 0.12);
          border-color: rgba(197, 168, 128, 0.2);
        }

        .challenge-icon-wrapper {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background-color: rgba(197, 168, 128, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c5a880;
          flex-shrink: 0;
          transition: background-color 0.4s ease, color 0.4s ease;
        }

        .challenge-card:hover .challenge-icon-wrapper {
          background-color: #c5a880;
          color: #081c24;
        }

        .challenge-text {
          color: #ffffff;
          font-size: 1.3rem;
          font-weight: 500;
          font-family: "Avenir Thin", Sans-serif;
          line-height: 1.4;
        }

        /* Section 3: About Alisha Jaiswal */
        .align-stretch {
          align-items: stretch;
        }

        .about-details {
          flex: 0 1 45%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }

        .about-logo {
          width: 70px;
          margin-bottom: 1.5rem;
        }

        .about-title {
          font-size: 2.8rem;
          font-weight: bold;
          line-height: 1.2;
          color: #081c24;
          margin: 0 0 1.5rem 0;
        }

        .about-desc {
          margin-bottom: 1.5rem !important;
          color: #555555 !important;
        }

        .about-image-wrapper {
          flex: 1 1 45%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-image {
          width: 100%;
          max-width: 420px !important;
          height: auto;
          min-height: auto;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }

        /* Stats Card */
        .stats-card {
          margin-top: 4.5rem;
          background-color: #081c24;
          border-radius: 8px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 3rem 1.5rem;
        }

        .stat-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0 1rem;
        }

        .stat-column:last-child {
          border-right: none;
        }

        .stat-icon {
          color: #c5a880;
          margin-bottom: 1rem;
        }

        .stat-value {
          font-size: 2.2rem;
          font-weight: bold;
          color: #c5a880;
          margin-bottom: 0.3rem;
          line-height: 1.1;
        }

        .stat-label {
          font-size: 0.95rem;
          color: #ffffff;
          font-family: "Avenir Thin", Sans-serif;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        /* Section 4: Solutions Grid */
        .section-header-center {
          text-align: center;
          margin-bottom: 4rem;
        }

        .solutions-title {
          font-size: 2.8rem;
          font-weight: bold;
          line-height: 1.2;
          color: #081c24;
          margin: 0 0 1rem 0;
        }

        .solutions-desc {
          max-width: 600px;
          margin: 0 auto !important;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
          width: 100%;
        }

        .solution-card {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.04);
          transition: transform 0.4s ease, border-color 0.4s ease;
          border: 1px solid rgba(0,0,0,0.03);
          aspect-ratio: 1.25 / 1;
        }

        .solution-image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .solution-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .solution-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #081c24;
          padding: 1.2rem;
          text-align: center;
          border-top: 3px solid #c5a880;
          transition: background-color 0.4s ease;
        }

        .solution-card-title {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 500;
          font-family: "Avenir Thin", Sans-serif;
          letter-spacing: 0.5px;
        }

        .solution-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 35px rgba(197, 168, 128, 0.1);
        }

        .solution-card:hover .solution-image {
          transform: scale(1.04);
        }

        .solution-card:hover .solution-overlay {
          background-color: #c5a880;
        }

        /* Section 5: Training Program Table */
        .table-title {
          font-size: 2.8rem;
          font-weight: bold;
          line-height: 1.2;
          color: #081c24;
          margin: 0 0 1rem 0;
        }

        .table-desc {
          max-width: 600px;
          margin: 0 auto !important;
        }

        .table-wrapper {
          max-width: 900px;
          margin: 0 auto;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.04);
          border: 1px solid #eaeaea;
        }

        .programs-table {
          width: 100%;
          border-collapse: collapse;
          background-color: #ffffff;
        }

        .programs-table th {
          background-color: #1c1c1c;
          color: #ffffff;
          font-weight: 600;
          letter-spacing: 1px;
          font-size: 1rem;
          padding: 1.2rem 2rem;
          border: none;
        }

        .th-program {
          text-align: left;
        }

        .th-duration {
          text-align: center;
          width: 250px;
        }

        .programs-table td {
          padding: 1.1rem 2rem;
          border-bottom: 1px solid #eaeaea;
          font-size: 1.05rem;
          color: #333333;
          font-family: "Avenir Thin", Sans-serif;
          font-weight: 500;
        }

        .programs-table tr:last-child td {
          border-bottom: none;
        }

        .programs-table tr:nth-child(even) td {
          background-color: #fcfaf7;
        }

        .td-program {
          text-align: left;
        }

        .td-duration {
          text-align: center;
        }

        .gold-callout {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          background-color: #fcfaf7;
          border: 1px solid rgba(197, 168, 128, 0.3);
          padding: 1.5rem 2rem;
          border-radius: 8px;
          max-width: 900px;
          margin: 3.5rem auto 0 auto;
          box-sizing: border-box;
        }

        .callout-icon {
          color: #c5a880;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .callout-text {
          font-size: 1.15rem;
          color: #1c1c1c;
          font-weight: bold;
          font-family: "Avenir Thin", Sans-serif;
        }

        /* Responsiveness */
        @media (max-width: 1024px) {
          .challenges-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          .stats-card {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            padding: 3rem 2rem;
          }

          .stat-column {
            border-right: none;
          }

          .stat-column:nth-child(odd) {
            border-right: 1px solid rgba(255, 255, 255, 0.1);
          }
        }

        @media (max-width: 768px) {
          .section-padding {
            padding: 3.5rem 0 !important;
          }

          .hero-full-banner {
            background-image: url('/images/corporate_clients/hero.webp');
            min-height: 550px;
          }

          .hero-info {
            padding: 3.5rem 0;
            max-width: 100%;
          }

          .hero-title {
            font-size: 2.3rem;
          }

          .challenges-title, .about-title, .solutions-title, .table-title {
            font-size: 2.1rem;
          }

          .challenges-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .about-details, .about-image-wrapper {
            flex: 1 1 100%;
          }

          .about-image {
            min-height: 380px;
          }

          .solutions-grid {
            grid-template-columns: 1fr;
            gap: 1.8rem;
          }

          .stats-card {
            grid-template-columns: 1fr;
            gap: 2.2rem;
            padding: 2.5rem 1rem;
          }

          .stat-column {
            border-right: none !important;
          }

          .th-duration, .td-duration {
            width: 120px;
            padding: 1.1rem 1rem;
          }

          .programs-table td, .programs-table th {
            padding: 1.1rem 1rem;
            font-size: 0.95rem;
          }

          .gold-callout {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
            margin-top: 2rem;
          }

          .callout-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default CorporateClients;
