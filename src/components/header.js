import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle, pages }) => (
  <header className="usa-header usa-header--basic">
    <div className="usa-nav-container">
      <div className="usa-navbar">
        <div className="usa-logo" id="basic-logo">
          <em className="usa-logo__text">
            <Link to="/" aria-label="Home">
              Awesome Project
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
            <button
              className="usa-accordion__button usa-nav__link"
              aria-expanded="false"
              aria-controls="basic-nav-section-two"
            >
              <span>Pages</span>
            </button>
            <ul id="basic-nav-section-two" className="usa-nav__submenu" hidden>
              {pages.map(edge => {
                return (
                  <li className="usa-nav__submenu-item">
                    <a href={edge.node.frontmatter.path}>
                      {edge.node.frontmatter.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </li>
          <li className="usa-nav__primary-item">
            <Link to="/page-2" className="usa-nav__link">
              <span>Documentation</span>
            </Link>
          </li>
          <li className="usa-nav__primary-item">
            <Link to="/swagger" className="usa-nav__link">
              <span>API Sandbox</span>
            </Link>
          </li>
          <li className="usa-nav__primary-item">
            <Link to="/terms" className="usa-nav__link">
              <span>Terms</span>
            </Link>
          </li>
        </ul>
        <form className="usa-search usa-search--small " role="search">
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
        </form>
      </nav>
    </div>
  </header>
)

export default Header
