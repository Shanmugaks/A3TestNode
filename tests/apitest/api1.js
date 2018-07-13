//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

  describe('Get Google website', () => {
      it('it should return google website', (done) => {
        chai.request(server)
            .get('https://www.google.com/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.any();                
              done();
            });
      });
  });

