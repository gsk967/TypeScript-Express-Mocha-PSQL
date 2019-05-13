import app from "../src/server";

const expect = require('chai').expect;

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

let bookId: string;
describe("GET /", () => {
    it("should return 200 OK", (done) => {
        chai.request(app)
            .get('/')
            .set('Content-Type', 'application/json')
            .end((err: Error, response: Response) => {
                if (err) {
                    done(err)
                } else {
                    expect(response).to.have.status(200);
                    expect(response.body).not.to.be.empty;
                    expect(response.body).to.be.an('object');
                    done();
                }
            })
    });
});


describe("GET /books", () => {
    it("should return 200 OK", (done) => {
        chai.request(app)
            .get('/books')
            .set('Content-Type', 'application/json')
            .end((err: Error, response: Response) => {
                if (err) {
                    done(err)
                } else {
                    expect(response).to.have.status(200);
                    expect(response.body).not.to.be.empty;
                    expect(response.body).to.be.an('array');
                    // @ts-ignore
                    bookId = response.body.length > 0 ? response.body[0].id : null;
                    done();
                }
            })
    });
});


describe("GET /books/:bookId", () => {
    it("should return 200 OK", (done) => {
        chai.request(app)
            .get('/books/' + bookId)
            .set('Content-Type', 'application/json')
            .end((err: Error, response: Response) => {
                if (err) {
                    done(err)
                } else {
                    expect(response).to.have.status(200);
                    expect(response.body).not.to.be.empty;
                    expect(response.body).to.be.an('object');
                    done();
                }
            })
    });
});
