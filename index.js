const express = require("express");
const cors = require('cors');

const bodyParser = require("body-parser");

const dataConnection = require("./config/db.js");

dataConnection();


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const main = require("./routes/index.js");

app.use(express.json());

app.use('/', main);

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log("Server is up and running")
})



