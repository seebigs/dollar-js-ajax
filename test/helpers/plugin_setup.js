
global.$ = require('dollar-js');
var plugin = require('../../prebuilt/dollar.ajax.js');

$.ajax = plugin.ajax;
