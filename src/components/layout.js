/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { withPrefix, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../../static/assets/css/uswds.min.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
        edges {
          node {
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      <section className="usa-banner" aria-label="Official government website">
        <div className="usa-accordion">
          <header className="usa-banner__header">
            <div className="usa-banner__inner">
              <div className="grid-col-auto">
                <img
                  className="usa-banner__header-flag"
                  src="/assets/img/us_flag_small.png"
                  alt="U.S. flag"
                />
              </div>
              <div className="grid-col-fill tablet:grid-col-auto">
                <p className="usa-banner__header-text">
                  An official website of the United States government
                </p>
                <p className="usa-banner__header-action" aria-hidden="true">
                  Here’s how you know
                </p>
              </div>
              <button
                className="usa-accordion__button usa-banner__button"
                aria-expanded="false"
                aria-controls="gov-banner"
              >
                <span className="usa-banner__button-text">
                  Here’s how you know
                </span>
              </button>
            </div>
          </header>
          <div
            className="usa-banner__content usa-accordion__content"
            id="gov-banner"
            hidden
          >
            <div className="grid-row grid-gap-lg">
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img
                  className="usa-banner__icon usa-media-block__img"
                  src="/assets/img/icon-dot-gov.svg"
                  alt="Dot gov"
                />
                <div className="usa-media-block__body">
                  <p>
                    <strong>The .gov means it’s official.</strong>
                    <br />
                    Federal government websites often end in .gov or .mil.
                    Before sharing sensitive information, make sure you’re on a
                    federal government site.
                  </p>
                </div>
              </div>
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img
                  className="usa-banner__icon usa-media-block__img"
                  src="/assets/img/icon-https.svg"
                  alt="Https"
                />
                <div className="usa-media-block__body">
                  <p>
                    <strong>The site is secure.</strong>
                    <br />
                    The <strong>https://</strong> ensures that you are
                    connecting to the official website and that any information
                    you provide is encrypted and transmitted securely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="usa-overlay"></div>

      <Header
        siteTitle={data.site.siteMetadata.title}
        pages={data.allMarkdownRemark.edges}
      />
      <div>
        <main id="main-content">{children}</main>
        <footer className="usa-footer usa-footer--slim">
          <div className="grid-container usa-footer__return-to-top">
            <a href="#">Return to top</a>
          </div>
          <div className="usa-footer__primary-section">
            <div className="usa-footer__primary-container grid-row">
              <div className="mobile-lg:grid-col-8">
                <nav className="usa-footer__nav" aria-label="Footer navigation">
                  <ul className="grid-row grid-gap">
                    <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                      <a
                        className="usa-footer__primary-link"
                        href="javascript:void(0);"
                      >
                        Primary link
                      </a>
                    </li>
                    <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                      <a
                        className="usa-footer__primary-link"
                        href="javascript:void(0);"
                      >
                        Primary link
                      </a>
                    </li>
                    <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                      <a
                        className="usa-footer__primary-link"
                        href="javascript:void(0);"
                      >
                        Primary link
                      </a>
                    </li>
                    <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                      <a
                        className="usa-footer__primary-link"
                        href="javascript:void(0);"
                      >
                        Primary link
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-lg:grid-col-4">
                <address className="usa-footer__address">
                  <div className="grid-row grid-gap">
                    <div className="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                      <div className="usa-footer__contact-info">
                        <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
                      </div>
                    </div>
                    <div className="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                      <div className="usa-footer__contact-info">
                        <a href="mailto:info@agency.gov">info@agency.gov</a>
                      </div>
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </div>
          <div className="usa-footer__secondary-section">
            <div className="grid-container">
              <div className="usa-footer__logo grid-row grid-gap-2">
                <div className="grid-col-auto">
                  <img
                    className="usa-footer__logo-img"
                    src="/assets/img/logo-img.png"
                    alt=""
                  />
                </div>
                <div className="grid-col-auto">
                  <h3 className="usa-footer__logo-heading">Name of Agency</h3>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Helmet>
        <script
          src={withPrefix("/assets/js/uswds.min.js")}
          type="text/javascript"
        />
      </Helmet>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
