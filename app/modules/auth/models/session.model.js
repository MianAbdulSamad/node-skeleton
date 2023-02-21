module.exports = (sequelize, Sequelize) => {
    return sequelize.define("sessions", {
            session_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            token: {
                type: Sequelize.STRING(2048),
            },
        },
        {
            paranoid: true
        },
    )
};