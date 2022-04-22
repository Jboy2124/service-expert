import React, { useEffect, useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

const ApprovalToCloseModal = (props) => {
    const [state, setState] = useState([]);
    const [srState, setSRState] = useState([]);



    useEffect(() => {
        axios.get(`/api/get_uam_implemented/${props.ticketNo}`).then((response) => {
            setState(response.data);
        });


        axios.get(`/api/get_sr_implemented/${props.ticketNo}`).then((response) => {
            setSRState(response.data);
        });
    },[props.ticketNo]);

    
    const handleTicketStatus = (e, stats, type) => {
        e.preventDefault();

        switch (type) {
            case "UAM":
                axios.put(`/api/submit_after_post_checking_uam/${props.ticketNo}/${stats}`).then((response) => {
                    swal((stats == "Complete") ? "Complete" : "Implementation", response.data.message, "success");
                    props.handleReloadList();
                });
                break;
            
            case "SR":
                axios.put(`/api/submit_after_post_checking_sr/${props.ticketNo}/${stats}`).then((response) => {
                    swal((stats == "Complete") ? "Complete" : "Implementation", response.data.message, "success");
                    props.handleReloadList();
                });
                break;
        } 
    }


  return (
    <div >  
    <div className="modal fade" id="UAMTicketComplete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Post Checking - (User Access Management)</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form action='' > 
                        <div className="row mb-1">
                          <label  className="col-sm-3 form-label">Ticket No. </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" name='uamTicket' value={props.ticketNo} id=""disabled/>
                          </div>
                        </div>
                        <div className="row mb-1">
                            <label  className="col-sm-3 form-label">Requestor: </label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" id="" name="uamName" value={state.map(items => { return (items.requested_by) })} disabled/>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label  className="col-sm-3 form-label">Email: </label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" id="" value={state.map(items => { return (items.email) } )} name='uamEmail' disabled/>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label  className="col-sm-3 form-label">Department:</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" id="" value={state.map(items => { return (items.department) })}  name='uamdepartment' disabled/>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-sm-3 form-label">UAM Category:</label>
                            <div className="col-sm-9">
                                <select className="form-select" name='uamcategory' aria-label="Default select">
                                    <option selected disabled>{state.map(items => { return (items.category_name)})}</option>
                                    {/* {
                                        category.map((items) => {
                                            return(
                                                <option value={items.category_id}>{items.category_name}</option>
                                            )
                                        })
                                    } */}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label  className="col-sm-3 form-label">System:</label>
                            <div className="col-sm-9">
                                <select className="form-select" name='uamsystem' aria-label="Default select">
                                    <option selected disabled>{state.map(items => { return (items.system_name) })}</option>
                                    {/* {
                                        system_.map((items) => {
                                            return(
                                                <option value={items.system_id} >{items.system_name}</option>
                                            )
                                        })
                                    } */}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-sm-3 form-label">Operation Rights:</label>
                            <div className="col-sm-9">
                                <select className="form-select" name='uamoperation' aria-label="Default select">
                                    <option selected disabled>{state.map(items => { return (items.operation_name) })}</option>
                                    {/* {
                                        operation_.map((items) => {
                                            return (
                                                <option value={items.operation_id}>{items.operation_name}</option>
                                            )
                                        })
                                    } */}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-sm-3 form-label">Validity Period:</label>
                            <div className="col-sm-9">
                                <input id="startDate" className="form-control" name='uamvalidity' value={state.map(items => { return(items.uam_validity) })} type="datetime-local" />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-sm-3 form-label">Request Details:  </label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" id="uamdetails" name='uamdetails' value={state.map(items => { return(items.request_details) })} placeholder="Specify request details" required/>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label className="col-sm-3 form-label">Reason for request:  </label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" id="request_reason" name='request_reason' value={state.map(items => { return(items.request_reason) })} placeholder="Specify reason for request" required />
                            </div> 
                        </div>    
                        <div className="row mb-3">
                            <label className="col-sm-3 form-label">Remarks:  </label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" id="checkingRemarks" name='request_reason' value={state.map(items => { return(items.returned_remarks) })} placeholder="" disabled />
                            </div> 
                        </div>                         
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={(e) => handleTicketStatus(e, "For Implementation", "UAM")} data-bs-dismiss="modal">Re-Submit</button>
                            <button type="submit" className="btn buttonStyleGlobal" onClick={(e) => handleTicketStatus(e, "Complete", "UAM")} data-bs-dismiss="modal">Complete</button>
                        </div>
                      </form>
                </div>
            </div>
        </div>
    </div>



    <div className="modal fade" id="SRTicketComplete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Post Checking (Service Request)</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form action='' onSubmit="" method='post'> 
                    <div className="row mb-1">
                      <label for="" className="col-sm-3 form-label">Ticket No. </label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" value={props.ticketNo}  name='srTicketNo' id=""disabled />
                      </div>
                    </div>
                    <div className="row mb-1">
                        <label for="" className="col-sm-3 form-label">Requestor: </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" value={srState.map(items => { return (items.fullname) })}  id="" disabled />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label for="" className="col-sm-3 form-label">Email: </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" value={srState.map(items => { return (items.email) })} id="" disabled />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label for="" className="col-sm-3 form-label">Department:</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" value={srState.map(items => { return (items.department) })} id="" disabled />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label for="" className="col-sm-3 form-label">SR Category:</label>
                        <div className="col-sm-9">
                            <select className="form-select" name='srCategory' aria-label="Default select">
                                <option selected disabled>{srState.map(items => { return (items.category_name) })}</option>
                                {/* {
                                    getSRCategory.map((item) => {
                                        return (
                                            <option value={item.category_id}>{item.category_name}</option>
                                        )
                                    })
                                } */}
                            </select>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label for="" className="col-sm-3 form-label">System:</label>
                        <div className="col-sm-9">
                            <select className="form-select" name='srSystem' aria-label="Default select">
                                <option value="" selected disabled>{srState.map(items => { return (items.system_name) })}</option>
                                {/* {
                                    getSystem.map((items) => {
                                        return (
                                            <option value={items.system_id} >{items.system_name}</option>
                                        )
                                    })
                                } */}
                            </select>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label for="" className="col-sm-3 form-label">Activity Name:   </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" id="" name='srActivity' value={srState.map(items => { return (items.activity_name) })} placeholder="Enter activity name" disabled/>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label for="" className="col-sm-3 form-label">Activity Details:   </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name='srDetails' id="" value={srState.map(items => { return (items.activity_details) })}  placeholder="Specify activity details" disabled/>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label for="" className="col-sm-3 form-label">Activity Schedule Start:</label>
                        <div className="col-sm-9">
                            <input id="startDate" className="form-control" name='srSched1' value={srState.map(items => { return (items.activity_start) })} type="datetime-local" disabled/>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label for="" className="col-sm-3 form-label">Activity Schedule End:</label>
                        <div className="col-sm-9">
                            <input id="startDate" className="form-control" name='srSched2'  value={srState.map(items => { return (items.activity_end) })} type="datetime-local" disabled/>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label for="" className="col-sm-3 form-label">Severity:</label>
                        <div className="col-sm-9">
                            <select className="form-select" name='srSeverity' aria-label="Default select">
                                <option value="" selected disabled>{srState.map(items => { return (items.severity) })}</option>
                                {/* <option value="Minor">Minor</option>
                                <option value="Major">Major</option> */}
                            </select>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label for="" className="col-sm-3 form-label">Purpose:  </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name='srPurpose' id="" value={srState.map(items => { return (items.purpose) })} placeholder="Specify purpose of activity" required/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="" className="col-sm-3 form-label">Remarks:  </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name='srReturnedRemarks' id="" value={srState.map(items => { return (items.returned_remarks) })} placeholder="" disabled/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={(e) => handleTicketStatus(e, "For Implementation", "SR")} data-bs-dismiss="modal">Re-Submit</button>
                        <button type="submit" className="btn buttonStyleGlobal" onClick={(e) => handleTicketStatus(e, "Complete", "SR")} data-bs-dismiss="modal">Complete</button>
                    </div>        
                </form>
            </div>
        </div>
    </div>
</div>  
</div>
  )
}

export default ApprovalToCloseModal