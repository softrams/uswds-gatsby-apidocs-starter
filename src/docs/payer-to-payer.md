---
path: "/docs/payer-to-payer"
title: "Payer Data Exchange (PDex) API"
date: "2021-08-10"
sidenav: true
---

<p className="usa-intro">
    Payer Data Exchange (PDex) API allows exchange of data seamlessly with other
    payers for timely benefits coordination or transitions.
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
<p>
    When a beneficiary switches from one Payer to
    a new Payer, new Payer can use this
    API as part of onboarding the beneficiary to retrieve
    beneficiary data to co-ordinate the
    transition.
    </p>
    <h4>Capabilities/Workflows</h4>
    <ol class="usa-list">
      <li>
          Find if beneficiary had coverage using $member-match 
      </li>
      <li>
          Fetch historical beneficiary data as a Resource Bundle 
      </li>
      <li>
          Fetch historical beneficiary data as bulk data (ndjson files)
      </li>
    </ol>
    <p>
    <b>Note</b>: (1) must be executed to verify if a beneficiary had coverage using $member-match irrespective of using (2) or (3) to fetch
    historical beneficiary data. The exact <b>Patient ID</b> value required to run (2) or (3) is returned as <b>UMB</b> value in successful response to (1).
    </p>
</div>
</div>
</div>

## Workflows

See detailed workflows supported along with sample requests and responses. You need replace `<AccessToken>` with an actual `AccessToken` in the examples to execute any API shown below. If you are using Postman collection, setup the AccessToken in Authorization section.

<div class="usa-alert usa-alert--info usa-alert--no-icon">
  <div class="usa-alert__body">
    <p class="usa-alert__text">
      <b>We recommend</b> using <b>Postman</b> for API testing,
      as it is very easy and visual to work with sample data to
      quickly try out. Download
      <a
        href="/assets/PayerToPayerAPI.postman_collection.json"
        download
      >
        Postman collection
      </a>
      and follow along.
    </p>
  </div>
</div>

### Retrieving Access Token via Curl

Use the following curl command to retrieve access Token. Please replace `<Base64 encoded value of clientid:clientsecret>` with value created from client ID and client Secrets provided in the Github documentation. Please refer to Sample Client Credentials section for some test credentials.

```bash
curl --location --request POST 'https://bcda-dpc-api-dev.softrams.cloud/public/token' \
--header 'Accept: application/json' \
--header 'Authorization: Basic <Base64 encoded value of clientid:clientsecret>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'scope=user/*.*'

```

### Retrieving Access Token via Postman

Click on the collection name "Payer Data Exchange (PDex) API" and click on "Variables" to view a list of collection level variables.
Configure `CLIENT_ID` and `CLIENT_SECRET` values from a test credential provided in "Sample Client Credentials" section on the repo README page.

Once configured, run "Retrieve Access Token" request under OAUTH2 folder. This will automatically extract the `access_token` from response and saves as a collection variable `ACCESS_TOKEN`.

<div class="usa-alert usa-alert--info usa-alert--no-icon">
  <div class="usa-alert__body">
    <p class="usa-alert__text">
All requests in this Postman collection are already configured to use this Access Token in authorization header, so there is no need to do anything more to setup Access Token for each request.
    </p>
  </div>
</div>

### Workflow (WF-01) : Find if beneficiary had Part A or Part B Coverage

Find if beneficiary had prior coverage via \$member-match operation.
If successful, response will include Member ID known to Payer Data Exchange (PDex) API Service.

#### Find beneficiary via `$member-match`

Invoke `$member-match` using Medicare Benificiary ID (as MB) along with other demographics information like DOB.
See <b>Example 01</b> below for a sample request contents.

##### Example 01. Patient/`$member-match` Request

