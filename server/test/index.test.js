//use chai to test api
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const jwt = require('jsonwebtoken');
const should = chai.should();
const expect = chai.expect;
const SECRET_KEY = "nDXuLl0TlpIG3o1JkXGSoNcQos7pVh7k"
chai.use(chaiHttp);
//test api
describe('API', () => {
    it('should return 200', (done) => {
        chai.request(server)
            .get('/test')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('should return 404', (done) => {
        chai.request(server)
            .get('/test1')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    }
    );

    it('should return token', (done) => {
        chai.request(server)
            .post('/createToken')
            .send({ username: 'admin', password: 'admin' })
            .end((err, res) => {
                res.should.have.status(200);
                const vertify = jwt.verify(res.text, SECRET_KEY);
                console.log(vertify);
                expect(vertify).to.have.property('password');
                done();
            });
            
    }
    );
    exit 0;
});
