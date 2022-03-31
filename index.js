const express = require("express");
const auth = require("./authentications");
const app = express();
const server_port = 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.listen(server_port, (req, res) => {
    console.log("Server is running at port " + server_port);
    auth.db.connect((err) => {
        if(err){
            console.log("Error", err.message);
        } else {
            console.log("Database connection established");
        }
    });
});