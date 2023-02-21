module.exports.initialize = async function (db) {
    // await db.status.findAll({attributes:["status_id"]}).then(async status => {
    //     if (status.length !== 3) {
    //         await db.status.sync({alter: true}).then(async () => {
    //             await db.status.create({
    //                 status_id: 1,
    //                 status_name: "inactive"
    //             })
    //             await db.status.create({
    //                 status_id: 2,
    //                 status_name: "active"
    //             })
    //             await db.status.create({
    //                 status_id: 3,
    //                 status_name: "pending"
    //             })
    //         });
    //     }
    // })

}
