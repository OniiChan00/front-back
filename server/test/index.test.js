const request = require("supertest");
const app = require("..//index.js");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "nDXuLl0TlpIG3o1JkXGSoNcQos7pVh7k";



describe("GET /testtoken", () => {
  test("should return a JWT token", async () => {
    const res = await request(app).get("/testtoken").expect(200);
    console.log(res.text);
    const token = res.text
    // const json = res.text
    // const obj = JSON.parse(json)
    // const token = obj.token
    const decoded = jwt.verify(token, secret_key);
    expect(decoded.user).toBe("phum");
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




