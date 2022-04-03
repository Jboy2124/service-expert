import React from 'react'

const UserManagement = () => {
  return (
    <div>
        <div id="rightDashboard" className="col-lg-12">
        <div class="navbar mt-3 mb-3">
                <div class="container-fluid">
                    <span class="navbar-brand">User Management</span>
                </div>  
        </div>
        <div class="card">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="accountRequest-tab" data-bs-toggle="tab" href="#accountRequest" role="tab" aria-controls="accountRequest" aria-selected="true">Account Requests</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="users-tab" data-bs-toggle="tab" href="#users" role="tab" aria-controls="users" aria-selected="false">Users Lists</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="roles-tab" data-bs-toggle="tab" href="#roles" role="tab" aria-controls="roles" aria-selected="false">Roles</a>
                    </li>       
                </ul>
            </div>
            <div class="card-body">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="accountRequest" role="tabpanel" aria-labelledby="accountRequest-tab">
                        <div class="row ">
                            <div class="col-sm-12">
                                <table class="table table-striped">
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
                                        <tr>              
                                            <td>Date req. fr db </td>
                                            <td>Email </td>
                                            <td>Full Name </td>
                                            <td>Department</td>
                                            <td>Role</td>
                                            <td>
                                                <a href="">Approve</a> <br/>
                                                <a href="">Delete</a> 
                                            </td>
                                        </tr>
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="users" role="tabpanel" aria-labelledby="users-tab">
                        <div class="row  ">
                            <div class="col-sm-12">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <td colSpan={5}></td>
                                            <td >
                                                <div class="dropdown mx-2">
                                                    <button class="btn dropdown-toggle buttonStyleGlobal" type="button" id="dropdownMenuButtonCreate" data-bs-toggle="dropdown" aria-expanded="false"> Sort
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonCreate">
                                                        <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropUAM" >by Name</a></li>
                                                        <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropSR">by Role</a></li>
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
                                        <tr>              
                                            <td>Date approved. fr db </td>
                                            <td>Email </td>
                                            <td>Full Name </td>
                                            <td>Department</td>
                                            <td>Role</td>
                                            <td>
                                                <a href="">Edit</a> <br/>
                                                <a href="">Delete</a> 
                                            </td>
                                        </tr>
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="roles" role="tabpanel" aria-labelledby="roles-tab">
                        <div class="row  ">
                            <div class="col-sm-12">
                                <table class="table table-striped">
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
                                        <tr>              
                                            <td>Requestor</td>
                                            <td>*File a request <br/>
                                                *Perform validation 
                                            </td>
                                            <td> <a href="">Delete</a> </td>
                                        </tr>
                                        <tr>              
                                            <td>Approver</td>
                                            <td>​Review and approves request </td>
                                            <td> <a href="">Delete</a> </td>
                                        </tr>
                                        <tr>              
                                            <td>Second Approver</td>
                                            <td>Review and approves request (if there is system downtime)</td>
                                            <td> <a href="">Delete</a> </td>
                                        </tr>
                                        <tr>              
                                            <td>Implementor</td>
                                            <td>*Implements their assign task <br/>
                                                *Specifies implementation status<br/>
                                                *Attach logs<br/>
                                            </td>
                                            <td> <a href="">Delete</a> </td>
                                        </tr>
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default UserManagement