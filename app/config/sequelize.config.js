const config = require('./db.config');

const Sequelize = require('sequelize');
// noinspection JSValidateTypes
const sequelize = new Sequelize(config);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../modules/user/models/user.model")(sequelize,Sequelize)
db.session = require("../modules/auth/models/session.model")(sequelize,Sequelize)
db.account_type = require("../modules/auth/models/account_type.model")(sequelize,Sequelize)


// Associations
db.associations  =
    [
        require('../modules/0_mock_module/associations')(db),
        require('../modules/user/associations')(db),
        require('../modules/auth/associations')(db),
    ]

module.exports = db
