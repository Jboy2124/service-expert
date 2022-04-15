require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const mysql = require("mysql2"); 
const cors = require("cors");
const app = express();
const server_port = 3001;
const bcrypt = require('bcrypt');

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



const uamEmailDesign = (ticketDetails) => {

    for (let i = 0; i < ticketDetails.length; i++) {
        
       return `<h2>TICKET DETAILS</h2>
        <table border='2' cellpadding='10' cellspacing='2' style='text-align: left'>
            <tr>
                <th>Ticket No.</th>
                <td>${ticketDetails[i].ticket_id}</td>
            </tr>
            <tr>
                <th>Ticket Type</th>
                <td>${ticketDetails[i].ticket_type}</td>
            </tr>
            <tr>
                <th>Requested By</th>
                <td>${ticketDetails[i].requested_by}</td>
            </tr>
            <tr>
                <th>Department</th>
                <td>${ticketDetails[i].department}</td>
            </tr>
            <tr>
                <th>Category</th>
                <td>${ticketDetails[i].category_name}</td>
            </tr>
            <tr>
                <th>System</th>
                <td>${ticketDetails[i].system_name}</td>
            </tr>
            <tr>
                <th>Operation</th>
                <td>${ticketDetails[i].operation_name}</td>
            </tr>
            <tr>
                <th>Validity Period</th>
                <td>${ticketDetails[i].uam_validity}</td>
            </tr>
            <tr>
                <th>Request Details</th>
                <td>${ticketDetails[i].request_details}</td>
            </tr>
            <tr>
                <th>Request Reason</th>
                <td>${ticketDetails[i].request_reason}</td>
            </tr>
        </table>`
    }
}


const srEmailDesign = (ticketDetails) => {

    for (let i = 0; i < ticketDetails.length; i++) {
        
       return `<h2>TICKET DETAILS</h2>
        <table border='2' cellpadding='10' cellspacing='2' style='text-align: left'>
            <tr>
                <th>Ticket No.</th>
                <td>${ticketDetails[i].ticket_id}</td>
            </tr>
            <tr>
                <th>Ticket Type</th>
                <td>${ticketDetails[i].ticket_type}</td>
            </tr>
            <tr>
                <th>Requested By</th>
                <td>${ticketDetails[i].requested_by}</td>
            </tr>
            <tr>
                <th>Department</th>
                <td>${ticketDetails[i].department}</td>
            </tr>
            <tr>
                <th>Category</th>
                <td>${ticketDetails[i].category_name}</td>
            </tr>
            <tr>
                <th>System</th>
                <td>${ticketDetails[i].system_name}</td>
            </tr>
            <tr>
                <th>Activity Name</th>
                <td>${ticketDetails[i].activity_name}</td>
            </tr>
            <tr>
                <th>Activity Details</th>
                <td>${ticketDetails[i].activity_details}</td>
            </tr>
            <tr>
                <th>Activity Start</th>
                <td>${ticketDetails[i].activity_start}</td>
            </tr>
            <tr>
                <th>Activity End</th>
                <td>${ticketDetails[i].activity_end}</td>
            </tr>
            <tr>
                <th>Severity</th>
                <td>${ticketDetails[i].severity}</td>
            </tr>
            <tr>
                <th>Purpose</th>
                <td>${ticketDetails[i].purpose}</td>
            </tr>
        </table>`
    }
}




const sendEmailToApprover = (receiver_email, email_info, ticket_type) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: process.env.S_EMAIL,
            pass: process.env.S_WORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
          },
    });
    
    let mailOptions = {
        from: 'serviceXpert',
        to: receiver_email,
        subject: "Ticket to Approved",
        html: (ticket_type == "UAM") ? uamEmailDesign(email_info) : srEmailDesign(email_info)
    }
    
    transporter.sendMail(mailOptions, (err, result) => {
        if(err) {
            console.log("Error on Nodemailer ", err.message);
        }
    });
}



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
            for (let i = 0; i < res.length; i++) {
                var hash = res[i].password;
                bcrypt.compare(login_password, hash, function (err, result) {
                   (hashAccess(result));
                })
            }
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

                    for (let i = 0; i < res1.length; i++) {
                        if(res1[i].status == "Unconfirmed") {
                            res.send("User has no confirmation" );
                        }
                        else {
                            res.send(res1)
                        }
                    }
               }
           })        
        }
        else {
            res.send({ message: "Invalid username or password" });
        }
    }
});

