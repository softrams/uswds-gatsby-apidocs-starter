---
path: "/guides/bulk_data"
title: "07. Bulk Data"
date: "2021-03-15"
sidenav: true
---

The FHIR Server has extended operations for Bulk Data `$import`, `$export` and `$bulkdata-status`.

## Export Operation: \$export

The `$export` operation uses three OperationDefinition instances:

- [System](http://hl7.org/fhir/uv/bulkdata/STU1/OperationDefinition-export.html) - Export data from the server.
- [Patient](http://hl7.org/fhir/uv/bulkdata/STU1/OperationDefinition-patient-export.html) - Obtain a set of resources pertaining to all patients.
- [Group](http://hl7.org/fhir/uv/bulkdata/STU1/OperationDefinition-group-export.html) - Obtain a set of resources pertaining to patients in a specific Group. Only supports static membership; does not resolve inclusion/exclusion criteria.

Export file type is ndjson if not specified, however **parquet** format is also supported.

### **\$export: Create a Bulk Data Request**

To create an export request, client application may use GET or POST. When POST is used, the FHIR Server requires the body fields of the request object to be a FHIR Resource `Parameters` JSON Object.

#### Example Request - GET

The following is a request to export data from the FHIR Server using GET.

```bash
curl -k -H "Content-Type: application/fhir+json" \
    -H 'Authorization: <AccessToken>' \
    -X GET 'https://FHIR_BASE/fhir-server/api/v4/$export?_type=Patient' -v
```

#### Example Request - POST

The following is a request to export data from the FHIR Server using POST and Parameters resource.

```bash
curl -k -H "Content-Type: application/fhir+json" \
     -H 'Authorization: <AccessToken>' \
     -X POST 'https://FHIR_BASE/fhir-server/api/v4/$export' \
     -d '{
    "resourceType": "Parameters",
    "id": "e33a6a4e-29b5-4f62-a3e9-8d09f50ae54d",
    "parameter": [
        {
            "name": "_outputFormat",
            "valueString": "application/fhir+ndjson"
        },
        {
            "name": "_since",
            "valueInstant": "2021-01-01T08:21:26.94-04:00"
        },
        {
            "name": "_type",
            "valueString": "Observation,Condition"
        }
    ]
}'
```

## Status Operation: \$bulkdata-status

The `StatusOperation` is a BulkData Management endpoint, which uses the `Content-Location`'s http query parameter value for job to manage the Bulk Data job request.

There are two custom features - _Poll Job_ and _Delete Job_.

### **\$bulkdata-status: Poll Job**

The response returned is 202 if the job is queued or not yet complete.

Note: If the job is stopped, e.g, due to shutdown of the FHIR Server where the job is running the bulkdata job, then upon polling the status of the bulkdata job, the server restarts the job, and the response to the client is Accepted: 202.
The response returned is 200 if the job is completed.

The following is a sample path to the exported ndjson file, the full path can be found in the response to the polling location request after the export request (please refer to the FHIR BulkDataAccess specification for details).

`.../bulkdata/data/6xjd4M8afi6Xo95eYv7zPxBqSCoOEFywZLoqH1QBtbw=/Patient_1.ndjson`

#### Example

- Request

```bash
curl -k -v  \
    -H 'Authorization: <AccessToken>' \
    'https://FHIR_BASE/fhir-server/api/v4/$bulkdata-status?job=FvHrLGPv0oKZNyLzBnY5iA%3D%3D'
```

- Response for `$export` not yet complete
  The response code is 202.

- Response for \$export upon completion

```json
{
  "transactionTime": "2021/07/20 16:53:41.160 -0500",
  "request": "/$export?_type=Patient",
  "requiresAccessToken": false,
  "output": [
    {
      "type": "AllergyIntolerance",
      "url": "6SfXzbGvYl1nTjGbf5qeqJDFNjyljiGdKxXEJb4yJn8=/AllergyIntolerance_1.ndjson",
      "count": 20
    },
    {
      "type": "AllergyIntolerance",
      "url": "6SfXzbGvYl1nTjGbf5qeqJDFNjyljiGdKxXEJb4yJn8=/AllergyIntolerance_2.ndjson",
      "count": 8
    },
    {
      "type": "Observation",
      "url": "6SfXzbGvYl1nTjGbf5qeqJDFNjyljiGdKxXEJb4yJn8=/Observation_1.ndjson",
      "count": 234
    },
    {
      "type": "Observation",
      "url": "6SfXzbGvYl1nTjGbf5qeqJDFNjyljiGdKxXEJb4yJn8=/Observation_2.ndjson",
      "count": 81
    }
  ]
}
```

### **\$bulkdata-status: Delete Job**

The Bulk Data Request is deleted using the Content-Location and executing the `DELETE` method. The deletion of a job is asynchronous - the job is stopped and subsequently deleted. The data is not cleaned up from the destination storage location - e.g. partially imported data or partially exported data is not cleaned up.

- Request

```bash
curl -k -v  -X DELETE \
    -H 'Authorization: <AccessToken>' \
    'https://FHIR_BASE/fhir-server/api/v4/$bulkdata-status?job=k%2Fd8cTAU%2BUeVEwqURPZ3oA%3D%3D'
```

- Response
  The response returned is 202 if the job deletion is not yet complete.
  The response returned is 200 if the job deletion is completed.

## Notes

1. For status codes, if there is an error on the server a 500 is returned, or if there is a client request error, a 400 is returned.
