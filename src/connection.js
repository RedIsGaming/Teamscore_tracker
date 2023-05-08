"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mariadb = require("mariadb");
var conn;
function connection() {
    return new Promise(function (resolve, reject) {
        conn = mariadb.createConnection({
            host: "localhost",
            port: "3307",
            database: "PRT",
            user: process.env.USER,
            password: process.env.PASSWORD
        })
            .then(function (conn) {
            resolve(conn);
        })
            .catch(function (err) {
            reject(new Error("Failed to establish a DB connection! \n" + err.message));
        });
    });
}
exports.default = connection;
connection().then(function (conn) {
    console.log("Successfully connected to the DB!");
    conn.end();
})
    .catch(function (err) {
    console.error(new Error("Cannot connect to the server! \n" + err.message));
});
