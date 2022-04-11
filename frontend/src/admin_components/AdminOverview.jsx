import React, { useState, useEffect } from 'react'
import axios from 'axios';


const AdminOverview = () => {
    const [countUser, setCountUser] = useState([{}]);
    const[countRole, setCountRole] = useState([{}]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/admin_totaluser").then((response) => {
            setCountUser(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/api/admin_totalrole").then((response) => {
            setCountRole(response.data);
        });
    });

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
                            <h1 className="card-title text-center  text-danger">5</h1>
                            <p className="card-text text-center  text-danger">Active Tickets</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 overflow">
                <div className="card text-white  mb-3 border-radius" >
                    <div className="card-header bg-secondary"> <i className="bi bi-ticket"></i></div>
                        <div className="card-body bg-light border-radius-body">
                            <h1 className="card-title text-center text-secondary">15</h1>
                            <p className="card-text text-center  text-secondary">Closed Tickets</p>
                        </div>
                    </div>
                </div> 
                <div className="col-lg-4 col-sm-6 overflow">
                <div className="card text-white mb-3 border-radius" >
                    <div className="card-header bg-success"> <i className="bi bi-ticket"></i></div>
                        <div className="card-body bg-light border-radius-body">
                            <h1 className="card-title text-center text-success">20</h1>
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