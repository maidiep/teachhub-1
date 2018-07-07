var chai = require("chai").expect;
var supertest = require("supertest");
var app = require("../server");

describe("backend api testing", function() {
  it("should respond with html", function(done) {
    supertest(app)
      .get("/")
      .set("Accept", "text/html")
      .expect("Content-Type", /html/)
      .expect(200, done);
  });
});
