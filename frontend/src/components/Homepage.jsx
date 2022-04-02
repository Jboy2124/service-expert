import React, { useEffect, useState } from 'react';
import "../css/homepage.css";
import logo from "../images/sx logo 3.jpg";
import { useNavigate } from "react-router-dom";
// import Dashboard from './Dashboard';
import axios from "axios";
import { toast } from 'react-toastify';


const initialvalue = {
    login_username: "", login_password: ""
}

export const Homepage = () => {
    const [ authProcess, setAuthProcess ] = useState(initialvalue);
    const { login_username, login_password } = authProcess;
    const navigateToSignUp = useNavigate();


    const handleLoginEvent = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/api/auth", {
            login_username, login_password
        }).then((response) => {
            if(response.data.message) {
                toast.error(response.data.message);
            } else {
                navigateToSignUp("/RightDashUser");
            }
        });
    }


    const handleInputChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setAuthProcess({...authProcess, [name] : value});
    }


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
                    <form action='' onSubmit={handleLoginEvent}>
                        <div className="form mb-3">
                            <input type="text" className="form-control" id="floatingInput" name='login_username' onChange={handleInputChange}  placeholder="Username" required/>
                        </div>
                        <div className="form mb-3">
                            <input type="password" className="form-control" id="floatingPassword" name='login_password' onChange={handleInputChange} placeholder="Password" required/>
                        </div><br/>
                        <div className="submit_center">
                            {/* <button id="login_submit_button" onClick={() => { navigateToDashBoard(`/RightDashUser`) }}type="submit" className="btn btn-warning mb-3">SIGN IN</button> */}
                             <button id="login_submit_button" type="submit" className="btn btn-warning mb-3">SIGN IN</button>
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
