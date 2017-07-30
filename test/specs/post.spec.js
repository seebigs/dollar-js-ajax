
describe('$.post', function () {

    describe('posts some data with url, data, success, dataType', function (expect, done) {
        var testUrl = 'https://httpbin.org/post';
        $.post(testUrl, { one: 1, two: 2 }, function (text, response) {
            expect(response.url).toBe(testUrl);
            expect(text.indexOf('{\\"one\\":1,\\"two\\":2}') !== -1).toBe(true);
            done();
        }, 'text');
    });

    describe('posts some data with url, success', function (expect, done) {
        var testUrl = 'https://httpbin.org/post';
        $.post(testUrl, function (data) {
            expect(data.data).toBe('{}');
            done();
        });
    });

    describe('posts some data with settings object and ignores method/type', function (expect, done) {
        var testUrl = 'https://httpbin.org/post';
        $.post({
            method: 'get',
            type: 'get',
            url: testUrl,
            data: { one: 1, two: 2 },
            success: function (data) {
                expect(data.data).toBe('{"one":1,"two":2}');
                done();
            },
        });
    });

});
