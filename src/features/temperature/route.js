import express from "express";
import Temperature from "./controller";

const temperatureRoute = express.Router();

temperatureRoute.post("/temperature", Temperature.convertAllTempTypes);

export default temperatureRoute;
