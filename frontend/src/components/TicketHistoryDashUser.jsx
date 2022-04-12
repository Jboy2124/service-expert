import React, { useEffect, useState } from 'react'
import TicketDetailsModal from '../modals/TicketDetailsModal'
import axios from 'axios';


const TicketHistoryDashUser = () => {
    const [history, setHistory] = useState([]);


    useEffect(() => {
        const id = parseInt(sessionStorage.getItem("sessionid"));
        axios.get(`/api/requestor_ticket_history/${id}`).then((response) => {
            setHistory(response.data);
        });
    }, []);



  


  return (
    <div >
        <div id="rightDashboard" className="col-lg-12 col-sm-12">
            <div className="navbar mt-3 mb-3">
                    <div className="container-fluid">
                        <span className="navbar-brand">Ticket History</span>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Enter Ticket No." aria-label="Search"/>
                            <button className="btn buttonStyleGlobal mx-1" type="submit">Search</button>
                            <div className="dropdown mx-2">
                            <button className="btn dropdown-toggle buttonStyleGlobal" type="button" id="dropdownMenuButtonCreate" data-bs-toggle="dropdown" aria-expanded="false"> Sort
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonCreate">
                                <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropUAM" >by Date</a></li>
                                <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropSR">by Type</a></li>
                            </ul>
                        </div> 
                        </form>
                    </div>  
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row ">
                                <div className="col-sm-12">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th scope="col">Ticket No.</th>
                                            <th scope="col">Date Requested</th>
                                            <th scope="col">Type of Request</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            history.map((items) => {
                                                return (
                                                    <tr>
                                                        <th scope="row"> <a href="#" data-bs-toggle="modal" data-bs-target="#ticketDetails">{items.ticket_id}</a></th>
                                                        <td>{items.date_created}</td>
                                                        <td>{items.request_type}</td>
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
                        </div>
                </div>
            </div>
        </div>
        <TicketDetailsModal/>
    </div>
  )
}

export default TicketHistoryDashUser