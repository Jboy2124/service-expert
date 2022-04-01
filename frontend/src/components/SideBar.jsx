import React from 'react'
import { useNavigate } from 'react-router-dom'



const SideBar = () => {
    const navigateToUserDashboard = useNavigate();
    const navigateToUserActiveTicket = useNavigate();
    const navigateToUserTicketHistory = useNavigate();
  return (
    <div  id="sideBarDash">
        <div className="row">
            <div className="mt-3">  
                <nav id="sideBarLinks" class="nav flex-column ">
                    <a class="nav-link " href="#" onClick={ () => { navigateToUserDashboard("/RightDashUser") }}>
                        <i class="bi bi-border-all"></i> Dashboard
                    </a>
                    <hr className='divider'/>
                    <a class="nav-link" href="#" onClick={ () => { navigateToUserActiveTicket("/ActiveTicketDashUser")}}>
                        <i class="bi bi-ticket"></i> Active Tickets
                    </a>
                    <hr className='divider'/>
                    <a class="nav-link mb-2" href="#" onClick={ () => { navigateToUserTicketHistory ("/TicketHistoryDashUser")}}> 
                        <i class="bi bi-arrow-right-square"></i>  Ticket History
                    </a>
                    <hr className='divider'/>
                </nav>
            </div>
        </div>                 
    </div>
    
  )
}

export default SideBar