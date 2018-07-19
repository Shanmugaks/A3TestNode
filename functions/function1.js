'use strict';

var fs = require('fs');
var path = require('path');

exports.handler = function(event, context, callback) {
  var contents = "This is function1 Lambda Demoooooo";
  var result = {
    statusCode: 200,
    body: contents,
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};
