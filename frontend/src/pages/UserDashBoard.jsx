import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import RightDashUser from '../components/RightDashUser';
import ActiveTicketDashUser from '../components/ActiveTicketDashUser'
import TicketHistoryDashUser from '../components/TicketHistoryDashUser';

const UserDashBoard = () => {
    const [getName, setGetName] = useState("");
    const [page, setPage] = useState("RightDashUser")

    useEffect(() => {
        axios.get("http://localhost:3001/api/get_name").then((response) => {
            setGetName(response.data);
        });
    }, []);

  return (
    <div>
        
        <Navbar/>
        <div className="row noMargin">
            <div id="sideBarDash" className="col-lg-2 col-sm-3">
            <div className="row">
                <div className="mt-3">  
                    <nav id="sideBarLinks" class="nav flex-column ">
                        <a class="nav-link " href="#" onClick={() => setPage("RightDashUser")}>
                            <i class="bi bi-border-all"></i> Dashboard
                        </a>
                        <hr className='divider'/>
                        <a class="nav-link" href="#" onClick={() => setPage("ActiveTicketDashUser")}>
                            <i class="bi bi-ticket"></i> Active Tickets
                        </a>
                        <hr className='divider'/>
                        <a class="nav-link mb-2" href="#" onClick={() => setPage("TicketHistoryDashUser")}> 
                            <i class="bi bi-arrow-right-square"></i>  Ticket History
                        </a>
                        <hr className='divider'/>
                    </nav>
                </div>
            </div>  

            </div>
            <div id="rightDashboard" className="col-lg-10 col-sm-9 ">
                {page === "RightDashUser" && <RightDashUser />}
                {page === "ActiveTicketDashUser" && <ActiveTicketDashUser />}
                {page === "TicketHistoryDashUser" && <TicketHistoryDashUser />}
            </div>
        </div> 
    </div>
  )
}

export default UserDashBoard