const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../index.js");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "nDXuLl0TlpIG3o1JkXGSoNcQos7pVh7k";

chai.use(chaiHttp);

describe("Test API", () => {
  it("should return a message", (done) => {
    chai
      .request(app)
      .get("/test")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.msg).to.equal("test");
        done();
      });
  });
});

// describe("check vaild token", () => {
//   it("return true", (done) => {
//     const username = "admin";
//     const password = "admin";
//     const token = jwt.sign({ username, password }, SECRET_KEY);
//     console.log(token);
//     chai
//       .request(app)
//       .post("/checktoken")
//       .send({ token: token })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         console.log(res);
//         expect(res.body).to.equal("true");
//         done();
//       });
//   });
// });


// describe("create token", () => {
//   it("return true", (done) => {
//     const username = "admin";
//     const password = "admin";
//     chai
//       .request(app)
//       .post("/createToken")
//       .send({ admin: username, password: password })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         console.log(res);
//         expect(res.body).to.equal("true");
//         done();
//       });
//   });
// });




