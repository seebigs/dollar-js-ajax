/*****************/
/*   $.post()   */
/*****************/

function post (url, data, success, dataType) {
    var opt = getOptions(url, data, success, dataType);
    opt.type = 'POST';
    ajax(opt);
}
