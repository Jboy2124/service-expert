
import React, { useState } from 'react'
import UAMForm from '../modals/UAMForm'



const RightDashUser = () => {
    let ttype = "";
    const [getType, setGetType] = useState('');

    const handleGetTicketType = (ticketType) => {
        ttype = ticketType;
    }
    

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
                                    <li><a className="dropdown-item" href="#" data-bs-toggle="modal" onClick={() => {handleGetTicketType("UAM")}} data-bs-target="#staticBackdropUAM">User Access Management</a></li>
                                    <li><a className="dropdown-item" href="#" data-bs-toggle="modal" onClick={() => {handleGetTicketType("SR")}} data-bs-target="#staticBackdropSR">Service Request</a></li>
                                </ul>
                          </div> 
                      </div>  
                </div>
                <div className="row m-3 ">
                    <div className="col-lg-4 col-sm-6 overflow">
                    <div className="card text-white border-radius mb-3" >
                        <div className="card-header  bg-danger"> <i className="bi bi-ticket"></i></div>
                            <div className="card-body bg-light border-radius-body">
                                <h1 className="card-title text-center  text-danger">5</h1>
                                <p className="card-text text-center  text-danger">Active Ticketsssss</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 overflow">
                    <div className="card text-white border-radius mb-3" >
                        <div className="card-header bg-secondary"> <i className="bi bi-ticket"></i></div>
                            <div className="card-body bg-light border-radius-body">
                                <h1 className="card-title text-center text-secondary">15</h1>
                                <p className="card-text text-center  text-secondary">Closed Ticketssss</p>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-sm-6 overflow">
                    <div className="card text-white border-radius mb-3" >
                        <div className="card-header bg-success"> <i className="bi bi-ticket"></i></div>
                            <div className="card-body bg-light border-radius-body">
                                <h1 className="card-title text-center text-success">20</h1>
                                <p className="card-text text-center text-success">Total Tickets Created </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <UAMForm />
    </div>
  )
}

export default RightDashUser