const controller = require("./controller");
const validator = require("./validator");
const { validation } = require(process.cwd() + "/app/middleware");

module.exports = function(app) {
    // app.post(
    //     "/api/test",
    //     // [authJwt.verifyToken],
    // [
    //     validator.validate('createCategory'),
    //     validation.validationResults,
    // ],
    //     controller.create
    // );
    // app.get(
    //     "/api/tests",
    //     // [authJwt.verifyToken],
    //     controller.findAll
    // );

};