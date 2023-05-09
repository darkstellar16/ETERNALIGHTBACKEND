const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    mobile:
    {
        type:Number,
        // required:true,
        minlength:10,
        maxlength:10
    },
    address:
    {
        type:String,
        // reuired:true,
        minlength:5
    },
    token:
    {
        type:String
    }
})

const loginInfo = mongoose.model("Login", loginSchema);

module.exports = loginInfo;