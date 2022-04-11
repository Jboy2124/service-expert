require("dotenv").config();
const express = require("express");
const mysql = require("mysql2"); 
const cors = require("cors");
const { application } = require("express");
const app = express();
const server_port = 3001;
const bcrypt = require('bcrypt')

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


app.post("/api/account_checking", (req,res) => {
    const { firstname, lastname, email, password, confirmPassword, department, role } = req.body;
    const querySelect = "SELECT * FROM profile WHERE email = ?";
    db.query(querySelect, email, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            if (result.length > 0) {
                res.send({message: "Email already in use"})
            } 
            else {
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
                                const saltRounds = 8;
                                const myPlaintextPassword = password;
                                bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
                                    if (err) {
                                        console.log(err)
                                    }else{
                                        const insertUserAccess = "INSERT INTO user_access(username, password, profile_id) VALUES(?, ?, ?)";
                                        db.query(insertUserAccess, [email, hash, result[0].id ], (error, result) => {
                                            if(error) {
                                                console.log(error)
                                            }  
                                            else {
                                                db.query("SELECT * FROM profile WHERE email = ?", email , (err, result1) =>{
                                                    res.send(result1)
                                                    
                                                });
                                                
                                            }                             
                                        });
                                    }
                                })
                            }
                        });
                    }
                });
                     
            }
        }
    })   
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
    const statement = "SELECT password FROM user_access WHERE username = ?"
    db.query(statement, login_username, function (err, res){
        if (err) {
            console.log(err)
        }
        else {
            //console.log(res)
            var hash = res[0].password;
            bcrypt.compare(login_password, hash, function (err, result) {
               (hashAccess(result));
            })
        }
    });
    function hashAccess(result) {
        if(result) {
           //console.log(result) true
           const querySelect = "SELECT * FROM profile p LEFT JOIN role r on p.role = r.role_id WHERE email = ?";
           db.query(querySelect, login_username , (err, res1) => {
               if (err) {
                   console.log(err)
               }
               else {
                   if(res1[0].status == "Unconfirmed") {
                       res.send("User has no confirmation" );
                   }
                   else {
                       res.send(res1)
                   }
               }
           })        
        }
        else {
            res.send({ message: "Invalid username or password" });
        }
    }
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
    const queryString = "SELECT p.approver_id, date_format(p.date_created, '%Y-%c-%d %H:%i:%s' ), p.email, CONCAT(IFNULL(p.first_name,''),' ',IFNULL(p.last_name,'')) as fullname, "+
                                    "p.department, r.description as role "+ 
                                    "FROM profile p "+
                                    "LEFT JOIN role r on p.role = r.role_id "+
                                    "WHERE p.status != ?";

    db.query(queryString, "Unconfirmed", (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
            // console.log(result)
        }
    });
});






app.get("/api/admin_totaluser", (req, res) => {
    const queryString = "SELECT COUNT(IFNULL(p.approver_id,0)) as totalUser FROM profile p";
    db.query(queryString, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});


app.get("/api/admin_totalrole", (req, res) => {
    const queryString = "SELECT COUNT(IFNULL(r.role_id,0)) as roleCount FROM role r";
    db.query(queryString, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});


app.get("/api/category", (req, res) => {
    const queryString = "SELECT * FROM type_uam_category";
    db.query(queryString, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});



app.get("/api/getsystem", (req,res) => {
    const queryString = "SELECT * FROM ticket_system";
    db.query(queryString, (err,result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});


app.get("/api/getoperation", (req,res) => {
    const queryString = "SELECT * FROM type_uam_operation";
    db.query(queryString, (err,result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});


app.get("/api/user_profile/:id", (req, res) => {
    const profile_id = parseInt(req.params.id);
    const queryString = "SELECT CONCAT(p.first_name,' ',p.last_name) as fullname, " +
                                    "p.email, p.department " +
                                    "FROM profile p " +
                                    "WHERE p.approver_id = ? ";
    db.query(queryString, profile_id, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});


app.get("/api/ticketno", (req, res) => {
    const queryString = "SELECT * FROM type_uam_ticket";
    db.query(queryString, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});


//Adding new role in the database 
app.post("/api/add_role", (req,res) => {
    const { role, rights } = req.body;
    db.query("INSERT INTO role (description, rights) VALUES (?,?)", [role, rights], (err,result) => {
        if (err) {
            console.log(err)
        }else {
            const sql = "SELECT * FROM role";
            db.query(sql, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else{
                    res.send(result)
                }
            })
        }
    })
});

//Delete Role in the db

app.put("/api/deleteRole", (req, res) => {
    const id = req.body.id;
    const queryString = "DELETE FROM role WHERE role_id = ?";
    db.query(queryString, id, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            const sql = "SELECT * FROM role";
            db.query(sql, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else{
                    res.send(result)
                }
            })
        }
    });
});

//Download ticket list

app.get("/api/download", (req, res) => {
    const queryString = "SELECT type_uam_ticket.ticket_id, date_format(type_uam_ticket.date_created, '%Y-%c-%d %H:%i:%s') as date_requested, " +
    "CONCAT(profile.first_name,' ',profile.last_name) as fullname," +
    "profile.email, " +
    "profile.department, " +
    "type_uam_category.category_name as request_category, " +
    "type_uam_operation.operation_name as operation_rights, " +
    "ticket_system.system_name as system_name " +
    "FROM type_uam_ticket " +
    "LEFT JOIN profile on requested_by = approver_id " +
    "LEFT JOIN ticket_system on type_uam_ticket.system = ticket_system.system_id " +
    "LEFT JOIN type_uam_category on type_uam_ticket.category = type_uam_category.category_id " +
    "LEFT JOIN type_uam_operation on type_uam_ticket.operation = type_uam_operation.operation_id ";
    db.query(queryString, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});


app.put("/api/delete_profile", (req, res) => {
    const id = req.body.id;
    const queryString = "DELETE FROM profile WHERE approver_id = ?";
    db.query(queryString, id, (err, result) => {
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