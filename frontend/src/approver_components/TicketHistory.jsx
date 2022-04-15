import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import TicketDetailsModal from '../modals/TicketDetailsModal'



const TicketHistory = () => {
    let txtSearch = useRef(null);
    const [getTicket, setGetTicket] = useState([]);
    const [passId, setPassId] = useState("");
    const [getText, setTextSearch] = useState("");

    useEffect(() => {
        axios.get("/api/getapprovertickethistory").then((response) => {
            setGetTicket(response.data);
        });
    },[]);


    const handleShowModal = (e, id) => {
        e.preventDefault();
        setPassId(id);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setTextSearch(txtSearch.current.value);
    }
    
  return (
    <div>
        <div id="rightDashboard" className="col-lg-12">
            <div className="navbar mt-3 mb-3">
                    <div className="container-fluid">
                        <span className="navbar-brand">Ticket History</span>
                        <div className="d-flex">
                            <input className="form-control me-2" ref={txtSearch} onChange={handleSearch} type="search" placeholder="Enter Ticket No." aria-label="Search"/>
                            <button className="btn buttonStyleGlobal mx-1">Search</button>
                            <div className="dropdown mx-2">
                            <button className="btn dropdown-toggle buttonStyleGlobal" type="button" id="dropdownMenuButtonCreate" data-bs-toggle="dropdown" aria-expanded="false"> Sort
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonCreate">
                                <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropUAM" >by Date</a></li>
                                <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropSR">by Type</a></li>
                            </ul>
                            </div> 
                           
                        </div>
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
                                            <th scope="col">Name of Requestor</th>
                                            <th scope="col">Type of Request</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                        </thead>
                                       
                                        <tbody>
                                            {
                                                getTicket.filter((items) => {
                                                    if(txtSearch === "") {
                                                        return items
                                                    } else if (items.ticket_id.toLowerCase().includes(getText.toLocaleLowerCase())) {
                                                        return items
                                                    }
                                                }).map((items) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row"><a  href="#" data-bs-toggle="modal" onClick={(e) => handleShowModal(e, (items.ticket_id))} data-bs-target="#ticketDetails" >{items.ticket_id}</a></th>
                                                            <td>{items.date_created}</td>
                                                            <td>{items.fullname}</td>
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
        <TicketDetailsModal ticketNo={passId}/>
    </div>
  )
}

export default TicketHistory
