import React from 'react'

const UAMForm = () => {
  return (
    <div>
        <form > 
        <div class="row mb-1">
            <div class="col-sm-12 text-center">
                <h5>User Access Management</h5>
            </div>
        </div>
        <div class="row mb-1">
          <label for="" class="col-sm-5 col-form-label">Ticket No. </label>
          <div class="col-sm-7">
            <input type="text" class="form-control" id=""disabled/>
          </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Date: </label>
            <div class="col-sm-7">
              <input type="text" class="form-control" id="" disabled/>
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Requestor: </label>
            <div class="col-sm-7">
              <input type="text" class="form-control" id="" disabled/>
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Email: </label>
            <div class="col-sm-7">
              <input type="text" class="form-control" id="" disabled/>
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Department:</label>
            <div class="col-sm-7">
              <input type="text" class="form-control" id="" disabled/>
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">UAM Category:</label>
            <div class="col-sm-7">
                <select class="form-select" aria-label="Default select">
                    <option selected="">Select category</option>
                    <option value="">New User Account Creation</option>
                    <option value="">Modify User Priveledge</option>
                    <option value="">Reset Password</option>
                    <option value="">Force Logout</option>
                    <option value="">Unlock Account</option>
                </select>
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">System:</label>
            <div class="col-sm-7">
                <select class="form-select" aria-label="Default select">
                    <option value="" selected disabled>Select system</option>
                    <option value="">HP</option>
                    <option value="">Huawei</option>
                    <option value="">Nokia</option>
                    <option value="">Asus</option>
                    <option value="">Dell</option>
                    <option value="">Ubuntu</option>
                    <option value="">Red Hat</option>
                    <option value="">Centos</option>
                </select>
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Operation Rights:</label>
            <div class="col-sm-7">
                <select class="form-select" aria-label="Default select">
                    <option value="" selected disabled>Select rights</option>
                    <option value="">Read / View Access</option>
                    <option value="">Operator</option>
                    <option value="">Maintenance</option>
                </select>
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Validity Period:</label>
            <div class="col-sm-7">
                <input id="startDate" class="form-control" type="datetime-local" />
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Request Details:  </label>
            <div class="col-sm-7">
              <input type="text" class="form-control" id="" placeholder="Specify request details"/>
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Reason for request:  </label>
            <div class="col-sm-7">
              <input type="text" class="form-control" id=""  placeholder="Specify reason for request" />
            </div>
        </div> <br/>         
        <button type="submit" class="btn mb-3 buttonStyleGlobal">Submit Ticket</button>
      </form>
      <form > 
        <div class="row mb-1">
            <div class="col-sm-12 text-center">
                <h5>Service Request</h5>
            </div>
        </div>
        <div class="row mb-1">
          <label for="" class="col-sm-5 col-form-label">Ticket No. </label>
          <div class="col-sm-7">
            <input type="text" class="form-control" id=""disabled />
          </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Date: </label>
            <div class="col-sm-7">
              <input type="text" class="form-control" id="" disabled />
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Requestor: </label>
            <div class="col-sm-7">
              <input type="text" class="form-control" id="" disabled />
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Email: </label>
            <div class="col-sm-7">
              <input type="text" class="form-control" id="" disabled />
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Department:</label>
            <div class="col-sm-7">
              <input type="text" class="form-control" id="" disabled />
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">SR Category:</label>
            <div class="col-sm-7">
                <select class="form-select" aria-label="Default select">
                    <option selected="">Select category</option>
                    <option value="">OP Simulation</option>
                    <option value="">Troubleshooting</option>
                    <option value="">Logs Collection</option>
                    <option value="">Healthcheck</option>
                    <option value="">Others</option>
                </select>
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">System:</label>
            <div class="col-sm-7">
                <select class="form-select" aria-label="Default select">
                    <option value="" selected disabled>Select system</option>
                    <option value="">HP</option>
                    <option value="">Huawei</option>
                    <option value="">Nokia</option>
                    <option value="">Asus</option>
                    <option value="">Dell</option>
                    <option value="">Ubuntu</option>
                    <option value="">Red Hat</option>
                    <option value="">Centos</option>
                </select>
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Activity Name:   </label>
            <div class="col-sm-7">
              <input type="text" class="form-control" id="" placeholder="Enter activity name" />
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Activity Details:   </label>
            <div class="col-sm-7">
              <input type="text" class="form-control" id="" placeholder="Specify activity details" />
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Activity Schedule Start:</label>
            <div class="col-sm-7">
                <input id="startDate" class="form-control" type="datetime-local" />
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Activity Schedule End:</label>
            <div class="col-sm-7">
                <input id="startDate" class="form-control" type="datetime-local" />
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Severity:</label>
            <div class="col-sm-7">
                <select class="form-select" aria-label="Default select">
                    <option value="" selected disabled>Select severity of request</option>
                    <option value="">Minor</option>
                    <option value="">Major</option>
                </select>
            </div>
        </div>
        <div class="row mb-1">
            <label for="" class="col-sm-5 col-form-label">Purpose:  </label>
            <div class="col-sm-7">
              <input type="text" class="form-control" id=""placeholder="Specify purpose of activity"/>
            </div>
        </div> <br/>         
        <button type="submit" class="btn mb-3 buttonStyleGlobal">Submit Ticket</button>
      </form>
    </div>
    
  )
}

export default UAMForm