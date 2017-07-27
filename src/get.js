/*****************/
/*    $.get()    */
/*****************/

function get (url, data, success, dataType) {
    var opt = getOptions(url, data, success, dataType);
    ajax(opt);
}
