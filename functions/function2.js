'use strict';

var fs = require('fs');
var path = require('path');

exports.get = function(event, context, callback) {
  var contents = "This is function2 Lambda Demo";
  var result = {
    statusCode: 200,
    body: contents,
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};
