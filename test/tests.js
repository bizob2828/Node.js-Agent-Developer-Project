var chai = require('chai');
var chaiHttp = require('chai-http');

should = chai.should();
chai.use(chaiHttp);

var server = require('../app');

describe('Status and content', function () {
    describe('Main page', function () {
        it('status', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    (res).should.have.status(200);
                    done();
                });
        });

        it('content', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    (res.body).should.be.a('object');
                    done();
                });
        });
    });

    describe('About page', function () {
        it('status', (done) => {
            chai.request(server)
                .get('/about')
                .end((err, res) => {
                    (res).should.have.status(200);
                    done();
                });
        });

    });
});