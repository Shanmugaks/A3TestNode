//During the test the env variable is set to test
//process.env.NODE_ENV = 'test';
let axios = require('axios');
let chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-json'));
let should = chai.should();

describe('Get Google website', () => {
    it('it should return google website', (done) => {
          axios.get('https://reqres.in/api/users')
          .then(function(response) {
            expect(response.status).to.equal(200);       
            expect(response.statusText).to.equal('OK');      
            done();
          });
    });
});