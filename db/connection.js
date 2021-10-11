const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Dundermifflin1!",
        database: "election"
    },
    console.log("Connected to the elecion database.")
);

module.exports = db;