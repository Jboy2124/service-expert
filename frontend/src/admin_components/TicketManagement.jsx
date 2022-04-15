import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import TicketDetailsModal from '../modals/TicketDetailsModal'



const TicketManagement = () => {
    let txtSearch = useRef(null);
    const [searchTicket, setSearchTicket] = useState("");
    const [getList, setList] = useState([]);
    const [getTicket, setTicket] = useState("");

    useEffect(() => {
        axios.get("/api/admin_ticket_management").then((response) => {
            setList(response.data);
        });
    }, []);


    const handlePassID = (event, ticket) => {
        event.preventDefault();
        setTicket(ticket);
    }

    const handleSearchTicket = (e) => {
        e.preventDefault();
        setSearchTicket(txtSearch.current.value);
    }
    
  return (
    <div>
        <div id="rightDashboard" className="col-lg-12">
            <div className="navbar mt-3 mb-3">
                    <div className="container-fluid">
                        <span className="navbar-brand">Ticket History</span>
                        <div className="d-flex">
                            <input className="form-control me-2" type="search" ref={txtSearch} onChange={handleSearchTicket} placeholder="Enter Ticket No." aria-label="Search"/>
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
                                                getList.filter((item) => {
                                                    if(txtSearch === "") {
                                                        return item
                                                    } else if (item.ticket_id.toLowerCase().includes(searchTicket.toLowerCase())){
                                                        return item
                                                    }
                                                }).map((items) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row"><a href="#" data-bs-toggle="modal" data-bs-target="#ticketDetails" onClick={(e) => handlePassID(e, (items.ticket_id))} >{items.ticket_id}</a></th>
                                                            <td>{items.date_created}</td>
                                                            <td>{items.requested_by}</td>
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
        <TicketDetailsModal ticketNo={getTicket} />
    </div>
  )
}

export default TicketManagement