app.get("/api/get_user_role/:id", (req, res) => {
    const id = req.params.id;
    const queryString = "SELECT * FROM profile WHERE approver_id =? ";                    
    db.query(queryString, id, (error, result) => {
        if(error) {
            console.log("Error: ", error.message);
        } else {
            res.send(result);
        }
    });
});



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
    const queryString = "SELECT p.approver_id, date_format(p.date_created, '%Y-%c-%d %H:%i:%s' ) as date_created, p.email, CONCAT(IFNULL(p.first_name,''),' ',IFNULL(p.last_name,'')) as fullname, "+
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





//Admin side
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


app.get("/api/get_admin_total_tickets", (req, res) => {
    const querySelect = `SELECT IFNULL(SUM(x.ActiveTicket),0) as ActiveTicket,
                        IFNULL(SUM(x.ClosedTicket),0) as ClosedTicket,
                        IFNULL(IFNULL(SUM(x.ActiveTicket),0) + IFNULL(SUM(x.ClosedTicket),0),0) as TotalTicket
                        FROM
                        (SELECT IF(t.ticket_status != 'Implemented', 1, 0) as ActiveTicket,
                        IF(t.ticket_status = 'Implemented', 1, 0) as ClosedTicket
                        FROM type_uam_ticket t
                        UNION ALL
                        SELECT IF(t.ticket_status != 'Implemented', 1, 0) as ActiveTicket,
                        IF(t.ticket_status = 'Implemented', 1, 0) as ClosedTicket
                        FROM type_sr_ticket t) x`;
    db.query(querySelect, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});


app.get("/api/admin_ticket_management", (req, response) => {
    const queryString = `SELECT t.ticket_id, t.date_created, PROFILE_FULLNAME(t.requested_by) as requested_by,
                        CONCAT(t.ticket_type,' - ',c.category_name) as request_type, t.ticket_status
                        FROM type_uam_ticket t 
                        LEFT JOIN type_uam_category c ON t.uam_category = c.category_id
                        UNION ALL
                        SELECT t.ticket_id, t.date_created, PROFILE_FULLNAME(t.requested_by) as requested_by,
                        CONCAT(t.ticket_type,' - ',c.category_name) as request_type, t.ticket_status
                        FROM type_sr_ticket t
                        LEFT JOIN type_sr_category c ON t.sr_category = c.category_id`;
    db.query(queryString, (err,result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            response.send(result);
        }
    });
});

app.get("/api/ticket_details_modal/:id", (request, response) => {
    const id = request.params.id;
    const query = `SELECT * FROM 
                    (SELECT DATE_FORMAT(ut.date_created, '%Y-%c-%d %H:%i:%s') as date_created, ut.ticket_id, PROFILE_FULLNAME(ut.requested_by) as fullname, 
                    p.email, p.department, ut.ticket_type, uc.category_name, 
                    IF(ut.ticket_status = 'Implemented', 'Closed', ut.ticket_status) as ticket_status, 
                    us.system_name, uo.operation_name, ut.uam_validity as ticket_validity, ut.request_details, ut.request_reason 
                    FROM type_uam_ticket ut 
                    LEFT JOIN profile p ON ut.requested_by = p.approver_id 
                    LEFT JOIN type_uam_category uc ON ut.uam_category = uc.category_id 
                    LEFT JOIN ticket_system us ON ut.uam_system = us.system_id 
                    LEFT JOIN type_uam_operation uo ON ut.uam_operation = uo.operation_id 
                    UNION ALL
                    SELECT st.date_created, st.ticket_id, PROFILE_FULLNAME(st.requested_by) as fullname, 
                    pr.email, pr.department, st.ticket_type, src.category_name, IF(st.ticket_status = 'Implemented', 'Closed', st.ticket_status) as ticket_status, 
                    srs.system_name, '' as operation_name, '' as ticket_validity, 
                    CONCAT(st.activity_name,'-',st.activity_details,' (',st.severity,')') as request_details, st.purpose as request_reason 
                    FROM type_sr_ticket st 
                    LEFT JOIN profile pr ON st.requested_by = pr.approver_id 
                    LEFT JOIN type_sr_category src ON st.sr_category = src.category_id 
                    LEFT JOIN ticket_system srs ON st.sr_system = srs.system_id) x 
                    LEFT JOIN (SELECT i.ticket_id, 
                                IF(i.FirstApprover != 0, PROFILE_FULLNAME(i.FirstApprover), '') as FirstApprover,
                                IF(i.SecondApprover != 0, PROFILE_FULLNAME(i.SecondApprover), '') as SecondApprover,
                                IF(i.Implementor != 0, PROFILE_FULLNAME(i.Implementor), '') as Implementor
                                FROM
                                (SELECT x.ticket_id,
                                MAX(IF(x.ticket_status = "Approved", x.handled_by, 0)) as FirstApprover,
                                MAX(IF(x.ticket_status = "IS Approved", x.handled_by, 0)) as SecondApprover,
                                MAX(IF(x.ticket_status = "Approved for Implementation", x.handled_by, 0)) as Implementor
                                FROM
                                (SELECT t.ticket_id, t.handled_by,t.ticket_status
                                FROM ticket_status_history t
                                WHERE (t.ticket_status = 'Approved' OR t.ticket_status = 'IS Approved' OR t.ticket_status = 'Approved for Implementation')
                                ORDER BY t.ticket_id ASC) x
                                GROUP BY x.ticket_id) i) i ON x.ticket_id = i.ticket_id
                    WHERE x.ticket_id = ?`;
    db.query(query, id, (error, result) => {
        if(error) {
            console.log("Error: ", error.message);
        } else {
            response.send(result);
        }
    });
});



