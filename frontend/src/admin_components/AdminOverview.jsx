import React, { useState, useEffect } from 'react'
import axios from 'axios';


const AdminOverview = () => {
    const [countUser, setCountUser] = useState([{}]);
    const[countRole, setCountRole] = useState([{}]);
    const [total, setTotal] = useState([]);

    useEffect(() => {
        axios.get("/api/admin_totaluser").then((response) => {
            setCountUser(response.data);
        });

        axios.get("/api/admin_totalrole").then((response) => {
            setCountRole(response.data);
        });

        axios.get("/api/get_admin_total_tickets").then((response) => {
            setTotal(response.data);
        });
    }, []);


  return (
    <div >
        <div id="rightDashboard" className="overflow col-lg-12 col-sm-12  ">
            <div className="navbar mt-3 mb-3">
                    <div className="container-fluid ">
                        <span className="navbar-brand">Overview</span>
                    </div>  
            </div>
            <div className="row m-3 ">
                <div className="col-lg-4 col-sm-6 overflow">
                <div className="card text-white mb-3 border-radius" >
                    <div className="card-header bg-danger">  <i className="bi bi-people-fill"></i> </div>
                        <div className="card-body bg-light border-radius-body">
                            <h1 className="card-title text-center  text-danger">{
                                countUser.map((items) => {
                                    return items.totalUser;
                                })
                            }</h1>
                            <p className="card-text text-center  text-danger"> Total Users</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 overflow">
                <div className="card text-white mb-3 border-radius" >
                    <div className="card-header bg-secondary"> <i className="bi bi-gear-fill"></i> </div>
                        <div className="card-body bg-light border-radius-body">
                            <h1 className="card-title text-center text-secondary">{
                                countRole.map((item) => {
                                    return item.roleCount;
                                })
                            }</h1>
                            <p className="card-text text-center  text-secondary">Roles</p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="row m-3 ">
                <div className="col-lg-4 col-sm-6 overflow">
                <div className="card text-white mb-3 border-radius" >
                    <div className="card-header bg-danger"> <i className="bi bi-ticket"></i></div>
                        <div className="card-body bg-light border-radius-body">
                            <h1 className="card-title text-center  text-danger">{ total.map((items) => { return ( items.ActiveTicket)}) }</h1>
                            <p className="card-text text-center  text-danger">Active Tickets</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 overflow">
                <div className="card text-white  mb-3 border-radius" >
                    <div className="card-header bg-secondary"> <i className="bi bi-ticket"></i></div>
                        <div className="card-body bg-light border-radius-body">
                            <h1 className="card-title text-center text-secondary">{ total.map((items) => { return( items.ClosedTicket ) }) }</h1>
                            <p className="card-text text-center  text-secondary">Closed Tickets</p>
                        </div>
                    </div>
                </div> 
                <div className="col-lg-4 col-sm-6 overflow">
                <div className="card text-white mb-3 border-radius" >
                    <div className="card-header bg-success"> <i className="bi bi-ticket"></i></div>
                        <div className="card-body bg-light border-radius-body">
                            <h1 className="card-title text-center text-success">{ total.map((items) => { return( items.TotalTicket ) }) }</h1>
                            <p className="card-text text-center text-success">Total Tickets Created </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminOverview