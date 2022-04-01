import React from 'react'

const UAMForm = () => {
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();
  const dateTime = (`${date} ${time}`)
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
    {/* <button type="button" class="btn btn-primary" >
      Launch static backdrop modal
    </button> */}
    
    {/* <!-- Modal --> */}
    <div class="modal fade" id="staticBackdropUAM" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">User Access Management</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form > 
                        <div class="row mb-1">
                          <label for="" class="col-sm-5 col-form-label">Ticket No. </label>
                          <div class="col-sm-7">
                            <input type="text" class="form-control" id=""disabled/>
                          </div>
                        </div>
                        <div class="row mb-1">
                            <label for="" class="col-sm-5 col-form-label">Date and Time: </label>
                            <div class="col-sm-7">
                              <input type="text" class="form-control" value={dateTime} disabled/>
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
                        <div class="row mb-3">
                            <label for="" class="col-sm-5 col-form-label">Reason for request:  </label>
                            <div class="col-sm-7">
                              <input type="text" class="form-control" id=""  placeholder="Specify reason for request" />
                            </div> 
                        </div>                           
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn buttonStyleGlobal">Submit Ticket</button>
                        </div>
                      </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="staticBackdropSR" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Service Request</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action='' method='post'> 
                        <div class="row mb-1">
                          <label for="" class="col-sm-5 col-form-label">Ticket No. </label>
                          <div class="col-sm-7">
                            <input type="text" class="form-control" id=""disabled />
                          </div>
                        </div>
                        <div class="row mb-1">
                            <label for="" class="col-sm-5 col-form-label">Date and Time: </label>
                            <div class="col-sm-7">
                              <input type="text" class="form-control" id="" value={dateTime} disabled />
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
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn buttonStyleGlobal">Submit Ticket</button>
                        </div>        
                    </form>
                </div>
            </div>
        </div>
    </div>
        
      
    </div>
    
  )
}

export default UAMForm