const connection: any = require("../../connection");

function show(): void {
    connection().then((stmt: any) => {
        stmt.query("SELECT * FROM `Teams`")
        
        .then((stmt: any) => {
            console.log(stmt);
            stmt.release();
        })
        
        .catch((err: Error) => {
            console.error(new Error("Couldn't fetch the data from the DB! \n" + err.message));
        });
    })
    
    .catch((err: Error) => {
        console.error(new Error("Cannot connect to the server! \n" + err.message));
    });
}

show();