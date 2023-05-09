const express = require("express");

const route = express.Router();

const mainData = require("../../controller/main/main.js");

const auth = require("../../middleware/auth.js");


route.get("/:email", auth, mainData);

module.exports = route;   