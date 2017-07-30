
describe('$.getJSON', function () {

    describe('fetches json with url, data, success', function (expect, done) {
        var testUrl = 'https://httpbin.org/anything';
        $.getJSON(testUrl, { one: 1, two: 2 }, function (data) {
            expect(data.args).toBe({ one: '1', two: '2' });
            done();
        });
    });

    describe('fetches json with url, success', function (expect, done) {
        var testUrl = 'https://httpbin.org/anything';
        $.getJSON(testUrl, function (data) {
            expect(data.args).toBe({});
            done();
        });
    });

    describe('fetches json with settings object', function (expect, done) {
        var testUrl = 'https://httpbin.org/anything';
        $.getJSON({
            url: testUrl,
            data: { one: 1, two: 2 },
            success: function (data) {
                expect(data.args).toBe({ one: '1', two: '2' });
                done();
            },
        });
    });

});
