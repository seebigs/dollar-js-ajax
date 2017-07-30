/*****************/
/*    $.get()    */
/*****************/

var ajax = require('./ajax.js');
var parseOptions = require('./parseOptions.js');

function get (url, data, success, dataType) {
    var opt = parseOptions(url, data, success, dataType);
    opt.method = 'get';
    return ajax(opt);
}

module.exports = get;
