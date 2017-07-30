global.$ = require('dollar-js');
var $ajax = require('../../index.js');

describe('can be used as standalone npm package', function (expect, done) {
    $ajax.ajax({
        url: 'https://httpbin.org/get',
        data: { abc: 123 },
        success: function (data) {
            expect(data.args).toBe({ abc: '123' });
            done();
        },
        error: function (err) {
            console.log(err);
            done();
        },
    });
});
