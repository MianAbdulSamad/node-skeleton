module.exports = (sequelize, Sequelize) => {
    return sequelize.define("mocks", {
            mock_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            mock_name: {
                type: Sequelize.STRING,
            },
        },
        {
            paranoid: true
        },
    )
};