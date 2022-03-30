require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const app = express();
const server_port = 3001;

const db = mysql.createConnection({
    host: process.env.DATABASE_HOSTNAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});



app.listen(server_port, (req, res) => {
    console.log("Server is running at port " + server_port);
    db.connect((err) => {
        if(err){
            console.log("Error", err.message);
        } else {
            console.log("Database connection established");
        }
    });
});