/**
 * @description A class that represents Temperature
 * @class MassController
 * */
class MassController {
  /**
   * @description - This method takes in a massValue and a massType and converts based on the massType
   * @static
   * @param {object} req - Request sent to the router
   * @param {object} res - Response sent from the controller
   * @returns {object} - object representing response
   * @memberof MassController
   */

  static async convertAllMasses(req, res) {
    const { massValue, massType } = req.body;

    if (massType === "Tonne") {
      const valueInKilograms = (massValue * 1000).toExponential(4);
      const valueInGrams = (massValue * 1e6).toExponential(4);
      const valueInMilligrams = (massValue * 1e9).toExponential(4);
      const valueInMicrograms = (massValue * 1e12).toExponential(4);
      const valueInImperialTon = (massValue / 1.016).toExponential(4);
      const valueInUsTon = massValue * 1.102;
      const valueInStone = (massValue * 157.473).toExponential(4);
      const valueInPounds = massValue * 2204.62;
      const valueInOunce = (massValue * 35274).toExponential(4);

      const data = {
        valueInKilograms,
        valueInGrams,
        valueInMilligrams,
        valueInMicrograms,
        valueInImperialTon,
        valueInUsTon,
        valueInStone,
        valueInPounds,
        valueInOunce,
      };

      return res.status(200).json({
        status: "success",
        convertedMass: data,
      });
    }
    if (massType === "Kilogram") {
      const valueInTonnes = massValue / 1000;
      const valueInGrams = (massValue * 1000).toExponential(4);
      const valueInMilligrams = (massValue * 1e6).toExponential(4);
      const valueInMicrograms = (massValue * 1e9).toExponential(4);
      const valueInImperialTon = (massValue / 1016).toExponential(4);
      const valueInUsTon = (massValue / 907).toExponential(4);
      const valueInStone = (massValue / 6.35).toExponential(4);
      const valueInPounds = massValue * 2.20462;
      const valueInOunce = (massValue * 35.274).toExponential(4);

      const data = {
        valueInTonnes,
        valueInGrams,
        valueInMilligrams,
        valueInMicrograms,
        valueInImperialTon,
        valueInUsTon,
        valueInStone,
        valueInPounds,
        valueInOunce,
      };

      return res.status(200).json({
        status: "success",
        convertedMass: data,
      });
    }
    if (massType === "Gram") {
      const valueInTonnes = (massValue / 1e6).toExponential(4);
      const valueInKilograms = (massValue / 1000).toExponential(4);
      const valueInMilligrams = (massValue * 1000).toExponential(4);
      const valueInMicrograms = (massValue * 1e6).toExponential(4);
      const valueInImperialTon = (massValue / 1.016e6).toExponential(4);
      const valueInUsTon = (massValue / 907185).toExponential(4);
      const valueInStone = (massValue / 6350).toExponential(4);
      const valueInPounds = (massValue / 454).toExponential(4);
      const valueInOunce = (massValue / 28.35).toExponential(4);

      const data = {
        valueInTonnes,
        valueInKilograms,
        valueInMilligrams,
        valueInMicrograms,
        valueInImperialTon,
        valueInUsTon,
        valueInStone,
        valueInPounds,
        valueInOunce,
      };

      return res.status(200).json({
        status: "success",
        convertedMass: data,
      });
    }
    if (massType === "Milligram") {
      const valueInTonnes = (massValue / 1e9).toExponential(4);
      const valueInKilograms = (massValue / 1e6).toExponential(4);
      const valueInGrams = (massValue / 1000).toExponential(4);
      const valueInMicrograms = (massValue * 1000).toExponential(4);
      const valueInImperialTon = (massValue / 1.016e9).toExponential(4);
      const valueInUsTon = (massValue / 9.072e8).toExponential(4);
      const valueInStone = (massValue / 6.35e6).toExponential(4);
      const valueInPounds = (massValue / 453592).toExponential(4);
      const valueInOunce = (massValue / 28350).toExponential(4);

      const data = {
        valueInTonnes,
        valueInKilograms,
        valueInGrams,
        valueInMicrograms,
        valueInImperialTon,
        valueInUsTon,
        valueInStone,
        valueInPounds,
        valueInOunce,
      };

      return res.status(200).json({
        status: "success",
        convertedMass: data,
      });
    }
    if (massType === "Microgram") {
      const valueInTonnes = (massValue / 1e12).toExponential(4);
      const valueInKilograms = (massValue / 1e9).toExponential(4);
      const valueInGrams = (massValue / 1e6).toExponential(4);
      const valueInMilligrams = (massValue / 1000).toExponential(4);
      const valueInImperialTon = (massValue / 1.016e12).toExponential(4);
      const valueInUsTon = (massValue / 9.072e11).toExponential(4);
      const valueInStone = (massValue / 6.35e9).toExponential(4);
      const valueInPounds = (massValue / 4.536e8).toExponential(4);
      const valueInOunce = (massValue / 2.835e7).toExponential(4);

      const data = {
        valueInTonnes,
        valueInKilograms,
        valueInGrams,
        valueInMilligrams,
        valueInImperialTon,
        valueInUsTon,
        valueInStone,
        valueInPounds,
        valueInOunce,
      };

      return res.status(200).json({
        status: "success",
        convertedMass: data,
      });
    }
    if (massType === "Imperial Ton") {
      const valueInTonnes = massValue * 1.016;
      const valueInKilograms = massValue * 1016;
      const valueInGrams = (massValue * 1.016e6).toExponential(4);
      const valueInMilligrams = (massValue * 1.016e9).toExponential(4);
      const valueInMicrograms = (massValue * 1.016e12).toExponential(4);
      const valueInUsTon = massValue * 1.12;
      const valueInStone = massValue * 160;
      const valueInPounds = massValue * 2240;
      const valueInOunce = massValue * 35840;

      const data = {
        valueInTonnes,
        valueInKilograms,
        valueInGrams,
        valueInMilligrams,
        valueInMicrograms,
        valueInUsTon,
        valueInStone,
        valueInPounds,
        valueInOunce,
      };

      return res.status(200).json({
        status: "success",
        convertedMass: data,
      });
    }
    if (massType === "Us Ton") {
      const valueInTonnes = (massValue / 1.102).toExponential(4);
      const valueInKilograms = massValue * 907;
      const valueInGrams = (massValue * 907185).toExponential(4);
      const valueInMilligrams = (massValue * 9.072e8).toExponential(4);
      const valueInMicrograms = (massValue * 9.072e11).toExponential(4);
      const valueInImperialTon = (massValue / 1.12).toExponential(4);
      const valueInStone = massValue * 143;
      const valueInPounds = massValue * 2000;
      const valueInOunce = massValue * 32000;

      const data = {
        valueInTonnes,
        valueInKilograms,
        valueInGrams,
        valueInMilligrams,
        valueInMicrograms,
        valueInImperialTon,
        valueInStone,
        valueInPounds,
        valueInOunce,
      };

      return res.status(200).json({
        status: "success",
        convertedMass: data,
      });
    }
    if (massType === "Stone") {
      const valueInTonnes = (massValue / 157).toExponential(4);
      const valueInKilograms = (massValue * 6.35029).toFixed(5);
      const valueInGrams = (massValue * 6350.29).toExponential(4);
      const valueInMilligrams = (massValue * 6.35029e6).toExponential(4);
      const valueInMicrograms = (massValue * 6.35029e9).toExponential(4);
      const valueInImperialTon = (massValue / 160).toExponential(4);
      const valueInUsTon = (massValue / 143).toExponential(4);
      const valueInPounds = massValue * 14;
      const valueInOunce = massValue * 224;

      const data = {
        valueInTonnes,
        valueInKilograms,
        valueInGrams,
        valueInMilligrams,
        valueInMicrograms,
        valueInImperialTon,
        valueInUsTon,
        valueInPounds,
        valueInOunce,
      };

      return res.status(200).json({
        status: "success",
        convertedMass: data,
      });
    }
    if (massType === "Pound") {
      const valueInTonnes = (massValue / 2205).toExponential(4);
      const valueInKilograms = (massValue / 2.205).toFixed(6);
      const valueInGrams = (massValue * 453.592).toExponential(4);
      const valueInMilligrams = (massValue * 453592).toExponential(4);
      const valueInMicrograms = (massValue * 4.536e8).toExponential(4);
      const valueInImperialTon = (massValue / 2240).toExponential(4);
      const valueInUsTon = (massValue / 2000).toExponential(4);
      const valueInStone = (massValue / 14).toExponential(4);
      const valueInOunce = massValue * 16;

      const data = {
        valueInTonnes,
        valueInKilograms,
        valueInGrams,
        valueInMilligrams,
        valueInMicrograms,
        valueInImperialTon,
        valueInUsTon,
        valueInStone,
        valueInOunce,
      };

      return res.status(200).json({
        status: "success",
        convertedMass: data,
      });
    } else {
      const valueInTonnes = (massValue / 35274).toExponential(4);
      const valueInKilograms = (massValue / 35.274).toExponential(4);
      const valueInGrams = massValue * 35.274;
      const valueInMilligrams = (massValue * 28350).toExponential(4);
      const valueInMicrograms = (massValue * 2.835e7).toExponential(4);
      const valueInImperialTon = (massValue / 35840).toExponential(4);
      const valueInUsTon = (massValue / 32000).toExponential(4);
      const valueInStone = (massValue / 224).toExponential(4);
      const valueInPounds = massValue / 16;

      const data = {
        valueInTonnes,
        valueInKilograms,
        valueInGrams,
        valueInMilligrams,
        valueInMicrograms,
        valueInImperialTon,
        valueInUsTon,
        valueInStone,
        valueInPounds,
      };

      return res.status(200).json({
        status: "success",
        convertedMass: data,
      });
    }
  }
}

export default MassController;
