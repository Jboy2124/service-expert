import React, { useEffect, useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';


const UpdateTicketForm = (props) => {
    const [category, setCategory] = useState([]);
    const [getUAM, setUAM] = useState([]);
    const [system_, setSystem_] = useState([]);
    const [operation_, setOperation_] = useState([]);
    const [updateUAM, setUpdateUAM] = useState({
        uamcategory: 0, 
        uamsystem: 0, 
        uamoperation: 0, 
        uamvalidity:"", 
        uamdetails:"", 
        uamreason:""
    });
    const {uamcategory, uamsystem, uamoperation, uamvalidity, uamdetails, uamreason } = updateUAM;

    

    useEffect(() => {
        axios.get("/api/category").then((response) => {
            setCategory(response.data);
        });

        axios.get("/api/getsystem").then((response) => {
            setSystem_(response.data);
        });

        axios.get("/api/getoperation").then((response) => {
            setOperation_(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get(`/api/get_uam_to_update/${props.ticketNo}`).then((response) => {
            setUAM(response.data);
        });
    }, [props.ticketNo]);



    let category_ = getUAM.map(items => {return (items.category_name)});
    let category_id_ = getUAM.map(items => {return (items.uam_category)});

    let system_uam = getUAM.map(items => {return (items.system_name)});
    let system_id_ = getUAM.map(items => {return (items.uam_system)});

    let operation_uam = getUAM.map(items => {return (items.operation_name)});
    let operation_id_ = getUAM.map(items => {return (items.uam_operation)});

    

    const handleReSubmitTicket = (event) => {
        event.preventDefault();
        const id = props.ticketNo;
        const handled_by = getUAM.map((items) => {return (items.handled_by)});
        axios.put(`/api/update_uam_ticket`, {
            id, handled_by, uamcategory, uamsystem, uamoperation, uamdetails, uamreason
        }).then((response) => {
            props.handleReload();
            setUpdateUAM({
                uamcategory: 0, 
                uamsystem: 0, 
                uamoperation: 0, 
                uamvalidity:"", 
                uamdetails:"", 
                uamreason:""
            });
            swal("Re-submit", response.data.message, "success");
            // alert(response.data.message);
        });
        
    }


    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUpdateUAM({...updateUAM, [name] : value});
        
    }



  return (
    <div >  
            <div className="modal fade" id="activeUAMTicketUpdate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">User Access Management</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action='' onSubmit={handleReSubmitTicket} > 
                                <div className="row mb-1">
                                  <label  className="col-sm-3 form-label">Ticket No. </label>
                                  <div className="col-sm-9">
                                    <input type="text" className="form-control" name='uamTicket' value={getUAM.map(items => { return ( items.ticket_id)}) } id=""disabled/>
                                  </div>
                                </div>
                                <div className="row mb-1">
                                    <label  className="col-sm-3 form-label">Requestor: </label>
                                    <div className="col-sm-9">
                                      <input type="text" className="form-control" id="" name="uamName" value={getUAM.map(items => { return (items.requested_by) })} disabled/>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label  className="col-sm-3 form-label">Email: </label>
                                    <div className="col-sm-9">
                                      <input type="text" className="form-control" id="" name='uamEmail' value={getUAM.map(items => { return (items.email) })} disabled/>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label  className="col-sm-3 form-label">Department:</label>
                                    <div className="col-sm-9">
                                      <input type="text" className="form-control" id="" name='uamdepartment' value={getUAM.map(items => { return (items.department) })} disabled/>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label className="col-sm-3 form-label">UAM Category:</label>
                                    <div className="col-sm-9">
                                        <select className="form-select" name='uamcategory' onChange={handleInputChange} aria-label="Default select">
                                            <option selected value={category_id_}>{category_}</option>
                                            {
                                                category.map((items) => {
                                                    return(
                                                        <option value={items.category_id}>{items.category_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label  className="col-sm-3 form-label">System:</label>
                                    <div className="col-sm-9">
                                        <select className="form-select" name='uamsystem' onChange={handleInputChange} aria-label="Default select">
                                            <option selected value={system_id_}>{system_uam}</option>
                                            {
                                                system_.map((items) => {
                                                    return(
                                                        <option value={items.system_id} >{items.system_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label className="col-sm-3 form-label">Operation Rights:</label>
                                    <div className="col-sm-9">
                                        <select className="form-select" name='uamoperation' onChange={handleInputChange} aria-label="Default select">
                                            <option selected value={operation_id_}>{operation_uam}</option>
                                            {
                                                operation_.map((items) => {
                                                    return (
                                                        <option value={items.operation_id}>{items.operation_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label className="col-sm-3 form-label">Validity Period:</label>
                                    <div className="col-sm-9">
                                        <input id="startDate" className="form-control" name='uamvalidity' onChange={handleInputChange} type="datetime-local" />
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label className="col-sm-3 form-label">Request Details:  </label>
                                    <div className="col-sm-9">
                                      <input type="text" className="form-control" id="uamdetails" name='uamdetails' onChange={handleInputChange} placeholder="Specify request details" required/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-sm-3 form-label">Reason for request:  </label>
                                    <div className="col-sm-9">
                                      <input type="text" className="form-control" id="request_reason" name='request_reason' onChange={handleInputChange} placeholder="Specify reason for request" required />
                                    </div> 
                                </div>                           
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn buttonStyleGlobal" data-bs-dismiss="modal">Re-Submit Ticket</button>
                                </div>
                              </form>
                        </div>
                    </div>9+7
                </div>
            </div>



            <div className="modal fade" id="activeSRTicketUpdate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Service Request</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action='' onSubmit="" method='post'> 
                            <div className="row mb-1">
                              <label for="" className="col-sm-3 form-label">Ticket No. </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" name='srTicketNo' id=""disabled />
                              </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Requestor: </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id="" disabled />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Email: </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id="" disabled />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Department:</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id="" disabled />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">SR Category:</label>
                                <div className="col-sm-9">
                                    <select className="form-select" name='srCategory' aria-label="Default select">
                                        <option selected disabled>Select category</option>
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
                                        <option value="" selected disabled>Select system</option>
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
                                  <input type="text" className="form-control" id="" name='srActivity' placeholder="Enter activity name" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Activity Details:   </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" name='srDetails' id="" placeholder="Specify activity details" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Activity Schedule Start:</label>
                                <div className="col-sm-9">
                                    <input id="startDate" className="form-control" name='srSched1' type="datetime-local" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Activity Schedule End:</label>
                                <div className="col-sm-9">
                                    <input id="startDate" className="form-control" name='srSched2' type="datetime-local" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Severity:</label>
                                <div className="col-sm-9">
                                    <select className="form-select" name='srSeverity' aria-label="Default select">
                                        <option value="" selected disabled>Select severity of request</option>
                                        <option value="Minor">Minor</option>
                                        <option value="Major">Major</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Purpose:  </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" name='srPurpose' id=""placeholder="Specify purpose of activity" required/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn buttonStyleGlobal" data-bs-dismiss="modal">Submit Ticket</button>
                            </div>        
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default UpdateTicketForm