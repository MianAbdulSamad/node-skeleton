const {body} = require('express-validator');
// const db = require(process.cwd() + "/app/config/sequelize.config")
exports.validate = (method) => {
    switch (method) {
        case 'signup': {
            return [
                body('user_name', 'User Name is required').notEmpty(),
                body('email', 'Email is required').notEmpty()
                    .isEmail().withMessage('Invalid Email'),
                body('password', 'Password is required').notEmpty(),
            ]
        }
        case 'signin': {
            return [
                body('email', 'Email is required').notEmpty()
                    .isEmail().withMessage('Invalid Email'),
                body('password', 'Password is required').notEmpty(),
            ]
        }
    }

}

