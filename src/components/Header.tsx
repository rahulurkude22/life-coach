import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header
        className="site-header header-main-layout-1 ast-primary-menu-enabled ast-logo-title-inline ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline"
        id="masthead"
        itemScope={true}
        itemID="#masthead"
      >
        <div id="ast-desktop-header" data-toggle-type="dropdown">
          <div className="ast-main-header-wrap main-header-bar-wrap ">
            <div
              className="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item"
              data-section="section-primary-header-builder"
            >
              <div
                className="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container"
                data-section="section-primary-header-builder"
              >
                <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                  <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                    <div
                      className="ast-builder-layout-element ast-flex site-header-focus-item"
                      data-section="title_tagline"
                    >
                      <div className="site-branding ast-site-identity">
                        <span className="site-logo-img">
                          <NavLink
                            to="/"
                            className="custom-logo-link"
                            rel="home"
                            aria-current="page"
                          >
                            <img
                              width="250"
                              height="48"
                              src="images/alisha_jaiswal_logo.png"
                              className="custom-logo"
                              alt="Alisha Jaiswal Ratina logo"
                              decoding="async"
                              srcSet="images/alisha_jaiswal_logo.png 1x, images/alisha_jaiswal_logo.png 2x"
                              sizes="(max-width: 250px) 100vw, 250px"
                            />
                          </NavLink>
                        </span>
                      </div>
                      {/* .site-branding */}
                    </div>
                  </div>
                  <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                    <div
                      className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item"
                      data-section="section-hb-menu-1"
                    >
                      <div className="ast-main-header-bar-alignment">
                        <div className="main-header-bar-navigation">
                          <nav
                            className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                            id="primary-site-navigation-desktop"
                            aria-label="Primary Site Navigation"
                            itemType="https://schema.org/SiteNavigationElement"
                            itemScope={true}
                          >
                            <div className="main-navigation ast-inline-flex">
                              <ul
                                id="ast-hf-menu-1"
                                className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border stack-on-mobile ast-mega-menu-enabled"
                              >
                                <li
                                  id="menu-item-118924"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118924"
                                >
                                  <NavLink to="/about" className="menu-link">
                                    <span className="ast-icon icon-arrow">
                                      <svg
                                        className="ast-arrow-svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        x="0px"
                                        y="0px"
                                        width="26px"
                                        height="16.043px"
                                        viewBox="57 35.171 26 16.043"
                                        enableBackground="new 57 35.171 26 16.043"
                                        xmlSpace="preserve"
                                      >
                                        <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                      </svg>
                                    </span>
                                    <span className="menu-text">About</span>
                                  </NavLink>
                                </li>
                                <li
                                  id="menu-item-120577"
                                  className="menu-border menu-item menu-item-type-post_type menu-item-object-page menu-item-120577"
                                >
                                  <NavLink
                                    to="/work-together"
                                    className="menu-link"
                                  >
                                    <span className="ast-icon icon-arrow">
                                      <svg
                                        className="ast-arrow-svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        x="0px"
                                        y="0px"
                                        width="26px"
                                        height="16.043px"
                                        viewBox="57 35.171 26 16.043"
                                        enableBackground="new 57 35.171 26 16.043"
                                        xmlSpace="preserve"
                                      >
                                        <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                      </svg>
                                    </span>
                                    <span className="menu-text">
                                      WORK WITH ME
                                    </span>
                                  </NavLink>
                                </li>
                                {/* <li
                                  id="menu-item-119500"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-119500"
                                >
                                  <NavLink to="/book" className="menu-link">
                                    <span className="ast-icon icon-arrow">
                                      <svg
                                        className="ast-arrow-svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        x="0px"
                                        y="0px"
                                        width="26px"
                                        height="16.043px"
                                        viewBox="57 35.171 26 16.043"
                                        enableBackground="new 57 35.171 26 16.043"
                                        xmlSpace="preserve"
                                      >
                                        <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                      </svg>
                                    </span>
                                    <span className="menu-text">Books</span>
                                  </NavLink>
                                </li> */}
                                {/* <li
                                  id="menu-item-118918"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118918"
                                >
                                  <NavLink to="/blog" className="menu-link">
                                    <span className="ast-icon icon-arrow">
                                      <svg
                                        className="ast-arrow-svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        x="0px"
                                        y="0px"
                                        width="26px"
                                        height="16.043px"
                                        viewBox="57 35.171 26 16.043"
                                        enableBackground="new 57 35.171 26 16.043"
                                        xmlSpace="preserve"
                                      >
                                        <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                      </svg>
                                    </span>
                                    <span className="menu-text">Blog</span>
                                  </NavLink>
                                </li> */}
                                <li
                                  id="menu-item-118920"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118920"
                                >
                                  <NavLink to="/praise" className="menu-link">
                                    <span className="ast-icon icon-arrow">
                                      <svg
                                        className="ast-arrow-svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        x="0px"
                                        y="0px"
                                        width="26px"
                                        height="16.043px"
                                        viewBox="57 35.171 26 16.043"
                                        enableBackground="new 57 35.171 26 16.043"
                                        xmlSpace="preserve"
                                      >
                                        <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                      </svg>
                                    </span>
                                    <span className="menu-text">
                                      Success Stories
                                    </span>
                                  </NavLink>
                                </li>
                                {/* <li
                                  id="menu-item-118928"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118928"
                                >
                                  <NavLink
                                    to="/giving-back"
                                    className="menu-link"
                                  >
                                    <span className="ast-icon icon-arrow">
                                      <svg
                                        className="ast-arrow-svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        x="0px"
                                        y="0px"
                                        width="26px"
                                        height="16.043px"
                                        viewBox="57 35.171 26 16.043"
                                        enableBackground="new 57 35.171 26 16.043"
                                        xmlSpace="preserve"
                                      >
                                        <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                      </svg>
                                    </span>
                                    <span className="menu-text">
                                      Giving Back
                                    </span>
                                  </NavLink>
                                </li> */}
                                <li
                                  id="menu-item-118919"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118919"
                                >
                                  <NavLink to="/contact" className="menu-link">
                                    <span className="ast-icon icon-arrow">
                                      <svg
                                        className="ast-arrow-svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        x="0px"
                                        y="0px"
                                        width="26px"
                                        height="16.043px"
                                        viewBox="57 35.171 26 16.043"
                                        enableBackground="new 57 35.171 26 16.043"
                                        xmlSpace="preserve"
                                      >
                                        <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                      </svg>
                                    </span>
                                    <span className="menu-text">Contact</span>
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Main Header Bar Wrap */}
        <div
          id="ast-mobile-header"
          className="ast-mobile-header-wrap "
          data-type="dropdown"
        >
          <div className="ast-main-header-wrap main-header-bar-wrap">
            <div
              className="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default"
              data-section="section-transparent-header"
            >
              <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                  <div
                    className="ast-builder-layout-element ast-flex site-header-focus-item"
                    data-section="title_tagline"
                  >
                    <div
                      className="site-branding ast-site-identity"
                      itemType="https://schema.org/Organization"
                      itemScope={true}
                    >
                      <span className="site-logo-img">
                        <NavLink
                          to="/"
                          className="custom-logo-link"
                          rel="home"
                          aria-current="page"
                        >
                          <img
                            width="250"
                            height="48"
                            src="images/alisha_jaiswal_logo.png"
                            className="custom-logo"
                            alt="Alisha Jaiswal Ratina logo"
                            decoding="async"
                            srcSet="images/alisha_jaiswal_logo.png 1x, images/alisha_jaiswal_logo.png 2x"
                            sizes="(max-width: 250px) 100vw, 250px"
                          />
                        </NavLink>
                      </span>
                    </div>
                    {/* .site-branding */}
                  </div>
                </div>
                <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                  <div
                    className="ast-builder-layout-element ast-flex site-header-focus-item"
                    data-section="section-header-mobile-trigger"
                  >
                    <div className="ast-button-wrap">
                      <button
                        type="button"
                        className="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-minimal"
                        aria-expanded="false"
                        aria-label="Main menu toggle"
                      >
                        <span className="screen-reader-text">Main Menu</span>
                        <span className="mobile-menu-toggle-icon">
                          <span
                            aria-hidden="true"
                            className="ahfb-svg-iconset ast-inline-flex svg-baseline"
                          >
                            <svg
                              className="ast-mobile-svg ast-menu2-svg"
                              fill="currentColor"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={28}
                              viewBox="0 0 24 28"
                            >
                              <path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"></path>
                            </svg>
                          </span>
                          <span
                            aria-hidden="true"
                            className="ahfb-svg-iconset ast-inline-flex svg-baseline"
                          >
                            <svg
                              className="ast-mobile-svg ast-close-svg"
                              fill="currentColor"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                            >
                              <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                            </svg>
                          </span>{" "}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ast-mobile-header-content content-align-flex-start ">
            <div
              className="ast-builder-menu-mobile ast-builder-menu ast-builder-menu-mobile-focus-item ast-builder-layout-element site-header-focus-item"
              data-section="section-header-mobile-menu"
            >
              <div className="ast-main-header-bar-alignment">
                <div className="main-header-bar-navigation">
                  <nav
                    className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                    id="ast-mobile-site-navigation"
                    aria-label="Site Navigation: Main Menu"
                    itemType="https://schema.org/SiteNavigationElement"
                    itemScope={true}
                  >
                    <div className="main-navigation">
                      <ul
                        id="ast-hf-mobile-menu"
                        className="main-header-menu ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile ast-mega-menu-enabled"
                      >
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118924">
                          <NavLink to="/about" className="menu-link">
                            <span className="ast-icon icon-arrow">
                              <svg
                                className="ast-arrow-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="26px"
                                height="16.043px"
                                viewBox="57 35.171 26 16.043"
                                enableBackground="new 57 35.171 26 16.043"
                                xmlSpace="preserve"
                              >
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                              </svg>
                            </span>
                            <span className="menu-text">About</span>
                          </NavLink>
                        </li>
                        <li className="menu-border menu-item menu-item-type-post_type menu-item-object-page menu-item-120577">
                          <NavLink to="/work-together" className="menu-link">
                            <span className="ast-icon icon-arrow">
                              <svg
                                className="ast-arrow-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="26px"
                                height="16.043px"
                                viewBox="57 35.171 26 16.043"
                                enableBackground="new 57 35.171 26 16.043"
                                xmlSpace="preserve"
                              >
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                              </svg>
                            </span>
                            <span className="menu-text">WORK WITH ME</span>
                          </NavLink>
                        </li>
                        {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-119500">
                          <NavLink to="/book" className="menu-link">
                            <span className="ast-icon icon-arrow">
                              <svg
                                className="ast-arrow-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="26px"
                                height="16.043px"
                                viewBox="57 35.171 26 16.043"
                                enableBackground="new 57 35.171 26 16.043"
                                xmlSpace="preserve"
                              >
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                              </svg>
                            </span>
                            <span className="menu-text">Books</span>
                          </NavLink>
                        </li> */}
                        {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118918">
                          <NavLink to="/blog" className="menu-link">
                            <span className="ast-icon icon-arrow">
                              <svg
                                className="ast-arrow-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="26px"
                                height="16.043px"
                                viewBox="57 35.171 26 16.043"
                                enableBackground="new 57 35.171 26 16.043"
                                xmlSpace="preserve"
                              >
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                              </svg>
                            </span>
                            <span className="menu-text">Blog</span>
                          </NavLink>
                        </li> */}
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118920">
                          <NavLink to="/praise" className="menu-link">
                            <span className="ast-icon icon-arrow">
                              <svg
                                className="ast-arrow-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="26px"
                                height="16.043px"
                                viewBox="57 35.171 26 16.043"
                                enableBackground="new 57 35.171 26 16.043"
                                xmlSpace="preserve"
                              >
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                              </svg>
                            </span>
                            <span className="menu-text">Success Stories</span>
                          </NavLink>
                        </li>
                        {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118928">
                          <NavLink to="/giving-back" className="menu-link">
                            <span className="ast-icon icon-arrow">
                              <svg
                                className="ast-arrow-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="26px"
                                height="16.043px"
                                viewBox="57 35.171 26 16.043"
                                enableBackground="new 57 35.171 26 16.043"
                                xmlSpace="preserve"
                              >
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                              </svg>
                            </span>
                            <span className="menu-text">Giving Back</span>
                          </NavLink>
                        </li> */}
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118919">
                          <NavLink to="/contact" className="menu-link">
                            <span className="ast-icon icon-arrow">
                              <svg
                                className="ast-arrow-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="26px"
                                height="16.043px"
                                viewBox="57 35.171 26 16.043"
                                enableBackground="new 57 35.171 26 16.043"
                                xmlSpace="preserve"
                              >
                                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                              </svg>
                            </span>
                            <span className="menu-text">Contact</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header
          id="ast-fixed-header"
          className="site-header header-main-layout-1 ast-primary-menu-enabled ast-logo-title-inline ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline"
          style={{ visibility: "hidden" }}
          data-type="fixed-header"
        >
          <div id="ast-desktop-header" data-toggle-type="dropdown">
            <div className="ast-main-header-wrap main-header-bar-wrap ">
              <div
                className="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item"
                data-section="section-primary-header-builder"
              >
                <div
                  className="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container"
                  data-section="section-primary-header-builder"
                >
                  <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                    <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                      <div
                        className="ast-builder-layout-element ast-flex site-header-focus-item"
                        data-section="title_tagline"
                      >
                        <div
                          className="site-branding ast-site-identity"
                          itemType="https://schema.org/Organization"
                          itemScope={true}
                        >
                          <span className="site-logo-img">
                            <a
                              href="/"
                              className="custom-logo-link"
                              rel="home"
                              aria-current="page"
                            >
                              <img
                                width="250"
                                height="48"
                                src="images/alisha_jaiswal_logo.png"
                                className="custom-logo"
                                alt="Alisha Jaiswal Ratina logo"
                                decoding="async"
                                srcSet="images/alisha_jaiswal_logo.png 1x, images/alisha_jaiswal_logo.png 2x"
                                sizes="(max-width: 250px) 100vw, 250px"
                              />
                            </a>
                          </span>
                        </div>
                        {/* .site-branding */}
                      </div>
                    </div>
                    <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                      <div
                        className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item"
                        data-section="section-hb-menu-1"
                      >
                        <div className="ast-main-header-bar-alignment">
                          <div className="main-header-bar-navigation">
                            <nav
                              className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                              id="primary-site-navigation-desktop-sticky"
                              aria-label="Primary Site Navigation"
                              itemType="https://schema.org/SiteNavigationElement"
                              itemScope={true}
                            >
                              <div className="main-navigation ast-inline-flex">
                                <ul
                                  id="ast-hf-menu-1-sticky"
                                  className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border stack-on-mobile ast-mega-menu-enabled"
                                >
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118924">
                                    <NavLink to="/about" className="menu-link">
                                      <span className="ast-icon icon-arrow">
                                        <svg
                                          className="ast-arrow-svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          version="1.1"
                                          x="0px"
                                          y="0px"
                                          width="26px"
                                          height="16.043px"
                                          viewBox="57 35.171 26 16.043"
                                          enableBackground="new 57 35.171 26 16.043"
                                          xmlSpace="preserve"
                                        >
                                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                        </svg>
                                      </span>
                                      <span className="menu-text">About</span>
                                    </NavLink>
                                  </li>
                                  <li className="menu-border menu-item menu-item-type-post_type menu-item-object-page menu-item-120577">
                                    <NavLink
                                      to="/work-together"
                                      className="menu-link"
                                    >
                                      <span className="ast-icon icon-arrow">
                                        <svg
                                          className="ast-arrow-svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          version="1.1"
                                          x="0px"
                                          y="0px"
                                          width="26px"
                                          height="16.043px"
                                          viewBox="57 35.171 26 16.043"
                                          enableBackground="new 57 35.171 26 16.043"
                                          xmlSpace="preserve"
                                        >
                                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                        </svg>
                                      </span>
                                      <span className="menu-text">
                                        WORK WITH ME
                                      </span>
                                    </NavLink>
                                  </li>
                                  {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-119500">
                                    <NavLink to="/book" className="menu-link">
                                      <span className="ast-icon icon-arrow">
                                        <svg
                                          className="ast-arrow-svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          version="1.1"
                                          x="0px"
                                          y="0px"
                                          width="26px"
                                          height="16.043px"
                                          viewBox="57 35.171 26 16.043"
                                          enableBackground="new 57 35.171 26 16.043"
                                          xmlSpace="preserve"
                                        >
                                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                        </svg>
                                      </span>
                                      <span className="menu-text">Books</span>
                                    </NavLink>
                                  </li> */}
                                  {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118918">
                                    <NavLink to="/blog" className="menu-link">
                                      <span className="ast-icon icon-arrow">
                                        <svg
                                          className="ast-arrow-svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          version="1.1"
                                          x="0px"
                                          y="0px"
                                          width="26px"
                                          height="16.043px"
                                          viewBox="57 35.171 26 16.043"
                                          enableBackground="new 57 35.171 26 16.043"
                                          xmlSpace="preserve"
                                        >
                                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                        </svg>
                                      </span>
                                      <span className="menu-text">Blog</span>
                                    </NavLink>
                                  </li> */}
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118920">
                                    <NavLink to="/praise" className="menu-link">
                                      <span className="ast-icon icon-arrow">
                                        <svg
                                          className="ast-arrow-svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          version="1.1"
                                          x="0px"
                                          y="0px"
                                          width="26px"
                                          height="16.043px"
                                          viewBox="57 35.171 26 16.043"
                                          enableBackground="new 57 35.171 26 16.043"
                                          xmlSpace="preserve"
                                        >
                                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                        </svg>
                                      </span>
                                      <span className="menu-text">
                                        Success Stories
                                      </span>
                                    </NavLink>
                                  </li>
                                  {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118928">
                                    <NavLink
                                      to="/giving-back"
                                      className="menu-link"
                                    >
                                      <span className="ast-icon icon-arrow">
                                        <svg
                                          className="ast-arrow-svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          version="1.1"
                                          x="0px"
                                          y="0px"
                                          width="26px"
                                          height="16.043px"
                                          viewBox="57 35.171 26 16.043"
                                          enableBackground="new 57 35.171 26 16.043"
                                          xmlSpace="preserve"
                                        >
                                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                        </svg>
                                      </span>
                                      <span className="menu-text">
                                        Giving Back
                                      </span>
                                    </NavLink>
                                  </li> */}
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118919">
                                    <NavLink
                                      to="/contact"
                                      className="menu-link"
                                    >
                                      <span className="ast-icon icon-arrow">
                                        <svg
                                          className="ast-arrow-svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          version="1.1"
                                          x="0px"
                                          y="0px"
                                          width="26px"
                                          height="16.043px"
                                          viewBox="57 35.171 26 16.043"
                                          enableBackground="new 57 35.171 26 16.043"
                                          xmlSpace="preserve"
                                        >
                                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                        </svg>
                                      </span>
                                      <span className="menu-text">Contact</span>
                                    </NavLink>
                                  </li>
                                </ul>
                              </div>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Main Header Bar Wrap */}
          <div
            id="ast-mobile-header"
            className="ast-mobile-header-wrap "
            data-type="dropdown"
          >
            <div className="ast-main-header-wrap main-header-bar-wrap">
              <div
                className="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default"
                data-section="section-transparent-header"
              >
                <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                  <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                    <div
                      className="ast-builder-layout-element ast-flex site-header-focus-item"
                      data-section="title_tagline"
                    >
                      <div
                        className="site-branding ast-site-identity"
                        itemType="https://schema.org/Organization"
                        itemScope={true}
                      >
                        <span className="site-logo-img">
                          <NavLink
                            to="/"
                            className="custom-logo-link"
                            rel="home"
                            aria-current="page"
                          >
                            <img
                              width="250"
                              height="48"
                              src="images/alisha_jaiswal_logo.png"
                              className="custom-logo"
                              alt="Alisha Jaiswal Ratina logo"
                              decoding="async"
                              srcSet="images/alisha_jaiswal_logo.png 1x, images/alisha_jaiswal_logo.png 2x"
                              sizes="(max-width: 250px) 100vw, 250px"
                            />
                          </NavLink>
                        </span>
                      </div>
                      {/* .site-branding */}
                    </div>
                  </div>
                  <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                    <div
                      className="ast-builder-layout-element ast-flex site-header-focus-item"
                      data-section="section-header-mobile-trigger"
                    >
                      <div className="ast-button-wrap">
                        <button
                          type="button"
                          className="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-minimal"
                          aria-expanded="false"
                          aria-label="Main menu toggle"
                        >
                          <span className="screen-reader-text">Main Menu</span>
                          <span className="mobile-menu-toggle-icon">
                            <span
                              aria-hidden="true"
                              className="ahfb-svg-iconset ast-inline-flex svg-baseline"
                            >
                              <svg
                                className="ast-mobile-svg ast-menu2-svg"
                                fill="currentColor"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={28}
                                viewBox="0 0 24 28"
                              >
                                <path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"></path>
                              </svg>
                            </span>
                            <span
                              aria-hidden="true"
                              className="ahfb-svg-iconset ast-inline-flex svg-baseline"
                            >
                              <svg
                                className="ast-mobile-svg ast-close-svg"
                                fill="currentColor"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                              >
                                <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                              </svg>
                            </span>{" "}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ast-mobile-header-content content-align-flex-start ">
              <div
                className="ast-builder-menu-mobile ast-builder-menu ast-builder-menu-mobile-focus-item ast-builder-layout-element site-header-focus-item"
                data-section="section-header-mobile-menu"
              >
                <div className="ast-main-header-bar-alignment">
                  <div className="main-header-bar-navigation">
                    <nav
                      className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                      id="ast-mobile-site-navigation"
                      aria-label="Site Navigation: Main Menu"
                      itemType="https://schema.org/SiteNavigationElement"
                      itemScope={true}
                    >
                      <div className="main-navigation">
                        <ul
                          id="ast-hf-mobile-menu"
                          className="main-header-menu ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile ast-mega-menu-enabled"
                        >
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118924">
                            <NavLink to="/about" className="menu-link">
                              <span className="ast-icon icon-arrow">
                                <svg
                                  className="ast-arrow-svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="26px"
                                  height="16.043px"
                                  viewBox="57 35.171 26 16.043"
                                  enableBackground="new 57 35.171 26 16.043"
                                  xmlSpace="preserve"
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                              </span>
                              <span className="menu-text">About</span>
                            </NavLink>
                          </li>
                          <li className="menu-border menu-item menu-item-type-post_type menu-item-object-page menu-item-120577">
                            <NavLink to="/work-together" className="menu-link">
                              <span className="ast-icon icon-arrow">
                                <svg
                                  className="ast-arrow-svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="26px"
                                  height="16.043px"
                                  viewBox="57 35.171 26 16.043"
                                  enableBackground="new 57 35.171 26 16.043"
                                  xmlSpace="preserve"
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                              </span>
                              <span className="menu-text">WORK WITH ME</span>
                            </NavLink>
                          </li>
                          {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-119500">
                            <NavLink to="/book" className="menu-link">
                              <span className="ast-icon icon-arrow">
                                <svg
                                  className="ast-arrow-svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="26px"
                                  height="16.043px"
                                  viewBox="57 35.171 26 16.043"
                                  enableBackground="new 57 35.171 26 16.043"
                                  xmlSpace="preserve"
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                              </span>
                              <span className="menu-text">Books</span>
                            </NavLink>
                          </li> */}
                          {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118918">
                            <NavLink to="/blog" className="menu-link">
                              <span className="ast-icon icon-arrow">
                                <svg
                                  className="ast-arrow-svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="26px"
                                  height="16.043px"
                                  viewBox="57 35.171 26 16.043"
                                  enableBackground="new 57 35.171 26 16.043"
                                  xmlSpace="preserve"
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                              </span>
                              <span className="menu-text">Blog</span>
                            </NavLink>
                          </li> */}
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118920">
                            <NavLink to="/praise" className="menu-link">
                              <span className="ast-icon icon-arrow">
                                <svg
                                  className="ast-arrow-svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="26px"
                                  height="16.043px"
                                  viewBox="57 35.171 26 16.043"
                                  enableBackground="new 57 35.171 26 16.043"
                                  xmlSpace="preserve"
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                              </span>
                              <span className="menu-text">Success Stories</span>
                            </NavLink>
                          </li>
                          {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118928">
                            <NavLink to="/giving-back" className="menu-link">
                              <span className="ast-icon icon-arrow">
                                <svg
                                  className="ast-arrow-svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="26px"
                                  height="16.043px"
                                  viewBox="57 35.171 26 16.043"
                                  enableBackground="new 57 35.171 26 16.043"
                                  xmlSpace="preserve"
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                              </span>
                              <span className="menu-text">Giving Back</span>
                            </NavLink>
                          </li> */}
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118919">
                            <NavLink to="/contact" className="menu-link">
                              <span className="ast-icon icon-arrow">
                                <svg
                                  className="ast-arrow-svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="26px"
                                  height="16.043px"
                                  viewBox="57 35.171 26 16.043"
                                  enableBackground="new 57 35.171 26 16.043"
                                  xmlSpace="preserve"
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                              </span>
                              <span className="menu-text">Contact</span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* #astra-fixed-header */}
      </header>
      {/* #masthead */}
    </>
  );
}

export default Header;
