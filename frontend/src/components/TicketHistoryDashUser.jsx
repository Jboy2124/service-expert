import React, { useEffect, useState, useRef } from 'react'
import TicketDetailsModal from '../modals/TicketDetailsModal'
import axios from 'axios';


const TicketHistoryDashUser = () => {
    let txtSearch = useRef(null);
    const [passID, setPassID] = useState("");
    const [history, setHistory] = useState([]);
    const [searchTicket, setSearchTicket] = useState("");


    useEffect(() => {
        getInformation();
    }, []);


    const getInformation = async () => {
        const id = parseInt(sessionStorage.getItem("sessionid"));
        const response = await axios.get(`/api/requestor_ticket_history/${id}`);
        setHistory(response.data);
    }


    const handleSearchTicket = (e) => {
        e.preventDefault();
        setSearchTicket(txtSearch.current.value);
    }

    const handleShowModal = (e, id) => {
        e.preventDefault();
        setPassID(id);
    }

  return (
    <div >
        <div id="rightDashboard" className="col-lg-12 col-sm-12">
            <div className="navbar mt-3 mb-3">
                    <div className="container-fluid">
                        <span className="navbar-brand">Ticket History</span>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" ref={txtSearch} onChange={handleSearchTicket} placeholder="Search Ticket" aria-label="Search"/>
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
                                            history.filter((item) => {
                                                if(txtSearch === ""){
                                                    return item
                                                } else if (item.ticket_id.toLowerCase().includes(searchTicket.toLocaleLowerCase()) ||
                                                            item.ticket_status.toLocaleLowerCase().includes(searchTicket.toLocaleLowerCase()) || 
                                                            item.type_request.toLocaleLowerCase().includes(searchTicket.toLocaleLowerCase())) {
                                                    return item
                                                }
                                            }).map((items) => {
                                                return (
                                                    <tr>
                                                        <th scope="row"> <a href="#" data-bs-toggle="modal" onClick={(e) => handleShowModal(e, (items.ticket_id))} data-bs-target="#ticketDetails">{items.ticket_id}</a></th>
                                                        <td>{items.date_created}</td>
                                                        <td>{items.type_request}</td>
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
        <TicketDetailsModal ticketNo={passID}/>
    </div>
  )
}

export default TicketHistoryDashUser