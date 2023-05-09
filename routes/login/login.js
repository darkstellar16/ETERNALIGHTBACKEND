const express = require("express");

const route = express.Router();

const loginData = require("../../controller/login/login.js")


route.post("/",loginData);



module.exports=route;