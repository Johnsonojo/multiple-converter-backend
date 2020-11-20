import express from "express";
import temperatureRoute from "../features/temperature/route";
import otherRouter from "./otherRoutes";

const app = express();

app.use("/api/v1", temperatureRoute);
app.use("/", otherRouter);

export default app;
