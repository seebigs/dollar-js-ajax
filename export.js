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
