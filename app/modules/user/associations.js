module.exports = (db) => {
//     // User and Status
//     db.user.belongsTo(db.status,{
//         foreignKey: "status_id",
//         as:'status',
//         targetKey: 'status_id'
//     });
//     // User and Country
//     db.user.belongsTo(db.country,{
//         foreignKey: "country_id",
//         as:'country',
//         targetKey: 'country_id'
//     });
//     // User and Account Type
//     db.user.belongsTo(db.account_type,{
//         foreignKey: "account_type_id",
//         as:'type',
//         targetKey: 'account_type_id'
//     });
//     // User and language
//     db.user.belongsTo(db.languages,{
//         foreignKey: "language_id",
//         as:'language',
//         targetKey: 'language_id'
//     });
    return db
}
//
//
