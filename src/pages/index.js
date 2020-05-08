import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="usa-hero" aria-label="Introduction">
      <div className="grid-container">
        <div className="usa-hero__callout">
          <h1 className="usa-hero__heading">
            <span className="usa-hero__heading--alt">Hero callout:</span>Bring
            attention to a project priority
          </h1>
          <p>
            Support the callout with some short explanatory text. You don’t need
            more than a couple of sentences.
          </p>
          <a className="usa-button" href="javascript:void(0)">
            Call to action
          </a>
        </div>
      </div>
    </section>

    <section className="grid-container usa-section">
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-4">
          <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
            A tagline highlights your approach
          </h2>
        </div>
        <div className="tablet:grid-col-8 usa-prose">
          <p>
            The tagline should inspire confidence and interest, focusing on the
            value that your overall approach offers to your audience. Use a
            heading typeface and keep your tagline to just a few words, and
            don’t confuse or mystify.
          </p>
          <p>
            Use the right side of the grid to explain the tagline a bit more.
            What are your goals? How do you do your work? Write in the present
            tense, and stay brief here. People who are interested can find
            details on internal pages.
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
              src="/assets/img/circle-124.png"
              alt="Alt text"
            />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">
                Graphic headings can vary.
              </h2>
              <p>
                Graphic headings can be used a few different ways, depending on
                what your landing page is for. Highlight your values, specific
                program areas, or results.
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
                Stick to 6 or fewer words.
              </h2>
              <p>
                Keep body text to about 30 words. They can be shorter, but try
                to be somewhat balanced across all four. It creates a clean
                appearance with good spacing.
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
              <h2 className="usa-graphic-list__heading">
                Never highlight anything without a goal.
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
                Could also have 2 or 6.
              </h2>
              <p>
                In addition to your goal, find out your users’ goals. What do
                they want to know or do that supports your mission? Use these
                headings to show those.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="test-section-id" className="usa-section">
      <div className="grid-container">
        <h2 className="font-heading-xl margin-y-0">Section heading</h2>
        <p className="usa-intro">
          Everything up to this point should help people understand your agency
          or project: who you are, your goal or mission, and how you approach
          it. Use this section to encourage them to act. Describe why they
          should get in touch here, and use an active verb on the button below.
          “Get in touch,” “Learn more,” and so on.
        </p>
        <a className="usa-button usa-button--big" href="#">
          Call to action
        </a>
      </div>
    </section>
  </Layout>
)

export default IndexPage
