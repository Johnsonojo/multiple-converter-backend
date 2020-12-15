/**
 * @description A class that represents Temperature
 * @class AreaController
 * */
class AreaController {
  /**
   * @description - This method takes in a areaValue and a areaType and converts based on the areaType
   * @static
   * @param {object} req - Request sent to the router
   * @param {object} res - Response sent from the controller
   * @returns {object} - object representing response
   * @memberof AreaController
   */

  static async convertAllAreas(req, res) {
    const { areaValue, areaType } = req.body;

    if (areaType === "Square Kilometer") {
      const valueInSquareMeter = (areaValue * 1e6).toExponential(4);
      const valueInSquareMile = areaValue / 2.59;
      const valueInSquareYard = (areaValue * 1.196e6).toExponential(4);
      const valueInSquareFoot = (areaValue * 1.076e7).toExponential(4);
      const valueInSquareInch = (areaValue * 1.55e9).toExponential(4);
      const valueInHectare = areaValue * 100;
      const valueInAcre = areaValue * 247.105;

      const data = {
        valueInSquareMeter,
        valueInSquareMile,
        valueInSquareYard,
        valueInSquareFoot,
        valueInSquareInch,
        valueInHectare,
        valueInAcre,
      };
      return res.status(200).json({
        status: "success",
        convertedArea: data,
      });
    }
    if (areaType === "Square Meter") {
      const valueInSquareKilometer = (areaValue / 1e6).toExponential(4);
      const valueInSquareMile = (areaValue / 2.58999e6).toExponential(4);
      const valueInSquareYard = areaValue * 1.196;
      const valueInSquareFoot = areaValue * 10.764;
      const valueInSquareInch = areaValue * 1550;
      const valueInHectare = (areaValue / 10000).toExponential(4);
      const valueInAcre = (areaValue / 4047).toExponential(4);

      const data = {
        valueInSquareKilometer,
        valueInSquareMile,
        valueInSquareYard,
        valueInSquareFoot,
        valueInSquareInch,
        valueInHectare,
        valueInAcre,
      };
      return res.status(200).json({
        status: "success",
        convertedArea: data,
      });
    }
    if (areaType === "Square Mile") {
      const valueInSquareKilometer = (areaValue * 2.58999).toExponential(5);
      const valueInSquareMeter = (areaValue * 2.58999e6).toExponential(5);
      const valueInSquareYard = (areaValue * 3.098e6).toExponential(5);
      const valueInSquareFoot = (areaValue * 2.788e7).toExponential(5);
      const valueInSquareInch = (areaValue * 4.014e9).toExponential(5);
      const valueInHectare = areaValue * 259;
      const valueInAcre = areaValue * 640;

      const data = {
        valueInSquareKilometer,
        valueInSquareMeter,
        valueInSquareYard,
        valueInSquareFoot,
        valueInSquareInch,
        valueInHectare,
        valueInAcre,
      };
      return res.status(200).json({
        status: "success",
        convertedArea: data,
      });
    }
    if (areaType === "Square Yard") {
      const valueInSquareKilometer = (areaValue / 1.196e6).toExponential(5);
      const valueInSquareMeter = (areaValue / 1.196).toExponential(5);
      const valueInSquareMile = (areaValue / 3.098e6).toExponential(5);
      const valueInSquareFoot = areaValue * 9;
      const valueInSquareInch = areaValue * 1296;
      const valueInHectare = (areaValue / 11960).toExponential(5);
      const valueInAcre = (areaValue / 4840).toExponential(5);

      const data = {
        valueInSquareKilometer,
        valueInSquareMeter,
        valueInSquareMile,
        valueInSquareFoot,
        valueInSquareInch,
        valueInHectare,
        valueInAcre,
      };
      return res.status(200).json({
        status: "success",
        convertedArea: data,
      });
    }
    if (areaType === "Square Foot") {
      const valueInSquareKilometer = (areaValue / 1.076e7).toExponential(5);
      const valueInSquareMeter = (areaValue / 10.764).toExponential(5);
      const valueInSquareMile = (areaValue / 2.788e7).toExponential(5);
      const valueInSquareYard = areaValue / 9;
      const valueInSquareInch = areaValue * 144;
      const valueInHectare = (areaValue / 107639).toExponential(5);
      const valueInAcre = (areaValue / 43560).toExponential(5);

      const data = {
        valueInSquareKilometer,
        valueInSquareMeter,
        valueInSquareMile,
        valueInSquareYard,
        valueInSquareInch,
        valueInHectare,
        valueInAcre,
      };
      return res.status(200).json({
        status: "success",
        convertedArea: data,
      });
    }
    if (areaType === "Square Inch") {
      const valueInSquareKilometer = (areaValue / 1.55e9).toExponential(5);
      const valueInSquareMeter = (areaValue / 1550).toExponential(5);
      const valueInSquareMile = (areaValue / 4.014e9).toExponential(5);
      const valueInSquareYard = (areaValue / 1296).toExponential(5);
      const valueInSquareFoot = (areaValue / 144).toExponential(5);
      const valueInHectare = (areaValue / 1.55e7).toExponential(5);
      const valueInAcre = (areaValue / 6.273e6).toExponential(5);

      const data = {
        valueInSquareKilometer,
        valueInSquareMeter,
        valueInSquareMile,
        valueInSquareYard,
        valueInSquareFoot,
        valueInHectare,
        valueInAcre,
      };
      return res.status(200).json({
        status: "success",
        convertedArea: data,
      });
    }
    if (areaType === "Hectare") {
      const valueInSquareKilometer = (areaValue / 100).toExponential(5);
      const valueInSquareMeter = (areaValue * 10000).toExponential(5);
      const valueInSquareMile = (areaValue / 259).toExponential(5);
      const valueInSquareYard = (areaValue * 11960).toExponential(5);
      const valueInSquareFoot = (areaValue * 107639).toExponential(5);
      const valueInInch = (areaValue * 1.55e7).toExponential(5);
      const valueInAcre = (areaValue * 2.471).toExponential(5);

      const data = {
        valueInSquareKilometer,
        valueInSquareMeter,
        valueInSquareMile,
        valueInSquareYard,
        valueInSquareFoot,
        valueInInch,
        valueInAcre,
      };
      return res.status(200).json({
        status: "success",
        convertedArea: data,
      });
    }
    if (areaType === "Acre") {
      const valueInSquareKilometer = (areaValue / 247).toExponential(5);
      const valueInSquareMeter = (areaValue * 4047).toExponential(5);
      const valueInSquareMile = (areaValue / 640).toExponential(5);
      const valueInSquareYard = (areaValue * 4840).toExponential(5);
      const valueInSquareFoot = (areaValue * 43560).toExponential(5);
      const valueInInch = (areaValue * 6.273e6).toExponential(5);
      const valueInHectare = (areaValue / 2.471).toExponential(5);

      const data = {
        valueInSquareKilometer,
        valueInSquareMeter,
        valueInSquareMile,
        valueInSquareYard,
        valueInSquareFoot,
        valueInInch,
        valueInHectare,
      };
      return res.status(200).json({
        status: "success",
        convertedArea: data,
      });
    }
  }
}

export default AreaController;
