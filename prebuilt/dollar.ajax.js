/*!
 * DollarJS Ajax Plugin 1.0.0
 *   Github: https://github.com/seebigs/dollar-js-ajax
 *   Released under the MIT license: https://opensource.org/licenses/MIT
 */

;(function () {

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

    // fetch(opt.url)

    console.log(opt);
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


}.call(this));
