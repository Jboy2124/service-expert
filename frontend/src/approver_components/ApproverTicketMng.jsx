import React from 'react'
import ForApprovalTicket from '../modals/ForApprovalTicket'


const ApproverTicketMng = () => {
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
                                        <tr>
                                            <td >03:03:2002 08:08:08 pm</td>
                                            <th ><a href="#" data-bs-toggle="modal" data-bs-target="#forApprovalTicket">TN-001</a></th>
                                            <td >Elizabeth Santos</td>
                                            <td >Engineering</td>
                                            <td> UAM- New Account Request</td>
                                            <td> For review and approval </td>
                                        </tr>
                                    
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
                                         <tr>
                                            <td >03:03:2002 08:08:08 pm</td>
                                            <th ><a href="#" data-bs-toggle="modal" data-bs-target="#ticketDetailsinActiveTab">TN-001</a></th>
                                            <td >Elizabeth Santos</td>
                                            <td >Engineering</td>
                                            <td> UAM- New Account Request</td>
                                            <td> Approved - For Implementation </td>
                                        </tr>                                   
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        </div>
        <ForApprovalTicket/>
    
    </div>
  )
}

export default ApproverTicketMng
