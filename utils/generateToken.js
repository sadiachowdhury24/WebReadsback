const jwt = require('jsonwebtoken')  //JWT token is used to certify the user identity, and sends it to the client


// generate token 
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "120d",
    });
};

module.exports = generateToken;
