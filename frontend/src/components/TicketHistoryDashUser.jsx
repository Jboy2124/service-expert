import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

const TicketHistoryDashUser = () => {
  return (
    <div>
        <Navbar/>
        <div className="row noMargin">
            <div id="sideBarDash" className="col-lg-2 col-sm-4">
                <SideBar/>
            </div>
            <div id="rightDashboard" className="col-lg-10 col-sm-9">
                <div class="navbar mt-5 mb-3">
                      <div class="container-fluid">
                          <span class="navbar-brand">Ticket History</span>
                          <form class="d-flex">
                              <input class="form-control me-2" type="search" placeholder="Enter Ticket No." aria-label="Search"/>
                              <button class="btn buttonStyleGlobal mx-1" type="submit">Search</button>
                              <div class="dropdown mx-2">
                                <button class="btn dropdown-toggle buttonStyleGlobal" type="button" id="dropdownMenuButtonCreate" data-bs-toggle="dropdown" aria-expanded="false"> Sort
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonCreate">
                                    <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropUAM" >by Date</a></li>
                                    <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropSR">by Type</a></li>
                                </ul>
                          </div> 
                          </form>
                      </div>  
                </div>
                <div class="card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Download</a>
                        </li>
                        {/* <li class="nav-item" role="presentation">
                            <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Service Request</a>
                        </li> */}
                        
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
                                                <td>Closed</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">TN-002</th>
                                                <td>03/22/2022 08:00:00</td>
                                                <td>UAM - New User Account Creation</td>
                                                <td>Closed</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">TN-003</th>
                                                <td >03/22/2022 08:00:00</td>
                                                <td>UAM - New User Account Creation</td>
                                                <td>Closed</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">TN-001</th>
                                                <td>03/22/2022 08:00:00</td>
                                                <td>SR - New User Account Creation</td>
                                                <td>Closed</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">TN-002</th>
                                                <td>03/22/2022 08:00:00</td>
                                                <td>SR - New User Account Creation</td>
                                                <td>Closed</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">TN-003</th>
                                                <td >03/22/2022 08:00:00</td>
                                                <td>SR - New User Account Creation</td>
                                                <td>Closed</td>
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
                                                <td>Closed</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">TN-002</th>
                                                <td>03/22/2022 08:00:00</td>
                                                <td>SR - New User Account Creation</td>
                                                <td>Closed</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">TN-003</th>
                                                <td >03/22/2022 08:00:00</td>
                                                <td>SR - New User Account Creation</td>
                                                <td>Closed</td>
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

export default TicketHistoryDashUser