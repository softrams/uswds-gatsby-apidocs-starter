---
path: "/guides/schema"
title: "03. Data Schema"
date: "2021-03-15"
sidenav: true
---

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
        FHIR Resources Schema
    </h3>
    <div class="usa-summary-box__text">
        <ul class="usa-list">
        <li>
            Server supports only version R4.0.1 of the FHIR specification
        </li>
        <li>
            The _format parameter is supported and defaults to application/fhir+json in the absence of the parameter or ACCEPT header
        </li>
        <li>
            Server’s Capabilities Statement is available via the [base]/metadata endpoint
        </li>
        </ul>
    </div>
    </div>
</div>

## Supported FHIR Profiles

The following profiles have been enabled in the FHIR Server. Any new resources created/updated will be validated against these profiles.

- `US Core` Implementation Guide (v3.1.1: STU3 Update) [http://hl7.org/fhir/us/core/STU3.1.1/](http://hl7.org/fhir/us/core/STU3.1.1/)
- CARIN Consumer Directed Payer Data Exchange (`CARIN IG for BlueButton®`) Implementation Guide (v1.0.0 - STU1) [http://hl7.org/fhir/us/carin-bb/STU1](http://hl7.org/fhir/us/carin-bb/STU1)
- Da Vinci Health Record Exchange (`HREX`) Implementation Guide (0.2.0 - STU R1 - 2nd ballot) [http://hl7.org/fhir/us/davinci-hrex/2020Sep/artifacts.html](http://hl7.org/fhir/us/davinci-hrex/2020Sep/artifacts.html)
- Da Vinci Payer Data Exchange (`PDEX`) Implementation Guide (v1.0.0 - STU1) [http://hl7.org/fhir/us/davinci-pdex/STU1](http://hl7.org/fhir/us/davinci-pdex/STU1)
- Da Vinci Payer Data Exchange (`PDEX`) Plan Net Implementation Guide (v1.0.0 - STU1) [http://hl7.org/fhir/us/davinci-pdex-plan-net/STU1](http://hl7.org/fhir/us/davinci-pdex-plan-net/STU1)
- Da Vinci Payer Data Exchange (`PDeX`) US Drug Formulary (v1.0.1 - STU1.0.1) [http://hl7.org/fhir/us/davinci-drug-formulary/STU1.0.1](http://hl7.org/fhir/us/davinci-drug-formulary/STU1.0.1)
- HL7 FHIR Implementation Guide: minimal Common Oncology Data Elements (`mCODE`) Release 1 - US Realm | STU1 (v1.0.0 - STU1) [http://hl7.org/fhir/us/mcode/STU1](http://hl7.org/fhir/us/mcode/STU1)
