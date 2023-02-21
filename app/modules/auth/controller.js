const db = require(process.cwd() + "/app/config/sequelize.config")
const User = db.user
const Session = db.session
const {accessToken} = require('./helpers')
const bcrypt = require("bcryptjs");

exports.userSignin = async (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(async user => {
        if (!user) {
            return res.status(404).send({
                message: "User Not Found!"
            });
        }
        if(user.status_id.toString() !== "2"){
            return res.status(401).send({
                message: "Inactive user!"
            });
        }

        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        )
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            })
        }

        // noinspection JSCheckFunctionSignatures
        let token = accessToken(user);
        Session.create({
            user_id: user.user_id,
            token: token,
        }).then(session => {
            return res.status(200).send(
                {
                    'user_id': user.user_id,
                    'user_name': user.user_name,
                    'email': user.email,
                    'access_token': session.token,
                }
            )
        });
        // res.status(200).send(
        //      await createSession(user)
        // )
    }).catch(_ => {
        return res.status(500).send({message: "server error "});
    });
}

exports.userSignup = async (req, res) => {
    const user = {
        user_name: req.body.user_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,8),
        status_id: 2,
        account_type_id: 1,
        social_email:'',
        is_verified:false,
        language_id: 1,
    };
    User.create(user).then(async user => {
        if (!user) {
            return res.status(400).send({ message: "Registration not successful!"});
        }
        await userSignin(user,res)
    }).catch(_ => {
        return res.status(500).send({ message: "server error"});
    });
    // return res.sendStatus(200)
}

async function userSignin(user, res) {
    // noinspection JSCheckFunctionSignatures
    let token = accessToken(user)
    Session.create({
        user_id: user.user_id,
        token: token,
    }).then(session => {
        return res.status(200).send(
            {
                'user_id': user.user_id,
                'user_name': user.user_name,
                'email': user.email,
                'access_token': session.token,
            }
        )
    }).catch(_ => {
        return res.status(500).send({message: "server error"});
    });
}