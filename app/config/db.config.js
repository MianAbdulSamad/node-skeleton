module.exports = {
    database: "mock",
    username: "postgres",
    password: "pass",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    // dialectOptions: {
    //     ssl: {
    //         require: true, // This will help you. But you will see new error
    //         rejectUnauthorized: false // This line will fix new error
    //     }
    // },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
