
'use strict';

var test = require('unit.js');
var function1 = require('../../../functions/function1.js');

describe('function1 - unit testing', function() {
  it('verifies successful response', function(done) {
    function1.handler({ /* event */ }, { /* context */ }, (err, result) => {
      try {
     //   test.number(result.statusCode).is(200);
      //  test.string(result.body).contains('This is function1 Lambda Demo');
     //   test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});