```bash
curl --location --request POST \
'https://YOUR-API-END-POINT/fhir-server/api/v4/Patient/$member-match' \
--header 'Content-Type: application/fhir+json' \
--header 'Authorization: <AccessToken>' \
--data-raw '{
  "resourceType": "Parameters",
  "id": "member-match-in",
  "parameter": [
    {
      "name": "MemberPatient",
      "resource": {
        "resourceType": "Patient",
        "id": "1",
        "identifier": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                  "code": "MB"
                }
              ]
            },
            "system": "https://bluebutton.cms.gov/resources/variables/bene_id",
            "value": "564730725596728",
            "assigner": {
              "display": "Old Payer"
            }
          }
        ],
        "name": [
          {
            "use": "official",
            "family": "Parker",
            "given": [
              "Malorie"
            ]
          }
        ],
        "gender": "male",
        "birthDate": "1937-07-28"
      }
    },
    {
      "name": "OldCoverage",
      "resource": {
        "resourceType": "Coverage",
        "id": "9876B1",
        "contained": [
          {
            "resourceType": "Organization",
            "id": "payer",
            "identifier": [
              {
                "system": "http://hl7.org/fhir/sid/us-npi",
                "value": "9876543210"
              }
            ],
            "active": true,
            "name": "Old Health Plan",
            "endpoint": [
              {
                "reference": "http://example.org/old-payer/fhir"
              }
            ]
          }
        ],
        "identifier": [
          {
            "system": "http://example.org/old-payer",
            "value": "DH10001235"
          }
        ],
        "status": "draft",
        "beneficiary": {
          "reference": "Patient/1"
        },
        "period": {
          "start": "2011-05-23",
          "end": "2012-05-23"
        },
        "payor": [
          {
            "reference": "#payer"
          }
        ],
        "class": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                  "code": "group"
                }
              ]
            },
            "value": "CB135"
          },
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                  "code": "plan"
                }
              ]
            },
            "value": "B37FC"
          },
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                  "code": "subplan"
                }
              ]
            },
            "value": "P7"
          },
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                  "code": "class"
                }
              ]
            },
            "value": "SILVER"
          }
        ]
      }
    },
    {
      "name": "NewCoverage",
      "resource": {
        "resourceType": "Coverage",
        "id": "AA87654",
        "contained": [
          {
            "resourceType": "Organization",
            "id": "payer",
            "identifier": [
              {
                "system": "http://hl7.org/fhir/sid/us-npi",
                "value": "0123456789"
              }
            ],
            "active": true,
            "name": "New Health Plan",
            "endpoint": [
              {
                "reference": "http://example.org/new-payer/fhir"
              }
            ]
          }
        ],
        "identifier": [
          {
            "system": "http://example.org/new-payer/identifiers/coverage",
            "value": "234567"
          }
        ],
        "status": "active",
        "beneficiary": {
          "reference": "Patient/1"
        },
        "payor": [
          {
            "reference": "#payer"
          }
        ]
      }
    }
  ]
}'
```

#### Successful Response to `$member-match`

Store the identifier (UMB value) in the response as the Patient ID for future API requests.
See <b>Example 02</b> below for a sample response contents.

##### Example 02. Patient/`$member-match` - Successful Response

```bash
{
    "resourceType": "Parameters",
    "parameter": [
        {
            "name": "MemberPatient",
            "resource": {
                "resourceType": "Patient",
                "id": "1",
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                    "code": "MB"
                                }
                            ]
                        },
                        "system": "https://bluebutton.cms.gov/resources/variables/bene_id",
                        "value": "564730725596728",
                        "assigner": {
                            "display": "Old Payer"
                        }
                    },
                    {
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                    "code": "UMB",
                                    "display": "Member Number",
                                    "userSelected": false
                                }
                            ]
                        },
                        "system": "https://bluebutton.cms.gov/resources/variables/bene_id",
                        "value": "564730725596728"
                    }
                ],
                "name": [
                    {
                        "use": "official",
                        "family": "Person",
                        "given": [
                            "Patricia",
                            "Ann"
                        ]
                    }
                ],
                "gender": "female",
                "birthDate": "1974-12-25"
            }
        },
        {
            "name": "NewCoverage",
            "resource": {
                "resourceType": "Coverage",
                "id": "AA87654",
                "contained": [
                    {
                        "resourceType": "Organization",
                        "id": "payer",
                        "identifier": [
                            {
                                "system": "http://hl7.org/fhir/sid/us-npi",
                                "value": "0123456789"
                            }
                        ],
                        "active": true,
                        "name": "New Health Plan",
                        "endpoint": [
                            {
                                "reference": "http://example.org/new-payer/fhir"
                            }
                        ]
                    }
                ],
                "identifier": [
                    {
                        "system": "http://example.org/new-payer/identifiers/coverage",
                        "value": "234567"
                    }
                ],
                "status": "active",
                "beneficiary": {
                    "reference": "Patient/1"
                },
                "payor": [
                    {
                        "reference": "#payer"
                    }
                ]
            }
        }
    ]
}
```

#### Unsuccessful Response to `$member-match`

If a match is not found or more than one match is found, FHIR server will respond with 422 (Unprocessable Entity)
See <b>Example 03</b> below for a sample failed response contents.

##### Example 03. Patient/`$member-match` - Failure Response

```bash
{
    "resourceType": "OperationOutcome",
    "id": "ac-10-a-1d-cbc7daef-63f0-40a6-b74d-af177ca4beb3",
    "issue": [
        {
            "severity": "fatal",
            "code": "unprocessable-entity",
            "details": {
                "text": "No member match found"
            },
            "expression": [
                "<empty>"
            ]
        }
    ]
}
```

### Workflow (WF-02) : Fetch Data as Resource Bundle via `$everything`

#### Invoke `$everything`

Fetch bundled output using $everything operation on Patient resource. Invoke Patient/{UMB Value as Patient ID}/$everything to fetch a bundle of resources for the beneficiary. See <b>Example 04</b> below for a sample request contents.

