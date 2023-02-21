module.exports = (db) => {
    // Mock and Status
    db.mock.belongsTo(db.status,{
        foreignKey: "status_id",
        as:'status',
        targetKey: 'status_id'
    });
    return db
}


