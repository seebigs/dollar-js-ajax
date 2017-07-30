/*****************/
/* $.getScript() */
/*****************/

function getScript (url, success, error) {
    var d = document;
    var t = d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0] || d.documentElement;
    var s = d.createElement('script');
    s.async = true;
    s.type = 'text/javascript';
    s.src = url;

    if (typeof success === 'function') {
        s.onload = function () {
            success.call(s);
        };
    }

    if (typeof error === 'function') {
        s.onerror = function (err) {
            error.call(s, err);
        };
    }

    return t.appendChild(s);
}

module.exports = getScript;
