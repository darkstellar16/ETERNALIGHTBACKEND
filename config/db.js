require("dotenv").config();
const mongoose = require("mongoose");


const url = process.env.MONGO_URI;
// console.log(url);

const connection = async () => {

    try {
        mongoose.connect(url, { useNewUrlParser: true })
        console.log("Data base Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection;