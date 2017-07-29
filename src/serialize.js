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
