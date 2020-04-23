import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const SwaggerUIPage = () => (
  <Layout>
    <SEO title="API Specification" />
    <h1>API Sandbox</h1>
    <div className="usa-sections">
      <SwaggerUI url="/assets/hpms-pilot-api-spec.yaml" docExpansion="list" />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SwaggerUIPage
