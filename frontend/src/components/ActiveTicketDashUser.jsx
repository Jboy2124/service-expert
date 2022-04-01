import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

const ActiveTicketDashUser = () => {
  return (
    <div>
        <Navbar/>
        <div className="row noMargin">
            <div id="sideBarDash" className="col-lg-2 col-sm-4">
                <SideBar/>
            </div>
            <div id="rightDashboard" className="col-lg-10 col-sm-4">
                    <br/>
                    <h5>You can see active tickets here</h5>
                    <br/>
                    <div className="row">
                        <div className="col-lg-4">
                            <form class="d-flex mb-3">
                                <input class="form-control me-2" type="search" placeholder="Enter Ticket No." aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                   
                    {/* <!-- Tabs or Pills can be used in a card with the help of .nav-{tabs|pills} and .card-header-{tabs|pills} classes --> */}
                    <div class="card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" id="disabled-tab" data-bs-toggle="tab" href="#disabled" role="tab" aria-controls="disabled" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias praesentium illo omnis adipisci ipsa suscipit rerum quidem doloribus magnam?</div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, asperiores provident ea eaque quis omnis adipisci in exercitationem necessitatibus dolorem.</div>
                        <div class="tab-pane fade" id="disabled" role="tabpanel" aria-labelledby="disabled-tab">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem accusamus officia quia eos ducimus consequuntur! Impedit aliquid vero suscipit.</div>
                        </div>
                    </div>
                    </div>
            </div>
        </div> 
      
    </div>
  )
}

export default ActiveTicketDashUser