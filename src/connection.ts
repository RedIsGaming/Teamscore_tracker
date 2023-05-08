import { Connection } from "mariadb";

const mariadb: any = require("mariadb");
let conn: Connection;

export default function connection(): Promise<{}> {
    return new Promise<{}>((resolve: any, reject: any) => {
        conn = mariadb.createConnection({
            host: "localhost",
            port: "3307",
            database: "PRT",
            user: process.env.USER,
            password: process.env.PASSWORD
        })
        
        .then((conn: Connection) => {
            resolve(conn);
        })

        .catch((err: Error) => {
            reject(new Error("Failed to establish a DB connection! \n" + err.message));
        });
    });
}

connection().then((conn: any) => {
    console.log("Successfully connected to the DB!");
    conn.end();
})

.catch((err: Error) => {
    console.error(new Error("Cannot connect to the server! \n" + err.message));
});