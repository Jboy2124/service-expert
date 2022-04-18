import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import ForApprovalTicket from '../modals/ForApprovalTicket'
import { CounterContext } from '../App';


const ApproverTicketMng = () => {
    
    // const cc = useContext(CounterContext);
    const [getRole, setGetRole] = useState([]);
    const [getApproverTicket, setGetApproverTicket] = useState([]);
    const [getApproverActive, setGetApproverActive] = useState([]);
    const [passTicket, setPassTicket] = useState("");
    const [updateCount, setUpdateCount] = useState(useContext(CounterContext));
    let userRole = (getRole.map((itms) => { return (itms.role) }));
    

    useEffect(() => {
        let id = parseInt(sessionStorage.getItem("sessionid"));
        axios.get(`/api/get_user_role/${id}`).then((response) => {
            setGetRole(response.data);
        });
    }, []);
    


    useEffect(() => {
        axios.get(`/api/getapproverticketlist/${userRole}`).then((response) => {
            setGetApproverTicket(response.data);
        });
    },[getRole]);


    useEffect(() => {
        axios.get(`/api/getactiveapproverticketlist/${userRole}`).then((response) => {
            setGetApproverActive(response.data);
        });
    },[getApproverTicket]);


    const handleIDEvent = (event, id) => {
        event.preventDefault();
        setPassTicket(id);
    }

    const reloadEvent = () => {
        axios.get(`/api/getapproverticketlist/${userRole}`).then((response) => {
            setGetApproverTicket(response.data);
        });

        setUpdateCount(26);
    }

  return (
    <div>
        <div id="rightDashboard" className="col-lg-12">
        <div className="navbar mt-3 mb-3">
                <div className="container-fluid">
                    <span className="navbar-brand">Ticket Approvals and Management</span>
                </div>  
        </div>
        <div className="card">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="ticketRequest-tab" data-bs-toggle="tab" href="#ticketRequest" role="tab" aria-controls="ticketRequest" aria-selected="true">Ticket Requests</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="activeTicketsApprover-tab" data-bs-toggle="tab" href="#activeTicketsApprover" role="tab" aria-controls="activeTicketsApprover" aria-selected="false">Active Tickets</a>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="ticketRequest" role="tabpanel" aria-labelledby="ticketRequest-tab">
                        <div className="row ">
                            <div className="col-sm-12">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th >Date Request</th>
                                            <th >Ticket No.</th>
                                            <th >Full Name</th>
                                            <th >Department</th>
                                            <th> Request Type</th>
                                            <th> Status </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getApproverTicket.map((items) => {
                                                return(
                                                    <tr>
                                                        <td>{items.date_created}</td>
                                                        <th ><a href="#" data-bs-toggle="modal" onClick={(e) => handleIDEvent(e, items.ticket_id)} data-bs-target="#forApprovalTicket">{items.ticket_id}</a></th>
                                                        <td>{items.fullname}</td>
                                                        <td>{items.department}</td>
                                                        <td>{items.request_type}</td>
                                                        {/* <td>{items.ticket_status}</td> */}
                                                        <td>{updateCount}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="activeTicketsApprover" role="tabpanel" aria-labelledby="activeTicketsApprover-tab">
                        <div className="row  ">
                            <div className="col-sm-12">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <td colSpan={5}></td>
                                            <td >
                                                <div className="dropdown">
                                                    <button className="btn dropdown-toggle buttonStyleGlobal" type="button" id="dropdownMenuButtonCreate" data-bs-toggle="dropdown" aria-expanded="false"> Sort
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonCreate">
                                                        <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#" >by Type</a></li>
                                                        <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#">by Status</a></li>
                                                    </ul>
                                                </div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <th >Date Request</th>
                                            <th >Ticket No.</th>
                                            <th >Full Name</th>
                                            <th >Department</th>
                                            <th> Request Type</th>
                                            <th> Status </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getApproverActive.map((items) => {
                                                return (
                                                    <tr>
                                                        <td>{items.date_created}</td>
                                                        <th ><a href="#" data-bs-toggle="modal" onClick={(e) => handleIDEvent(e, items.ticket_id)} data-bs-target="#ticketDetailsinActiveTab">{items.ticket_id}</a></th>
                                                        <td>{items.fullname}</td>
                                                        <td>{items.department}</td>
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
        <ForApprovalTicket ticketNo={passTicket} passEventHandler={reloadEvent} />
    </div>
  )
}

export default ApproverTicketMng
