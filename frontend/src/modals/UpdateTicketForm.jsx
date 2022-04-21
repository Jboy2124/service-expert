import React, { useEffect, useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';


const UpdateTicketForm = (props) => {

    const [activity, setActivity] = useState("");
    const [actDetails, setActDetails] = useState("");
    const [actStart, setActStart] = useState("");
    const [actEnd, setActEnd] = useState("");
    const [actSeverity, setActSeverity] = useState("");
    const [actPurpose, setActPurpose] = useState("");
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
    const [getReason, setReason] = useState("");
    const [getDetails, setDetails] = useState("");
    const [getValidity, setValidity] = useState("");
    const [getSR, setSRList] = useState([]);
    
    const [srCategory, setSRCategory] = useState([]);
    const [updateSR, setUpdateSR] = useState({
        typeSRSystem: 0,
        typeSRCategory: 0
    });
    const {typeSRSystem, typeSRCategory} = updateSR;

    useEffect(() => {
        getUAMList();
    }, [props.ticketNo]);

    const getUAMList = async () => {
        const response = await axios.get(`/api/get_uam_to_update/${props.ticketNo}`);
        setUAM(response.data);
        
        const result = await axios.get(`/api/get_sr_to_update/${props.ticketNo}`);
        setSRList(result.data);
  

        //fields that needs to update (UAM)
        const data_reason = response.data.map(items => { return items.request_reason });
        setReason(data_reason);
        
        const data_details = response.data.map(i => { return i.request_details });
        setDetails(data_details);

        const data_validity = response.data.map(item => { return item.uam_validity });
        setValidity(data_validity);



        const actName = result.data.map(i => { return i.activity_name });
        setActivity(actName);

        const act_Details = result.data.map(i => i.activity_details);
        setActDetails(act_Details);

        const date_start = result.data.map(i => i.activity_start);
        setActStart(date_start);

        const date_end = result.data.map(i => i.activity_end);
        setActEnd(date_end);

        const req_severity = result.data.map(i => i.severity);
        setActSeverity(req_severity);

        const req_purpose = result.data.map(i => i.purpose);
        setActPurpose(req_purpose);

    }

    
    useEffect(() => {
        loadMisc();
    }, [props.ticketNo]);

    const loadMisc = async () => {
        const categoryResponse = await axios.get("/api/category");
        setCategory(categoryResponse.data);

        const systemResponse = await axios.get("/api/getsystem");
        setSystem_(systemResponse.data);

        const operationResponse = await axios.get("/api/getoperation");
        setOperation_(operationResponse.data);


        const category_sr = await axios.get("/api/sr_category");
        setSRCategory(category_sr.data);
    }


    let category_ = getUAM.map(items => {return (items.category_name)});
    let category_id_ = getUAM.map(items => {return (items.uam_category)});
    let system_uam = getUAM.map(items => {return (items.system_name)});
    let system_id_ = getUAM.map(items => {return (items.uam_system)});
    let operation_uam = getUAM.map(items => {return (items.operation_name)});
    let operation_id_ = getUAM.map(items => {return (items.uam_operation)});


    let sr_category_id = getSR.map(i => i.category_id);
    let sr_category_name = getSR.map(i => i.category_name);
    let sr_system_id = getSR.map(i => i.sr_system);
    let sr_system_name = getSR.map(i => i.system_name);
    
    
    const handleReSubmitTicket = (event) => {
        event.preventDefault();
        const id = props.ticketNo;
        const handled_by = getUAM.map((items) => {return (items.handled_by)});
        axios.put(`/api/update_uam_ticket`, {
            id, handled_by, uamcategory, uamsystem, uamoperation, getValidity, getDetails, getReason
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
            setValidity("");
            setDetails("");
            setReason("");
            swal("Re-submit", response.data.message, "success");
        });
    }



    const handleReSubmitSRTicket = (e) => {
        e.preventDefault();
        const id = props.ticketNo;
        const handled_by = getSR.map(i => i.handled_by);
        axios.put(`/api/update_sr_ticket`, {
            id, handled_by, typeSRCategory, typeSRSystem, activity, actDetails, actStart, actEnd, actSeverity, actPurpose
        }).then((response) => {
            props.handleReload();
            setUpdateSR({
                typeSRSystem: "",
                typeSRCategory: ""
            });
            swal("Re-Submit", response.data.message, "success");
        });
    }

    //UAM
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUpdateUAM({...updateUAM, [name] : value});
    }

    const handleDataReason = (newValue) => {
        setReason(newValue);
    }

    const handleDataDetails = (newValue) => {
        setDetails(newValue);
    }

    const handleDataValidity = (newValue) => {
        setValidity(newValue);
    }



    //SR
    const handleSRInputChange = (event) => {
        const {name, value} = event.target;
        setUpdateSR({...updateSR, [name] : value});
    }

    const changeActivity = (val) => {
        setActivity(val);
    }

    const changeDetails = (newValue) => {
        setActDetails(newValue);
    }

    const changeStartDate = (newValue) => {
        setActStart(newValue);
    }

    const changeEndDate = (newValue) => {
        setActEnd(newValue);
    }

    const changeRequestSeverity = (newValue) => {
        setActSeverity(newValue);
    }

    const changeRequestPurpose = (newValue) => {
        setActPurpose(newValue);
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
                                        <input id="startDate" className="form-control" name='uamvalidity' onChange={(e) => handleDataValidity(e.target.value)} value={getValidity} type="datetime-local" />
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label className="col-sm-3 form-label">Request Details:  </label>
                                    <div className="col-sm-9">
                                      <input type="text" className="form-control" id="uamdetails" name='uamdetails' onChange={(e) => handleDataDetails(e.target.value)} value={getDetails} placeholder="Specify request details" required/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-sm-3 form-label">Reason for request:  </label>
                                    <div className="col-sm-9">
                                      <input type="text" className="form-control" id="request_reason" name='request_reason' onChange={(e) => handleDataReason(e.target.value)} value={getReason}  placeholder="Specify reason for request" required></input>
                                    </div> 
                                </div>                           
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn buttonStyleGlobal" data-bs-dismiss="modal">Re-Submit Ticket</button>
                                </div>
                              </form>
                        </div>
                    </div>
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
                        <form action='' onSubmit={handleReSubmitSRTicket} method='post'> 
                            <div className="row mb-1">
                              <label for="" className="col-sm-3 form-label">Ticket No. </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" name='srTicketNo' value={getSR.map(i => i.ticket_id)} id=""disabled />
                              </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Requestor: </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id="" value={getSR.map(i => i.requested_by)} disabled />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Email: </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id="" value={getSR.map(i => i.email)} disabled />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Department:</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id="" value={getSR.map(i => i.department)} disabled />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">SR Category:</label>
                                <div className="col-sm-9">
                                    <select className="form-select" name='typeSRCategory' onChange={handleSRInputChange} aria-label="Default select">
                                        <option selected value={sr_category_id}>{sr_category_name}</option>
                                        {
                                            srCategory.map((item) => {
                                                return (
                                                    <option value={item.category_id}>{item.category_name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">System:</label>
                                <div className="col-sm-9">
                                    <select className="form-select" name='typeSRSystem' onChange={handleSRInputChange} aria-label="Default select">
                                        <option selected value={sr_system_id}>{sr_system_name}</option>
                                        {
                                            system_.map((items) => {
                                                return (
                                                    <option value={items.system_id} >{items.system_name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Activity Name:   </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id="" name='typeSRActivity' value={activity} onChange={(e) => changeActivity(e.target.value)}  placeholder="Enter activity name" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Activity Details:   </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" name='typeSRDetails' id="" onChange={(e) => changeDetails(e.target.value)}  value={actDetails} placeholder="Specify activity details" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Activity Schedule Start:</label>
                                <div className="col-sm-9">
                                    <input id="startDate" className="form-control" name='srSched1' onChange={(e) => changeStartDate(e.target.value)} value={actStart} type="datetime-local" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Activity Schedule End:</label>
                                <div className="col-sm-9">
                                    <input id="startDate" className="form-control" name='srSched2' onChange={(e) => changeEndDate(e.target.value)}  value={actEnd} type="datetime-local" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Severity:</label>
                                <div className="col-sm-9">
                                    <select className="form-select" name='srSeverity' onChange={(e) => changeRequestSeverity(e.target.value)}  value={actSeverity} aria-label="Default select">
                                        <option value="" selected disabled>Request Severity</option>
                                        <option value="Minor">Minor</option>
                                        <option value="Major">Major</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Purpose:  </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" name='srPurpose' id="" onChange={(e) => changeRequestPurpose(e.target.value)}  value={actPurpose} placeholder="Specify purpose of activity" required/>
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