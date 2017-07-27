/*****************/
/*   $.ajax()   */
/*****************/

function ajax (url, settings) {
    var opt = typeof settings === 'object' ? settings : {};

    if (typeof url === 'string') {
        opt.url = url;
    } else {
        opt = url;
    }

    // fetch(opt.url)

    console.log(opt);
}
