const express = require("express");

const route = express.Router();

const register = require("../routes/register/register.js");


const login = require("../routes/login/login.js");

const mainData = require("../routes/main/main.js");


route.use('/register', register);
route.use('/login', login);
route.use('/main', mainData);
// route.use('/edit',edit);


module.exports = route;