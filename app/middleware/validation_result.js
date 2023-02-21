const {validationResult} = require("express-validator");
validationResults = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({message: (errors.array().map(val => val.msg))[0]});
    }
    next();
}

const validation = {
    validationResults: validationResults,
};
module.exports = validation;