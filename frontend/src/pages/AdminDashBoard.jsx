
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import UserManagement from '../admin_components/UserManagement';
import TicketManagement from '../admin_components/TicketManagement';
import AdminOverview from '../admin_components/AdminOverview';
import { useLocation } from 'react-router-dom';




const AdminDashBoard = () => {
    const getinfo = useLocation();
    const [ getName, setGetName ] = useState([]);
    const [page, setPage] = useState("AdminOverview");


    useEffect(() => {
        setGetName([getinfo.state.name, getinfo.state.role]);
    }, []);

  return (
    <div>
        <Navbar name={getName}/>
        {/* <Navbar /> */}
        <div className="row noMargin">
            <div id="sideBarDash" className="col-lg-2 col-sm-3">
                <div className="row">
                    <div className="mt-3">  
                        <nav id="sideBarLinks" className="nav flex-column ">
                            <a className="nav-link " href="#" onClick={() => setPage("AdminOverview")}>
                                <i className="bi bi-border-all"></i> Dashboard
                            </a>
                            <hr className='divider'/>
                            <a className="nav-link " href="#" onClick={() => setPage("UserManagement")}>
                                <i className="bi bi-border-all"></i> User Management
                            </a>
                            <hr className='divider'/>
                            <a className="nav-link" href="#" onClick={() => setPage("TicketManagement")}>
                                <i className="bi bi-ticket"></i> Ticket Management
                            </a>
                            <hr className='divider'/>
                        </nav>
                    </div>
                </div>  
            </div>
            <div id="rightDashboard" className="col-lg-10 col-sm-9 ">
                {page === "AdminOverview" && <AdminOverview />}
                {page === "UserManagement" && <UserManagement />}
                {page === "TicketManagement" && <TicketManagement />}
            </div>
        </div> 
    </div>
  )
}

export default AdminDashBoard