import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidenav from "../components/sidenav"

const SecondPage = () => (
  <Layout>
    <SEO title="Overview" />
    <div className="usa-section">
      <div className="grid-container">
        <div className="grid-row grid-gap">
          <Sidenav />
          <main
            className="usa-layout-docs__main desktop:grid-col-9 usa-prose usa-layout-docs"
            id="page-content"
          >
            <h1>Overview</h1>

            <p className="usa-intro">
              Payer Data Exchange (PDex) API allows exchange of data seamlessly
              with other payers for timely benefits coordination or transitions.
            </p>

            <div
              class="usa-summary-box"
              role="region"
              aria-labelledby="summary-box-key-information"
            >
              <div class="usa-summary-box__body">
                <h3
                  class="usa-summary-box__heading"
                  id="summary-box-key-information"
                >
                  Key Usecase
                </h3>
                <div class="usa-summary-box__text">
                  When a beneficiary switches from one payer to another, new
                  payer systems can use this API as part of onboarding the
                  beneficiary to retrieve beneficiary data to co-ordinate the
                  transition.
                </div>
              </div>
            </div>

            <h2 class="site-preview-heading">Getting Started</h2>
            <p>
              Are your teams/team members new to APIs? new to FHIR APIs? or
              already well conversant with FHIR APIs, we have resources to help
              you get started.
            </p>

            <ol class="usa-process-list">
              <li class="usa-process-list__item">
                <h4 class="usa-process-list__heading">
                  Learn About API Capabilities
                </h4>
                <p class="margin-top-05">
                  Learn more about the Payer Data Exchange (PDex) API and
                  capabilities
                </p>
                <ul>
                  <li>
                    <Link to="/docs/payer-to-payer">
                      Payer Data Exchange (PDex) API
                    </Link>
                  </li>
                  <li>
                    <Link to="/guides/schema">
                      Conformance, Data and Resources Schema
                    </Link>
                  </li>
                  <li>
                    Learn about <Link to="/guides/versioning">Versions</Link>{" "}
                    Supported
                  </li>
                  <li>
                    List of <Link to="/docs/endpoints">End Points</Link>
                  </li>
                </ul>
              </li>
              <li class="usa-process-list__item">
                <h4 class="usa-process-list__heading">
                  Try Before You Build In Sandbox Environment
                </h4>
                <p>Try APIs in sandbox environment to see them in action</p>
                <ul>
                  <li>
                    Download{" "}
                    <a
                      href="/assets/PayerToPayerAPI.postman_collection.json"
                      download
                    >
                      Postman collection
                    </a>{" "}
                    to try APIs via Postman
                  </li>
                  <li>
                    Alternately, you may{" "}
                    <Link to="/docs/payer-to-payer">
                      try API from command line
                    </Link>
                  </li>
                  <li>
                    Or you may{" "}
                    <a href="https://YOUR-API-END-POINT/openapi/ui/">
                      try API within browser via Swagger UI
                    </a>
                  </li>
                </ul>
                <div class="usa-alert usa-alert--info usa-alert--no-icon">
                  <div class="usa-alert__body">
                    <p class="usa-alert__text">
                      <b>We recommend</b> using <b>Postman</b> for API testing,
                      as it is very easy and visual to work with sample data to
                      quickly try out.
                    </p>
                  </div>
                </div>
              </li>
              <li class="usa-process-list__item">
                <h4 class="usa-process-list__heading">
                  Build Your Application And Test
                </h4>
                <p>Build API application or integration and test.</p>
                <ul>
                  <li>
                    Download{" "}
                    <a href="https://YOUR-API-END-POINT/openapi/ui/">
                      Open API Specification
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/swagger-api/swagger-codegen">
                      Generate
                    </a>{" "}
                    starter code in most common programming languages to build
                    API applications
                  </li>
                  <li>Build application and Test with Sandbox environment</li>
                </ul>
              </li>
              <li class="usa-process-list__item">
                <h4 class="usa-process-list__heading">
                  Request API Credentials
                </h4>
                <p>
                  Request API credentials for the Payer Data Exchange (PDex) API
                  in Production environment.
                </p>
                <ul>
                  <li>
                    <Link to="guides/authn">Request API Crendentials</Link>
                  </li>
                </ul>
              </li>

              <li class="usa-process-list__item">
                <h4 class="usa-process-list__heading">Go Live </h4>
                <p>
                  Verify with smoke testing in Production Environment, go live
                  and celebrate{" "}
                  <span role="img" aria-label="celebrate">
                    🎉
                  </span>
                  .
                </p>
              </li>
            </ol>
          </main>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
