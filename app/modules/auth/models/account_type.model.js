module.exports = (sequelize, Sequelize) => {
    return sequelize.define("account_type", {
            account_type_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            type: {
                type: Sequelize.STRING
            },
        },
        {
            paranoid: true
        }
    );
};