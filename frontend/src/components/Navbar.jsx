import React from 'react'
import logo from "../images/dashboard logo.jpg"
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
                          <li class="list-inline-item"><i class="bi bi-person-circle"></i> {fullName}</li>
                          <li class="list-inline-item">{role}</li>
                          <li class="list-inline-item"><a id="reg_acc" href="#" onClick={ () => {navigateHomepage("/")}}>LOGOUT</a></li>
                      </ul>   
                </div>
            </div>
       </nav>
    </div>
  )
}

export default Navbar