import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState<Record<string, string>>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Save value keyed by input name
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("entry.507336294", formData.name); // Replace with your Google Form IDs
    data.append("entry.859540346", formData.email);
    data.append("entry.372968168", formData.message);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScuCpmaZSCNLp8xHYjO_LvB892-ZJVPTNZO1J3SvEBFcgd0-w/formResponse",
      {
        method: "POST",
        body: data,
        mode: "no-cors",
      }
    )
      .then(() => setStatus("Message sent!"))
      .catch(() => setStatus("Error sending message"));

    setFormData({ name: "", email: "", message: "" }); // Reset form
    alert("Form submitted successfully!");
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
          <div
            className="elementor-element elementor-element-66e4111 e-con-full e-flex e-con e-parent"
            data-id="66e4111"
            data-element_type="container"
            data-settings="{background_background:classNameic,animation:fadein}"
          >
            <div
              className="elementor-element elementor-element-11e9090 e-flex e-con-boxed e-con e-child"
              data-id="11e9090"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-4143326 elementor-widget elementor-widget-heading"
                  data-id="4143326"
                  data-element_type="widget"
                  data-settings="{_animation:fadeinup}"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h1 className="elementor-heading-title elementor-size-default">
                      let's <span className="scribble">talk</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-56693e98 e-flex e-con-boxed e-con e-parent"
            data-id="56693e98"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-6a0d1ac8 e-con-full e-flex e-con e-child"
                data-id="6a0d1ac8"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-fc3f253 elementor-widget elementor-widget-heading"
                  data-id="fc3f253"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      <span className="scribble">I'd love</span> to hear from
                      you{" "}
                    </h2>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-29e5b6b1 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                  data-id="29e5b6b1"
                  data-element_type="widget"
                  data-widget_type="divider.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-956573c elementor-widget elementor-widget-shortcode"
                  data-id="956573c"
                  data-element_type="widget"
                  data-widget_type="shortcode.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                      <div
                        className="gf_browser_chrome gform_wrapper gform_legacy_markup_wrapper gform-theme--no-framework"
                        data-form-theme="legacy"
                        data-form-index="0"
                        id="gform_wrapper_1"
                      >
                        <div className="gform_heading">
                          <p className="gform_description"></p>
                        </div>
                        {/* <form
                          id="gform_1"
                          data-formid="1"
                          onSubmit={handleSubmit}
                        >
                          <div className="gform-body gform_body">
                            <ul
                              id="gform_fields_1"
                              className="gform_fields top_label form_sublabel_below description_below validation_below"
                            >
                              <li
                                id="field_1_1"
                                className="gfield gfield--type-text gfield--input-type-text gf_left_half gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                              >
                                <label
                                  className="gfield_label gform-field-label"
                                  htmlFor="input_1_1"
                                >
                                  Name
                                  <span className="gfield_required">
                                    <span className="gfield_required gfield_required_asterisk">
                                      *
                                    </span>
                                  </span>
                                </label>
                                <div className="ginput_container ginput_container_text">
                                  <input
                                    name="name"
                                    id="input_1_1"
                                    type="text"
                                    value=""
                                    className="large"
                                    placeholder="Name"
                                    aria-required="true"
                                    aria-invalid="false"
                                    onChange={handleOnChange}
                                  />
                                </div>
                              </li>
                              <li
                                id="field_1_2"
                                className="gfield gfield--type-email gfield--input-type-email gf_right_half gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                              >
                                <label
                                  className="gfield_label gform-field-label"
                                  htmlFor="input_1_2"
                                >
                                  Email
                                  <span className="gfield_required">
                                    <span className="gfield_required gfield_required_asterisk">
                                      *
                                    </span>
                                  </span>
                                </label>
                                <div className="ginput_container ginput_container_email">
                                  <input
                                    name="email"
                                    id="input_1_2"
                                    type="email"
                                    value=""
                                    className="large"
                                    placeholder="Email"
                                    aria-required="true"
                                    aria-invalid="false"
                                    onChange={handleOnChange}
                                  />
                                </div>
                              </li>
                              <li
                                id="field_1_3"
                                className="gfield gfield--type-textarea gfield--input-type-textarea gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                              >
                                <label
                                  className="gfield_label gform-field-label"
                                  htmlFor="input_1_3"
                                >
                                  Message
                                  <span className="gfield_required">
                                    <span className="gfield_required gfield_required_asterisk">
                                      *
                                    </span>
                                  </span>
                                </label>
                                <div className="ginput_container ginput_container_textarea">
                                  <textarea
                                    name="message"
                                    id="input_1_3"
                                    className="textarea medium"
                                    placeholder="Message"
                                    aria-required="true"
                                    aria-invalid="false"
                                    rows={10}
                                    cols={50}
                                    onChange={handleOnChange}
                                  ></textarea>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="gform-footer gform_footer top_label">
                            {" "}
                            <button
                              type="submit"
                              id="gform_submit_button_1"
                              className="gform_button button"
                            >
                              Submit
                            </button>
                          </div>
                        </form> */}
                        <iframe
                          src="https://docs.google.com/forms/d/e/1FAIpQLScuCpmaZSCNLp8xHYjO_LvB892-ZJVPTNZO1J3SvEBFcgd0-w/viewform?embedded=true"
                          width="640"
                          height="900"
                          frameBorder={0}
                          marginHeight={0}
                          marginWidth={0}
                        >
                          Loading…
                        </iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
