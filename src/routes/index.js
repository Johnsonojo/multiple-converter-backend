import express from "express";
import areaRoute from "../features/area/route";
import massRoute from "../features/mass/route";
import temperatureRoute from "../features/temperature/route";
import otherRouter from "./otherRoutes";

const app = express();

app.use("/api/v1", areaRoute);
app.use("/api/v1", massRoute);
app.use("/api/v1", temperatureRoute);
app.use("/", otherRouter);

export default app;
