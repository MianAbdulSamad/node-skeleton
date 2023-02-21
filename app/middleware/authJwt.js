// noinspection JSCheckFunctionSignatures

const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../config/sequelize.config");
const Sequelize = require("sequelize");
const User = db.user;
const Session = db.session;
// const Op = Sequelize.Op;

verifyToken = (req,res,next) => {
    if (req.path === '/api/exams' || req.path === '/api/categories' ) {
        req.user = {
            language_id: 1,
        }
        next()
    }else{
        let token = req.headers["authorization"];
        if (!token) {
            return res.status(422).send({
                message: "No token provided!"
            });
        }
        jwt.verify(token,config.secret,(err,decoded) => {
            if (err) {
                Session.findOne({
                    where: {
                        token: token,
                    },
                    attributes: ['token'],
                }).then(async session => {
                    if (session) {
                        await Session.destroy({
                            where: {token: token}
                        })
                    }
                });
                return res.status(401).send({
                    message: "Unauthorized!"
                });
            }
            Session.findOne({
                where: {
                    token: token,
                },
                attributes: ['user_id','token'],
            }).then(session => {
                if (!session){
                    return res.status(401).send({
                        message: "Unauthorized"
                    });
                }else{
                    User.findByPk(decoded.payload.user_id).then(user => {
                        req.user = user
                        next();
                    })
                }
            });
        })
    }
};

// verifyTokenAndSession = (req,res,next) =>{
//     let token = req.headers["authorization"];
//     if (!token) {
//         return res.status(403).send({
//             message: "No token provided!"
//         });
//     }
//
//     jwt.verify(token,config.secret,(err,decoded) => {
//         if (err) {
//             Session.findOne({
//                 where: {
//                     token: token,
//                 }
//             }).then(session => {
//                 if(session){
//                     Session.destroy({
//                         where: {token: token}
//                     })
//                 }
//             });
//             return res.status(401).send({
//                 message: "Unauthorized!"
//             });
//
//         }
//
//         req.payload = decoded.payload
//         Session.findOne({
//             where: {
//                 token: token,
//             }
//         }).then(session => {
//             if (!session){
//                 return  res.status(401).send({
//                     message: "Unauthorized"
//                 });
//             }
//            return  res.status(200).send({
//                 message: "authorized"
//             });
//         });
//         // next();
//     })
// }
//
// isAdmin = async (req, res, next) => {
//     await User.findByPk(req.payload.user_id).then(user => {
//         if (user.user_email !== req.payload.user_email || user.status.toString() !== "1" || user.role_id.toString() !== "0") {
//             return res.status(401).send({
//                 message: "Unauthorized!"
//             });
//         }
//         next();
//     });
// };
//
// isSeller = async (req, res, next) => {
//     await User.findByPk(req.payload.user_id).then(user => {
//         if (user.user_email !== req.payload.user_email || user.status.toString() !== "1" || user.role_id.toString() !== "1") {
//             res.status(401).send({
//                 message: "Unauthorized!"
//             });
//             return
//         }
//         next();
//
//     });
// };
//
// isBidder = async (req, res, next) => {
//     User.findByPk(req.payload.user_id).then(async user => {
//         await user.getRole().then(role => {
//             if (role.role_name === "bidder") {
//                 next();
//                 return;
//             }
//             return res.status(401).send({
//                 message: "Unauthorized!"
//             });
//         });
//     });
//     // await User.findByPk(req.payload.user_id).then(user => {
//     //     if (user.user_email === req.payload.user_email && user.status.toString() === "1" && user.role_id.toString() === "2") {
//     //         next();
//     //         return;
//     //     }
//     //     return res.status(401).send({
//     //         message: "Unauthorized!"
//     //     });
//     // });
// };
//
// isAdminOrSeller = async (req, res, next) => {
//     await User.findByPk(req.payload.user_id).then(user => {
//         if (user.user_email !== req.payload.user_email || user.status.toString() !== "1" || user.role_id.toString() !== "0" && user.role_id.toString() !== "1") {
//             return res.status(401).send({
//                 message: "Unauthorized!"
//             });
//         }
//         next();
//     });
// };

const authJwt = {
    verifyToken: verifyToken,
    // verifyTokenAndSession: verifyTokenAndSession,
    // isAdmin: isAdmin,
    // isSeller: isSeller,
    // isBidder: isBidder,
    // isAdminOrSeller: isAdminOrSeller,
}

module.exports = authJwt;