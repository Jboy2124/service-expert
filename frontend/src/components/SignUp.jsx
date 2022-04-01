import React from 'react';
import logo from "../images/sx logo 3.jpg";
import "../css/homepage.css";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const SignUp = () => {
    const navigateHomepage = useNavigate();
    

  return (
    <div>
        <div className="signup_main_container">
            <div id="row_noMargin" className="row">
                <div id="signup_logo_container" className="col-sm-12">
                    <img id="signup_logo" src={logo} />
                </div>
            </div>
            <div id="row_noMargin" className="row ">
                <div id="signup_form" className="col-sm-6 col-lg-4 mx-auto">
                <form />
                    <p id="p_reg"className="h2">Account Registration</p> <br/>
                    <div className="form mb-2 d-flex ">
                        <input type="text" className="form-control " id="floatingInput" placeholder="First Name" required /> 
                        <input type="text" className="form-control mx-1" id="floatingInput" placeholder="Last Name" required />
                    </div>
                    <div className="form mb-2 input-group">
                        <span className="input-group-text" id="input-group-right-example">@</span>
                        <input type="text" className="form-control" placeholder="Username" required />
                    </div>
                    <div className="form mb-2">
                        <input type="password" className="form-control" placeholder="Password" required />
                    </div>
                    <div className="form mb-2">
                        <input type="password" className="form-control" placeholder="Confirm Password" required />
                    </div>
                    <div className="form mb-2">
                        <input type="text" className="form-control"  placeholder="Department" required />
                    </div>
                    <div className="form mb-2">
                        <select className="form-select" >
                            <option selected disabled>Select Role</option>
                            <option value="1">Requestor</option>
                            <option value="2">Approver</option>
                            <option value="3">Second-Approver</option>
                            <option value="4">Implementor</option>
                        </select>
                    </div> <br />                                  
                    <div className="submit_center">
                        <button id="login_submit_button" type="submit" className="btn btn-warning mb-3">SUBMIT</button>
                    </div>
                    <p id="p_reg" className="h6 text-center"><a id="reg_acc" href="#" onClick={ () => {
                        navigateHomepage("/")
                    }}>EXISTING USER LOGIN HERE</a></p>

                </div>
            </div>
           
    
        </div>    
        <Footer />      
    </div>
  )
}

export default SignUp