import React, { useState, useEffect } from 'react'
import  { toast } from 'react-toastify';
import axios from 'axios'
import AddRoleForm from "../modals/AddRoleForm"


const UserManagement = () => {
    const [getList, setGetList] = useState([{}]);
    const [getConfirmed, setGetConfirmed] = useState([{}]);
    const [getRole, setGetRole] = useState([{}]);
    // const [approvedProfile, setApprovedProfile] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3001/api/get_role").then((response) => {
            setGetRole(response.data);
            ;
        });
    },[getRole]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/get_unconfirmed").then((response) => {
            setGetList(response.data);
        });
    }, []);


    useEffect(() => {
        axios.get("http://localhost:3001/api/get_confirmed").then((response) => {
            setGetConfirmed(response.data);
        });
    }, [getList]);


    const getSelectedID = (id) => {
        axios.put("http://localhost:3001/api/confirm_profile", { id }).then((response) => {
            setTimeout(() => {
                setGetList(response.data);
            }, 500);
            toast.success("Profile has been Approved", {
                autoClose: 1000
            });
        });
    };

    const deleteRole = (id) => {
        axios.put("http://localhost:3001/api/deleteRole", { id }).then((response) => {
            setTimeout(() => {
                setGetRole(response.data);
            }, 500);
            toast.success("Role has been deleted", {
                autoClose: 1000
            });
        });
    };
 
        

  return (
    <div>
        <div id="rightDashboard" className="col-lg-12">
        <div className="navbar mt-3 mb-3">
                <div className="container-fluid">
                    <span className="navbar-brand">User Management</span>
                </div>  
        </div>
        <div className="card">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="accountRequest-tab" data-bs-toggle="tab" href="#accountRequest" role="tab" aria-controls="accountRequest" aria-selected="true">Account Requests</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="users-tab" data-bs-toggle="tab" href="#users" role="tab" aria-controls="users" aria-selected="false">Users Lists</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="roles-tab" data-bs-toggle="tab" href="#roles" role="tab" aria-controls="roles" aria-selected="false">Roles</a>
                    </li>       
                </ul>
            </div>
            <div className="card-body">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="accountRequest" role="tabpanel" aria-labelledby="accountRequest-tab">
                        <div className="row ">
                            <div className="col-sm-12">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th >Date Request</th>
                                            <th >Email</th>
                                            <th >Full Name</th>
                                            <th >Department</th>
                                            <th> Role</th>
                                            <th> Action </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getList.map((items) => {
                                                return(
                                                    <tr key={items.approver_id}>
                                                       <td>{items.date_created}</td> 
                                                       <td>{items.email}</td> 
                                                       <td>{items.fullname}</td>
                                                       <td>{items.department}</td> 
                                                       <td>{items.role}</td>
                                                       <td>
                                                            <a href="#" className="" onClick={() => getSelectedID(items.approver_id)}>Approve</a> <br/>
                                                            <a href="#">Delete</a> 
                                                     </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="users" role="tabpanel" aria-labelledby="users-tab">
                        <div className="row  ">
                            <div className="col-sm-12">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <td colSpan={5}></td>
                                            <td >
                                                <div className="dropdown mx-2">
                                                    <button className="btn dropdown-toggle buttonStyleGlobal" type="button" id="dropdownMenuButtonCreate" data-bs-toggle="dropdown" aria-expanded="false"> Sort
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonCreate">
                                                        <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropUAM" >by Name</a></li>
                                                        <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropSR">by Role</a></li>
                                                    </ul>
                                                </div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <th >Date Created</th>
                                            <th >Email</th>
                                            <th >Full Name</th>
                                            <th >Department</th>
                                            <th> Role</th>
                                            <th> Action </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <tr>              
                                            <td>Date approved. fr db </td>
                                            <td>Email </td>
                                            <td>Full Name </td>
                                            <td>Department</td>
                                            <td>Role</td>
                                            <td>
                                                <a href="">Edit</a> <br/>
                                                <a href="">Delete</a> 
                                            </td>
                                        </tr> */}
                                        {
                                            getConfirmed.map((itm) => {
                                                return(
                                                    <tr>
                                                        <td>{itm.date_created}</td>
                                                        <td>{itm.email}</td>
                                                        <td>{itm.fullname}</td>
                                                        <td>{itm.department}</td>
                                                        <td>{itm.role}</td>
                                                        <td>
                                                            <a href="#">Edit</a> <br/>
                                                            <a href="#">Delete</a> 
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="roles" role="tabpanel" aria-labelledby="roles-tab">
                        <div className="row  ">
                            <div className="col-sm-12">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th colSpan={3}><a href="#" data-bs-toggle="modal" data-bs-target="#newRoleForm" >Add New Role</a></th>
                                        </tr>
                                        <tr>
                                            <th >Role</th>
                                            <th >Description Rights</th>
                                            <th >Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
    
                                        getRole.map((items) => {
                                            return(
                                                <tr key={items.role_id}>
                                                    <td> {items.description}</td>
                                                    <td> {items.rights}</td>
                                                    <a href="#" className="" onClick={() => deleteRole(items.role_id)}>Delete</a> 
                                                </tr>
                                            )
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        </div>
        <AddRoleForm/>
    </div>
  )
}

export default UserManagement