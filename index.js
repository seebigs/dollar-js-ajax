/****************/
/*  INTERFACE  */
/****************/

var $ajax = {
    ajax: require('./src/ajax.js'),
    get: require('./src/get.js'),
    post: require('./src/post.js'),
    getJSON: require('./src/getJSON.js'),
    getScript: require('./src/getScript.js'),
};

var $ = (typeof global !== 'undefined' ? global : window).$ || {};
if ($.isDollar) {
    for (method in $ajax) {
        if ($ajax.hasOwnProperty(method)) {
            $[method] = $ajax[method];
        }
    }
}

module.exports = $ajax;
