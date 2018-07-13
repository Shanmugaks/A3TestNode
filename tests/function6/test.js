'use strict';

var test = require('unit.js');
var function6 = require('../../functions/function6.js');

describe('function6 - unit testing', function() {
  it('verifies successful response', function(done) {
    function6.handler({ /* event */ }, { /* context */ }, (err, result) => {
      try {
        test.number(result.statusCode).is(200);
        test.string(result.body).contains('This is function6 Lambda Demo');
        test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});