//Loading miscellaneous
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


app.get("/api/ticketno/:type", (req, res) => {
    const type = req.params.type;
    const queryString = `SELECT MAX(IFNULL(x.ticket_id,0)) as ticket_id FROM
                        (SELECT t.ticket_id, t.ticket_type
                        FROM type_uam_ticket t
                        UNION
                        SELECT st.ticket_id, st.ticket_type
                        FROM type_sr_ticket st) x
                        WHERE x.ticket_type = ? `;
    db.query(queryString, type, (err, result) => {
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
            });
        }
    });
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


app.post("/api/insertuam", (req, res) => {
    let appList = "";
    const { uamTicket, uamcategory, uamsystem, uamoperation, uamvalidity, uamdetails, uamreason, reqby } = req.body;  
    const queryString = "INSERT INTO type_uam_ticket (ticket_id, ticket_type, uam_category, uam_system, uam_operation, uam_validity, request_details,request_reason, requested_by, ticket_status) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(queryString, [uamTicket, "UAM", uamcategory, uamsystem, uamoperation, uamvalidity, uamdetails, uamreason, reqby, "For Approval"], 
        (err, result) => {
            if(err){
                console.log("Error: ", err.message);
            } else {           
                const getLatest = "INSERT INTO ticket_status_history(ticket_status, handled_by, reasons, remarks, ticket_id, ticket_type) VALUES(?, ?, ?, ?, ?, ?)";
                db.query(getLatest, ["For Approval", reqby, uamreason, uamdetails, uamTicket, "UAM"], (err,result) => {
                    if(err) {
                        console.log("Error: ", err.message);
                    } else {
                        res.send({message: "Ticket successfully added"});
                    }
                });

                const getApprover = "SELECT * FROM profile WHERE role = 2 AND status = 'Confirmed' ";
                db.query(getApprover, (err, result) => {
                    if(err){
                        console.log(err);
                    } else {
                        for (let i = 0; i < result.length; i++) {
                            const element = result[i].email;
                            appList += element+', ';
                        }
                        appList = appList.toString().replace(/,\s*$/, '');
                        const getInfo = `select t.ticket_id, t.date_created, t.ticket_type, c.category_name, s.system_name, op.operation_name,
                                        t.uam_validity, t.request_details, t.request_reason, CONCAT(IFNULL(p.first_name,''),' ',IFNULL(p.last_name,'')) as requested_by, p.department
                                        from type_uam_ticket t 
                                        left join type_uam_category c on t.uam_category = c.category_id
                                        left join ticket_system s on t.uam_system = s.system_id
                                        left join type_uam_operation op on t.uam_operation = op.operation_id
                                        left join profile p on t.requested_by = p.approver_id
                                        where t.ticket_id = ?`;
                        db.query(getInfo, uamTicket, (err, result) => {
                            if(err) {
                                console.log(err.message);
                            } else {
                                // sendEmailToApprover(appList, result, "UAM");
                            }
                        });

                    }
                });

            }
    });
});


