import React, { useState, useEffect }from 'react';
import "../css/navbar.css"
import { useNavigate } from 'react-router-dom'
import logo from '../images/Untitled2.png'
import axios from 'axios';

const Navbar = (props) => {
  const [badgeCount, setBadgeCount] = useState([]);
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const [getTime, setGetTime] = useState(time);
  const navigateHomepage = useNavigate();
  


  useEffect(() => {
    const id = parseInt(sessionStorage.getItem("sessionid"));
    axios.get(`/api/badge_new_total/${id}`).then((response) => {
      setBadgeCount(response.data);
    });
  },[]);
  let roles = badgeCount.map((items) => { return ( items.userRole) });
  let count = badgeCount.map((i) => { return (i.ticketCount) });

  useEffect(() => {
    setInterval(() => setGetTime(new Date().toLocaleTimeString()), 1000);
  }, []);

  const user_name = props.name[0];
  const user_role = (props.name[1]) ? ` - (${props.name[1]})` : "";

  
  return (
    <div>
       <nav id="navBarDashLogo" className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <img id='navBarLogo' className="navbar-brand" src={logo}/>
                  
                
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="nav justify-content-end flex-grow-1">
                          <li className="list-inline-item">{time}</li>
                          <li className="list-inline-item">{date}</li>
                          <li className="list-inline-item"><i id='nav-bell' className="bi bi-bell position-relative">
                          <span style={{ visibility: (roles == 2 && count >= 1) ? "visible" : "hidden" }} id='nav-badge' className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                              {count}
                              {/* <span className="visually-hidden">unread messages</span> */}
                            </span>
                          </i>                     
                          </li>
                          {/* <li className="list-inline-item"><i className="bi bi-person-circle"></i> Jufel</li> */}
                          <li className="list-inline-item"><i className="bi bi-person-circle"></i> {user_name} {user_role}</li>
                          {/* <li className="list-inline-item">{roles}</li> */}
                          <li className="list-inline-item"><a id="reg_acc" href="#" onClick={ () => {navigateHomepage("/")}}>LOGOUT</a></li>
                      </ul>   
                </div>
            </div>
       </nav>
    </div>
  )
}

export default Navbar