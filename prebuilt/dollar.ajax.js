/*!
 * DollarJS Ajax Plugin 1.0.0
 *   Github: https://github.com/seebigs/dollar-js-ajax
 *   Released under the MIT license: https://opensource.org/licenses/MIT
 */

;(function (root) {

/*****************/
/*    NATIVES    */
/*****************/

root.Promise = root.Promise || require('promise-polyfill');
var fetch = root.fetch || require('whatwg-fetch');

/*****************/
/*   serialize   */
/*****************/

function serialize (params) {
    var paramsType = typeof params;

    if (paramsType === 'object') {
        var arr = [];
        for (key in params) {
            if (params.hasOwnProperty(key)) {
                arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
            }
        }
        return arr.join('&');

    } else if (paramsType === 'string') {
        return params;
    }

    return '';
}

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

/*****************/
/*  getOptions  */
/*****************/

function getOptions (url, data, success, dataType) {
    var options = {};

    if (typeof url === 'object') {
        options = url;
    } else {
        options.url = url;

        if (typeof data === 'object') {
            options.data = data;
        } else if (typeof data === 'function') {
            options.success = data;
        } else if (typeof data === 'string') {
            options.dataType = data;
        }

        if (typeof success === 'function') {
            options.success = success;
        } else if (typeof success === 'string') {
            options.dataType = success;
        }

        if (typeof dataType === 'string') {
            options.dataType = dataType;
        }
    }

    return options;
}

/*****************/
/*    $.get()    */
/*****************/

function get (url, data, success, dataType) {
    var opt = getOptions(url, data, success, dataType);
    ajax(opt);
}

/*****************/
/*   $.post()   */
/*****************/

function post (url, data, success, dataType) {
    var opt = getOptions(url, data, success, dataType);
    opt.type = 'POST';
    ajax(opt);
}

/*****************/
/*  $.getJSON()  */
/*****************/

function getJSON (url, data, success) {
    var opt = getOptions(url, data, success);
    opt.dataType = 'json';
    ajax(opt);
}

/*****************/
/* $.getScript() */
/*****************/

function getScript (url, success) {
    // script element
    // onload
}

/****************/
/*    EXPORT    */
/****************/

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ajax: ajax,
        get: get,
        post: post,
        getJSON: getJSON,
        getScript: getScript
    };

} else if (typeof window !== 'undefined') {
    var $ = window.$;
    $.ajax = ajax;
    $.get = get;
    $.post = post;
    $.getJSON = getJSON;
    $.getScript = getScript;
}


})(typeof window !== 'undefined' ? window : this);