app.post("/api/insertsr", (request, response) => {
    let appList = "";
    const { srTicketNo, srCategory, srSystem, srActivity, srDetails, 
            srSched1, srSched2, srSeverity, srPurpose, requested } = request.body;
    const queryString = "INSERT INTO type_sr_ticket (ticket_id, ticket_type, sr_category, sr_system, activity_name, " + 
                        "activity_details, activity_start, activity_end, severity, purpose, requested_by, ticket_status) " +
                        "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(queryString, [srTicketNo, "SR", srCategory, srSystem, srActivity, srDetails, srSched1, srSched2, srSeverity, srPurpose, requested, "For Approval"], (error, result) => {
        if(error) {
            console.log("Error", error.message);
        } else {
            const getLatest = "INSERT INTO ticket_status_history(ticket_status, handled_by, reasons, remarks, ticket_id, ticket_type) VALUES(?, ?, ?, ?, ?, ?)";
            db.query(getLatest, ["For Approval", requested, srPurpose, srDetails, srTicketNo, "SR"], (err,result) => {
                if(err) {
                    console.log("Error: ", err.message);
                } else {
                    response.send({message: "Ticket successfully added"});
                }
            });

            const getApprover = "SELECT * FROM profile WHERE role = 2 AND status = 'Confirmed' ";
            db.query(getApprover, (err, result) => {
                if(err){
                    console.log(err);
                } else {
                    for (let i = 0; i < result.length; i++) {
                        const element = result[i].email;
                        appList += element+', ';
                    }
                    appList = appList.toString().replace(/,\s*$/, '');
                    const getInfo = `select t.ticket_id, t.ticket_type, CONCAT(IFNULL(p.first_name,''),' ',IFNULL(p.last_name,'')) as requested_by,
                                    p.department, c.category_name, s.system_name, t.activity_name, t.activity_details, t.activity_start, t.activity_end,
                                    t.severity, t.purpose, t.date_created
                                    from type_sr_ticket t 
                                    left join type_sr_category c on t.sr_category = c.category_id
                                    left join ticket_system s on t.sr_system = s.system_id
                                    left join profile p on t.requested_by = p.approver_id
                                    where t.ticket_id = ?`;
                    db.query(getInfo, srTicketNo, (err, result) => {
                        if(err) {
                            console.log(err.message);
                        } else {
                            // sendEmailToApprover(appList, result, "SR");
                        }
                    });
                }
            });
        }
    })
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
    "LEFT JOIN ticket_system on type_uam_ticket.uam_system = ticket_system.system_id " +
    "LEFT JOIN type_uam_category on type_uam_ticket.uam_category = type_uam_category.category_id " +
    "LEFT JOIN type_uam_operation on type_uam_ticket.uam_operation = type_uam_operation.operation_id ";
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



app.get("/api/getsrcategory", (request, response) => {
    const queryString = "SELECT * FROM type_sr_category";
    db.query(queryString, (error, result) => {
        if(error) {
            console.log("Error: ", error.message);
        } else {
            response.send(result);
        }
    })
});


