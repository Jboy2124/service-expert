import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UAMForm from '../modals/UAMForm'


const RightDashUser = () => {
    // const [history, setHistory] = useState([]);
    const [loadData, getData] = useState([]);
    const [passType, setPassType] = useState("");
    const [passId, setPassId] = useState("");
    
   
    
    const handleGetTicketType = (e, ticketType) => {
        e.preventDefault();
        setPassType(ticketType);
        
    }

    useEffect(() => {
        const id = parseInt(sessionStorage.getItem("sessionid"));
        axios.get(`/api/total_requestor_ticket/${id}`).then((response) => {
            getData(response.data);
        });
    }, []);


    const reloadList = () => {
        const id = parseInt(sessionStorage.getItem("sessionid"));
        axios.get(`/api/total_requestor_ticket/${id}`).then((response) => {
            getData(response.data);
        });
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
                                    <li><a className="dropdown-item" href="#" data-bs-toggle="modal" onClick={(e) => handleGetTicketType(e, 'UAM')} data-bs-target="#staticBackdropUAM">User Access Management</a></li>
                                    <li><a className="dropdown-item" href="#" data-bs-toggle="modal" onClick={(e) => handleGetTicketType(e, 'SR')} data-bs-target="#staticBackdropSR">Service Request</a></li>
                                </ul>
                          </div> 
                      </div>  
                </div>
                <div className="row m-3 ">
                    <div className="col-lg-4 col-sm-6 overflow">
                    <div className="card text-white border-radius mb-3" >
                        <div className="card-header  bg-danger"> <i className="bi bi-ticket"></i></div>
                            <div className="card-body bg-light border-radius-body">
                                <h1 className="card-title text-center  text-danger">{loadData.map((items) => { return (items.ActiveTicket) })}</h1>
                                <p className="card-text text-center  text-danger">Active Tickets</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 overflow">
                    <div className="card text-white border-radius mb-3" >
                        <div className="card-header bg-secondary"> <i className="bi bi-ticket"></i></div>
                            <div className="card-body bg-light border-radius-body">
                                <h1 className="card-title text-center text-secondary">{loadData.map((items) => { return (items.ClosedTicket) })}</h1>
                                <p className="card-text text-center  text-secondary">Closed Tickets</p>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-sm-6 overflow">
                    <div className="card text-white border-radius mb-3" >
                        <div className="card-header bg-success"> <i className="bi bi-ticket"></i></div>
                            <div className="card-body bg-light border-radius-body">
                                <h1 className="card-title text-center text-success">{loadData.map((items) => { return (items.TotalTicket) })}</h1>
                                <p className="card-text text-center text-success">Total Tickets Created </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <UAMForm ticketType={passType} handleReloadList={reloadList} />
    </div>
  )
}

export default RightDashUser