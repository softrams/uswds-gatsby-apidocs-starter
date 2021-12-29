import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="usa-hero" aria-label="Introduction">
      <div className="grid-container">
        <div className="usa-hero__callout">
          <h1 className="usa-hero__heading">
            <span className="usa-hero__heading--alt">Now Available:</span>
            New Payer Data Exchange API
          </h1>
          <p>
            Exchange data seamlessly with other payers for timely benefits
            coordination or transitions.
          </p>

          <Link to="/overview" className="usa-button">
            <span>Learn More</span>
          </Link>
        </div>
      </div>
    </section>

    <section className="grid-container usa-section">
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-4">
          <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
            A secure and standard way to exchange critical healthcare data
          </h2>
        </div>
        <div className="tablet:grid-col-8 usa-prose">
          <p>
            We are dedicated to enhancing and protecting the health and
            well-being of all Americans and improve patient access in the U.S.
            health care system.
          </p>
          <p>
            We are building an ecosystem of API products that allows Patients,
            Medicare Providers, Accountable Care Organizations, Alternative
            Payment Model participants and others in the eco-system to exchange
            healthcare data using the Fast Healthcare Interoperability Resources
            (FHIR&reg;).
          </p>
        </div>
      </div>
    </section>

    <section className="usa-graphic-list usa-section usa-section--dark">
      <div className="grid-container">
        <div className="usa-graphic-list__row grid-row grid-gap">
          <div className="usa-media-block tablet:grid-col">
            <img
              className="usa-media-block__img"
              src="/assets/img/correct8.svg"
              alt="Alt text"
            />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">
                <Link to="/docs/payer-to-payer">
                  Payer Data Exchange (PDex) API
                </Link>
              </h2>
              <p>
                Exchange data seamlessly with other payers for timely benefits
                coordination or transitions.
              </p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <img
              className="usa-media-block__img"
              src="/assets/img/chevron-right-white.svg"
              alt="Alt text"
            />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">
                More APIs coming soon.
              </h2>
              <p>
                Please check back later as more CMS FHIR&reg; APIs coming soon
              </p>
            </div>
          </div>
        </div>
        {/* <div className="usa-graphic-list__row grid-row grid-gap">
          <div className="usa-media-block tablet:grid-col">
            <img
              className="usa-media-block__img"
              src="/assets/img/circle-124.png"
              alt="Alt text"
            />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">
                Participant Management API
              </h2>
              <p>
                For anything you want to highlight here, understand what your
                users know now, and what activity or impression you want from
                them after they see it.
              </p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <img
              className="usa-media-block__img"
              src="/assets/img/circle-124.png"
              alt="Alt text"
            />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">
                Agreement Management API
              </h2>
              <p>
                In addition to your goal, find out your users’ goals. What do
                they want to know or do that supports your mission? Use these
                headings to show those.
              </p>
            </div>
          </div>
        </div>
        <div className="usa-graphic-list__row grid-row grid-gap">
          <div className="usa-media-block tablet:grid-col">
            <img
              className="usa-media-block__img"
              src="/assets/img/circle-124.png"
              alt="Alt text"
            />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">User Management API</h2>
              <p>
                For anything you want to highlight here, understand what your
                users know now, and what activity or impression you want from
                them after they see it.
              </p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <img
              className="usa-media-block__img"
              src="/assets/img/circle-124.png"
              alt="Alt text"
            />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">And more</h2>
              <p>
                In addition to your goal, find out your users’ goals. What do
                they want to know or do that supports your mission? Use these
                headings to show those.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>

    <section id="test-section-id" className="usa-section">
      <div className="grid-container">
        <h2 className="font-heading-xl margin-y-0">Getting Started</h2>
        <p className="usa-intro">
          We have assembled resources for every team to get started and leverage
          FHIR APIs. Choose the best first step to get started.
        </p>

        <ul class="usa-card-group">
          <li class="tablet:grid-col-6 usa-card">
            <div class="usa-card__container">
              <header class="usa-card__header">
                <h2 class="usa-card__heading">New to APIs?</h2>
              </header>
              <div class="usa-card__body">
                <p>
                  An API, or Application Programming Interface, is a set of
                  rules that define how applications or devices can connect to
                  and communicate with each other. Check out these handy
                  resources to learn more about APIs.
                </p>
              </div>
              <div class="usa-card__footer">
                <Link to="/guides/api-resources">
                  <button class="usa-button">View API Resources</button>
                </Link>
              </div>
            </div>
          </li>

          <li class="tablet:grid-col-6 usa-card">
            <div class="usa-card__container">
              <header class="usa-card__header">
                <h2 class="usa-card__heading">New to FHIR?</h2>
              </header>
              <div class="usa-card__body">
                <p>
                  FHIR&reg;, Fast Healthcare Interoperability Resources is a
                  standard describing data formats and elements and an
                  Application Programming Interface (API) for exchanging
                  electronic health records.
                </p>
              </div>
              <div class="usa-card__footer">
                <Link to="/guides/fhir-resources">
                  <button class="usa-button">View FHIR Resources</button>
                </Link>
              </div>
            </div>
          </li>

          <li class="tablet:grid-col-6 usa-card">
            <div class="usa-card__container">
              <header class="usa-card__header">
                <h2 class="usa-card__heading">Ready to go?</h2>
              </header>
              <div class="usa-card__body">
                <p>
                  At CMS, we are building an eco-system of FHIR API products. If
                  you are already familiar with APIs and FHIR eco-system, learn
                  more about the new <b>Payer Data Exchange (PDex) API</b> to
                  get started.
                </p>
              </div>
              <div class="usa-card__footer">
                <Link to="/overview">
                  <button class="usa-button">Get Started</button>
                </Link>
              </div>
            </div>
          </li>

          <li class="tablet:grid-col-6 usa-card">
            <div class="usa-card__container">
              <header class="usa-card__header">
                <h2 class="usa-card__heading">Got some questions?</h2>
              </header>
              <div class="usa-card__body">
                <p>
                  Got any questions about APIs or FHIR in general, or Payer to
                  Payer API in particular, check out the Frequently Asked
                  Questions page or see the <b>Support</b> page to reach out to
                  us or community at large.
                </p>
              </div>
              <div class="usa-card__footer">
                <Link to="/guides/support">
                  <button class="usa-button">Visit Support Page</button>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section id="disclaimer-section-id" class="grid-container">
      <div class="usa-alert usa-alert--warning">
        <div class="usa-alert__body">
          <h4 class="usa-alert__heading">
            This is just a sample template meant for illustration purposes
          </h4>
          <p class="usa-alert__text">
            This work is NOT endorsed, sponsored, funded or supported in anyway
            by the US Government or Centers for Medicare & Medicaid Services or
            any other agency. Our work is an open source project and initially
            built by our teams at Softrams and is being shared with the
            community. We support Federal Agencies and build empowering digital
            services for them. So we built this as a template to help our teams
            and other Federal Agencies and Federal Contractors build their own
            API documentation.
          </p>
          <p class="usa-alert__text">
            Use of Centers for Medicare & Medicaid Services in the template is
            strictly meant for illustration purposes only, to showcase how
            multiple API products can be supported as an integrated API Hub for
            better, consistent and seamless experience.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