//Requestor Side
app.get("/api/getactiveuamtickets/:id", (req, res) => {
    const id = req.params.id;
    const ticketStatus = ['For Approval', 'Approved', 'For I']
    const query = "select * "+
                "from type_uam_ticket t "+
                "left join type_uam_category c on t.uam_category = c.category_id "+
                "where t.requested_by = ? "+
                "and t.ticket_status != 'Implemented'";
    db.query(query, id, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});


app.get("/api/getactivesrtickets/:id", (request, response) => {
        const id = request.params.id;
        const query = "SELECT * " +
                      "FROM type_sr_ticket t " +
                      "LEFT JOIN type_sr_category c ON t.sr_category = c.category_id " +
                      "WHERE t.requested_by = ? " +
                      "AND t.ticket_status != 'Implemented'";
        db.query(query, id, (err, result) => {
            if(err) {
                console.log("Error: ", err.message);
            } else {
                response.send(result);
            }
        });
    });


app.get("/api/total_requestor_ticket/:id", (req,res) => {
    const id = req.params.id;
    const query = `SELECT IFNULL(SUM(IFNULL(i.ActiveTicket,0)),0) as ActiveTicket,
                    IFNULL(SUM(IFNULL(i.ClosedTicket,0)),0) as ClosedTicket,
                    IFNULL((SUM(IFNULL(i.ActiveTicket,0)) + SUM(IFNULL(i.ClosedTicket,0))),0) as TotalTicket
                    FROM
                    (SELECT x.ticket_id, x.ticket_status, 
                    IF(x.ticket_status != 'Implemented', 1, 0) as ActiveTicket,
                    IF(x.ticket_status = 'Implemented', 1, 0) as ClosedTicket,
                    x.requested_by
                    FROM
                    (SELECT i.ticket_id, i.ticket_status, i.requested_by
                    FROM type_uam_ticket i
                    UNION
                    SELECT t.ticket_id, t.ticket_status, t.requested_by
                    FROM type_sr_ticket t) x
                    WHERE x.requested_by = ?) i`;
    db.query(query, id, (err, result) => {
        if(err) {
            console.log("Error: " + err.message);
        } else {
            res.send(result);
        }
    });
});


app.get("/api/requestor_ticket_modal_uam/:id", (req, res) => {
    const id = req.params.id;
    const query = `SELECT t.ticket_id, t.date_created, PROFILE_FULLNAME(t.requested_by) as fullname,
                    p.email, p.department, c.category_name, s.system_name, op.operation_name, t.uam_validity,
                    t.request_details, t.request_reason, t.ticket_status, p.first_approver, p.second_approver, p.implementor
                    FROM type_uam_ticket t
                    LEFT JOIN profile p ON t.requested_by = p.approver_id
                    LEFT JOIN type_uam_category c ON t.uam_category = c.category_id
                    LEFT JOIN ticket_system s ON t.uam_system = s.system_id
                    LEFT JOIN type_uam_operation op ON t.uam_operation = op.operation_id
                    LEFT JOIN (SELECT i.ticket_id, 
                                IF(i.first_approver != 0, PROFILE_FULLNAME(i.first_approver), '') as first_approver,
                                IF(i.second_approver != 0, PROFILE_FULLNAME(i.second_approver), '') as second_approver,
                                IF(i.implementor != 0, PROFILE_FULLNAME(i.implementor), '') as implementor
                                FROM
                                (SELECT x.ticket_id,
                                MAX(IF(x.ticket_status = "Approved", x.handled_by, 0)) as first_approver,
                                MAX(IF(x.ticket_status = "IS Approved", x.handled_by, 0)) as second_approver,
                                MAX(IF(x.ticket_status = "Approved for Implementation", x.handled_by, 0)) as implementor
                                FROM
                                (SELECT t.ticket_id, t.handled_by,t.ticket_status
                                FROM ticket_status_history t
                                WHERE (t.ticket_status = 'Approved' OR t.ticket_status = 'IS Approved' OR t.ticket_status = 'Approved for Implementation')
                                ORDER BY t.ticket_id ASC) x
                                GROUP BY x.ticket_id) i) p ON t.ticket_id = p.ticket_id
                    WHERE t.ticket_id = ?`;
    db.query(query, id, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});


app.get("/api/requestor_ticket_modal_sr/:id", (req, res) => {
    const id = req.params.id;
    const query = `SELECT t.ticket_id, t.date_created, PROFILE_FULLNAME(t.requested_by) as fullname,
                    p.email, p.department, c.category_name, s.system_name, t.activity_name, t.activity_details,
                    t.activity_start, t.activity_end, t.severity, t.purpose, t.ticket_status, 
                    p.first_approver, p.second_approver, p.implementor
                    FROM type_sr_ticket t
                    LEFT JOIN profile p ON t.requested_by = p.approver_id
                    LEFT JOIN type_sr_category c ON t.sr_category = c.category_id
                    LEFT JOIN ticket_system s ON t.sr_system = s.system_id
                    LEFT JOIN (SELECT i.ticket_id, 
                                IF(i.first_approver != 0, PROFILE_FULLNAME(i.first_approver), '') as first_approver,
                                IF(i.second_approver != 0, PROFILE_FULLNAME(i.second_approver), '') as second_approver,
                                IF(i.implementor != 0, PROFILE_FULLNAME(i.implementor), '') as implementor
                                FROM
                                (SELECT x.ticket_id,
                                MAX(IF(x.ticket_status = "Approved", x.handled_by, 0)) as first_approver,
                                MAX(IF(x.ticket_status = "IS Approved", x.handled_by, 0)) as second_approver,
                                MAX(IF(x.ticket_status = "Approved for Implementation", x.handled_by, 0)) as implementor
                                FROM
                                (SELECT t.ticket_id, t.handled_by,t.ticket_status
                                FROM ticket_status_history t
                                WHERE (t.ticket_status = 'Approved' OR t.ticket_status = 'IS Approved' OR t.ticket_status = 'Approved for Implementation')
                                ORDER BY t.ticket_id ASC) x
                                GROUP BY x.ticket_id) i) p ON t.ticket_id = p.ticket_id
                    WHERE t.ticket_id = ?`;
    db.query(query, id, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});



app.get("/api/requestor_ticket_history/:id", (request, response) => {
    const id = request.params.id;
    const queryString = `SELECT * FROM
                        (SELECT t.ticket_id, t.date_created, CONCAT(t.ticket_type,' - ',c.category_name) as type_request, 
                        IF(t.ticket_status = 'Implemented', 'Closed', t.ticket_status) as ticket_status, t.requested_by
                        FROM type_uam_ticket t
                        LEFT JOIN type_uam_category c ON t.uam_category = c.category_id
                        UNION ALL
                        SELECT t.ticket_id, t.date_created, CONCAT(t.ticket_type,' - ',c.category_name) as type_request, 
                        IF(t.ticket_status = 'Implemented', 'Closed', t.ticket_status) as ticket_status, t.requested_by
                        FROM type_sr_ticket t
                        LEFT JOIN type_sr_category c ON t.sr_category = c.category_id) x
                        WHERE x.ticket_status = 'Closed'
                        AND x.requested_by = ?`;
    db.query(queryString, id, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            response.send(result);
        }
    });
});


//Approver Side
app.get("/api/badge_new_total/:id", (req, res) => {
    const id = req.params.id;
    const queryString = `select COUNT(x.ticket_id) as ticketCount,
                        (select p.role from profile p where p.approver_id = ? ) as userRole
                        from
                        (select t.ticket_id
                        from type_uam_ticket t
                        where t.ticket_status = 'For Approval'
                        UNION
                        select t.ticket_id
                        from type_sr_ticket t 
                        where t.ticket_status = 'For Approval') x`
    db.query(queryString, id, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});



app.get("/api/gettotalticketapprover/:id", (req, response) => {
    const id = req.params.id;
    let stringForApproval = "";
    let stringApproved = "";
    let stringImplementing = "";
    let stringClosed = "";
    const getRole = "SELECT p.role FROM profile p WHERE p.approver_id = ?";
    let userRole = 0;
    db.query(getRole, id, (err, result) => {
        if(err) {
            console.log(err.message);
        } else {
            for (let i = 0; i < result.length; i++) {
                userRole = result[i].role;
            }
            switch(userRole) {
                case 1:
                    break;
                case 2:
                    stringForApproval = 'For Approval';
                    stringApproved = 'Approved';
                    stringImplementing = "";
                    stringClosed = 'Implemented';
                    break;
                case 3:
                    stringForApproval = 'For IS Approval';
                    stringApproved = 'IS Approved';
                    stringImplementing = "";
                    stringClosed = 'Implemented';
                    break;
                case 4:
                    stringForApproval = 'For Implementation';
                    stringApproved = 'Approved for Implementation';
                    stringImplementing = "Implementing Ticket";
                    stringClosed = 'Implemented';
                    break;
            }

            const queryString = `SELECT SUM(i.ForApproval) as ForApproval, 
                                SUM(i.Approved) as Approved, SUM(i.Closed) as Closed 
                                FROM 
                                (SELECT IF(x.ticket_status = ?, 1, 0) as ForApproval, 
                                IF(x.ticket_status = ? OR x.ticket_status = ?, 1, 0) as Approved, 
                                IF(x.ticket_status = ?, 1, 0) as Closed 
                                FROM 
                                (SELECT ticket_id, ticket_status 
                                FROM type_uam_ticket 
                                UNION 
                                SELECT ticket_id, ticket_status 
                                FROM type_sr_ticket) x) i`;
            db.query(queryString, [stringForApproval, stringApproved, stringImplementing, stringClosed], (err, result) => {
                if(err) {
                    console.log("Error: ", err.message);
                } else {
                    response.send(result);
                }
            });
        }
    });
});




app.get("/api/getapproverticketlist/:role", (request, response) => {
    const userRole = parseInt(request.params.role);
    // console.log("User Role: " + userRole);
    let filter1 = "";

    switch(userRole) {
        case 2:
            filter1 = 'For Approval';
            break;
        case 3: 
            filter1 = 'For IS Approval';
            break;
        case 4:
            filter1 = 'For Implementation';
            break;
    }
    const queryString = "SELECT * FROM "+
                        "(SELECT ut.date_created, ut.ticket_id, CONCAT(IFNULL(p.first_name,''),' ',IFNULL(p.last_name,'')) as fullname, "+
                        "p.email, p.department, CONCAT(ut.ticket_type,' - ',uc.category_name) as request_type, "+
                        "ut.ticket_status, us.system_name, uo.operation_name, ut.uam_validity as ticket_validity, ut.request_details, ut.request_reason "+
                        "FROM type_uam_ticket ut "+
                        "LEFT JOIN profile p ON ut.requested_by = p.approver_id "+
                        "LEFT JOIN type_uam_category uc ON ut.uam_category = uc.category_id "+
                        "LEFT JOIN ticket_system us ON ut.uam_system = us.system_id "+
                        "LEFT JOIN type_uam_operation uo ON ut.uam_operation = uo.operation_id "+ 
                        "UNION "+
                        "SELECT st.date_created, st.ticket_id, CONCAT(IFNULL(pr.first_name,''),' ',IFNULL(pr.last_name,'')) as fullname, "+
                        "pr.email, pr.department, CONCAT(st.ticket_type,' - ',src.category_name) as request_type, st.ticket_status, "+
                        "srs.system_name, '' as operation_name, '' as ticket_validity, "+
                        "CONCAT(st.activity_name,'-',st.activity_details,' (',st.severity,')') as request_details, st.purpose as request_reason "+
                        "FROM type_sr_ticket st "+
                        "LEFT JOIN profile pr ON st.requested_by = pr.approver_id "+
                        "LEFT JOIN type_sr_category src ON st.sr_category = src.category_id "+
                        "LEFT JOIN ticket_system srs ON st.sr_system = srs.system_id) x "+
                        "WHERE x.ticket_status IN ( ? )";
    db.query(queryString, [filter1], (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            response.send(result);
        }
    });
});



app.get("/api/getactiveapproverticketlist/:role", (request, response) => {
    const userRole = parseInt(request.params.role);
    let filter2="";

    switch(userRole) {
        case 2:
            filter2 = 'Approved';
            break;
        case 3: 
            filter2 = 'IS Approved';
            break;
        case 4:
            filter2 = ['Approved for Implementation','Implementing Ticket'];
            break;
        default:
            break;
    }
    const queryString = `SELECT * FROM 
                        (SELECT ut.date_created, ut.ticket_id, CONCAT(IFNULL(p.first_name,''),' ',IFNULL(p.last_name,'')) as fullname, 
                        p.email, p.department, CONCAT(ut.ticket_type,' - ',uc.category_name) as request_type, 
                        ut.ticket_status, us.system_name, uo.operation_name, ut.uam_validity as ticket_validity, ut.request_details, ut.request_reason 
                        FROM type_uam_ticket ut 
                        LEFT JOIN profile p ON ut.requested_by = p.approver_id 
                        LEFT JOIN type_uam_category uc ON ut.uam_category = uc.category_id 
                        LEFT JOIN ticket_system us ON ut.uam_system = us.system_id 
                        LEFT JOIN type_uam_operation uo ON ut.uam_operation = uo.operation_id 
                        UNION 
                        SELECT st.date_created, st.ticket_id, CONCAT(IFNULL(pr.first_name,''),' ',IFNULL(pr.last_name,'')) as fullname, 
                        pr.email, pr.department, CONCAT(st.ticket_type,' - ',src.category_name) as request_type, st.ticket_status, 
                        srs.system_name, '' as operation_name, '' as ticket_validity, 
                        CONCAT(st.activity_name,'-',st.activity_details,' (',st.severity,')') as request_details, st.purpose as request_reason 
                        FROM type_sr_ticket st 
                        LEFT JOIN profile pr ON st.requested_by = pr.approver_id 
                        LEFT JOIN type_sr_category src ON st.sr_category = src.category_id 
                        LEFT JOIN ticket_system srs ON st.sr_system = srs.system_id) x 
                        WHERE x.ticket_status IN (?)`;
    db.query(queryString, [filter2], (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            response.send(result);
        }
    });
});


