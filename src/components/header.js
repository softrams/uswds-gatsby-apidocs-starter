import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="usa-header usa-header--basic">
    <div className="usa-nav-container">
      <div className="usa-navbar">
        <div className="usa-logo" id="basic-logo">
          <em className="usa-logo__text">
            <Link to="/" aria-label="Home">
              HPMS API
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
              className="usa-accordion__button usa-nav__link  usa-current"
              aria-expanded="false"
              aria-controls="basic-nav-section-one"
            >
              <span>Current section</span>
            </button>
            <ul id="basic-nav-section-one" className="usa-nav__submenu" hidden>
              <li className="usa-nav__submenu-item">
                <a href="/">Navigation link</a>
              </li>
              <li className="usa-nav__submenu-item">
                <a href="/">Navigation link</a>
              </li>
              <li className="usa-nav__submenu-item">
                <a href="/">Navigation link</a>
              </li>
            </ul>
          </li>
          <li className="usa-nav__primary-item">
            <button
              className="usa-accordion__button usa-nav__link"
              aria-expanded="false"
              aria-controls="basic-nav-section-two"
            >
              <span>Section</span>
            </button>
            <ul id="basic-nav-section-two" className="usa-nav__submenu" hidden>
              <li className="usa-nav__submenu-item">
                <a href="#">Navigation link</a>
              </li>
              <li className="usa-nav__submenu-item">
                <a href="#">Navigation link</a>
              </li>
              <li className="usa-nav__submenu-item">
                <a href="#">Navigation link</a>
              </li>
            </ul>
          </li>
          <li className="usa-nav__primary-item">
            <Link to="/swagger" className="usa-nav__link">
              <span>Sandbox</span>
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

  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