##### Example 04 : Patient/{id}/`$everything` - Bundle Request

```bash

curl --location --request GET \
'https://YOUR-API-END-POINT/fhir-server/api/v4/Patient/564730725596728/$everything' \
--header 'Authorization: <AccessToken>'
```

#### Successful Response

Response will include a bundle of resources related to the beneficiary.
See <b>Example 05</b> below for a sample response contents.

##### Example 05. Patient/{id}/`$everything` - Bundle Request - Successful Response

```bash
{
    "resourceType": "Bundle",
    "id": "31ac5059-5a09-4aab-a5c6-ded52ffe7390",
    "type": "searchset",
    "total": 11,
    "entry": [
        {
            "fullUrl": "https://YOUR-API-END-POINT/fhir-server/api/v4/Patient/564730725596728",
            "resource": {
                "resourceType": "Patient",
                "id": "564730725596728"
                ... (Truncated Resourcee)
            }
        }
        ... (Truncated List of Resources)
        {
            "resource": {
                "resourceType": "Provenance",
                "id": "e83fb3f5-3887-444b-bb5d-f04b7fa7d4b9",
                "target": [
                    {
                        "reference": "Bundle/c09a0d03-4bc5-4a4e-ac38-0ebbb28c4b8c"
                    }
                ],
                "recorded": "2021-08-10T13:49:59.380916Z",
                "agent": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/us/core/CodeSystem/us-core-provenance-participant-type",
                                    "code": "transmitter",
                                    "display": "Transmitter"
                                }
                            ]
                        },
                        "who": {
                            "reference": "Organization/CMS-ORG-ID"
                        }
                    }
                ],
                "entity": [
                    {
                        "extension": [
                            {
                                "url": "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/ProvenanceSourceFrom",
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "http://hl7.org/fhir/us/davinci-pdex/CodeSystem/ProvenancePayerDataSource",
                                            "code": "hl7fhirr4",
                                            "display": "FHIR R4"
                                        }
                                    ]
                                }
                            }
                        ],
                        "role": "source",
                        "what": {
                            "display": "No Reference available"
                        }
                    }
                ]
            }
        }
    ]
}
```

### Workflow (WF-03) : Fetch Data as Bulk Data

#### Request for beneficiary data as Bulk Data using \$everything operation on Patient resource

Invoke Patient/{UMB Value as Patient ID}/\$everything with 'Prefer' header requesting to fetch data of the beneficiary as Bulk Data.
See <b>Example 06</b> below for a sample request contents.

##### Example 06. Patient/{id}/`$everything` - Bulk export Request

```bash
curl --location --request GET \
'https://YOUR-API-END-POINT/fhir-server/api/v4/Patient/564730725596728/$everything' \
--header 'Prefer: respond-async' \
--header 'Authorization: <AccessToken>' \
```

Response will include `Content-Location` in headers, that will include Job ID (and URL), where status of bulk data export
preparation can be retrieved. See <b>Example 07</b> below for a sample response header contents.

##### Example 07. Patient/{id}/`$everything` - Bulk export Request - Response

Response will have empty body and header will includee the 'content-location' information.

```bash
 HTTP/2 202
 date: Mon, 09 Aug 2021 21:32:10 GMT
 content-length: 0
 content-location: https://YOUR-API-END-POINT/fhir-server/api/v4/$bulkdata-status?job=cOg7dz0hh%2B9pNGeNMS7kxQ
 content-language: en-US
```

#### Check if Bulk Data is available for download

Call Job Status API end point, returned in previous step to check for status. Until job is completed, the API will return HTTP 202 with HTTP Headers showing the % progess information. See <b>Example 08</b> below for a sample response contents once ready.

##### Example 08. Patient/{id}/`$everything` - Bulk export Job Status - Response

```bash
{
    "transactionTime": "2021-08-09T21:31:52.24Z",
    "request": "https://YOUR-API-END-POINT/fhir-server/api/v4/Patient/564730725596728/$everything",
    "requiresAccessToken": false,
    "output": [
        {
            "type": "Coverage",
            "url": "https://YOUR-API-END-POINT/bulk/data/ibfk9QGuZDlSZBmDgyhCWfW3naBYgGGdOUQk9G1gVRE/Coverage_1.ndjson",
            "count": 2
        },
        {
            "type": "Patient",
            "url": "https://YOUR-API-END-POINT/bulk/data/ibfk9QGuZDlSZBmDgyhCWfW3naBYgGGdOUQk9G1gVRE/Patient_1.ndjson",
            "count": 1
        },
        {
            "type": "ExplanationOfBenefit",
            "url": "https://YOUR-API-END-POINT/bulk/data/rlK9h7vi5A7Tc277tGIsggTnXpqtkBED_s-IVQZ7QsM/ExplanationOfBenefit_1.ndjson",
            "count": 8
        },
    ]
}
```

#### Download Bulk Data files

Using the url for each file type included in the response, download bulk files.
