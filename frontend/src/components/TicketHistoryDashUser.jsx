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
            <div id="rightDashboard" className="col-lg-10 col-sm-4">
                    <h5>You can see ticket history here</h5>
                    
            </div>
        </div> 
      
    </div>
  )
}

export default TicketHistoryDashUser