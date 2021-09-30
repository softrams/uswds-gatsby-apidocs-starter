---
path: "/guides/errors"
title: "08. Error Codes"
date: "2021-03-15"
sidenav: true
---

## Health Check (`$healthcheck`)

The `$healthcheck` operation returns the health of the FHIR server and its datastore. In the default JDBC persistence layer,
this operation creates a connection to the configured database and return its status.
The operations returns 200 OK when healthy. Otherwise, it returns an HTTP error code and an OperationOutcome with one or more issues.

## \$member-match operation

- No match returns HTTP status code : 422 (Unprocessable Entity)
- Multiple matches returns HTTP status code : 422 (Unprocessable Entity)
