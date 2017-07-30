/*****************/
/*   $.post()   */
/*****************/

var ajax = require('./ajax.js');
var parseOptions = require('./parseOptions.js');

function post (url, data, success, dataType) {
    var opt = parseOptions(url, data, success, dataType);
    opt.method = 'post';
    return ajax(opt);
}

module.exports = post;
