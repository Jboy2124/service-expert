import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

const ActiveTicketDashUser = () => {
  return (
    <div>
        <Navbar/>
        <div className="row noMargin">
            <div id="sideBarDash" className="col-lg-2 col-sm-3">
                <SideBar/>
            </div>
            <div id="rightDashboard" className="col-lg-10 col-sm-9">
                <div class="navbar mt-5 mb-3">
                      <div class="container-fluid">
                          <span class="navbar-brand">Active Tickets</span>
                          <form class="d-flex">
                              <input class="form-control me-2" type="search" placeholder="Enter Ticket No." aria-label="Search"/>
                              <button class="btn buttonStyleGlobal" type="submit">Search</button>
                          </form>
                      </div>  
                </div>
                <div class="card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">USer Access Management</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Service Request</a>
                        </li>
                        
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row ">
                                    <div class="col-sm-12">
                                        <table class="table table-striped">
                                            <thead>
                                            <tr>
                                                <th scope="col">Ticket No.</th>
                                                <th scope="col">Date Requested</th>
                                                <th scope="col">Type of Request</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">TN-001</th>
                                                <td>03/22/2022 08:00:00</td>
                                                <td>UAM - New User Account Creation</td>
                                                <td>For review and approval</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">TN-002</th>
                                                <td>03/22/2022 08:00:00</td>
                                                <td>UAM - New User Account Creation</td>
                                                <td>For review and approval</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">TN-003</th>
                                                <td >03/22/2022 08:00:00</td>
                                                <td>UAM - New User Account Creation</td>
                                                <td>For review and approval</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div class="row  ">
                                    <div class="col-sm-12">
                                        <table class="table table-striped">
                                            <thead>
                                            <tr>
                                                <th scope="col">Ticket No.</th>
                                                <th scope="col">Date Requested</th>
                                                <th scope="col">Type of Request</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">TN-001</th>
                                                <td>03/22/2022 08:00:00</td>
                                                <td>SR - New User Account Creation</td>
                                                <td>For review and approval</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">TN-002</th>
                                                <td>03/22/2022 08:00:00</td>
                                                <td>SR - New User Account Creation</td>
                                                <td>For review and approval</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">TN-003</th>
                                                <td >03/22/2022 08:00:00</td>
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
        </div> 
    </div>
  )
}

export default ActiveTicketDashUser