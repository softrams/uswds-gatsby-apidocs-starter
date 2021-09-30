import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"
/*
  The sidenav is not loaded by default on the main pages. To include this navigation you can
  add "sidenav: true" in the front-matter of your markdown pages
*/

const Sidenav = () => {

    const data = useStaticQuery(graphql`
    query SideNavQuery {
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
  <aside className="usa-layout-docs-sidenav desktop:grid-col-3 padding-bottom-4">
    <nav>
      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <Link to="/" activeClassName="usa-current">Home</Link>
        </li>
        <li className="usa-sidenav__item">
          <Link to="/overview" activeClassName="usa-current">Overview</Link>
        </li>
        <li className="usa-sidenav__item">
          <Link to="/guides" activeClassName="usa-current" partiallyActive={true}>Guides</Link>
          <ul class="usa-sidenav__sublist">
        {data.allMarkdownRemark.edges.filter(x=> x.node.frontmatter.path.includes('/guides/')).map(edge => {
                return (
                  <li className="usa-sidenav__item">
                    <Link to={edge.node.frontmatter.path} activeClassName="usa-current">
                      <span>{edge.node.frontmatter.title}</span>
                    </Link>
                  </li>
                )
              })}
                      </ul>
        </li>
        <li className="usa-sidenav__item">
          <Link to="/docs" activeClassName="usa-current" partiallyActive={true}>API Reference</Link>
          <ul class="usa-sidenav__sublist">
        {data.allMarkdownRemark.edges.filter(x=> x.node.frontmatter.path.includes('/docs/')).map(edge => {
                return (
                  <li className="usa-sidenav__item">
                    <Link to={edge.node.frontmatter.path} activeClassName="usa-current">
                      <span>{edge.node.frontmatter.title}</span>
                    </Link>
                  </li>
                )
              })}
                      </ul>
        </li>
        <li className="usa-sidenav__item">
          <Link to="/swagger">API Sandbox</Link>
        </li>
      </ul>
    </nav>
  </aside>
)};

export default Sidenav;