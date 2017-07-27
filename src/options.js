/*****************/
/*  getOptions  */
/*****************/

function getOptions (url, data, success, dataType) {
    var options = {};

    if (typeof url === 'object') {
        options = url;
    } else {
        options.url = url;

        if (typeof data === 'object') {
            options.data = data;
        } else if (typeof data === 'function') {
            options.success = data;
        } else if (typeof data === 'string') {
            options.dataType = data;
        }

        if (typeof success === 'function') {
            options.success = success;
        } else if (typeof success === 'string') {
            options.dataType = success;
        }

        if (typeof dataType === 'string') {
            options.dataType = dataType;
        }
    }

    return options;
}
