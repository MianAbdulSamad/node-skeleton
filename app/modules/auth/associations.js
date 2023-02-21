module.exports = (db) => {
    // // Session and Status
    // db.session.belongsTo(db.status,{
    //     foreignKey: "status_id",
    //     as:'status',
    //     targetKey: 'status_id'
    // });
    // Session and User
    db.session.belongsTo(db.user,{
        foreignKey: "user_id",
        as:'user',
        targetKey: 'user_id'
    });
    // // Account Type and Status
    // db.account_type.belongsTo(db.status,{
    //     foreignKey: "status_id",
    //     as:'status',
    //     targetKey: 'status_id'
    // });
    return db
}


