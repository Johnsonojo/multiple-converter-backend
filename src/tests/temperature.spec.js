import chaiHttp from "chai-http";
import chai from "chai";
import app from "../index";
import typeAndValue from "./__mock__/temperatureData";

const { celsius, fahrenheit, kelvin } = typeAndValue;

let req;
const { expect } = chai;
chai.use(chaiHttp);

describe("Temperature Controller", () => {
  before(async () => {
    req = chai.request(app).keepOpen();
  });

  after(async () => {
    req.close();
  });

  describe("Celsius Conversion", () => {
    it("should convert celsius temperature values", async () => {
      const res = await req.post("/api/v1/temperature").send(celsius);
      expect(res.status).to.equal(200);
      expect(res.body.status).to.equal("success");
      expect(res.body).to.be.an("object");
      expect(res.body.convertedTemp).to.be.an("object");
      expect(res.body.convertedTemp).to.have.property("valueInFahrenheit");
      expect(res.body.convertedTemp.valueInFahrenheit).to.equal("-40 F");
      expect(res.body.convertedTemp).to.have.property("valueInKelvin");
      expect(res.body.convertedTemp.valueInKelvin).to.equal("233.15 K");
    });
  });

  describe("Fahrenheit Conversion", () => {
    it("should convert fahrenheit temperature values", async () => {
      const res = await req.post("/api/v1/temperature").send(fahrenheit);
      expect(res.status).to.equal(200);
      expect(res.body.status).to.equal("success");
      expect(res.body).to.be.an("object");
      expect(res.body.convertedTemp).to.be.an("object");
      expect(res.body.convertedTemp).to.be.an("object");
      expect(res.body.convertedTemp).to.have.property("valueInCelsius");
      expect(res.body.convertedTemp.valueInCelsius).to.equal("-40 C");
      expect(res.body.convertedTemp).to.have.property("valueInKelvin");
      expect(res.body.convertedTemp.valueInKelvin).to.equal("233.15 K");
    });
  });

  describe("Kelvin Conversion", () => {
    it("should convert kelvin temperature value", async () => {
      const res = await req.post("/api/v1/temperature").send(kelvin);
      expect(res.status).to.equal(200);
      expect(res.body.status).to.equal("success");
      expect(res.body).to.be.an("object");
      expect(res.body.convertedTemp).to.be.an("object");
      expect(res.body.convertedTemp).to.have.property("valueInCelsius");
      expect(res.body.convertedTemp.valueInCelsius).to.equal("-313.15 C");
      expect(res.body.convertedTemp).to.have.property("valueInFahrenheit");
      expect(res.body.convertedTemp.valueInFahrenheit).to.equal("-531.67 F");
    });
  });
});
