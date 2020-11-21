import express from "express";
import router from "./routes";
import registerMiddlewares from "./middlewares";

const app = express();
const PORT = process.env.PORT || 4400;

registerMiddlewares(app);

app.use(router);

app.listen(PORT, () =>
  console.log(`Multiple Converter Backend is running on ${PORT}`)
);

export default app;
