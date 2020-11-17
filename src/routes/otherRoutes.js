import express from "express";

const otherRouter = express.Router();

otherRouter.get("/", (req, res) =>
  res.status(200).json({
    message: "Welcome to Multiple converter backend",
  })
);

otherRouter.all("*", (req, res) =>
  res.status(404).json({
    message: "Oooop! This page does not exist",
  })
);

export default otherRouter;
