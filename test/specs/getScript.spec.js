
describe('$.getScript', function () {

    describe('downloads and executes a script resource', function (expect, done) {
        var testUrl = __dirname + '/../fixtures/script.js';
        $.getScript(testUrl, function () {
            expect(document.body.innerHTML).toBe('LOADED');
            done();
        });
    });

});
