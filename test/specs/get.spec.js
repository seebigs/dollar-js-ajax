
describe('$.get', function () {

    describe('gets a response with url, data, success, dataType', function (expect, done) {
        var testUrl = 'https://httpbin.org/anything';
        $.get(testUrl, { one: 1, two: 2 }, function (text, response) {
            expect(response.url).toBe(testUrl + '?one=1&two=2');
            expect(typeof text).toBe('string');
            expect(text.charAt(0)).toBe('{');
            done();
        }, 'text');
    });

    describe('gets a response with url, success', function (expect, done) {
        var testUrl = 'https://httpbin.org/anything';
        $.get(testUrl, function (data) {
            expect(data.args).toBe({});
            done();
        });
    });

    describe('gets a response with settings object and ignores method/type', function (expect, done) {
        var testUrl = 'https://httpbin.org/anything';
        $.get({
            method: 'post',
            type: 'post',
            url: testUrl,
            data: { one: 1, two: 2 },
            success: function (data) {
                expect(data.args).toBe({ one: '1', two: '2' });
                done();
            },
        });
    });

});
