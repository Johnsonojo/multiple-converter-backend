import bodyParser from "body-parser";
import cors from "cors";
import validator from "express-validator";

module.exports = (app) => {
  app.use(cors());
  app.use(validator());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};
