import React, { useState } from 'react';
import "../css/homepage.css";
import logo from "../images/sx logo 3a.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';



const initialvalue = {
    login_username: "", login_password: ""
}

export const Homepage = () => {
    const [chkbox, setChkbox] = useState(false);
    const [ authProcess, setAuthProcess ] = useState(initialvalue);
    const { login_username, login_password } = authProcess;
    const navigateToSignUp = useNavigate();


    const handleLoginEvent = (event) => {
        event.preventDefault();

        if(chkbox) {
            axios.post("/api/auth_admin", {
                login_username, login_password
            }).then((response) => {
                if(response.data.message) {
                    toast.error(response.data.message, {
                        autoClose : 500
                    });
                } else {
                    navigateToSignUp("/AdminDashBoard", { state: { name: response.data[0].username, role: "" }});
                }
            });
        }  else {
            axios.post("/api/auth", {
                login_username, login_password
            }).then((response, res) => {
                if(response.data.message) {
                    toast.error(response.data.message, {
                        autoClose: 500
                    }); 
                    
                } else {
                    if (response.data[0].role === 1 ) {
                        sessionStorage.setItem("sessionid", response.data[0].approver_id);
                        navigateToSignUp("/UserDashBoard", { state: { name: response.data[0].first_name,  role: response.data[0].description}});
                    } else {
                        sessionStorage.setItem("sessionid", response.data[0].approver_id);
                        navigateToSignUp("/ApproverDashBoard", { state: { name: response.data[0].first_name,  role: response.data[0].description}});
                    }
                   
                }
            });
        }
    }

    


    const handleInputChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setAuthProcess({...authProcess, [name] : value});
    }

    const handleSelectedChk = (e) => {
        if(e.target.checked) {
            setChkbox(true);
        } else {
            setChkbox(false)
        }
    }



  return (
    <div>
         <div className="main_container">
            <div id="form_container"className="row">
                <div id="left_container" className="col-sm-6 "> 
                    <img id="login_logo" className="img-fluid" src={logo} alt="sx logo" />
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
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center mb-3 ">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name='admin_chkbox'  onChange={handleSelectedChk} value="" id="flexCheckDefault"></input>
                                <label id='form-check-label-admin' className="form-check-label" htmlFor="flexCheckDefault">
                                    Service Expert Admin
                                </label>
                            </div><br/>
                        </div>
                        <div className="submit_center">
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
