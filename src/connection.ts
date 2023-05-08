//Import for the mariadb module.
const mariadb = require('mariadb');

//A local variable with the any type.
let conn: any;

//An async function connect that attempts a DB connection.
async function connect() {
    //A try to connect to the DB.
    try {
        conn = await mariadb.createConnection({
            //Put your own stuff in here.
            host: '',
            port: '',
            database: '',
            user: '',
            password: ''
        });

        console.log("DB connection made.");
    }

    //If the connection fails, then a catch will happen.
    catch (err) {
        console.error("An error occurred: ", err);
        
        if (conn) {
            conn.end();
        }
    } 
    
    //No matter the output, execute the connection anyways.
    finally {
        return conn ? conn.end() : conn;
    }
}

//Call the connect function here.
connect();