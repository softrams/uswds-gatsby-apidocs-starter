import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div>
      <h6>Default</h6>
      <button className="usa-button ">Default</button>
      <button className="usa-button  usa-button--hover">Hover</button>
      <button className="usa-button  usa-button--active">Active</button>
      <button className="usa-button  usa-focus">Focus</button>
      <button className="usa-button " disabled>
        Disabled
      </button>
      <button className="usa-button  usa-button--unstyled">
        Unstyled button
      </button>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
