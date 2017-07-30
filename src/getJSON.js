/*****************/
/*  $.getJSON()  */
/*****************/

var ajax = require('./ajax.js');
var parseOptions = require('./parseOptions.js');

function getJSON (url, data, success) {
    var opt = parseOptions(url, data, success, 'json');
    return ajax(opt);
}

module.exports = getJSON;
