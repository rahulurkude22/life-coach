import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModalWithVideo = (url: string) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };
  return (
    <div id="content" className="site-content">
      <div className="ast-container">
        <div
          data-elementor-type="wp-page"
          data-elementor-id="2"
          className="elementor elementor-2"
          data-elementor-post-type="page"
        >
          <div
            className="elementor-element elementor-element-6f54aba e-con-full e-flex e-con e-parent"
            data-id="6f54aba"
            data-element_type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div
              className="elementor-element elementor-element-c0fac07 e-con-full e-flex e-con e-child"
              data-id="c0fac07"
              data-element_type="container"
              data-settings="background_background:classNameic,animation:fadein"
            >
              <div
                className="elementor-element elementor-element-d2d0b4f banner_area e-flex e-con-boxed e-con e-child"
                data-id="d2d0b4f"
                data-element_type="container"
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-ee367df elementor-widget-mobile__width-inherit elementor-absolute elementor-widget elementor-widget-heading"
                    data-id="ee367df"
                    data-element_type="widget"
                    id="c_white"
                    data-settings='{"_animation":"fadeInUp","_position":"absolute"}'
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h1 className="elementor-heading-title elementor-size-default">
                        <span className="txt-sm-banner">my</span> story
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-ec88419 e-flex e-con-boxed e-con e-parent"
            data-id="ec88419"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-095a496 e-con-full e-flex e-con e-child"
                data-id="095a496"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-b8f1272 title_ct elementor-widget elementor-widget-heading"
                  data-id="b8f1272"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Hi, I'm &nbsp;
                      <br />
                      <span className="scribble">Alisha</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-150a0fe e-con-full e-flex e-con e-child"
                data-id="150a0fe"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-446441c1 elementor-widget elementor-widget-text-editor"
                  data-id="446441c1"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      ICF Certified Life Coach • Stress Management Expert • NLP
                      Practitioner
                    </p>

                    <p>
                      <strong>“Engineer turned Coach”</strong>
                    </p>
                    <p>
                      As a former engineer, I don&#39;t deal in vague promises.
                      I bring a structured, results-driven approach to personal
                      growth. Together, we&#39;ll diagnose what&#39;s not
                      working, design a clear blueprint for your ideal life, and
                      build it with actionable steps.
                    </p>
                    <p>
                      <strong>
                        “Alisha&#39;s Story: From Engineer to Coach”
                      </strong>
                    </p>
                    <p>
                      As an Engineer, Alisha lived in a world of logic, where
                      every problem had a solution.
                    </p>
                    <p>
                      But for those same ten years, she struggled with one
                      problem that had no logical solution: becoming a mom.
                    </p>
                    <p>
                      She felt lost, overwhelmed, and blamed herself. The logic
                      that made her a great engineer was breaking her heart.
                    </p>
                    <p>
                      One day, she realized she couldn&#39;t engineer her way
                      into happiness. She had to change her entire approach.
                    </p>

                    <p>
                      She discovered coaching, which gave her the tools to heal
                      her mindset, set boundaries, and find joy again. Her
                      painful journey taught her the most valuable lesson: how
                      to rebuild a life with purpose and peace.
                    </p>
                    <p>
                      Now, as a coach, she combines her logical mind with a
                      compassionate heart. She helps others—especially women and
                      moms—navigate their own challenges, silence self-doubt,
                      and find balance.
                    </p>
                    <p>
                      She guides them not as an expert with all the answers, but
                      as someone who has been there, and believes fiercely in
                      their ability to heal and thrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-ff877f3 e-flex e-con-boxed e-con e-parent"
            data-id="ff877f3"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-67cb199 elementor-widget elementor-widget-heading"
                data-id="67cb199"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    <span className="scribble">Why</span>{" "}
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-5c35fdb7 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                data-id="5c35fdb7"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p>
                    Over [X] years of coaching impact Mentored leaders, CEOs and
                    change-makers across [regions / countries] Trusted by
                    professionals, teams, and emerging leaders I blend
                    time-tested frameworks, inner work practices, and high
                    performance strategies to catalyze sustainable growth in all
                    domains.
                  </p>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-57489e23 elementor-align-center elementor-widget elementor-widget-button"
                data-id="57489e23"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a
                      className="elementor-button elementor-button-link elementor-size-sm"
                      type="button"
                      onClick={() => openModalWithVideo("videos/intro.mp4")}
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-icon">
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fas-play-circle"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
                          </svg>{" "}
                        </span>
                        <span className="elementor-button-text">
                          PLAY VIDEO
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-b46b4c4 e-flex e-con-boxed e-con e-parent"
            data-id="b46b4c4"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-f7e99af e-con-full e-flex e-con e-child"
                data-id="f7e99af"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-789654c8 elementor-widget elementor-widget-image"
                  data-id="789654c8"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      fetchPriority="high"
                      decoding="async"
                      width="1440"
                      height="900"
                      src="images/about/about-1.jpg"
                      className="attachment-2048x2048 size-2048x2048 wp-image-119936"
                      alt="Alisha Jaiswal talking about Education"
                      sizes="(max-width: 1440px) 100vw, 1440px"
                    />
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-e218254 e-con-full e-flex e-con e-child"
                data-id="e218254"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-7bfae2b elementor-widget elementor-widget-heading"
                  data-id="7bfae2b"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      <span className="scribble">
                        Alisha&#39;s Story: From Engineer to Coach
                      </span>
                    </h2>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-1281f90 elementor-widget elementor-widget-text-editor"
                  data-id="1281f90"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      I’m passionate about training and empowering leaders to
                      see that the change we need now is within us. I call this
                      ‘educating’ because my work follows a non-linear path of
                      “educing” (bringing forth) YOUR genius. I believe that YOU
                      are the answer you are seeking, and that when you begin
                      <span style={{ fontWeight: 400 }}>
                        {" "}
                        to align enhanced mind-body states with a compelling
                        vision and strategy, we all benefit.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-e0e72df e-flex e-con-boxed e-con e-parent"
            data-id="e0e72df"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-6062ff1 e-con-full e-flex e-con e-child"
                data-id="6062ff1"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-ad35caf elementor-widget elementor-widget-heading"
                  data-id="ad35caf"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      <span className="scribble">Speaking</span>
                    </h2>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-bb3fbce elementor-widget elementor-widget-text-editor"
                  data-id="bb3fbce"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      From the TEDx stage to keynoting for leading companies and
                      universities, it’s an honor to share my message with
                      audiences I love! My most recent keynote for a Women In
                      Business gala event was profiled as{" "}
                      <i>
                        “unforgettable to see the pure joy, laughter, and love
                        radiating around the room during Cortney’s time on
                        stage. Cortney absolutely exceeded every expectation we
                        had for the event and truly taught us to get out of our
                        comfort zones, dig deep and be in the moment.”
                      </i>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-59cd1a8 e-con-full e-flex e-con e-child"
                data-id="59cd1a8"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-b0f46c1 elementor-widget elementor-widget-image"
                  data-id="b0f46c1"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      decoding="async"
                      width="547"
                      height="365"
                      src="images/about/about-2.png"
                      className="attachment-2048x2048 size-2048x2048 wp-image-119939"
                      alt=""
                      sizes="(max-width: 547px) 100vw, 547px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-f964bec e-flex e-con-boxed e-con e-parent"
            data-id="f964bec"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-06013e2 e-con-full e-flex e-con e-child"
                data-id="06013e2"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-b79bfa9 elementor-widget elementor-widget-image"
                  data-id="b79bfa9"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="661"
                      height="456"
                      src="images/about/about-3.png"
                      className="attachment-full size-full wp-image-119958"
                      alt=""
                      sizes="(max-width: 661px) 100vw, 661px"
                    />
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-fbf6ec9 e-con-full e-flex e-con e-child"
                data-id="fbf6ec9"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-aa145bc elementor-widget elementor-widget-heading"
                  data-id="aa145bc"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      <span className="scribble">Writing</span>
                    </h2>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-d6696f0 elementor-widget elementor-widget-text-editor"
                  data-id="d6696f0"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      <i>
                        Change Starts Within You: Unlock the Confidence to Lead
                        with Intuition
                      </i>
                      is a book that will challenge you to{" "}
                      <span style={{ fontWeight: 400 }}>
                        rethink success, redefine sustainability, and expand
                        your potential. The simple, direct advice in the book
                        was acclaimed as “self-help without being preachy” and
                        “‘Eat, Pray, Love’ meets the ‘4-Hour Workweek” and it
                        was named one of Inc.com’s “26 favorite books for high
                        achievers,” right alongside works by Richard Branson and
                        Tony Robbins. My writing also appears in many mainstream
                        business and entrepreneurial publications, such as{" "}
                        <i>HuffPost</i>, <i>Success Magazine,</i> and{" "}
                        <em>Create & Cultivate</em>
                      </span>
                      <span style={{ fontWeight: 400 }}>.&nbsp;</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-81cd045 e-flex e-con-boxed e-con e-parent"
            data-id="81cd045"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-a3078e6 e-con-full e-flex e-con e-child"
                data-id="a3078e6"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-2e72ee1 elementor-widget elementor-widget-image"
                  data-id="2e72ee1"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="1200"
                      height="1200"
                      src="images/about/about-4.jpg"
                      className="attachment-full size-full wp-image-119938"
                      alt=""
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-1a0c672 e-con-full e-flex e-con e-child"
                data-id="1a0c672"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-4b66a8f elementor-widget elementor-widget-heading"
                  data-id="4b66a8f"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      On a <span className="scribble">personal note…</span>
                    </h2>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-849ad5a elementor-widget elementor-widget-text-editor"
                  data-id="849ad5a"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      I LOVE<span style={{ fontWeight: 400 }}>�m</span>
                      <span style={{ fontWeight: 400 }}>
                        editating and running in the hills; homemade pasta;
                        geeking out on neuroscience and quantum theory;
                        traveling and living globally; studying languages and
                        etymology; singing and playing my guitar in local cafés;
                        composing music; dancing like it’s 1999; into-the-wild
                        adventures with friends; drawing and playing ukulele
                        with my daughter Gaia; lots of self-pampering,
                        especially soaking in a hot bath with a great book …{" "}
                      </span>
                      <span style={{ fontWeight: 400 }}>
                        <img
                          decoding="async"
                          draggable="false"
                          role="img"
                          className="emoji"
                          alt="😊"
                          src="images/1f60a.svg"
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoPlayer
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={videoUrl}
      />
    </div>
  );
}

export default About;