app.get("/api/getapprovertickethistory", (request, response) => {
    const queryString = `SELECT * FROM 
                        (SELECT ut.date_created, ut.ticket_id, CONCAT(IFNULL(p.first_name,''),' ',IFNULL(p.last_name,'')) as fullname, 
                        p.email, p.department, CONCAT(ut.ticket_type,' - ',uc.category_name) as request_type, 
                        IF(ut.ticket_status = 'Implemented', 'Closed', ut.ticket_status) as ticket_status, us.system_name, uo.operation_name, ut.uam_validity as ticket_validity, ut.request_details, ut.request_reason 
                        FROM type_uam_ticket ut 
                        LEFT JOIN profile p ON ut.requested_by = p.approver_id 
                        LEFT JOIN type_uam_category uc ON ut.uam_category = uc.category_id 
                        LEFT JOIN ticket_system us ON ut.uam_system = us.system_id 
                        LEFT JOIN type_uam_operation uo ON ut.uam_operation = uo.operation_id 
                        UNION 
                        SELECT st.date_created, st.ticket_id, CONCAT(IFNULL(pr.first_name,''),' ',IFNULL(pr.last_name,'')) as fullname, 
                        pr.email, pr.department, CONCAT(st.ticket_type,' - ',src.category_name) as request_type, IF(st.ticket_status = 'Implemented', 'Closed', st.ticket_status) as ticket_status, 
                        srs.system_name, '' as operation_name, '' as ticket_validity, 
                        CONCAT(st.activity_name,'-',st.activity_details,' (',st.severity,')') as request_details, st.purpose as request_reason 
                        FROM type_sr_ticket st 
                        LEFT JOIN profile pr ON st.requested_by = pr.approver_id 
                        LEFT JOIN type_sr_category src ON st.sr_category = src.category_id 
                        LEFT JOIN ticket_system srs ON st.sr_system = srs.system_id) x 
                        WHERE x.ticket_status = 'Closed' OR x.ticket_status = 'Implemented'`;
    db.query(queryString, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            response.send(result);
        }
    });
});


