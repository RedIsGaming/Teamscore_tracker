var connection = require("../../connection");
function show() {
    connection().then(function (stmt) {
        stmt.query("SELECT * FROM `Teams`")
            .then(function (stmt) {
            console.log(stmt);
            stmt.release();
        })
            .catch(function (err) {
            console.error(new Error("Couldn't fetch the data from the DB! \n" + err.message));
        });
    })
        .catch(function (err) {
        console.error(new Error("Cannot connect to the server! \n" + err.message));
    });
}
show();
