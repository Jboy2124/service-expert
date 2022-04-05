import React, { useState, useEffect } from 'react'

const ApproverOverview = () => {
   
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
                    <div class="card-header"> <i class="bi bi-ticket"></i></div>
                        <div class="card-body bg-light">
                            <h1 class="card-title text-center  text-danger">5</h1>
                            <p class="card-text text-center  text-danger">Tickets for approval</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 overflow">
                <div class="card text-white bg-secondary mb-3" >
                    <div class="card-header"> <i class="bi bi-ticket"></i></div>
                        <div class="card-body bg-light">
                            <h1 class="card-title text-center text-secondary">15</h1>
                            <p class="card-text text-center  text-secondary">Active Tickets</p>
                        </div>
                    </div>
                </div> 
                <div className="col-lg-4 col-sm-6 overflow">
                <div class="card text-white bg-success mb-3" >
                    <div class="card-header"> <i class="bi bi-ticket"></i></div>
                        <div class="card-body bg-light">
                            <h1 class="card-title text-center text-success">20</h1>
                            <p class="card-text text-center text-success">Closed Tickets </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ApproverOverview