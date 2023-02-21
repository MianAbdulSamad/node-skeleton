const jwt = require("jsonwebtoken");
const config = require(process.cwd() + "/app/config/auth.config")
payload = (user) => {
    return {
        payload: {
            'user_id': user.user_id,
            'user_name': user.user_name,
            'email': user.email,
        }
    }
}

// noinspection JSCheckFunctionSignatures
accessToken = (user) => {
    // noinspection JSCheckFunctionSignatures
    return jwt.sign(payload(user), config.secret, {
        expiresIn: 2628000, // 1 month
    });
}

module.exports = {
    payload : payload,
    accessToken : accessToken,
}