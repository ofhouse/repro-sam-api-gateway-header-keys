# Reproduction of non-lowercased header keys in SAM CLI

This is a reproduction of an inconsistent behavior from the local SAM API Gateway.

## Version

- SAM CLI version: 1.26.0

## Problem

As stated in the [API Gateway docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html)

> Header names are lowercased.

But when running the API Gateway emulator with SAM CLI, the header keys that are passed as payload are not lowercased:

```json
{
  "version": "2.0",
  "routeKey": "GET /",
  "rawPath": "/",
  "rawQueryString": "",
  "cookies": [],
  "headers": {
    "Host": "127.0.0.1:3000",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "Sec-Ch-Ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
    "Sec-Ch-Ua-Mobile": "?0",
    "Dnt": "1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-User": "?1",
    "Sec-Fetch-Dest": "document",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9,de-DE;q=0.8,de;q=0.7",
    "X-Forwarded-Proto": "http",
    "X-Forwarded-Port": "3000"
  },
  "queryStringParameters": {},
  "requestContext": {
    "accountId": "123456789012",
    "apiId": "1234567890",
    "http": {
      "method": "GET",
      "path": "/",
      "protocol": "HTTP/1.1",
      "sourceIp": "127.0.0.1",
      "userAgent": "Custom User Agent String"
    },
    "requestId": "8d76823d-9507-470c-87ba-fd97d55d116c",
    "routeKey": "GET /",
    "stage": null
  },
  "body": "",
  "pathParameters": {},
  "stageVariables": null,
  "isBase64Encoded": false
}
```

## Usage

1. Run

```sh
sam local start-api
```

2. Open [`http://127.0.0.1:3000/`](http://127.0.0.1:3000/) in the browser.  
   (You should get the same output as seen in the [Problem](#problem) section)
