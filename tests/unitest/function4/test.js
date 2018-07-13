'use strict';

var test = require('unit.js');
var function4 = require('../../../functions/function4.js');

describe('function4 - unit testing', function() {
  it('verifies successful response', function(done) {
    function4.handler({ /* event */ }, { /* context */ }, (err, result) => {
      try {
        test.number(result.statusCode).is(200);
        test.string(result.body).contains('This is function4 Lambda Demo');
        test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});
