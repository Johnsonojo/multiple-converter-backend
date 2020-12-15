import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";
import areaTypeAndValue from "./__mock__/areaData";

const { squareKilometer } = areaTypeAndValue;

let req;
const { expect } = chai;
chai.use(chaiHttp);

describe("Area Controller", () => {
  before(async () => {
    req = chai.request(app).keepOpen();
  });

  after(async () => {
    req.close();
  });

  describe("Square Kilometer", () => {
    it("should convert square kilometer area value", async () => {
      const res = await req.post("/api/v1/area").send(squareKilometer);

      expect(res.status).to.equal(200);
      expect(res.body.status).to.equal("success");
      expect(res.body).to.be.an("object");
      expect(res.body.convertedArea).to.be.an("object");

      expect(res.body.convertedArea).to.have.property("valueInSquareMeter");
      expect(res.body.convertedArea.valueInSquareMeter).to.equal("4.0000e+7");

      expect(res.body.convertedArea).to.have.property("valueInSquareMile");
      expect(res.body.convertedArea.valueInSquareMile).to.equal(
        15.444015444015445
      );

      expect(res.body.convertedArea).to.have.property("valueInSquareYard");
      expect(res.body.convertedArea.valueInSquareYard).to.equal("4.7840e+7");

      expect(res.body.convertedArea).to.have.property("valueInSquareFoot");
      expect(res.body.convertedArea.valueInSquareFoot).to.equal("4.3040e+8");

      expect(res.body.convertedArea).to.have.property("valueInSquareInch");
      expect(res.body.convertedArea.valueInSquareInch).to.equal("6.2000e+10");

      expect(res.body.convertedArea).to.have.property("valueInHectare");
      expect(res.body.convertedArea.valueInHectare).to.equal(4000);

      expect(res.body.convertedArea).to.have.property("valueInAcre");
      expect(res.body.convertedArea.valueInAcre).to.equal(9884.199999999999);
    });
  });
});
