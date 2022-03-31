require("dotenv").config();
const mysql = require("mysql2"); 

exports.db = mysql.createConnection({
    host: process.env.DATABASE_HOSTNAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});


//LATER NA LANG AKO MAG CODE DITO
//REST MUNA AKO...
//ANG INGAY NA DITO SA AMIN
//MAY FIESTA
//TAPOS ANG WIFE KO, PRANG NAGCOCONCERT SA BABA..
