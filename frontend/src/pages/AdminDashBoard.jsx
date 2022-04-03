
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import UserManagement from '../admin_components/UserManagement';
import TicketManagement from '../admin_components/TicketManagement';
import AdminOverview from '../admin_components/AdminOverview';



const AdminDashBoard = () => {
    const [page, setPage] = useState("RightDashUser")
  return (
    <div>
        <Navbar/>
        <div className="row noMargin">
            <div id="sideBarDash" className="col-lg-2 col-sm-4">
                <div className="row">
                    <div className="mt-3">  
                        <nav id="sideBarLinks" class="nav flex-column ">
                            <a class="nav-link " href="#" onClick={() => setPage("AdminOverview")}>
                                <i class="bi bi-border-all"></i> Dashboard
                            </a>
                            <hr className='divider'/>
                            <a class="nav-link " href="#" onClick={() => setPage("UserManagement")}>
                                <i class="bi bi-border-all"></i> User Management
                            </a>
                            <hr className='divider'/>
                            <a class="nav-link" href="#" onClick={() => setPage("TicketManagement")}>
                                <i class="bi bi-ticket"></i> Ticket Management
                            </a>
                            <hr className='divider'/>
                        </nav>
                    </div>
                </div>  
            </div>
            <div id="rightDashboard" className="col-lg-10 col-sm-8 ">
                {page === "AdminOverview" && <AdminOverview />}
                {page === "UserManagement" && <UserManagement />}
                {page === "TicketManagement" && <TicketManagement />}
            </div>
        </div> 
    </div>
  )
}

export default AdminDashBoard