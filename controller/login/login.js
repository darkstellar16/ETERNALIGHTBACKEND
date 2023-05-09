const loginInfo = require("../../model/userModel.js");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const loginData = async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!(email && password)) {
            return res.status(404).send("Fields required");
        }
        const user = await loginInfo.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {

            const token = jwt.sign({ email, password }, "fuckoff ", { expiresIn: "2h" })
            // console.log(token);
            user.token = token;
            return res.status(200).json({user});
        }
        else{
           return res.status(400).send("invalid credentials")
        }

    } catch (error) {
        console.log(error);
    }
}
module.exports = loginData;