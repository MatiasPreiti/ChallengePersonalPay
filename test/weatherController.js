const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../app');
let should = chai.should();

describe('weather Controller', () => {
  describe('/current', () => {
    it('should return a location and current weather', (done) => {
      chai
        .request(server)
        .get('/current')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('city');
          res.body.should.have.property('weather');
          res.body.should.have.property('temp');
          res.body.city.should.be.a('object');
          res.body.city.should.have.property('city');
          res.body.city.should.have.property('countryCode');
          done();
        });
    });
    it('should return a location and current weather', (done) => {
      chai
        .request(server)
        .get('/current/London/GB')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('city');
          res.body.should.have.property('weather');
          res.body.should.have.property('temp');
          done();
        });
    });
    it('should be return a error', (done) => {
      chai
        .request(server)
        .get('/current/123456/AR/')
        .end((err, res) => {
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('status');
          res.body.status.should.be.eql(404);
          done();
        });
    });
  });
  describe('/forecast', () => {
    it('should return a location and forecast weather', (done) => {
      chai
        .request(server)
        .get('/forecast')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('city');
          res.body.should.have.property('weather');
          done();
        });
    });
    it('should return a location and forecast weather', (done) => {
      chai
        .request(server)
        .get('/forecast/London/GB')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('city');
          res.body.should.have.property('weather');
          done();
        });
    });
    it('should be return a error', (done) => {
      chai
        .request(server)
        .get('/forecast/123456/AR/')
        .end((err, res) => {
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('status');
          res.body.status.should.be.eql(404);
          done();
        });
    });
  });
});
