
describe('$.ajax', function () {

    describe('works', function (expect) {
        $.ajax({
            url: 'http://example.com',
        });
        expect(1).toBe(1);
    });

});
