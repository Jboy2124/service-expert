require("dotenv").config();
const express = require("express");
const mysql = require("mysql2"); 
const cors = require("cors");
const app = express();
const server_port = 3001;


const db = mysql.createConnection({
    host: process.env.DATABASE_HOSTNAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


app.post("/api/account_registration", (req,res) => {
    const { firstname, lastname, email, password, confirmPassword, department, role } = req.body;
    const queryString = "INSERT INTO profile(first_name, last_name, email, department, role) VALUES(?, ?, ?, ?, ?)";
    db.query(queryString, [firstname, lastname, email, department, role], (err, result) => {
        if(err) {
            console.log("Error", err.message);
        } else {
            const getID = "SELECT MAX(p.approver_id) as id FROM profile p";
            db.query(getID, (err, result) => {
                if(err) {
                    console.log("Error", err.message);
                } else {
                    const insertUserAccess = "INSERT INTO user_access(username, password, profile_id) VALUES(?, ?, ?)";
                    db.query(insertUserAccess, [ email, password, result[0].id ], (error, result) => {
                        if(error) {
                            console.log("Error", err.message);
                        } 
                    });
                }
            });
        }
    });
});


app.get("/api/get_role", (req, res) => {
    const queryString = "SELECT * FROM role";
    db.query(queryString, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});


app.get("/api/get_name", (req, res) => {
    const id = req.params.id;
    const queryString = "SELECT * FROM profile p WHERE p.approver_id = ?";
    db.query(queryString, id, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});



app.post("/api/auth", (req, res) => {
    const { login_username, login_password } = req.body;
    const queryString = "SELECT * FROM user_access u WHERE u.username=? AND u.password=? ";
    db.query(queryString, [ login_username, login_password ], (err, result) => {
        if(err) {
            console.log("Error", err.message);
        } else {
            if(result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Invalid username or password" });
            }
        }
    });
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