var bundl = require('bundl');
var FeatherTestBrowser = require('feather-test-browser');

bundl.task('test', function (done) {
    bundl.run('build').then('test:unit').then(done);
});

bundl.task('test:unit', function (done) {
    var category = bundl.args.category;
    var run = bundl.args.run || '';

    var featherTest = new FeatherTestBrowser({
        helpers: [
            '../test/helpers/plugin_setup.js',
        ],
        specs: '../test/specs/' + (category || '') + (run || ''),
        exitProcessWhenFailing: false,
    });

    featherTest.run(done);
});
