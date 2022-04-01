import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import UAMForm from './UAMForm'

const RightDashUser = () => {
  return (
    <div>
        <Navbar/>
        <div className="row noMargin">
            <div id="sideBarDash" className="col-lg-2 col-sm-4">
                <SideBar/>
            </div>
            <div id="rightDashboard" className="col-lg-10 col-sm-4">
                    <div class="dropdown d-flex justify-content-end mt-5 mx-5">
                        <button class="btn dropdown-toggle buttonStyleGlobal" type="button" id="dropdownMenuButtonCreate" data-bs-toggle="dropdown" aria-expanded="false"> Create New Ticket
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonCreate">
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropUAM" >User Access Management</a></li>
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropSR">Service Request</a></li>
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

export default RightDashUser