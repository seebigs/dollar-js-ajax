
describe('$.ajax', function () {

    describe('fetches json', function (expect, done) {
        var testUrl = 'https://httpbin.org/anything?foo=bar';
        $.ajax({
            url: testUrl,
            success: function (data, response) {
                expect(response.url).toBe(testUrl);
                expect(data.args).toBe({ foo: 'bar' });
            },
            error: function (err) {
                expect('request').toBe('successful');
                console.log(err);
            },
            complete: function () {
                done();
            },
        });
    });

    describe('fetches text/html/xml', function (expect, done) {
        var testUrl = 'http://httpbin.org/xml';
        $.ajax({
            url: testUrl,
            success: function (text, response) {
                expect(response.headers.get('Content-Type')).toBe('application/xml');
                expect(text && text.indexOf('<?xml') === 0).toBe(true);
            },
            error: function (err) {
                expect('request').toBe('successful');
                console.log(err);
            },
            complete: function () {
                done();
            },
        });
    });

    describe('dataType overrides Content-Type', function (expect, done) {
        var testUrl = 'https://httpbin.org/anything?foo=bar';
        $.ajax({
            url: testUrl,
            dataType: 'text',
            success: function (text, response) {
                expect(response.headers.get('Content-Type')).toBe('application/json');
                expect(typeof text).toBe('string');
                expect(text.charAt(0)).toBe('{');
            },
            error: function (err) {
                expect('request').toBe('successful');
                console.log(err);
            },
            complete: function () {
                done();
            },
        });
    });

    describe('handles 404', function (expect, done) {
        var testUrl = 'http://httpbin.org/status/404';
        $.ajax({
            url: testUrl,
            error: function (err) {
                expect(err).toBe(any(Error));
            },
            complete: function () {
                done();
            },
        });
    });

    describe('handles failed to make request', function (expect, done) {
        var testUrl = 'bad';
        $.ajax({
            url: testUrl,
            error: function (err) {
                expect(err).toBe(any(Error));
            },
            complete: function () {
                done();
            },
        });
    });

});
