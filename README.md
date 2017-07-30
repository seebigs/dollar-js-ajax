# DollarJS Ajax Plugin

**Extend [DollarJS](https://github.com/seebigs/dollar-js) with async request capability**

## Download & Embed
 * [Full](https://raw.githubusercontent.com/seebigs/dollar-js-ajax/master/prebuilt/dollar.ajax.js) (dollar.ajax.js)
 * [Minified](https://raw.githubusercontent.com/seebigs/dollar-js-ajax/master/prebuilt/dollar.ajax.min.js) (dollar.ajax.min.js)

Add both of the following scripts to your webpage (in this order)
```html
<script src="dollar.js"></script>
<script src="dollar.ajax.js"></script>
```

## Install & Require
Available as a standalone [NPM package](https://www.npmjs.com/package/dollar-js-ajax)
```
$ npm install dollar-js-ajax --save
```
```js
var $ajax = require('dollar-js-ajax');
```

---

## $.get(url [, data] [, success] [, dataType])
```js
$.get('http://example.com', { one: 1, two: 2 }, function(r){ console.log(r); }, 'json');
```
A convenience alias for
```js
$.ajax({
    method: 'get',
    url: url,
    data: data,
    success: success,
    dataType: dataType,
});
```

## $.post(url [, data] [, success] [, dataType])
```js
$.post('http://example.com', { one: 1, two: 2 }, function(r){ console.log(r); }, 'text');
```
A convenience alias for
```js
$.ajax({
    method: 'post',
    url: url,
    data: data,
    success: success,
    dataType: dataType,
});
```

## $.getJSON(url [, data] [, success])
```js
$.getJSON('http://example.com', { one: 1, two: 2 }, function(r){ console.log(r); });
```
A convenience alias for
```js
$.ajax({
    method: 'get',
    url: url,
    data: data,
    success: success,
    dataType: 'json',
});
```

## $.getScript(url [, success] [, error])
```js
$.getScript('http://example.com/script.js', function () {
    // after successful load
}, function () {
    // oops, it failed
});
```

## $.ajax(settings)
```js
$.ajax({
    method: 'get',
    headers: { 'X-Custom-Stuff': 'here' },
    url: 'http://example.com',
    data: { one: 1, two: 2 },
    cache: false,
    success: function (data, response) {
        // handle a successful response
    },
    error: function (err) {
        // handle a failure response
    },
    complete: function (status, response) {
        // handle the response (whether it was successful or not)
    },
    dataType: 'json',
});
```

---
Request Settings
---
### method {String}
An HTTP request method such as 'get', 'post', 'put', 'delete'. Default is 'get'.

### headers {Object}
Additional key/value pairs to send on the header of the request.

### url {String}
The url to be requested.

### data {Object}
Data to be sent to the server. This will be serialized into the query string (search params) on the url of a GET request or sent in the body of a POST request.

### cache {Boolean}
A value indicating if the request should be cached. Disabling caching is done by appending `_={timestamp}` to the url. Default is true.

---
Response settings
---
### success {Function}
A callback to be executed after a successful response is received. Callback is passed the parsed response data and the original response object.

### error {Function}
A callback to be executed after a request fails for any reason. Callback is passed an error object indicating the reason for the failure.

### complete {Function}
A callback to be executed after a request finishes regardless of the outcome. Callback is passed an indication of the status of the response and the original response object.

### dataType {String}
The type of data that you're expecting back from the server. Can be 'text', 'html', 'xml', 'json'. If none is specified the `Content-Type` response header will be used to determine how to parse the response data. Default is to process as plain text.