app.get("/api/getticketformodal/:id", (request, response) => {
    const id = request.params.id;
    const queryString = "SELECT * FROM "+
                        "(SELECT ut.date_created, ut.ticket_id, ut.ticket_type, CONCAT(IFNULL(p.first_name,''),' ',IFNULL(p.last_name,'')) as fullname, "+
                        "p.email, p.department, CONCAT(ut.ticket_type,' - ',uc.category_name) as request_type, "+
                        "ut.ticket_status, us.system_name, uo.operation_name, ut.uam_validity as ticket_validity, ut.request_details, ut.request_reason "+
                        "FROM type_uam_ticket ut "+
                        "LEFT JOIN profile p ON ut.requested_by = p.approver_id "+
                        "LEFT JOIN type_uam_category uc ON ut.uam_category = uc.category_id "+
                        "LEFT JOIN ticket_system us ON ut.uam_system = us.system_id "+
                        "LEFT JOIN type_uam_operation uo ON ut.uam_operation = uo.operation_id "+
                        "UNION "+
                        "SELECT st.date_created, st.ticket_id, st.ticket_type, CONCAT(IFNULL(pr.first_name,''),' ',IFNULL(pr.last_name,'')) as fullname, "+
                        "pr.email, pr.department, CONCAT(st.ticket_type,' - ',src.category_name) as request_type, st.ticket_status, "+
                        "srs.system_name, '' as operation_name, '' as ticket_validity, "+
                        "CONCAT(st.activity_name,'-',st.activity_details,' (',st.severity,')') as request_details, st.purpose as request_reason "+
                        "FROM type_sr_ticket st "+
                        "LEFT JOIN profile pr ON st.requested_by = pr.approver_id "+
                        "LEFT JOIN type_sr_category src ON st.sr_category = src.category_id "+
                        "LEFT JOIN ticket_system srs ON st.sr_system = srs.system_id) x "+
                        "WHERE x.ticket_id = ?";
    db.query(queryString, id, (err, result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            response.send(result);
        }
    });
});



