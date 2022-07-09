import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const innitWebRouter = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/user/details/:user", homeController.getUserDetailsPage);
  router.post("/user/create", homeController.createUser);
  router.post("/delete", homeController.deleteUser);
  router.post("/user/details/update", homeController.updateUser);
  router.get("/about", (rep, res) => {
    console.log("alo alo");
  });
  return app.use("/", router);
};
export default innitWebRouter;
