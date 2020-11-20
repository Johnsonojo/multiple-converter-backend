/**
 * @description A class that represents Temperature
 * @class TemperatureController
 * */
class TemperatureController {
  /**
   * @description - This method takes in a tempValue and a tempType and converts based on the tempType
   * @static
   * @param {object} req - Request sent to the router
   * @param {object} res - Response sent from the controller
   * @returns {object} - object representing response
   * @memberof TemperatureController
   */

  static async convertAllTempTypes(req, res) {
    const { tempValue, tempType } = req.body;

    if (tempType === "celsius") {
      const valueInFahrenheit = (tempValue * 9) / 5 + 32 + " F";
      const valueInKelvin = (tempValue + 273.15).toFixed(2) + " K";

      const data = { valueInFahrenheit, valueInKelvin };
      return res.status(200).json({
        status: "success",
        convertedTemp: data,
      });
    }
    if (tempType === "fahrenheit") {
      const valueInCelsius = (tempValue - 32) * (5 / 9) + " C";
      const valueInKelvin =
        ((tempValue - 32) * (5 / 9) + 273.15).toFixed(2) + " K";

      const data = { valueInCelsius, valueInKelvin };
      return res.status(200).json({
        status: "success",
        convertedTemp: data,
      });
    } else {
      const valueInCelsius = tempValue - 273.15 + " C";
      const valueInFahrenheit =
        ((tempValue - 273.15) * (9 / 5) + 32).toFixed(2) + " F";

      const data = { valueInCelsius, valueInFahrenheit };
      return res.status(200).json({
        status: "success",
        convertedTemp: data,
      });
    }
  }
}

export default TemperatureController;
