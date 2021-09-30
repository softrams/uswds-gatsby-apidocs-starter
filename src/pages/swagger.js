import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Loadable from "@loadable/component"
import "swagger-ui-react/swagger-ui.css"

const SwaggerUI = Loadable(() => import("swagger-ui-react"))

const SwaggerUIPage = ({ data }) => (
  <Layout>
    <SEO title="API Specification" />
    <div className="grid-container">
      {/* <h1>API Sandbox</h1> */}
      <div className="usa-sections">
        {/* URL or path to local file in assets folder */}
        <SwaggerUI url="/assets/swagger.json" docExpansion="list" />
      </div>
    </div>
  </Layout>
)

export default SwaggerUIPage
