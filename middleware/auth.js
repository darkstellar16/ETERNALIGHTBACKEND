const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {

    let token = req.body.token || req.query.token || req.headers.authorization;
    token = token ?  token.split(' ')[1]: null;
    if (!token) {
       return res.status(400).send("Need token for verification");
    }
    try {

        const decoded = jwt.verify(token, "fuckoff ")
        req.user = decoded

    } catch (error) {
        console.log(error);

    }
    return next();
}

module.exports = checkToken;