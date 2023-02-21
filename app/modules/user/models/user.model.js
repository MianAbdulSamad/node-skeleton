module.exports = (sequelize, Sequelize) => {
    return sequelize.define("users", {
            user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_name: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
            },
            social_email: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            is_verified: {
                type: Sequelize.BOOLEAN,
            },
        },
        {
            paranoid: true
        },
    )
};