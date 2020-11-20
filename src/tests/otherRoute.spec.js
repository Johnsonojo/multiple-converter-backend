import chaiHttp from "chai-http";
import chai from "chai";
import app from "../index";

let req;
const { expect } = chai;
chai.use(chaiHttp);

describe("Other Routes", () => {
  before(async () => {
    req = chai.request(app).keepOpen();
  });

  after(async () => {
    req.close();
  });

  it("should get the homepage route", async () => {
    const res = await req.get("/");
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal("Welcome to Multiple converter backend");
  });

  it("should get the page-not-found route", async () => {
    const res = await req.post("/*");
    expect(res.status).to.equal(404);
    expect(res.body.message).to.equal("Oooop! This page does not exist");
  });
});
