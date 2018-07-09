'use strict';

var test = require('unit.js');
var function5 = require('../../functions/function5.js');

describe('function5 - unit testing', function() {
  it('verifies successful response', function(done) {
    function5.handler({ /* event */ }, { /* context */ }, (err, result) => {
      try {
        test.number(result.statusCode).is(200);
        test.string(result.body).contains('This is function5 Lambda Demo');
        test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});
