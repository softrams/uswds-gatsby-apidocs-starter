---
path: "/guides/pagination"
title: "06. Pagination"
date: "2021-03-15"
sidenav: true
---

<div class="usa-alert usa-alert--warning">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">This is only a sample placeholder content</h4>
    <p class="usa-alert__text">
        The following text represents placeholder content meant for demonstration purposes. 
        Content shall be updated to reflect paging limitatations relevant in a production environment
        in the context of usecase needs.
    </p>
  </div>
</div>

## Pagination for search/history requests

- For performance reasons, not all results are returned during search operations
- Without any specific request, page size is limited to 10 (set as defaultPageSize)
- Client applications can specify page size by including \_count parameter. However \_count parameter value shall not exceed maxPageSize.
- In addition, Client applications can reduce number of records returned by using \_since parameter

## Bulk Data Optimization

- Number of resources included in each file can be configured
- Alternately size of file could be used as a threshold to split into multiple files as well

## \_since Parameter

Client applications can use the \_since parameter to scan sequentially through all the changes recorded by the FHIR Server.
Each result bundle contains a next link which can be used to fetch the next set of data.

To simplify client implementations,
the FHIR Server also includes a custom attribute \_afterHistoryId. This value can be used by a client to checkpoint where
they are in the list of changes, and ask for only changes that come after the given id. This is convenient, because the
\_afterHistoryId is based on a unique identifier. The client does not need to worry about duplicates which otherwise occur
when using \_since to sequentially fetch history

## lastModified timestamp

In a highly concurrent system, several resources could share the same timestamp. Also, the internal id used to identify individual resource changes may not correlate perfectly with the lastModified time. To guarantee no data is skipped, clients should not process resources with a lastModified timestamp.
