import React, { useState, useEffect }from 'react';
import "../css/navbar.css"
import { useNavigate } from 'react-router-dom'

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
       <nav id="navBarDashLogo" class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                   Service Expert
                </a>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav justify-content-end flex-grow-1">
                          <li class="list-inline-item">{time}</li>
                          <li class="list-inline-item">{date}</li>
                          <li class="list-inline-item"><i class="bi bi-bell"></i></li>
                          {/* <li class="list-inline-item"><i class="bi bi-person-circle"></i> Jufel</li> */}
                          <li class="list-inline-item"><i class="bi bi-person-circle"></i> {user_name} {user_role}</li>
                          {/* <li class="list-inline-item">{roles}</li> */}
                          <li class="list-inline-item"><a id="reg_acc" href="#" onClick={ () => {navigateHomepage("/")}}>LOGOUT</a></li>
                      </ul>   
                </div>
            </div>
       </nav>
    </div>
  )
}

export default Navbar