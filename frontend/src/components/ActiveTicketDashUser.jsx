import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ActiveTicketModal from '../modals/ActiveTicketModal'

const ActiveTicketDashUser = () => {
    const [getActiveUAM, setGetActiveUAM] = useState([{}]);
    const [getActiveSR, setGetActiveSR] = useState([{}]);
    const [passID, setPassID] = useState("");

    useEffect(() => {
        let id = parseInt(sessionStorage.getItem("sessionid"));
        axios.get(`/api/getactiveuamtickets/${id}`).then((response) => {
            setGetActiveUAM(response.data);
        });

        axios.get(`/api/getactivesrtickets/${id}`).then((response) => {
            setGetActiveSR(response.data);
        });
    }, []);

    const handleShowModal =(e, id) => {
        e.preventDefault();
        setPassID(id);
    }

  return (
    <div >
        <div id="rightDashboard" className="col-lg-12">
                <div className="navbar mt-3 mb-3">
                      <div className="container-fluid">
                          <span className="navbar-brand">Active Tickets</span>
                          <form className="d-flex">
                              <input className="form-control me-2" type="search" placeholder="Enter Ticket No." aria-label="Search"/>
                              <button className="btn buttonStyleGlobal" type="submit">Search</button>
                          </form>
                      </div>  
                </div>
                <div className="card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="UAM-tab" data-bs-toggle="tab" href="#UAM" role="tab" aria-controls="UAM" aria-selected="true">User Access Management</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="SR-tab" data-bs-toggle="tab" href="#SR" role="tab" aria-controls="SR" aria-selected="false">Service Request</a>
                        </li>
                        
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="UAM" role="tabpanel" aria-labelledby="UAM-tab">
                                <div className="row ">
                                    <div className="col-sm-12">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th scope="col">Ticket No.</th>
                                                <th scope="col">Date Requested</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                getActiveUAM.map((items)=>{
                                                    return(
                                                        <tr>
                                                            <th ><a href="#" data-bs-toggle="modal" onClick={(e) => handleShowModal(e, (items.ticket_id))} data-bs-target="#activeUAMTicketModal">{items.ticket_id}</a></th>
                                                            <td>{items.date_created}</td>
                                                            <td>{items.category_name}</td>
                                                            <td>{items.ticket_status}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="SR" role="tabpanel" aria-labelledby="SR-tab">
                                <div className="row  ">
                                    <div className="col-sm-12">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th scope="col">Ticket No.</th>
                                                <th scope="col">Date Requested</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                getActiveSR.map((i)=>{
                                                    return(
                                                        <tr>
                                                            <th ><a href="#" data-bs-toggle="modal" onClick={(e) => handleShowModal(e, (i.ticket_id))} data-bs-target="#activeSRTicketModal">{i.ticket_id}</a></th>
                                                            <td>{i.date_created}</td>
                                                            <td>{i.category_name}</td>
                                                            <td>{i.ticket_status}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                                
                            </div>
                    </div>
                </div>
        
        </div> 
        <ActiveTicketModal ticketNo={passID} />
    </div>
  )
}

export default ActiveTicketDashUser