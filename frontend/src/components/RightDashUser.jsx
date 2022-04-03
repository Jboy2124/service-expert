import axios from 'axios'
import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import UAMForm from './UAMForm'


const RightDashUser = () => {
// const [getType, setGetType] = useState([]);


// useEffect(() => {
//     axios.get("http://localhost:3001/api/get_ticket_type").then((response) => {
//         setGetType(response.data);
//     });
// });


  return (
    <div>
        <Navbar  />
        <div className="row noMargin">
            <div id="sideBarDash" className="col-lg-2 col-sm-4">
                <SideBar/>
            </div>
            <div id="rightDashboard" className="col-lg-10 col-sm-8">
                <div className="navbar mt-5 mb-3">
                      <div className="container-fluid">
                          <span className="navbar-brand">Dashboard Summary</span>
                          <div className="dropdown mx-3">
                                <button className="btn dropdown-toggle buttonStyleGlobal" type="button" id="dropdownMenuButtonCreate" data-bs-toggle="dropdown" aria-expanded="false">Create New Ticket</button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonCreate">
                                    {/* {
                                        getType.map((items) => {
                                            return(
                                                <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropUAM" >{items.type_of_request}</a></li>
                                            )
                                        })
                                    } */}
                                    <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropUAM" >User Access Management</a></li>
                                    <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropSR">Service Request</a></li>
                                </ul>
                          </div> 
                      </div>  
                </div>


                <div className="row m-3 ">
                    <div className="col-12">
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