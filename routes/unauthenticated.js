const express = require("express");
const userController = require("../controllers/userController");
const unAuthenticatedRouter = express.Router();

unAuthenticatedRouter.get("/getUser/:score/:name", userController.getUser);
unAuthenticatedRouter.get("/getReport", userController.getReport);
unAuthenticatedRouter.post("/getRank", userController.getRank);

module.exports = unAuthenticatedRouter;
