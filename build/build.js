const bundl = require('bundl');
const bundlPack = require('bundl-pack');
const minify = require('bundl-minify');
const packageJSON = require('../package.json');
const rename = require('bundl-rename');
const wrap = require('bundl-wrap');
const write = require('bundl-write');

let options = {
    outputDir: '../prebuilt',
    quiet: true
};

let minifyOptions = {
    uglify: {
        output: { comments: /^!/i },
        compress: {
            reduce_vars: false
        }
    }
};

let wrapOptions = {
    data: {
        version: packageJSON.version
    },
    file: './wrap.js'
};

bundl.task('build', function (done) {
    var b = bundl({ 'dollar.ajax.js': '../index.js' }, options)
        .then(bundlPack())
        .then(wrap(wrapOptions))
        .then(write())
        .then(minify(minifyOptions))
        .then(rename('.min.js'))
        .then(write());

    b.go(done);
});
