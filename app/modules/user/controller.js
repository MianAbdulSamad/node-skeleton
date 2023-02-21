// const {validationResult} = require('express-validator');
// const db = require(process.cwd() + "/app/config/sequelize.config")
// const User = db.user
//
// exports.create = async (req, res) => {
//     // const errors = validationResult(req);
//     // if (!errors.isEmpty()) {
//     //     return res.status(422).json({message: (errors.array().map(val => val.msg))[0]});
//     // }
//     const user = {
//         user_name: req.body.user_name,
//         user_email: req.body.user_email,
//         user_pass: bcrypt.hashSync(req.body.user_pass,8),
//         status: 1,
//         role_id: 2,
//         account_type_id: 1,
//         status_id: 2,
//     };
//     User.create({
//         user_name: req.body.user_name,
//         user_email: req.body.user_email,
//         user_pass: bcrypt.hashSync(req.body.user_pass,8),
//         status: 1,
//         role_id: 2,
//         account_type_id: 1
//     }).then(async user => {
//         await bidderSignin(req,res)
//         // res.status(200).send({
//         //     message: "User was registered successfully!"
//         // });
//     }).catch(err => {
//         res.status(500).send({ message: "Registration not successful! " + err});
//     });
// };
//
// exports.userSignin = async (req, res) => {
//
//
// }
//
// exports.userSignup = async (req, res) => {}
//
