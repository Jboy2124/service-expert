
import React from 'react'
import UAMForm from '../modals/UAMForm'


const RightDashUser = () => {
  return (
    <div >
            <div id="rightDashboard" className="col-lg-12 col-sm-8 ">
                <div className="navbar mt-3 mb-3">
                      <div className="container-fluid ">
                          <span className="navbar-brand">Dashboard Summary</span>
                          <div className="dropdown mx-3">
                                <button className="btn dropdown-toggle buttonStyleGlobal" type="button" id="dropdownMenuButtonCreate" data-bs-toggle="dropdown" aria-expanded="false"> Create New Ticket
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonCreate">
                                    <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropUAM" >User Access Management</a></li>
                                    <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropSR">Service Request</a></li>
                                </ul>
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
        <UAMForm/>
    </div>
  )
}

export default RightDashUser