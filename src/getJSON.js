/*****************/
/*  $.getJSON()  */
/*****************/

function getJSON (url, data, success) {
    var opt = getOptions(url, data, success);
    opt.dataType = 'json';
    ajax(opt);
}
