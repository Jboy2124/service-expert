import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import ApproverTicketMng from '../approver_components/ApproverTicketMng';
import ApproverOverview from '../approver_components/ApproverOverview';
import TicketHistory from '../approver_components/TicketHistory';
import { useLocation } from 'react-router-dom';



const ApproverDashBoard = () => {

    const getinfo = useLocation();
    const [ getName, setGetName ] = useState([]);
    const [page, setPage] = useState("ApproverOverview");


    useEffect(() => {
        setGetName([getinfo.state.name, getinfo.state.role]);
    }, []);

  return (
    <div>
        <Navbar name={getName}/>
        <div className="row noMargin">
            <div id="sideBarDash" className="col-lg-2 col-sm-4">
                <div className="row">
                    <div className="mt-3">  
                        <nav id="sideBarLinks" className="nav flex-column ">
                            <a className="nav-link " href="#" onClick={() => setPage("ApproverOverview")}>
                                <i className="bi bi-border-all"></i> Dashboard
                            </a>
                            <hr className='divider'/>
                            <a className="nav-link" href="#" onClick={() => setPage("ApproverTicketMng")}>
                                <i className="bi bi-ticket"></i> Tickets
                            </a>
                            <hr className='divider'/> 
                            <a className="nav-link" href="#" onClick={() => setPage("TicketHistory")}>
                                <i className="bi bi-ticket"></i> Ticket History
                            </a>
                            <hr className='divider'/>
                        </nav>
                    </div>
                </div>  
            </div>
            <div id="rightDashboard" className="col-lg-10 col-sm-8 ">
                {page === "ApproverOverview" && <ApproverOverview />}
                {page === "ApproverTicketMng" && <ApproverTicketMng />}
                {page === "TicketHistory" && <TicketHistory />}
            </div>
        </div> 
    </div>
  )
}

export default ApproverDashBoard