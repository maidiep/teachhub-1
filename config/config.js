console.log(process.env);
exports.dbConfig = 
{
    development: {
        username: process.env.DEVELOPMENT_USERNAME,
        password: process.env.DEVELOPMENT_PASSWORD,
        database: "teachhub_db",
        host: "127.0.0.1",
        port: 3306,
        dialect: "mysql"
    },
    test: {
        username: process.env.TEST_USERNAME,
        password: process.env.TEST_PASSWORD,
        database: "teachhub_db",
        host: "127.0.0.1",
        port: 3306,
        dialect: "mysql"
    },
    production: {
        username: process.env.PRODUCTION_USERNAME,
        password: process.env.PRODUCTION_PASSWORD,
        database: "teachhub_db",
        host: "127.0.0.1",
        port: 3306,
        dialect: "mysql"
    }
};