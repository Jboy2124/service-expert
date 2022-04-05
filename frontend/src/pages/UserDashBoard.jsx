import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import RightDashUser from '../components/RightDashUser';
import ActiveTicketDashUser from '../components/ActiveTicketDashUser'
import TicketHistoryDashUser from '../components/TicketHistoryDashUser';
import { useLocation } from 'react-router-dom';


const UserDashBoard = () => {
    let loc = useLocation();

    const [getName, setGetName] = useState([]);
    const [getPage, setGetPage] = useState("RightDashUser")
    
    useEffect(() => {
        setGetName([loc.state.name, loc.state.role])
    }, []);

  return (
    <div>
        
        <Navbar name={getName} />
        {/* <Navbar /> */}
        <div className="row noMargin">
            <div id="sideBarDash" className="col-lg-2 col-sm-3">
            <div className="row">
                <div className="mt-3">  
                    <nav id="sideBarLinks" class="nav flex-column ">
                        <a class="nav-link " href="#" onClick={() => setGetPage("RightDashUser")}>
                            <i class="bi bi-border-all"></i> Dashboard
                        </a>
                        <hr className='divider'/>
                        <a class="nav-link" href="#" onClick={() => setGetPage("ActiveTicketDashUser")}>
                            <i class="bi bi-ticket"></i> Active Tickets
                        </a>
                        <hr className='divider'/>
                        <a class="nav-link mb-2" href="#" onClick={() => setGetPage("TicketHistoryDashUser")}> 
                            <i class="bi bi-arrow-right-square"></i>  Ticket History
                        </a>
                        <hr className='divider'/>
                    </nav>
                </div>
            </div>  

            </div>
            <div id="rightDashboard" className="col-lg-10 col-sm-9 ">
                {getPage === "RightDashUser" && <RightDashUser />}
                {getPage === "ActiveTicketDashUser" && <ActiveTicketDashUser />}
                {getPage === "TicketHistoryDashUser" && <TicketHistoryDashUser />}
            </div>
        </div> 
    </div>
  )
}

export default UserDashBoard