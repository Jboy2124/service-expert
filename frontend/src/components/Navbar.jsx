import React, { useState, useEffect }from 'react';
import logo from "../images/dashlogo.jpg"
import "../css/navbar.css"
import { useNavigate } from 'react-router-dom'

const Navbar = (props) => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const [getName, setGetName] = useState(""); 
  const [getTime, setGetTime] = useState(time);


  const navigateHomepage = useNavigate();
  const role = " "

  useEffect(() => {
    setInterval(() => setGetTime(new Date().toLocaleTimeString()), 1000);
  }, []);


  return (
    <div>
       <div className="row noMargin">
               <div id="navBarDashLogo" className="col-4">
                   <img className="" id=""src={logo} alt="" /> 
               </div>
               <div id="navBarDashLogo" className="col-8 d-flex justify-content-end px-5">
                    <ul class="list-inline pt-3">
                        <li class="list-inline-item px-3">{getTime}</li>
                        <li class="list-inline-item">{date}</li>
                        <li class="list-inline-item px-3"><i class="bi bi-bell"></i></li>
                        <li class="list-inline-item px-2"><i class="bi bi-person-circle"></i> {props.id} - ({props.role})</li>
                        <li class="list-inline-item px-3">{role}</li>
                        <li class="list-inline-item"><a id="reg_acc" href="#" onClick={ () => {
                        navigateHomepage("/")
                    }}>LOGOUT</a></li>
                    </ul>                  
               </div>
       </div>
    </div>
  )
}

export default Navbar