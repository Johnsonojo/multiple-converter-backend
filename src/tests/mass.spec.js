import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";
import massTypeAndValue from "./__mock__/massData";

const { tonne, kilogram } = massTypeAndValue;

let req;
const { expect } = chai;
chai.use(chaiHttp);

describe("Mass Controller", () => {
  before(async () => {
    req = chai.request(app).keepOpen();
  });

  after(async () => {
    req.close();
  });

  describe("Tonne Conversion", () => {
    it("should convert tonne mass values", async () => {
      const res = await req.post("/api/v1/mass").send(tonne);
      expect(res.status).to.equal(200);
      expect(res.body.status).to.equal("success");
      expect(res.body).to.be.an("object");
      expect(res.body.convertedMass).to.be.an("object");

      expect(res.body.convertedMass).to.have.property("valueInKilograms");
      expect(res.body.convertedMass.valueInKilograms).to.equal("4.0000e+4");

      expect(res.body.convertedMass).to.have.property("valueInGrams");
      expect(res.body.convertedMass.valueInGrams).to.equal("4.0000e+7");

      expect(res.body.convertedMass).to.have.property("valueInMilligrams");
      expect(res.body.convertedMass.valueInMilligrams).to.equal("4.0000e+10");

      expect(res.body.convertedMass).to.have.property("valueInMicrograms");
      expect(res.body.convertedMass.valueInMicrograms).to.equal("4.0000e+13");

      expect(res.body.convertedMass).to.have.property("valueInImperialTon");
      expect(res.body.convertedMass.valueInImperialTon).to.equal("3.9370e+1");

      expect(res.body.convertedMass).to.have.property("valueInUsTon");
      expect(res.body.convertedMass.valueInUsTon).to.equal(44.080000000000005);

      expect(res.body.convertedMass).to.have.property("valueInStone");
      expect(res.body.convertedMass.valueInStone).to.equal("6.2989e+3");

      expect(res.body.convertedMass).to.have.property("valueInPounds");
      expect(res.body.convertedMass.valueInPounds).to.equal(88184.79999999999);

      expect(res.body.convertedMass).to.have.property("valueInOunce");
      expect(res.body.convertedMass.valueInOunce).to.equal("1.4110e+6");
    });
  });

  describe("Kilogram Conversion", () => {
    it("should convert kilogram mass values", async () => {
      const res = await req.post("/api/v1/mass").send(kilogram);
      expect(res.status).to.equal(200);
      expect(res.body.status).to.equal("success");
      expect(res.body).to.be.an("object");
      expect(res.body.convertedMass).to.be.an("object");

      expect(res.body.convertedMass).to.have.property("valueInTonnes");
      expect(res.body.convertedMass.valueInTonnes).to.equal(0.04);

      expect(res.body.convertedMass).to.have.property("valueInGrams");
      expect(res.body.convertedMass.valueInGrams).to.equal("4.0000e+4");

      expect(res.body.convertedMass).to.have.property("valueInMilligrams");
      expect(res.body.convertedMass.valueInMilligrams).to.equal("4.0000e+7");

      expect(res.body.convertedMass).to.have.property("valueInMicrograms");
      expect(res.body.convertedMass.valueInMicrograms).to.equal("4.0000e+10");

      expect(res.body.convertedMass).to.have.property("valueInImperialTon");
      expect(res.body.convertedMass.valueInImperialTon).to.equal("3.9370e-2");

      expect(res.body.convertedMass).to.have.property("valueInUsTon");
      expect(res.body.convertedMass.valueInUsTon).to.equal("4.4101e-2");

      expect(res.body.convertedMass).to.have.property("valueInStone");
      expect(res.body.convertedMass.valueInStone).to.equal("6.2992e+0");

      expect(res.body.convertedMass).to.have.property("valueInPounds");
      expect(res.body.convertedMass.valueInPounds).to.equal(88.1848);

      expect(res.body.convertedMass).to.have.property("valueInOunce");
      expect(res.body.convertedMass.valueInOunce).to.equal("1.4110e+3");
    });
  });
});
