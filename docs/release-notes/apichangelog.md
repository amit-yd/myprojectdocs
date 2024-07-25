---
description: Here's what's new with the TeamForge 24.0 REST APIs as compared to TeamForge
  23.0.
id: apichangelog
lastUpdatedAt: Mar 27, 2024
product: teamforge
tags:
- REST
- extend_teamforge
- ctf_22.1
- ctf_23.0
title: "REST API Change Log\u2014TeamForge 24.0"
---
import Apidoclinks from '../_partials/_apidoclinks.md'

## Get Integration Data for Current User

### Endpoint
**GET** `/integrationdata/myself/{namespaceid}`

### Description
Retrieves integration data for the current user by namespace ID. This endpoint is used to get the parent artifact for the list of artifacts, which enables or disables the **Choose Parent** and **Remove Parent** options in the context menu of an artifact row.

### Request

#### HTTP Request
```shell
GET /integrationdata/myself/{namespaceid}
````

#### Path Parameters
  | Parameter    | Type   | Required | Description                       |
  |--------------|--------|----------|-----------------------------------|
  | namespaceid  | string | Yes      | The namespace ID of the integration data |

#### Headers
| Header          | Type   | Description                |
|-----------------|--------|----------------------------|
| Authorization   | string | Bearer token for API access|

### Response

#### Success Response
**Status Code: 200 OK**

##### Sample Payload
  ```json
  {
    "namedValues": [
      {
        "key": "parent_artifact",
        "value": "artifact123"
      }
    ]
  }
```
#### Error Responses
**Unauthorized**

**Status Code: 401 Unauthorized**

  * **Description**: Returned when the API key is missing or invalid.

**Sample Payload**
```json
{
  "error": {
    "message": "Unauthorized access. Please provide a valid API key.",
    "type": "authentication_error"
  }
}
```
**Invalid Namespace ID/Data Name**

**Status Code: 404 Not Found**

  * **Description**: Returned when the namespace ID or data name is invalid.

**Sample Payload**
  ```json
  {
    "error": {
      "message": "The specified namespace ID or data name is invalid.",
      "type": "invalid_request_error"
    }
  }
  ```

## Set Integration Data for Current User

### Endpoint
**PUT** `/integrationdata/myself/{namespaceid}`

### Description
Sets integration data for the current user by namespace ID. This endpoint allows you to update the integration data associated with a specific namespace ID.

### Request

#### HTTP Request
```shell
PUT /integrationdata/myself/{namespaceid}
```

#### Path Parameters
| Parameter    | Type   | Required | Description                       |
|--------------|--------|----------|-----------------------------------|
| namespaceid  | string | Yes      | The namespace ID to update integration data |

#### Headers
| Header          | Type   | Description                |
|-----------------|--------|----------------------------|
| Authorization   | string | Bearer token for API access|

#### Body Parameters
| Parameter       | Type   | Required | Description                       |
|-----------------|--------|----------|-----------------------------------|
| body            | object | Yes      | Integration data to be set        |

##### Example Request Body
```json
{
  "namedValues": [
    {
      "key": "example_key",
      "value": "example_value"
    }
  ]
}
```
### Response
#### Success Response

**Status Code: 200 OK**

**Sample Payload**
```json
{
  "status": "success",
  "message": "Integration data updated successfully."
}
```
#### Error Responses
**Unauthorized**

**Status Code: 401 Unauthorized**

  * **Description**: Returned when the API key is missing or invalid.

**Sample Payload**
```json
{
  "error": {
    "message": "Unauthorized access. Please provide a valid API key.",
    "type": "authentication_error"
  }
}
```
**Invalid Namespace ID**

**Status Code: 404 Not Found**

  * **Description**: Returned when the namespace ID is invalid or does not exist.

**Sample Payload**
```json
{
  "error": {
    "message": "The specified namespace ID does not exist.",
    "type": "invalid_request_error"
  }
}
```

## Additional Information

  * **Rate Limiting**: This endpoint is rate-limited. Refer to the rate limiting section for more details.
  * **Idempotency**: To ensure idempotency, use an `Idempotency-Key` header when making requests to avoid duplicate operations.
  * **Caching**: Responses from this endpoint are cached for 5 minutes. To get the latest data, pass the `Cache-Control: no-cache` header.

## Related Links


<Apidoclinks />