app.put("/api/updateticketstatus", (req, res) => {
    const { ticket_status, ticketNo, userid, ticketRemarks, ticketReason, ticketType } = req.body;
    const query = "INSERT INTO ticket_status_history(ticket_status, handled_by, reasons, remarks, ticket_id, ticket_type) VALUES(?, ?, ?, ?, ?, ?)";
    db.query(query, [ticket_status, userid, ticketReason, ticketRemarks, ticketNo, ticketType], (err, result) => {
        if(err){
            console.log("Error: ", err.message);
        } else {
            if(ticketType == "UAM") {
               const updatequery = "UPDATE type_uam_ticket SET ticket_status =? WHERE ticket_id = ?";
               db.query(updatequery, [ticket_status, ticketNo], (err,result) => {
                    if(err) {
                        console.log("Error: ", err.message);
                    } else {
                        res.send({ message: "User Access Management Ticket has been updated!" });
                    }
               });
            } else {
                const updatequery = "UPDATE type_sr_ticket SET ticket_status =? WHERE ticket_id = ?";
                db.query(updatequery, [ticket_status, ticketNo], (err,result) => {
                     if(err) {
                        console.log("Error: ", err.message);
                     } else {
                        res.send({ message: "Service Request Ticket has been updated!" });
                     }
                });
            }
        }
    });
});



app.put("/api/returnuamticket", (req, res) => {
    const { ticketNo, userid, returnReason, returnComment } = req.body;
    const query = "UPDATE type_uam_ticket SET ticket_status=?, return_date=?, return_by=?, return_reason=?, return_remarks=? WHERE ticket_id=?";
    db.query(query, ["Returned", new Date(), userid, returnReason, returnComment, ticketNo], (err,result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send({ message: "Ticket has been returned for revision" });
        }
    });
});


app.put("/api/returnsrticket", (req, res) => {
    const { ticketNo, userid, returnReason, returnComment } = req.body;
    const query = "UPDATE type_sr_ticket SET ticket_status=?, return_date=?, return_by=?, return_reason=?, return_remarks=? WHERE ticket_id=?";
    db.query(query, ["Returned", new Date(), userid, returnReason, returnComment, ticketNo], (err,result) => {
        if(err) {
            console.log("Error: ", err.message);
        } else {
            res.send({ message: "Ticket has been returned for revision" });
        }
    });
});



//Implementor Side
app.get("/api/getuamforimplementation", (req, res) => {
    const query = "SELECT * FROM type_uam_ticket WHERE ticket_status = 'For Implementation' ";
    db.query(query, (err, result) => {
        if(err){
            console.log("Error: ", err.message);
        } else {
            res.send(result);
        }
    });
});


app.get("/api/getsrforimplementation", (req, res) => {
    const query = "SELECT * FROM type_sr_ticket WHERE ticket_status = 'For Implementation' ";
    db.query(query, (err, result) => {
        if(err){
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