const controller = require("./controller");
const validator = require("./validator");
const { verifySignUp,validation } = require(process.cwd() + "/app/middleware");

module.exports = function(app) {

    // User
    app.post(
        "/auth/signup",
        [
            validator.validate('signup'),
            validation.validationResults,
            verifySignUp.checkDuplicateUsernameOrEmail,
        ],
        controller.userSignup
    )

    app.post(
        "/auth/signin",
        [
            validator.validate('signin'),
            validation.validationResults,
        ],
        controller.userSignin,
    )
    return app;
}
