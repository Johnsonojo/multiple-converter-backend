import express from "express";
import Mass from "./controller";

const massRoute = express.Router();

massRoute.post("/mass", Mass.convertAllMasses);

export default massRoute;
