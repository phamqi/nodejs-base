import express from "express";
require("dotenv").config();

import configViewEngine from "./configs/viewEngine";
import innitWebRouter from "./route/router";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);

innitWebRouter(app);

app.listen(port, () => {
  console.log("alo alo");
});
