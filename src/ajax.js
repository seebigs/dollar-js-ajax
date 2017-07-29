/*****************/
/*   $.ajax()   */
/*****************/

function ajax (url, settings) {
    var opt = typeof settings === 'object' ? settings : {};

    if (typeof url === 'string') {
        opt.url = url;
    } else {
        opt = url;
    }

    if (typeof opt.url !== 'string') {
        opt.url = '';
    }

    opt.data = opt.data || {};
    if (opt.cache === false) {
        opt.data._ = Date.now();
    }

    if (typeof opt.success !== 'function') {
        opt.success = function(){};
    }

    if (typeof opt.error !== 'function') {
        opt.error = function(){};
    }

    if (typeof opt.complete !== 'function') {
        opt.complete = function(){};
    }

    var dataTypes = {
        html: 'text/html',
        json: 'application/json',
        text: 'text/plain',
        xml: 'application/xml',
    };

    var initOptions = {
        method: opt.method || 'get',
    };

    if (typeof opt.headers === 'object') {
        initOptions.headers = opt.headers;
    }

    if (initOptions.method === 'get') {
        var searchString = serialize(opt.data);
        if (searchString.length) {
            opt.url += (opt.url.slice(-1) === '?' ? '' : '?') + searchString;
        }
    } else {
        initOptions.body = typeof opt.data === 'object' ? JSON.stringify(opt.data) : opt.data;
    }

    fetch(opt.url, initOptions)
        .then(function (response) {
            if (response && response.ok) {
                var contentType = opt.dataType ? dataTypes[opt.dataType] : response.headers.get('Content-Type');
                if (contentType === 'application/json') {
                    response.json().then(function (json) {
                        opt.success(json, response);
                        opt.complete('success', response);
                    });
                } else {
                    response.text().then(function (text) {
                        opt.success(text, response);
                        opt.complete('success', response);
                    });
                }
            } else {
                opt.error(new Error('Request failed'));
                opt.complete('error', response);
            }
        })
        .catch(function (err) {
            opt.error(err);
            opt.complete('error', {});
        });
}
