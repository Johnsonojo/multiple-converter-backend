import express from "express";
import router from "./routes";
import registerMiddlewares from "./middlewares";

const app = express();

registerMiddlewares(app);

app.use(router);

const port = parseInt(process.env.PORT, 10) || 4400;
app.set("port", port);

app.listen(port, () => console.log("Server is running on port ", port));

export default app;
