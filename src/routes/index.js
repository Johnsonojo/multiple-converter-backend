import express from "express";
import massRoute from "../features/mass/route";
import temperatureRoute from "../features/temperature/route";
import otherRouter from "./otherRoutes";

const app = express();

app.use("/api/v1", temperatureRoute);
app.use("/api/v1", massRoute);
app.use("/", otherRouter);

export default app;
