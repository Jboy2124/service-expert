import React from 'react';
import "../css/homepage.css";
import logo from "../images/sx logo 3.jpg";
import { useNavigate } from "react-router-dom";




export const Homepage = ({ to }) => {

    const navigateToSignUp = useNavigate();
    const navigateToDashBoard = useNavigate();

  return (
    <div>
         <div className="main_container">
            <div id="form_container"className="row">
                <div id="left_container" className="col-sm-6 "> 
                    <img id="login_logo" className="img-fluid" src={logo} />
                </div>
                <div id="right_container" className="col-sm-6 ">
                    <p id="p_reg"className="h2">Welcome</p>
                    <p id="p_reg"className="h6 mb-3">PLEASE LOGIN TO ACCESS</p><br/>
                    <form >
                        <div className="form mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Username" required/>
                        </div>
                        <div className="form mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                        </div><br/>
                        <div className="submit_center">
                            <button id="login_submit_button" onClick={() => { navigateToDashBoard(`/SideBar`) }}type="submit" className="btn btn-warning mb-3">SIGN IN</button>
                        </div>
                    </form>

                    <p id="p_reg" className="h6 text-center">
                        <a id="reg_acc" href="" onClick={() => { navigateToSignUp(`/SignUp`) }}>REGISTER AN ACCOUNT </a>
                        </p>
                </div>
            </div>
           
        </div>
    </div>
  )
};
export default Homepage
