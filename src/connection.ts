import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost',
    database: 'PRT',
    user: 'root',
    password: 'your_password'
});

async function main() {
    try {
        let conn = await pool.getConnection();
        let rows = await conn.query("SELECT * FROM `Teams`");

        console.log("It works...");
    }

    catch(err) {}
}

main();