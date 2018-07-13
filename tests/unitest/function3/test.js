'use strict';

var test = require('unit.js');
var function3 = require('../../../functions/function3.js');

describe('function3 - unit testing', function() {
  it('verifies successful response', function(done) {
    function3.handler({ /* event */ }, { /* context */ }, (err, result) => {
      try {
        test.number(result.statusCode).is(200);
        test.string(result.body).contains('This is function3 Lambda Demo');
        test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});
