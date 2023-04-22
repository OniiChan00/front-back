const SECRET_KEY = "nDXuLl0TlpIG3o1JkXGSoNcQos7pVh7k";
const request = require("supertest");
const app = require("../index.js");
const jwt = require("jsonwebtoken");


describe("Test get token", () => {
  test("should return a JWT token", async () => {
    const res = await request(app).get("/testtoken").expect(200);
    console.log(res.text);
    const token = res.text
    // const json = res.text
    // const obj = JSON.parse(json)
    // const token = obj.token
    const decoded = jwt.verify(token, SECRET_KEY);
    expect(decoded.user).toBe("phoo");
  });
});



