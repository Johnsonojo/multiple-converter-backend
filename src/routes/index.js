import express from "express";
import otherRouter from "./otherRoutes";

const app = express();

app.use("/", otherRouter);

export default app;
