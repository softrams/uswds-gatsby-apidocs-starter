import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TermsPage = () => (
  <Layout>
    <SEO title="Terms and Conditions" />
        <div className="usa-section">
      <div className="grid-container">
        <div className="grid-row grid-gap">
          <div className="usa-layout-docs__sidenav desktop:grid-col-3">
            <nav aria-label="Secondary navigation" className="position-fixed">
              <ul className="usa-sidenav">
                <li className="usa-sidenav__item">
                  <a href="/">Overview</a>
                </li>
                <li className="usa-sidenav__item">
                  <a href="/">Scope</a>
                </li>
                <li className="usa-sidenav__item">
                  <a href="/">Data Rights and Usage</a>
                </li>
                <li className="usa-sidenav__item">
                  <a href="/">Attribution</a>
                </li>
                <li className="usa-sidenav__item">
                  <a href="/">Service Management</a>
                </li>
                <li className="usa-sidenav__item">
                  <a href="/">Liability</a>
                </li>
                <li className="usa-sidenav__item">
                  <a href="/">Resources</a>
                </li>
              </ul>
            </nav>
          </div>

          <main
            className="usa-layout-docs__main desktop:grid-col-9 usa-prose usa-layout-docs"
            id="main-content"
          >
            <section class="usa-site-alert usa-site-alert--info usa-site-alert--no-icon" aria-label="Site alert">
                <div class="usa-alert" >
                    <div class="usa-alert__body">
                    <h3 class="usa-alert__heading">This is the current, active Terms of Service</h3>
                    <p class="usa-alert__text">You can <a href="#">review the previous version here. </a></p>
                    </div>
                </div>
            </section>
            <h2 id="section-heading-h2">Overview</h2>
            <p>If you’ve found yourself on this page, it’s because you’re interested in building software that helps the more than 53 million Medicare beneficiaries in the United States. Thank you.

Please read our Blue Button 2.0 Application Programming Interface (API) Terms of Service carefully and post any questions you may have to the Google Group.</p>
            <h2 id="section-heading-h2">Scope</h2>
            <p>By accessing or using Centers for Medicare & Medicaid Services (CMS) Blue Button 2.0 APIs and other developer services (collectively, Blue Button 2.0 APIs), you are agreeing to the terms below, as well as any relevant sections of CMS’s Privacy Policies (collectively, Terms).</p>
            <h2 id="section-heading-h2">Data Rights and Usage</h2>
            <h3>Accounts/Registration</h3>
            <p>If you are using the Blue Button 2.0 APIs on behalf of an entity, you represent and warrant that you have authority to bind that entity to the Terms and by accepting the Terms, you are doing so on behalf of that entity (and all references to “you” in the Terms refer to you and that entity).</p>
            <p>In order to access the Blue Button 2.0 APIs you will be required to provide certain information (such as identification or contact details) as part of the registration process for the Blue Button 2.0 APIs, or as part of your continued use of the Blue Button 2.0 APIs. Any registration information you give to CMS must be accurate and up to date and you must inform CMS promptly of any updates so that we can keep you informed of any changes to the Blue Button 2.0 APIs or the Terms, which may impact your usage of the Blue Button 2.0 APIs.</p>
            <p>Developer credentials (such as passwords, keys, tokens, and client IDs) issued to you by CMS are intended to be used only by you and to identify any software which you are using with the Blue Button 2.0 APIs. You agree to keep your developer credentials confidential and make reasonable efforts to prevent and discourage other persons or entities from accessing or using your developer credentials. Developer credentials may not be embedded in open source projects.</p>
            <p>You may only access (or attempt to access) the Blue Button 2.0 APIs by the means described in the documentation of those APIs. If CMS assigns you developer credentials, you must use them with the applicable APIs. CMS may revoke your developer credentials for inappropriate use as determined by CMS.</p>
            <p>If you are granted production application credentials for the Blue Button 2.0 APIs, you may only use those credentials with the application that passed the production access review process. CMS may revoke your production application credentials if you use or attempt to use them with another application or product that has not been reviewed and approved by CMS.</p>
            <h3>Activities and Purposes</h3>
            <p>You may use the Blue Button 2.0 APIs to develop a service to search, display, analyze, retrieve, view and otherwise obtain certain information or data about Medicare beneficiaries from CMS, specifically, Medicare Parts A, B and D claims data.</p>
            <h3>Privacy</h3>
            <p>Information or data about Medicare beneficiaries available from the Blue Button 2.0 APIs is subject to the Privacy Act of 1974, the Health Insurance Portability and Accountability Act of 1996 (HIPAA), and other laws, and require special safeguarding. You must comply with all applicable federal and state laws regarding the protection and disclosure of information obtained through a Blue Button 2.0 API.</p>
            <p>You further acknowledge that when records regarding an individual are obtained through a Blue Button 2.0 API, you may not disclose any information or data regarding the individual to any other individuals or third parties without specific, explicit consent from the individual or his or her authorized representative. The terms “individual” and “record” have the meanings given in the Privacy Act at 5 U.S.C. § 552a(a). Click here if you would like more information about the application of the Privacy Act at CMS.</p>

            <h2 id="section-heading-h2">Attribution</h2>
            <p>When using content, data, documentation, code, and related materials associated with the Blue Button 2.0 APIs in your own work, we require that proper credit be given. All services that utilize or access the Blue Button 2.0 APIs or content, data, documentation, code, and related materials associated with the Blue Button 2.0 APIs must display the following notice prominently within the application: </p>
            <p>“This product uses the Blue Button 2.0 APIs but is not endorsed or certified by the Centers for Medicare & Medicaid Services or the U.S. Department of Health and Human Services.”</p>
            <p>You may use CMS’s name or logo in order to identify the source of API content subject to these Terms. You may not use the CMS name, logo, or the like to imply endorsement of any product, service, or entity, not-for-profit, commercial or otherwise.</p>
            <a href="https://www.healthit.gov/topic/health-it-initiatives/blue-button/logo-and-usage">HealthIT.gov logo and usage guidelines</a>
            <h2 id="section-heading-h2">Service Management</h2>
            <h3>Right to Limit</h3>
            <p>Your use of the Blue Button 2.0 APIs will be subject to certain limitations on access, calls, or use as set forth within these Terms or otherwise provided by CMS. These limitations are designed to manage the load on the system, promote equitable access, and prevent abuse, and these limitations may be adjusted without notice, as deemed necessary by CMS. If CMS reasonably believes that you have attempted to exceed or circumvent these limits, your ability to use the Blue Button 2.0 APIs may be temporarily or permanently blocked. CMS may monitor your use of the Blue Button 2.0 APIs to, for example, improve the service or to ensure compliance with these Terms.</p>
            <h3>Service Termination</h3>
            <p>If you wish to terminate your agreement with these Terms, you may do so by refraining from further use of the Blue Button 2.0 APIs. CMS reserves the right (though not the obligation) to: (1) refuse to provide the Blue Button 2.0 APIs to you, if CMS determines that use violates any CMS policy, including these Terms; or (2) terminate or deny you access to and use of all or part of the Blue Button 2.0 APIs at any time for any other reason which in its sole discretion it deems necessary in order to prevent abuse. You may petition CMS to regain access to the Blue Button 2.0 APIs through the support email address provided by CMS for the Blue Button 2.0 APIs. If CMS determines in its sole discretion that the circumstances which led to the refusal to provide the Blue Button 2.0 APIs or terminate access to the Blue Button 2.0 APIs no longer exist, then CMS may restore your access. All provisions of these Terms, shall survive termination, including, without limitation, warranty disclaimers, and limitations of liability.</p>
            <h2 id="section-heading-h2">Liability</h2>
            <h3>Disclaimer of Warranties</h3>
            <p>The Blue Button 2.0 API platform is provided “as is” and on an “as-available” basis. While we will do our best to ensure the service is available and functional at all times, CMS hereby disclaims all warranties of any kind, express or implied, including without limitation the warranties of merchantability, fitness for a particular purpose, and non-infringement. CMS makes no warranty that data will be error free or that access thereto will be continuous or uninterrupted.</p> 
            <h3>Limitations on Liability</h3>
            <p>In no event will CMS or the U.S. Department of Health and Human Services (HHS) be liable with respect to any subject matter of this Agreement under any contract, negligence, strict liability or other legal or equitable theory for: (1) any special, incidental, or consequential damages; (2) the cost of procurement of substitute products or services; or (3) for interruption of use or loss or corruption of data.</p>
            <h3>Disputes, Choice of Law, Venue, and Conflicts</h3>
            <p>Any disputes arising out of this Agreement and access to or use of the Blue Button 2.0 APIs shall be governed by the laws and common law of the United States of America, including without limitation such regulations as may be promulgated from time to time by CMS, HHS, or any of its constituent agencies, without regard to any conflict of laws statutes or rules. You further agree and consent to the jurisdiction of the Federal Courts and waive any claim of lack of jurisdiction or forum non conveniens. Some Blue Button 2.0 APIs may have API-specific terms of use. If there is a conflict between these Terms and additional terms applicable to a specific Blue Button 2.0 API, the terms applicable to the specific Blue Button 2.0 API will control.</p>
            <h3>Indemnification</h3>
            <p>You agree to indemnify and hold harmless HHS, including CMS, its contractors, employees, agents, and the like, from and against any and all claims and expenses, including attorney’s fees, arising out of your use of the Blue Button 2.0 APIs, including but not limited to violation of these Terms.</p>
            <h3>No Waiver of Rights</h3>
            <p>CMS’s failure to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>
            <h3>Framework</h3>
            <p>You agree to use the Blue Button 2.0 APIs in a manner consistent with the following framework unless otherwise provided by applicable law or as specified above:</p>
            <ul>
                <li>Transparency: The existence of record-keeping systems and databanks containing data about beneficiaries should be publicly known, along with a description of the main purposes and uses of the data.</li>
                <li>Consent: There should be limits to the collection of personal data and it should be collected by lawful and fair means, and that data should be collected, where appropriate, with the knowledge or consent of the data subject. Personal data must not be communicated externally without the consent of the beneficiary or as otherwise permitted by applicable law.</li>
                <li>Use and Disclosure: There must be limits to the internal uses of personal data and that the data should be used only for the purposes specified at the time of collection. Personal data must not be communicated externally without the consent of the beneficiary or as otherwise permitted by applicable law.</li>
                <li>Individual Access: Each beneficiary should have a right to see any data about him or herself and to annotate any data that is not timely, accurate, relevant, or complete where the application has the ability to do so.</li>
                <li>Security: Personal data should be protected by reasonable security safeguards against such risks as loss, unauthorized access, destruction, use, modification, or disclosure.</li>
                <li>Data Quality: Personal data should be relevant to the purposes for which they are to be used, and should be accurate, complete, and timely.</li>
                <li>Accountability: Record keepers should be accountable for complying with fair information practices.</li>
            </ul>
            <h2 id="section-heading-h2">Resources</h2>
            <p>For more context on these terms of service and information around these requirements, we’ve created a <a>production access user guide</a> and a <a>production access checklist</a>.</p>
          </main>
        </div>
      </div>
    </div>
  </Layout>
)

export default TermsPage
