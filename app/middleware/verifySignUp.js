const db = require("../config/sequelize.config");
const User = db.user;

checkDuplicateUsernameOrEmail = (req,res,next) => {
    // noinspection JSCheckFunctionSignatures
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                message: "Failed! email has already been registered!"
            });
            return;
        }
        next();
    });
}

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};
module.exports = verifySignUp;
