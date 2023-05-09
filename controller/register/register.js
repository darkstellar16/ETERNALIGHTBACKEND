const loginInfo = require("../../model/userModel.js");

const bcrypt = require("bcrypt");


const registerData = async (req, res) => {

    try {

        const { name, email, password, mobile, address } = req.body;

        if (!(name && email && password && mobile && address)) {
            res.status(400).send("Please Input the mentioned details");   //Asking for details
        }

        const oldUser = await loginInfo.findOne({ email });
        // console.log(oldUser);
        if (oldUser) {
            return res.status(409).send("Please login you are already registered user");  //checking whether the user is already present or not..
        }

        const encryptedPasword = await bcrypt.hash(password, 10);

        const registerInfo = await loginInfo.create({
            name: name,
            email: email,
            password: encryptedPasword,
            mobile: mobile,
            address: address,
        })
        res.status(200).send("User have registered successfully");
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = registerData;