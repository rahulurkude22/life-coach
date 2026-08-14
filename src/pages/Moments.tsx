import { useState } from "react";

interface GalleryItem {
  src: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/images/moments/group_a.webp",
    title: "Corporate Empowerment Workshop",
    description: "Empowering teams to achieve peak performance, resilience, and work-life harmony.",
  },
  {
    src: "/images/moments/group_b.webp",
    title: "Team Collaboration & Growth",
    description: "Unlocking collective potential through interactive exercises and trust building.",
  },
  {
    src: "/images/moments/personal_session.webp",
    title: "One-on-One Discovery",
    description: "Personalized life coaching sessions tailored to individual breakthroughs and self-mastery.",
  },
];

const heroVideos = [
  "/images/moments/hero.mp4",
  "/images/moments/hero_b.mp4"
];

function Moments() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <div id="content" className="site-content">
      <div className="ast-container">
        <div
          data-elementor-type="wp-page"
          data-elementor-id="15"
          className="elementor elementor-15"
          data-elementor-post-type="page"
        >
          {/* Hero Video Banner */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            {/* Autoplay video */}
            <video
              key={currentVideoIndex}
              autoPlay
              muted
              playsInline
              onEnded={() => setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
              }}
            >
              <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
            </video>

            {/* Dark cinematic overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)",
                zIndex: 1,
              }}
            />

            {/* Centered text content */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "0 1.5rem",
              }}
            >
              <h1
                style={{
                  color: "#fff",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: "bold",
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  textShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                <span
                  className="scribble"
                  style={{
                    textTransform: "lowercase",
                    fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
                    marginRight: "0.5rem",
                    color: "#c5a880",
                    display: "inline-block",
                  }}
                >
                  Captured
                </span>{" "}
                Moments
              </h1>
              <p
                style={{
                  color: "rgba(255,255,255,0.82)",
                  fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                  maxWidth: "580px",
                  marginTop: "1.5rem",
                  lineHeight: 1.7,
                  fontFamily: "'Avenir Thin', sans-serif",
                  textShadow: "0 2px 10px rgba(0,0,0,0.35)",
                }}
              >
                A visual journey of transformation, collaboration, and
                breakthrough moments with corporate clients and individuals.
              </p>

              {/* Animated scroll indicator */}
              <div
                style={{
                  position: "absolute",
                  bottom: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.75rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                <span>Scroll</span>
                <div className="moments-scroll-arrow" />
              </div>
            </div>
          </div>


          {/* Gallery Section */}
          <div
            className="elementor-element e-flex e-con-boxed e-con e-parent"
            style={{ padding: "5rem 0", background: "#fcfaf7" }}
          >
            <div className="e-con-inner" style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", padding: "0 15px" }}>
              <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <h2 style={{ fontSize: "2.5rem", color: "#2c2c2c", fontWeight: 400, fontFamily: "inherit" }}>
                  Our <span className="scribble" style={{ color: "#8b7355" }}>Workshops</span> & Sessions
                </h2>
                <div className="elementor-element elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p style={{ maxWidth: "600px", margin: "1rem auto 0 auto", lineHeight: "1.65" }}>
                      A visual journey of transformation, collaboration, and breakthrough moments with corporate clients and individuals.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2.5rem",
              }}>
                {galleryItems.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "4px",
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      border: "1px solid rgba(0,0,0,0.03)"
                    }}
                    onClick={() => openLightbox(index)}
                    className="gallery-card"
                  >
                    <div style={{ overflow: "hidden", height: "260px", position: "relative" }}>
                      <img
                        src={item.src}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                        className="gallery-img"
                      />
                      <div className="gallery-overlay" style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(0,0,0,0.45)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        <span style={{
                          color: "#fff",
                          border: "1.5px solid #fff",
                          padding: "0.6rem 1.6rem",
                          borderRadius: "30px",
                          fontSize: "0.85rem",
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 600,
                          letterSpacing: "1.2px",
                          textTransform: "uppercase"
                        }}>View Moment</span>
                      </div>
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                      <h3 style={{ fontSize: "1.2rem", margin: 0, color: "#2c2c2c", fontWeight: 600 }}>{item.title}</h3>
                      <div className="elementor-element elementor-widget elementor-widget-text-editor" style={{ marginTop: "0.5rem" }}>
                        <div className="elementor-widget-container">
                          <p style={{ margin: 0, lineHeight: "1.65" }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lightbox Modal */}
          {isOpen && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.92)",
                zIndex: 99999,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                animation: "fadeIn 0.25s ease-out",
              }}
              onClick={closeLightbox}
            >
              {/* Close button */}
              <button
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "25px",
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: "3.5rem",
                  cursor: "pointer",
                  zIndex: 100000,
                  transition: "color 0.2s"
                }}
                onClick={closeLightbox}
                className="lightbox-btn"
              >
                &times;
              </button>

              {/* Navigation buttons */}
              <button
                style={{
                  position: "absolute",
                  left: "20px",
                  background: "rgba(255,255,255,0.08)",
                  border: "none",
                  color: "#fff",
                  fontSize: "2.5rem",
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 100000,
                  transition: "background 0.2s"
                }}
                onClick={prevPhoto}
                className="lightbox-nav-btn"
              >
                &#8249;
              </button>

              <button
                style={{
                  position: "absolute",
                  right: "20px",
                  background: "rgba(255,255,255,0.08)",
                  border: "none",
                  color: "#fff",
                  fontSize: "2.5rem",
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 100000,
                  transition: "background 0.2s"
                }}
                onClick={nextPhoto}
                className="lightbox-nav-btn"
              >
                &#8250;
              </button>

              {/* Image Container */}
              <div
                style={{
                  maxWidth: "85%",
                  maxHeight: "75vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryItems[photoIndex].src}
                  alt={galleryItems[photoIndex].title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "70vh",
                    objectFit: "contain",
                    borderRadius: "2px",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                  }}
                />
                <div style={{ color: "#fff", textAlign: "center", marginTop: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.5rem", margin: 0, color: "#fff", fontWeight: 500 }}>
                    {galleryItems[photoIndex].title}
                  </h3>
                  <p style={{ margin: "0.5rem 0 0 0", color: "#b3b3b3", fontSize: "0.95rem", fontFamily: "Montserrat, sans-serif" }}>
                    {galleryItems[photoIndex].description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .elementor-15 p {
          font-family: "Avenir Thin", Sans-serif !important;
          font-size: 18px !important;
          line-height: 1.65 !important;
          color: #8c8989 !important;
          margin-block-end: 18px !important;
        }
        .gallery-card p {
          margin-block-end: 0 !important;
        }
        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(139, 115, 85, 0.08) !important;
          border-color: rgba(139, 115, 85, 0.2) !important;
        }
        .gallery-card:hover .gallery-img {
          transform: scale(1.06);
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .lightbox-btn:hover {
          color: #b49b78 !important;
        }
        .lightbox-nav-btn:hover {
          background: rgba(180, 155, 120, 0.3) !important;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .moments-scroll-arrow {
          width: 22px;
          height: 22px;
          border-right: 2px solid rgba(255,255,255,0.5);
          border-bottom: 2px solid rgba(255,255,255,0.5);
          transform: rotate(45deg);
          animation: scrollBounce 1.5s infinite;
        }
        @keyframes scrollBounce {
          0%, 100% { transform: rotate(45deg) translateY(0); opacity: 0.5; }
          50% { transform: rotate(45deg) translateY(6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default Moments;
