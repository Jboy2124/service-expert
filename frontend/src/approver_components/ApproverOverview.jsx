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
                <div className="card text-white mb-3  border-radius" >
                    <div className="card-header bg-danger"> <i className="bi bi-ticket"></i></div>
                        <div className="card-body bg-light border-radius-body">
                            <h1 className="card-title text-center  text-danger">5</h1>
                            <p className="card-text text-center  text-danger">Tickets for approval</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 overflow">
                <div className="card text-white border-radius mb-3" >
                    <div className="card-header bg-secondary"> <i className="bi bi-ticket"></i></div>
                        <div className="card-body bg-light border-radius-body">
                            <h1 className="card-title text-center text-secondary">15</h1>
                            <p className="card-text text-center  text-secondary">Active Tickets</p>
                        </div>
                    </div>
                </div> 
                <div className="col-lg-4 col-sm-6 overflow">
                <div className="card text-white border-radius mb-3" >
                    <div className="card-header bg-success"> <i className="bi bi-ticket"></i></div>
                        <div className="card-body bg-light border-radius-body">
                            <h1 className="card-title text-center text-success">20</h1>
                            <p className="card-text text-center text-success">Closed Tickets </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ApproverOverview