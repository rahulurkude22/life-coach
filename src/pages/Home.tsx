import { useEffect, useState, type PropsWithChildren } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../node_modules/swiper/swiper.min.css";
import "../../node_modules/swiper/modules/pagination.css";
import VideoPlayer from "../components/VideoPlayer";
import UserLandingModal from "../components/UserLandingModal";

function QuoteSwiper({ children }: PropsWithChildren) {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      speed={1000}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      loop={true}
    >
      {children}
    </Swiper>
  );
}

function Home() {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleVideo = (url: string) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  useEffect(() => {
    setTimeout(() => setIsUserModalOpen(true), 5000);
  }, []);

  return (
    <>
      <div id="content" className="site-content">
        <div className="ast-container">
          <div
            data-elementor-type="wp-page"
            data-elementor-id="119542"
            className="elementor elementor-119542"
            data-elementor-post-type="page"
          >
            <a
              className="elementor-element elementor-element-0fbc295 e-con-full home_hero e-flex e-con e-parent"
              data-id="0fbc295"
              data-element_type="container"
              data-settings="background_background:classic"
              type="button"
              onClick={() => handleVideo("videos/intro.mp4")}
              style={{ cursor: "pointer" }}
            >
              <div
                className="elementor-element elementor-element-41b7d96 elementor-widget elementor-widget-image"
                data-id="41b7d96"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    decoding="async"
                    width={1920}
                    height={1009}
                    src="images/alisha_jaiswal_homepage.png"
                    className="attachment-full size-full wp-image-122603"
                    alt="Alisha Jaiswal Life Coach and Stress management Expert"
                    sizes="(max-width: 1920px) 100vw, 1920px"
                  />
                </div>
              </div>
            </a>

            <a
              className="elementor-element elementor-element-774d57d e-con-full home_hero elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-parent"
              data-id="774d57d"
              data-element_type="container"
              data-settings="background_background:classNameic"
              href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjEyMTE4NSIsInRvZ2dsZSI6ZmFsc2V9"
            >
              <div
                className="elementor-element elementor-element-75ed6d7 e-flex e-con-boxed e-con e-child"
                data-id="75ed6d7"
                data-element_type="container"
              >
                <div className="e-con-inner"></div>
              </div>
            </a>

            {/* <div
              className="elementor-element elementor-element-e7ac01b e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-parent"
              data-id="e7ac01b"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-885da97 e-flex e-con-boxed e-con e-child"
                data-id="885da97"
                data-element_type="container"
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-2d8a44b elementor-widget__width-inherit elementor-widget elementor-widget-image"
                    data-id="2d8a44b"
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <img
                        decoding="async"
                        width="1920"
                        height="154"
                        src="images/home-logo-media-images-1.jpg"
                        className="attachment-full size-full wp-image-122468"
                        alt=""
                        srcSet="images/home-logo-media-images-1.jpg 1920w, images/home-logo-media-images-1-300x24.jpg 300w, images/home-logo-media-images-1-1024x82.jpg 1024w, images/home-logo-media-images-1-768x62.jpg 768w, images/home-logo-media-images-1-1536x123.jpg 1536w"
                        sizes="(max-width: 1920px) 100vw, 1920px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div
              className="elementor-element elementor-element-7a46e53 e-flex e-con-boxed e-con e-parent"
              data-id="7a46e53"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-ddc86cb elementor-widget elementor-widget-global elementor-global-121355 elementor-widget-heading"
                  data-id="ddc86cb"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Unlock the<span className="scribble">Confidence,</span>
                      <br />
                      Book a clarity call here.
                    </h2>
                  </div>
                </div>
                {/* <div
                  className="elementor-element elementor-element-2e186d7 elementor-widget elementor-widget-text-editor"
                  data-id="2e186d7"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      Want a *free* mini meditation to boost your confidence?
                    </p>
                  </div>
                </div> */}
                <div
                  className="elementor-element elementor-element-b134158 elementor-widget elementor-widget-shortcode"
                  data-id="b134158"
                  data-element_type="widget"
                  id="b_form1"
                  data-widget_type="shortcode.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                      <form id="sib_signup_form_1" className="sib_signup_form">
                        <div
                          className="sib_signup_box_inside_1"
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <a
                            href="https://topmate.io/unfoldwith_alisha"
                            target="_blank"
                            className="sib-default-btn"
                          >
                            Book a Call
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-ddc86cb elementor-widget elementor-widget-global elementor-global-121355 elementor-widget-heading"
                  data-id="ddc86cb"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      <span className="scribble">
                        Small Shifts, Big Transformations
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-d3ee3ec e-con-full e-flex e-con e-parent"
              id="coaching"
              data-id="d3ee3ec"
              data-element_type="container"
              data-settings="background_background:classNameic"
            >
              <div
                className="elementor-element elementor-element-77bad32 e-flex e-con-boxed e-con e-child"
                data-id="77bad32"
                data-element_type="container"
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-88ae6d9 e-con-full e-flex e-con e-child"
                    data-id="88ae6d9"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-8b8ad69 elementor-widget elementor-widget-heading"
                      data-id="8b8ad69"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Life Coaching Solutions{" "}
                          <span className="scribble">for You</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-5705931 e-flex e-con-boxed e-con e-child"
                data-id="5705931"
                data-element_type="container"
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-d68cfeb e-con-full e-flex e-con e-child"
                    data-id="d68cfeb"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-c4a24d7 elementor-widget elementor-widget-image"
                      data-id="c4a24d7"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <a
                          type="button"
                          onClick={() => handleVideo("videos/c3.mp4")}
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            width="600"
                            height="579"
                            src="images/training.jpg"
                            className="attachment-medium_large size-medium_large wp-image-119858"
                            alt="Training"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-b3ece60 e-con-full e-flex e-con e-child"
                    data-id="b3ece60"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-c51745f elementor-widget elementor-widget-image"
                      data-id="c51745f"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <a
                          type="button"
                          onClick={() =>
                            handleVideo("videos/group_coaching.mp4")
                          }
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            width="600"
                            height="579"
                            src="images/workshop.jpg"
                            className="attachment-medium_large size-medium_large wp-image-119859"
                            alt="Group Coaching"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-0b881b4 e-con-full e-flex e-con e-child"
                    data-id="0b881b4"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-cb11195 elementor-widget elementor-widget-image"
                      data-id="cb11195"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <a
                          type="button"
                          onClick={() =>
                            handleVideo("videos/corporate_coaching.mp4")
                          }
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            width="600"
                            height="579"
                            src="images/interview.png"
                            className="attachment-medium_large size-medium_large wp-image-119860"
                            alt="1-ON-1 Interview"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-022ffc9 e-con-full e-flex e-con e-parent"
              data-id="022ffc9"
              data-element_type="container"
              data-settings="background_background:classNameic"
            >
              <div
                className="elementor-element elementor-element-4b565d1 e-flex e-con-boxed e-con e-child"
                data-id="4b565d1"
                data-element_type="container"
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-5797f03 e-con-full e-flex e-con e-child"
                    data-id="5797f03"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-58d88c8 elementor-widget elementor-widget-heading"
                      data-id="58d88c8"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          <span className="scribble">Success</span>Stories
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-e563d60 e-con-full e-flex e-con e-child"
                    data-id="e563d60"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-d24f63a elementor-widget elementor-widget-button"
                      data-id="d24f63a"
                      data-element_type="widget"
                      data-widget_type="button.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <a
                            className="elementor-button elementor-button-link elementor-size-sm"
                            href="/praise"
                            rel="nofollow"
                          >
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">
                                SUCCESS STORIES FOR YOU
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-7460f4e e-flex e-con-boxed e-con e-child"
                data-id="7460f4e"
                data-element_type="container"
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-09b76f2 cmcd-slick-obama elementor-widget elementor-widget-html"
                    data-id="09b76f2"
                    data-element_type="widget"
                    data-widget_type="html.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="rotating_testimonials_quotes">
                        <div className="slide-0">
                          <div className="slide-content">
                            <h3>
                              “Exceptionally innovative and remarkably
                              creative…”
                            </h3>
                            <p>
                              “Alisha is deeply committed to guiding others
                              toward positive change and personal growth. Her
                              energy and enthusiasm are truly contagious.”
                            </p>
                            <div className="author">SHUBHRA SHAHARE</div>
                            <p>Netherlands</p>
                            <p>
                              “Through her one-on-one sessions and
                              transformative coaching approach, Alisha empowers
                              her clients to break through barriers and create
                              meaningful change in their lives.”
                            </p>
                          </div>
                        </div>
                        <div className="slide-1">
                          <div className="slide-content">
                            <h3>
                              “Transformation starts the moment you step out of
                              your comfort zone.”
                            </h3>
                            <p>
                              “Alisha empowers her clients to step out of their
                              comfort zones, challenge limiting beliefs, and
                              embrace the growth that follows.”
                            </p>
                            <div className="author">PEPPER BLACK</div>
                            <p>San Franscisco</p>
                          </div>
                        </div>
                        <div className="slide-2">
                          <div className="slide-content">
                            <h3>
                              “Her mission is to help people create positive
                              change and make an impact in the world.”
                            </h3>
                            <p>
                              “Alisha offers a powerful, easy-to-follow path to
                              creating a life of purpose, balance, and limitless
                              potential.”
                            </p>
                            <div className="author">SNEHAL RAI</div>
                            <p>Signature analyst, India</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-c20de0e e-con-full e-flex e-con e-parent"
              data-id="c20de0e"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-334ac8f e-flex e-con-boxed e-con e-child"
                data-id="334ac8f"
                data-element_type="container"
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-fe4db47 elementor-widget elementor-widget-image">
                    <div className="elementor-widget-container">
                      <img
                        width={80}
                        height={53}
                        src="/images/quote.png"
                        className="attachment-full size-full wp-image-120887"
                        alt="quote icon"
                      />
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-d3c4d1b elementor-testimonial--skin-default elementor-testimonial--layout-image_inline elementor-testimonial--align-center elementor-arrows-yes elementor-pagination-type-bullets elementor-widget elementor-widget-testimonial-carousel"
                    data-id="d3c4d1b"
                    data-element_type="widget"
                    data-widget_type="testimonial-carousel.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-swiper">
                        <div
                          className="elementor-main-swiper swiper"
                          role="region"
                          aria-roledescription="carousel"
                          aria-label="Testimonials Slides"
                        >
                          <QuoteSwiper>
                            <SwiperSlide>
                              <div className="elementor-testimonial">
                                <div className="elementor-testimonial__content">
                                  <div className="elementor-testimonial__text">
                                    “Alisha was the inspiring life coach at a
                                    transformational leadership event. Her
                                    energy and insight ignited the room—truly a
                                    catalyst for change.”{" "}
                                  </div>
                                </div>
                                <div className="elementor-testimonial__footer">
                                  <cite className="elementor-testimonial__cite">
                                    <span className="elementor-testimonial__name">
                                      Jayshree Jhamtani
                                    </span>
                                    <span className="elementor-testimonial__title">
                                      Esscanzaa - House of Perfumes Nagpur.{" "}
                                    </span>
                                  </cite>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="elementor-testimonial">
                                <div className="elementor-testimonial__content">
                                  <div className="elementor-testimonial__text">
                                    “Alisha consistently inspires and uplifts
                                    her audience, exceeding every expectation
                                    with her powerful presence and insightful
                                    message.”{" "}
                                  </div>
                                </div>
                                <div className="elementor-testimonial__footer">
                                  <cite className="elementor-testimonial__cite">
                                    <span className="elementor-testimonial__name">
                                      Rubleen Saini
                                    </span>
                                    <span className="elementor-testimonial__title">
                                      DIRECTOR@ IPCS Global Nagpur.
                                    </span>
                                  </cite>
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="elementor-testimonial">
                                <div className="elementor-testimonial__content">
                                  <div className="elementor-testimonial__text">
                                    “Alisha offers a clear and empowering
                                    roadmap to living a balanced, purposeful
                                    life—where growth and limitless
                                    possibilities become reality.”{" "}
                                  </div>
                                </div>
                                <div className="elementor-testimonial__footer">
                                  <cite className="elementor-testimonial__cite">
                                    <span className="elementor-testimonial__name">
                                      Mansi Bhonsle
                                    </span>
                                    <span className="elementor-testimonial__title">
                                      Senior Faculty at IGCSE, Center Point
                                    </span>
                                  </cite>
                                </div>
                              </div>
                            </SwiperSlide>
                          </QuoteSwiper>
                          <div
                            className="elementor-swiper-button elementor-swiper-button-prev"
                            role="button"
                            tabIndex={0}
                            aria-label="Previous"
                          >
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-eicon-chevron-left"
                              viewBox="0 0 1000 1000"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                            </svg>
                          </div>
                          <div
                            className="elementor-swiper-button elementor-swiper-button-next"
                            role="button"
                            tabIndex={0}
                            aria-label="Next"
                          >
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-eicon-chevron-right"
                              viewBox="0 0 1000 1000"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section
              className="elementor-element elementor-element-7e13f8c e-flex e-con-boxed e-con e-parent"
              data-id="7e13f8c"
              data-element_type="container"
              id="blog_items"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-cde27e1 e-flex e-con-boxed e-con e-child"
                  data-id="cde27e1"
                  data-element_type="container"
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-59035fa e-con-full e-flex e-con e-child"
                      data-id="59035fa"
                      data-element_type="container"
                    >
                      <div
                        className="elementor-element elementor-element-2a384ab elementor-widget elementor-widget-heading"
                        data-id="2a384ab"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Life Changing
                            <span className="scribble">Exercises</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-ec5abee elementor-grid-2 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-widget elementor-widget-posts"
                  data-id="ec5abee"
                  data-element_type="widget"
                  data-widget_type="posts.classNameic"
                >
                  <div className="elementor-widget-container">
                    <div
                      className="elementor-posts-container elementor-posts elementor-posts--skin-classNameic elementor-grid"
                      role="list"
                    >
                      <article
                        className="elementor-post elementor-grid-item post-120726 post type-post status-publish format-standard has-post-thumbnail hentry category-blog category-featured tag-be-confident tag-confidence tag-heart tag-inspiration tag-more-confidence tag-more-confident tag-motivation tag-self-confidence"
                        role="listitem"
                        style={{ cursor: "pointer" }}
                      >
                        <a
                          className="elementor-post__thumbnail__link"
                          type="button"
                          tabIndex={-1}
                          onClick={() => handleVideo("videos/exercises/e1.mp4")}
                        >
                          <div className="elementor-post__thumbnail">
                            <img
                              loading="lazy"
                              decoding="async"
                              width={768}
                              height={512}
                              src="images/e1.jpg"
                              className="attachment-medium_large size-medium_large wp-image-120727"
                              alt="Excercise one"
                              sizes="(max-width: 768px) 100vw, 768px"
                            />
                          </div>
                        </a>
                        <div className="elementor-post__text"></div>
                      </article>
                      <article
                        className="elementor-post elementor-grid-item post-120694 post type-post status-publish format-standard has-post-thumbnail hentry category-featured tag-guided-meditation-for-anxiety tag-meditation tag-performance-anxiety"
                        role="listitem"
                        style={{ cursor: "pointer" }}
                      >
                        <a
                          className="elementor-post__thumbnail__link"
                          tabIndex={-1}
                          type="button"
                          onClick={() => handleVideo("videos/exercises/e2.mp4")}
                        >
                          <div className="elementor-post__thumbnail">
                            <img
                              loading="lazy"
                              decoding="async"
                              width={768}
                              height={512}
                              src="images/e2.jpg"
                              className="attachment-medium_large size-medium_large wp-image-120695"
                              alt="Exercise two"
                              sizes="(max-width: 768px) 100vw, 768px"
                            />
                          </div>
                        </a>
                        <div className="elementor-post__text"></div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="elementor-element elementor-element-866a350 e-con-full e-flex e-con e-parent"
              data-id="866a350"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-ec35719 e-con-full e-flex e-con e-child"
                data-id="ec35719"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-8deb065 e-flex e-con-boxed e-con e-child"
                  data-id="8deb065"
                  data-element_type="container"
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-99d5b7f e-con-full e-flex e-con e-child"
                      data-id="99d5b7f"
                      data-element_type="container"
                    ></div>
                    <div
                      className="elementor-element elementor-element-06bc105 e-con-full e-flex e-con e-child"
                      data-id="06bc105"
                      data-element_type="container"
                    >
                      <div
                        className="elementor-element elementor-element-a9b6f3e mob_txt_sm elementor-widget elementor-widget-heading"
                        data-id="a9b6f3e"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Want to feel more confident this minute?
                          </h2>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-36b8c24 elementor-widget elementor-widget-heading"
                        data-id="36b8c24"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <p className="elementor-heading-title elementor-size-default">
                            ACCESS THIS SHORT GUIDED MEDITATION TO CALM YOUR
                            NERVOUS SYSTEM AND FEEL MORE CONFIDENT NOW.
                          </p>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-48a4206 ck_form_1 elementor-widget elementor-widget-shortcode"
                        data-id="48a4206"
                        data-element_type="widget"
                        data-widget_type="shortcode.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-shortcode">
                            <form
                              id="sib_signup_form_1"
                              className="sib_signup_form"
                            >
                              <a href="#" className="sib-default-btn">
                                Download
                              </a>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <VideoPlayer
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={videoUrl}
      />
      <UserLandingModal
        isOpen={isUserModalOpen}
        setIsOpen={setIsUserModalOpen}
      />
    </>
  );
}

export default Home;
