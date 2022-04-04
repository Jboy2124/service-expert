require("dotenv").config();
const express = require("express");
const mysql = require("mysql2"); 
const cors = require("cors");
const { application } = require("express");
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
    const queryString = "INSERT INTO profile(first_name, last_name, email, department, role, status) VALUES(?, ?, ?, ?, ?, ?)";
    db.query(queryString, [firstname, lastname, email, department, role, "Unconfirmed"], (err, result) => {
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


app.post("/api/auth_admin", (req, res) => {
    const { login_username, login_password } = req.body;
    const queryString = "SELECT * FROM admin WHERE username=? AND password=?";
    db.query(queryString, [ login_username, login_password ], (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            if(result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Invalid Admin Username or Password" });
            }
        }
    });
});


app.post("/api/auth", (req, res) => {
    const { login_username, login_password } = req.body;
    const queryString = "SELECT * " +
                                    "FROM user_access a " + 
                                    "LEFT JOIN profile p ON a.profile_id = p.approver_id " +
                                    "LEFT JOIN role r on p.role = r.role_id " +
                                    "WHERE (a.username = ? AND password = ?) ";
    db.query(queryString, [ login_username, login_password ], (err, result) => {
        if(err) {
            console.log("Error", err.message);
        } else {
            if(result.length > 0) {
                if(result[0].status == "Unconfirmed") {
                    res.send({ message: "User has no confirmation" });
                }else {
                    res.send(result);
                }
            } else {
                    res.send({ message: "Invalid username or password" });
            }
        }
    });
});

// app.get("/api/get_ticket_type", (req, res) => {
//     const queryString = "SELECT * FROM request_ticket_type";
//     db.query(queryString, (err, result) => {
//         if(err) {
//             console.log("Error: ", err.message);
//         } else {
//             res.send(result);
//         }
//     });
// });



app.get("/api/get_unconfirmed", (req, res) => {
    const queryString = "SELECT p.approver_id,  p.date_created, p.email, CONCAT(IFNULL(p.first_name,''),' ',IFNULL(p.last_name,'')) as fullname, "+
                                    "p.department, r.description as role "+ 
                                    "FROM profile p "+
                                    "LEFT JOIN role r on p.role = r.role_id "+
                                    "WHERE p.status = ?";
    db.query(queryString, "Unconfirmed", (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});

app.put("/api/confirm_profile", (req, res) => {
    const id = req.body.id;
    const queryString = "UPDATE profile SET status = ? WHERE approver_id = ?";
    db.query(queryString, ["Confirmed", id], (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            const queryString = "SELECT p.approver_id,  p.date_created, p.email, CONCAT(IFNULL(p.first_name,''),' ',IFNULL(p.last_name,'')) as fullname, "+
                                            "p.department, r.description as role "+ 
                                            "FROM profile p "+
                                            "LEFT JOIN role r on p.role = r.role_id "+
                                            "WHERE p.status = ?";
            db.query(queryString, "Unconfirmed", (err, result) => {
                if(err) {
                    console.log("Error: ", err.message);
                } else {
                    res.send(result);
                }
            });
        }
    });
});



app.get("/api/get_confirmed", (req, res) => {
    const queryString = "SELECT p.approver_id, p.date_created, p.email, CONCAT(IFNULL(p.first_name,''),' ',IFNULL(p.last_name,'')) as fullname, "+
                                    "p.department, r.description as role "+ 
                                    "FROM profile p "+
                                    "LEFT JOIN role r on p.role = r.role_id "+
                                    "WHERE p.status != ?";
    db.query(queryString, "Unconfirmed", (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
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