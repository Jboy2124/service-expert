import React from 'react'
import logo from "../images/dashlogo.jpg"
import "../css/navbar.css"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
 const navigateHomepage = useNavigate();
 const time = new Date().toLocaleTimeString();
 const date = new Date().toLocaleDateString();
 const fullName = ""
 const role = " "

  return (
    <div>
       <div className="row noMargin">
               <div id="navBarDashLogo" className="col-4">
                   {/* <img className="" id=""src={logo} alt="" />  */}
               </div>
               <div id="navBarDashLogo" className="col-8 d-flex justify-content-end px-5">
                    <ul class="list-inline pt-3">
                        <li class="list-inline-item px-3">{time}</li>
                        <li class="list-inline-item">{date}</li>
                        <li class="list-inline-item px-3"><i class="bi bi-bell"></i></li>
                        <li class="list-inline-item px-2"><i class="bi bi-person-circle"></i> {fullName}</li>
                        <li class="list-inline-item px-3">{role}</li>
                        <li class="list-inline-item"><a id="reg_acc" href="#" onClick={ () => {
                        navigateHomepage("/SignUp")
                    }}>LOGOUT</a></li>
                    </ul>                  
               </div>
       </div>
    </div>
  )
}

export default Navbar