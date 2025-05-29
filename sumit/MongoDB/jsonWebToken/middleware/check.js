const { secretKey } = require('../config/config');
const jwt = require('jsonwebtoken');

const checkLogin = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, secretKey);
        const { username, userID } = decoded;
        req.username = username;
        req.userId = userID;
        next();
    } catch (err) {
        next("Authentication failure!");
    }
};

module.exports = checkLogin;