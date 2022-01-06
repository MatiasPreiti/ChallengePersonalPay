const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../app');
let should = chai.should();

describe('Location Controller', () => {
  describe('/location', () => {
    it('should return a location', (done) => {
      chai
        .request(server)
        .get('/location')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('location');
          done();
        });
    });
  });
});
