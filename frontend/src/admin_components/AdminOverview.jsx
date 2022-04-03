import React, { useState, useEffect } from 'react'


const AdminOverview = () => {
  return (
    <div >
        <div id="rightDashboard" className="col-lg-12 col-sm-8 ">
            <div className="navbar mt-3 mb-3">
                    <div className="container-fluid ">
                        <span className="navbar-brand">Overview</span>
                    </div>  
            </div>
            <div className="row m-3 ">
                <div className="col-lg-4 col-sm-6 overflow">
                <div class="card text-white bg-danger mb-3" >
                    <div class="card-header">  <i class="bi bi-people-fill"></i> </div>
                        <div class="card-body bg-light">
                            <h1 class="card-title text-center  text-danger">25</h1>
                            <p class="card-text text-center  text-danger"> Total Users</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 overflow">
                <div class="card text-white bg-secondary mb-3" >
                    <div class="card-header"> <i class="bi bi-gear-fill"></i> </div>
                        <div class="card-body bg-light">
                            <h1 class="card-title text-center text-secondary">4</h1>
                            <p class="card-text text-center  text-secondary">Roles</p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="row m-3 ">
                <div className="col-lg-4 col-sm-6 overflow">
                <div class="card text-white bg-danger mb-3" >
                    <div class="card-header"> <i class="bi bi-ticket"></i></div>
                        <div class="card-body bg-light">
                            <h1 class="card-title text-center  text-danger">5</h1>
                            <p class="card-text text-center  text-danger">Active Tickets</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 overflow">
                <div class="card text-white bg-secondary mb-3" >
                    <div class="card-header"> <i class="bi bi-ticket"></i></div>
                        <div class="card-body bg-light">
                            <h1 class="card-title text-center text-secondary">15</h1>
                            <p class="card-text text-center  text-secondary">Closed Tickets</p>
                        </div>
                    </div>
                </div> 
                <div className="col-lg-4 col-sm-6 overflow">
                <div class="card text-white bg-success mb-3" >
                    <div class="card-header"> <i class="bi bi-ticket"></i></div>
                        <div class="card-body bg-light">
                            <h1 class="card-title text-center text-success">20</h1>
                            <p class="card-text text-center text-success">Total Tickets Created </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminOverview