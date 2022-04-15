import React, { useEffect, useState } from 'react';
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
    department: "",
    role: ""
}


const SignUp = () => {
    const [getRole, setGetRole] = useState([]);
    const [ addAccount, setAddAccount ] = useState(initialValue);
    const { firstname, lastname, email, password, confirmPassword, department, role } = addAccount;
    var navigateHomepage = useNavigate();

    const handleSubmitValue = (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            toast.error("Password and Confirm Password does not match!", {autoClose: 1000})
        } 
        else {
            axios.post("/api/account_checking", { 
            firstname, lastname, email, password, confirmPassword, department, role
            }).then((response) => {
                if (!response.data.message) {
                    setAddAccount({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "", department: "", role: ""});
                    toast.success("Registration submitted and for approval" , {autoClose: 2000});
                    navigateHomepage("/");  
                    
                } 
                else {
                    toast.error("Email already in use", {
                        autoClose: 1000
                    });
                }
            });  
        }              
    }
    
    
    const handleInputChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setAddAccount({...addAccount, [name] : value});
    }

    useEffect(() => {
        axios.get("/api/get_role").then((response) => {
            setGetRole(response.data);
        });
    },[]);

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
                <form action='' onSubmit={handleSubmitValue} >
                    <p id="p_reg"className="h2">Account Registration</p> <br/>
                    <div className="form mb-2 d-flex ">
                        <input type="text" className="form-control " name='firstname' onChange={handleInputChange} placeholder="First Name" required /> 
                        <input type="text" className="form-control mx-1"  name='lastname' onChange={handleInputChange} placeholder="Last Name" required />
                    </div>
                    <div className="form mb-2 input-group">
                        <span className="input-group-text" id="input-group-right-example">@</span>
                        <input type="text" className="form-control" name='email' onChange={handleInputChange} placeholder="Username" required />
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
                    <div className="form mb-2">
                        <select className="form-select" onChange={handleInputChange} name='role'>
                            <option selected disabled>Select Role</option>
                                {
                                    getRole.map((items) => {
                                        return(
                                            <option value={items.role_id}>{items.description}</option>
                                        );
                                    })
                                }
                        </select>
                    </div> <br />                                  
                    <div className="submit_center">
                        <button id="login_submit_button" type="submit" className="btn btn-warning mb-3">SUBMIT</button>
                    </div>
                    <p id="p_reg" className="h6 text-center"><a id="reg_acc" href="#" onClick={ () => {
                        navigateHomepage("/")
                    }}>EXISTING USER LOGIN HERE</a></p>

                </form>
                </div>
            </div>
        </div>    
        <Footer />      
    </div>
  )
}

export default SignUp