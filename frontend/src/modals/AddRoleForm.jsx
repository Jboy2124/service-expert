import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';




const roleValues = {
    role : "",
    rights : ""
}

const AddRoleForm = () => {
    const [addRole , setAddRole ] = useState(roleValues);
    const { role, rights } = addRole;
    const navigate = useNavigate();
  
    
    const addNewRoleValue = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/api/add_role", { 
            role, rights
        }).then(() => {
            setAddRole({
                role: "", rights: ""
            });
        });
        toast.success("New Role has been added", {
            autoClose: 1000
        })
    }
    const addNewRoleValueChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setAddRole({...addRole, [name] : value});
    }
   

  return (
    <div >  
        <div class="modal fade" id="newRoleForm"  tabindex="-1" aria-labelledby="newRoleFormLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="newRoleFormLabel">Add New Role</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={addNewRoleValue}> 
                            <div class="row mb-1">
                                <label for="" class="col-sm-3 form-label">Role </label>
                                <div class="col-sm-9">
                                <input type="text" class="form-control" name='role'  onChange={addNewRoleValueChange}/>
                                </div>
                            </div>
                            <div class="row mb-1">
                                <label for="" class="col-sm-3 form-label" >Rights </label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" name="rights" onChange={addNewRoleValueChange} />
                                </div>
                            </div>
                            <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" class="btn buttonStyleGlobal " data-bs-dismiss="modal">Add new role</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default AddRoleForm