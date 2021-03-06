'use strict';

var test = require('unit.js');
var function2 = require('../../../functions/function2.js');

describe('function2 - unit testing', function() {
  it('verifies successful response', function(done) {
    function2.handler({ /* event */ }, { /* context */ }, (err, result) => {
      try {
        test.number(result.statusCode).is(200);
        test.string(result.body).contains('This is function2 Lambda Demo');
        test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});
