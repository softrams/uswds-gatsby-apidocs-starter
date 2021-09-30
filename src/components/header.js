import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle, pages }) => (
  <header className="usa-header usa-header--basic">
    <div className="usa-nav-container">
      <div className="usa-navbar">
        <div className="usa-logo" id="basic-logo">
          <em className="usa-logo__text">
            <Link to="/" aria-label="Home">
              FHIR&reg; API Hub
            </Link>
          </em>
        </div>
        <button className="usa-menu-btn">Menu</button>
      </div>
      <nav aria-label="Primary navigation" className="usa-nav">
        <button className="usa-nav__close">
          <img src="/assets/img/close.svg" alt="close" />
        </button>
        <ul className="usa-nav__primary usa-accordion">
          <li className="usa-nav__primary-item">
            <Link
              to="/overview"
              className="usa-nav__link"
              activeClassName="usa-current"
            >
              <span>Overview</span>
            </Link>
          </li>

          <li className="usa-nav__primary-item">
            <button
              className="usa-accordion__button usa-nav__link"
              aria-expanded="false"
              aria-controls="basic-nav-section-two"
            >
              <span>Guides</span>
            </button>
            <ul id="basic-nav-section-two" className="usa-nav__submenu" hidden>
              {pages
                .filter(x => x.node.frontmatter.path.includes("/guides/"))
                .map(edge => {
                  return (
                    <li className="usa-nav__submenu-item">
                      <Link to={edge.node.frontmatter.path}>
                        <span>{edge.node.frontmatter.title}</span>
                      </Link>
                    </li>
                  )
                })}
            </ul>
          </li>

          <li className="usa-nav__primary-item">
            <button
              className="usa-accordion__button usa-nav__link"
              aria-expanded="false"
              aria-controls="basic-nav-section-three"
            >
              <span>API Reference</span>
            </button>
            <ul
              id="basic-nav-section-three"
              className="usa-nav__submenu"
              hidden
            >
              {pages
                .filter(x => x.node.frontmatter.path.includes("/docs/"))
                .map(edge => {
                  return (
                    <li className="usa-nav__submenu-item">
                      <Link to={edge.node.frontmatter.path}>
                        <span>{edge.node.frontmatter.title}</span>
                      </Link>
                    </li>
                  )
                })}
            </ul>
          </li>

          <li className="usa-nav__primary-item">
            <Link
              to="/swagger"
              className="usa-nav__link"
              activeClassName="usa-current"
              target="_blank"
            >
              <span>API Sandbox</span>
            </Link>
          </li>

          <li className="usa-nav__primary-item">
            <Link
              to="/guides/support"
              className="usa-nav__link"
              activeClassName="usa-current"
            >
              <span>Support</span>
            </Link>
          </li>

          {/* <li className="usa-nav__primary-item">
            <Link to="/terms" className="usa-nav__link">
              <span>Terms</span>
            </Link>
          </li> */}
        </ul>
        {/* <form className="usa-search usa-search--small " role="search">
          <label className="usa-sr-only" htmlFor="basic-search-field-small">
            Search small
          </label>
          <input
            className="usa-input"
            id="basic-search-field-small"
            type="search"
            name="search"
          />
          <button className="usa-button" type="submit">
            <span className="usa-sr-only">Search</span>
          </button>
        </form> */}
      </nav>
    </div>
  </header>
)

export default Header
