import express from "express";
import Area from "./controller";

const AreaRoute = express.Router();

AreaRoute.post("/area", Area.convertAllAreas);

export default AreaRoute;
