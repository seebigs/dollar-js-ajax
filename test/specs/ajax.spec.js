
describe('$.ajax', function () {

    describe('fetches json', function (expect, done) {
        var testUrl = 'https://httpbin.org/anything';
        $.ajax({
            url: testUrl,
            data: { one: 1, two: 2 },
            headers: {
                'Custom-Stuff': 'here',
            },
            success: function (data, response) {
                expect(response.url).toBe(testUrl + '?one=1&two=2');
                expect(data.args).toBe({ one: '1', two: '2' });
                expect(data.headers['Custom-Stuff']).toBe('here');
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

    describe('posts data', function (expect, done) {
        var testUrl = 'https://httpbin.org/post';
        $.ajax({
            url: testUrl,
            method: 'post',
            data: { one: 1, two: 2 },
            success: function (data, response) {
                expect(response.url).toBe(testUrl);
                expect(data.data).toBe('{"one":1,"two":2}');
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

    describe('cache:false adds a timestamp', function (expect, done) {
        var testUrl = 'https://httpbin.org/anything';
        $.ajax({
            url: testUrl,
            cache: false,
            success: function (data, response) {
                var url = response.url.split('_=');
                expect(url[0]).toBe(testUrl + '?');
                expect(parseInt(url[1])).toBe(any(Number));
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
