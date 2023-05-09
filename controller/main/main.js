const loginInfo = require("../../model/userModel.js");

const welcomeData = async (req, res) => {
    try {

        const email = req.params.email;
        const data = await loginInfo.findOne({email:email});
        res.status(200).send(data);


    } catch (error) {
        console.log(error);

    }

}

module.exports = welcomeData;