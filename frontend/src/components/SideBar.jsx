import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import UAMForm from './UAMForm'


const SideBar = () => {
    // const navigateToUAMForm = useNavigate();
    // const navigateToSRForm = useNavigate();

  return (
    <div>
        <Navbar/>
        <div className="row noMargin">
            <div id="sideBarDash" className="col-lg-2 col-sm-4">
                <div className="row">
                    <div className="mt-3">  
                        <nav id="sideBarLinks" class="nav flex-column ">
                            <a class="nav-link mb-2 px-2" href="#">
                                <i class="bi bi-border-all"></i> Dashboard
                            </a>
                            <a class="nav-link mb-2 disabled px-2" href="#" >
                                <i class="bi bi-ticket"></i> Active Tickets
                            </a>
                            <a class="nav-link mb-2 " href="#">
                                <i class="bi bi-arrow-right-square"></i> User Access Management
                            </a>
                            <a class="nav-link mb-2" href="#">
                                <i class="bi bi-arrow-right-square"></i> Service Requests
                            </a>
                            <a class="nav-link mb-2 disabled px-2" href="#" >
                                <i class="bi bi-kanban"></i> Logs Management
                            </a>
                            <a class="nav-link mb-2" href="#"> 
                                <i class="bi bi-arrow-right-square"></i>  Ticket History
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <div id="rightDashboard" className="col-lg-10 col-sm-4">
                <div class="dropdown d-flex justify-content-end mt-5">
                    <button class="btn dropdown-toggle buttonStyleGlobal" type="button" id="dropdownMenuButtonCreate" data-bs-toggle="dropdown" aria-expanded="false"> Create New Ticket
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonCreate">
                         <li><a class="dropdown-item" href="#" >User Access Management</a></li>
                         <li><a class="dropdown-item" href="#">Service Request</a></li>
                    </ul>
                </div> <br/>
                <div class="row m-3 ">
                    <div class="col-12">
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
        </div>
        <UAMForm/>
    </div>
    
  )
}

export default SideBar