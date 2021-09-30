import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidenav from "../components/sidenav"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="usa-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            {frontmatter.sidenav && <Sidenav />}
            <main
              className="usa-layout-docs__main desktop:grid-col-9 usa-prose usa-layout-docs"
              id="page-content"
            >
              <h1>{frontmatter.title}</h1>
              <div className="blog-post-container">
                <div className="blog-post">
                  <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        sidenav
      }
    }
  }
`
