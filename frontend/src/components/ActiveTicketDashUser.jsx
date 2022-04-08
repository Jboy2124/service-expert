import React from 'react'
import ActiveTicketModal from '../modals/ActiveTicketModal'

const ActiveTicketDashUser = () => {
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
                                            <tr>
                                                <th ><a href="#" data-bs-toggle="modal" data-bs-target="#activeUAMTicketModal">TN-001</a></th>
                                                <td>03/22/2022 08:00:00</td>
                                                <td>UAM - New User Account Creation</td>
                                                <td>For review and approval</td>
                                            </tr>
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
                                            <tr>
                                                <th ><a href="#" data-bs-toggle="modal" data-bs-target="#activeSRTicketModal">TN-001</a></th>
                                                <td>03/22/2022 08:00:00</td>
                                                <td>SR - New User Account Creation</td>
                                                <td>For review and approval</td>
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
        <ActiveTicketModal/>
    </div>
  )
}

export default ActiveTicketDashUser