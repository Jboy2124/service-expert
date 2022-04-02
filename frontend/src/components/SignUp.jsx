import React, { useState } from 'react';
import logo from "../images/sx logo 3.jpg";
import "../css/homepage.css";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import { toast } from 'react-toastify';


const initialValue = {
    firstname: "", lastname: "",
    email: "", 
    password: "",
    confirmPassword: "", 
    department: ""
}


const SignUp = () => {
    const [ addAccount, setAddAccount ] = useState(initialValue);
    const { firstname, lastname, email, password, confirmPassword, department } = addAccount;
    const navigateHomepage = useNavigate();

    const handleSubmitValue = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/api/account_registration", { 
            firstname, lastname, email, password, confirmPassword, department
        }).then(() => {
            setAddAccount({
                firstname: "", lastname: "", email: "", password: "", confirmPassword: "", department: ""
            });
        });

        toast.success("Record successfully added");
        setTimeout(() => {
            navigateHomepage("/");
        }, 500);

    }
    
    const handleInputChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setAddAccount({...addAccount, [name] : value});
    }


  return (
    <div>
        <div className="main_container">
            <div id="row_noMargin" className="row">
                <div id="signup_logo_container" className="col-sm-12">
                    <img id="signup_logo" src={logo} />
                </div>
            </div>

            <div id="row_noMargin" className="row ">
                <div id="signup_form" className="col-sm-12 mx-auto">
                    <form action='' onSubmit={handleSubmitValue}>
                        <p id="p_reg"className="h2">Account Registration</p> <br/>
                        <div className="form mb-2 d-flex ">
                            <input type="text" className="form-control" id="floatingInput" name='firstname' onChange={handleInputChange} placeholder="First Name" required /> 
                            <input type="text" className="form-control mx-1" id="floatingInput" name='lastname' onChange={handleInputChange} placeholder="Last Name" required />
                        </div>
                        <div className="form mb-2 input-group">
                            <span className="input-group-text" id="input-group-right-example">@</span>
                            <input type="email" className="form-control" name='email' onChange={handleInputChange} placeholder="example@email.com" required />
                        </div>
                        <div className="form mb-2">
                            <input type="password" className="form-control" name='password' onChange={handleInputChange} placeholder="Password" required />
                        </div>
                        <div className="form mb-2">
                            <input type="password" className="form-control" name='confirmPassword' onChange={handleInputChange} placeholder="Confirm Password" required />
                        </div>
                        <div className="form mb-2">
                            <input type="text" className="form-control" name='department' onChange={handleInputChange} placeholder="Department" required />
                        </div>
                        <div className="form mb-2 row">
                            <div className="form-group">
                                <div id="myMultiselect" className="multiselect">
                                    <div id="mySelectLabel" className="selectBox" onclick="toggleCheckboxArea()">
                                        <select className="form-select">
                                            <option>Select Role</option>
                                        </select>
                                        <div className="overSelect"></div>
                                    </div>
                                    <div id="mySelectOptions">
                                        <label for="one"><input type="checkbox" id="one" onchange="checkboxStatusChange()" value="Requestor" /> Requestor</label>
                                        <label for="two"><input type="checkbox" id="two" onchange="checkboxStatusChange()" value="Approver" /> Approver</label>
                                        <label for="three"><input type="checkbox" id="three" onchange="checkboxStatusChange()" value="2nd Approver" /> 2nd Approver</label>
                                        <label for="four"><input type="checkbox" id="four" onchange="checkboxStatusChange()" value="Implementer" /> Implementor</label>
                                    </div>
                                </div>
                            </div>
                        </div> <br />                                  
                        <div className="submit_center">
                            <button id="login_submit_button" type="submit" className="btn btn-warning mb-3">SUBMIT</button>
                        </div>
                        <p id="p_reg" className="h6 text-center"><a id="reg_acc" href="#" onClick={ () => { navigateHomepage("/") }}>EXISTING USER LOGIN HERE</a></p>
                    </form>
                </div>
            </div>
        </div>    
        <Footer />      
    </div>
  )
}

export default SignUp