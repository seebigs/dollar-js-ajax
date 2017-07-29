const bundl = require('bundl');

const minify = require('bundl-minify');
const packageJSON = require('../package.json');
const rename = require('bundl-rename');
const wrap = require('bundl-wrap');
const write = require('bundl-write');

let options = {
    srcDir: '../src',
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
    var lib = [
        './natives.js',
        './serialize.js',
        './ajax.js',
        './options.js',
        './get.js',
        './post.js',
        './getJSON.js',
        './getScript.js',
        '../export.js'
    ];

    var b = bundl({ 'dollar.ajax.js': lib }, options)
        .then(wrap(wrapOptions))
        .then(write())
        .then(minify(minifyOptions))
        .then(rename('.min.js'))
        .then(write());

    b.go(done);
});
