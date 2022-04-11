import React, { useState, useEffect }from 'react';
import "../css/navbar.css"
import { useNavigate } from 'react-router-dom'
import logo from '../images/Untitled2.png'

const Navbar = (props) => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const [getTime, setGetTime] = useState(time);
  const navigateHomepage = useNavigate();
  const roles = " "

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
                          <li className="list-inline-item"><i className="bi bi-bell"></i></li>
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