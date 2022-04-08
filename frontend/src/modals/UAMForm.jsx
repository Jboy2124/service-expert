import React, { useState, useEffect } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const initialValue = {
    uamcategory:"", 
    uamsystem:"", 
    uamoperation:"", 
    uamvalidity:"", 
    uamdetails:"", 
    uamreason:""
}

const UAMForm = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState([{}]);
    const [getTicketNo, setGetTicketNo] = useState([{}]);
    const [getSRTicketNo, setGetSRTicketNo] = useState([{}]);
    const [getCategory, setGetCategory] = useState([{}]);
    const [getSystem, setGetSystem] = useState([{}]);
    const [getSRCategory, setGetSRCategory] = useState([{}]);
    const [getOperation, setGetOperation] = useState([{}]);
    const [addUAM, setAddUAM] = useState(initialValue);
    const [addSR, setAddSR] = useState({
        srCategory: "", srSystem:"", srActivity:"", 
        srDetails:"", srSched1:"", srSched2: "", srSeverity: "", srPurpose: ""
    });
    const { srCategory, srSystem, srActivity, srDetails, srSched1, srSched2, srSeverity, srPurpose} = addSR;
    const {uamcategory, uamsystem, uamoperation, uamvalidity, uamdetails, uamreason } = addUAM;
    let newTicket ="";
    let newSRTicket ="";

  

    useEffect(() => {
        const id = parseInt(sessionStorage.getItem("sessionid"));
        axios.get(`http://localhost:3001/api/user_profile/${id}`,).then((response) => {
            setToken(response.data);
        });
    },[]);
    

    useEffect(() => {
        let type = "UAM";
        axios.get(`http://localhost:3001/api/ticketno/${type}`).then((response) => {
            setGetTicketNo(response.data);
        });
    }, []);

    useEffect(() => {
        let type = "SR";
        axios.get(`http://localhost:3001/api/srticketno/${type}`).then((response) => {
            setGetSRTicketNo(response.data);
        });
    }, []);



    useEffect(() => {
        axios.get("http://localhost:3001/api/category").then((response) => {
            setGetCategory(response.data);
        });

        axios.get("http://localhost:3001/api/getsystem").then((response) => {
            setGetSystem(response.data);
        });

        axios.get("http://localhost:3001/api/getoperation").then((response) => {
            setGetOperation(response.data);
        });

        axios.get("http://localhost:3001/api/getsrcategory").then((response) => {
            setGetSRCategory(response.data);
        });
    },[]);


    let sr = getSRTicketNo.map(i => { return (i.ticket_id) });
    console.log(sr);
    if(sr != 0) {
        const lastTicketSuffix = parseInt(sr.toString().slice(-3));
        newSRTicket = "SR-"+ (lastTicketSuffix + 1).toString().padStart(3, '0');
    } else {
        newSRTicket = "SR-001";
    }

    const handleAddSRTicket = (e) => {
        e.preventDefault();
        let srTicketNo = e.target.srTicketNo.value;
        let requested = parseInt(sessionStorage.getItem("sessionid"));
        axios.post("http://localhost:3001/api/insertsr", {
            srTicketNo, srCategory, srSystem, srActivity, 
            srDetails, srSched1, srSched2, srSeverity, srPurpose, requested
        }).then((response) => {
            setAddSR({
                srCategory: "", srSystem:"", srActivity:"", 
                srDetails:"", srSched1:"", srSched2: "", srSeverity: "", srPurpose: ""
            });
            swal("Success", response.data.message, "success");
        }); 
    }


    let getNo = getTicketNo.map((items) => {return(items.ticket_id)});
    if(getNo != 0) {
        const lastTicketSuffix = parseInt(getNo.toString().slice(-3));
        newTicket = "UAM-"+ (lastTicketSuffix + 1).toString().padStart(3, '0');
    } else {
        newTicket = "UAM-001";
    }

    const handleAddUAMticket = (event) => {
        event.preventDefault();
        let uamTicket = event.target.uamTicket.value;
        let reqby = parseInt(sessionStorage.getItem("sessionid"));
        axios.post("http://localhost:3001/api/insertuam", {
            uamTicket, uamcategory, uamsystem, uamoperation, uamvalidity, uamdetails, uamreason, reqby
        }).then(() => {
           setAddUAM({
                uamTicket:"", uamcategory:"", uamsystem:"", 
                uamoperation:"", uamvalidity:"", uamdetails:"", 
                uamreason:"", reqby: ""
           });
        });
        // toast.success("Ticket successfully added");
        swal("Success", "Ticket successfully added", "success");
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setAddUAM({...addUAM, [name] : value});
    }

    const handleInputSRChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setAddSR({...addSR, [name] : value});
    }


    return (
    <div >  
            <div className="modal fade" id="staticBackdropUAM" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">User Access Management</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action='' onSubmit={handleAddUAMticket} > 
                                <div className="row mb-1">
                                  <label for="" className="col-sm-3 form-label">Ticket No. </label>
                                  <div className="col-sm-9">
                                    <input type="text" className="form-control" name='uamTicket' value={newTicket} id=""disabled/>
                                  </div>
                                </div>
                                <div className="row mb-1">
                                    <label for="" className="col-sm-3 form-label">Requestor: </label>
                                    <div className="col-sm-9">
                                      <input type="text" className="form-control" id="" name="uamName" value={token.map(i => i.fullname)} disabled/>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label for="" className="col-sm-3 form-label">Email: </label>
                                    <div className="col-sm-9">
                                      <input type="text" className="form-control" id="" name='uamEmail' value={token.map(i => i.email)} disabled/>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label for="" className="col-sm-3 form-label">Department:</label>
                                    <div className="col-sm-9">
                                      <input type="text" className="form-control" id="" name='uamdepartment' value={token.map(i => i.department)} disabled/>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label for="" className="col-sm-3 form-label">UAM Category:</label>
                                    <div className="col-sm-9">
                                        <select className="form-select" name='uamcategory' onChange={handleInputChange} aria-label="Default select">
                                            <option selected disabled>Select category</option>
                                            {
                                                getCategory.map((items) => {
                                                    return(
                                                        <option value={items.category_id}>{items.category_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label for="" className="col-sm-3 form-label">System:</label>
                                    <div className="col-sm-9">
                                        <select className="form-select" name='uamsystem' onChange={handleInputChange} aria-label="Default select">
                                            <option selected disabled>Select system</option>
                                            {
                                                getSystem.map((items) => {
                                                    return(
                                                        <option value={items.system_id} >{items.system_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label for="" className="col-sm-3 form-label">Operation Rights:</label>
                                    <div className="col-sm-9">
                                        <select className="form-select" name='uamoperation' onChange={handleInputChange} aria-label="Default select">
                                            <option selected disabled>Select rights</option>
                                            {
                                                getOperation.map((items) => {
                                                    return (
                                                        <option value={items.operation_id}>{items.operation_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label for="" className="col-sm-3 form-label">Validity Period:</label>
                                    <div className="col-sm-9">
                                        <input id="startDate" className="form-control" name='uamvalidity' onChange={handleInputChange} type="datetime-local" />
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label for="" className="col-sm-3 form-label">Request Details:  </label>
                                    <div className="col-sm-9">
                                      <input type="text" className="form-control" id="" name='uamdetails' onChange={handleInputChange} placeholder="Specify request details"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="" className="col-sm-3 form-label">Reason for request:  </label>
                                    <div className="col-sm-9">
                                      <input type="text" className="form-control" id="" name='uamreason' onChange={handleInputChange}  placeholder="Specify reason for request" />
                                    </div> 
                                </div>                           
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn buttonStyleGlobal"  >Submit Ticket</button>
                                </div>
                              </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className="modal fade" id="staticBackdropSR" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Service Request</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action='' onSubmit={handleAddSRTicket} method='post'> 
                            <div className="row mb-1">
                              <label for="" className="col-sm-3 form-label">Ticket No. </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" name='srTicketNo' value={newSRTicket} id=""disabled />
                              </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Requestor: </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id="" value={token.map(i => i.fullname)} disabled />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Email: </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id="" value={token.map(i => i.email)} disabled />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Department:</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id="" value={token.map(i => i.department)} disabled />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">SR Category:</label>
                                <div className="col-sm-9">
                                    <select className="form-select" name='srCategory' onChange={handleInputSRChange} aria-label="Default select">
                                        <option selected disabled>Select category</option>
                                        {
                                            getSRCategory.map((item) => {
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
                                    <select className="form-select" name='srSystem' onChange={handleInputSRChange} aria-label="Default select">
                                        <option value="" selected disabled>Select system</option>
                                        {
                                            getSystem.map((items) => {
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
                                  <input type="text" className="form-control" id="" name='srActivity' onChange={handleInputSRChange} placeholder="Enter activity name" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Activity Details:   </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" name='srDetails' id="" onChange={handleInputSRChange} placeholder="Specify activity details" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Activity Schedule Start:</label>
                                <div className="col-sm-9">
                                    <input id="startDate" className="form-control" name='srSched1' onChange={handleInputSRChange} type="datetime-local" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Activity Schedule End:</label>
                                <div className="col-sm-9">
                                    <input id="startDate" className="form-control" name='srSched2' onChange={handleInputSRChange} type="datetime-local" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Severity:</label>
                                <div className="col-sm-9">
                                    <select className="form-select" name='srSeverity' onChange={handleInputSRChange} aria-label="Default select">
                                        <option value="" selected disabled>Select severity of request</option>
                                        <option value="Minor">Minor</option>
                                        <option value="Major">Major</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Purpose:  </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" name='srPurpose' onChange={handleInputSRChange} id=""placeholder="Specify purpose of activity"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn buttonStyleGlobal">Submit Ticket</button>
                            </div>        
                        </form>
                    </div>
                </div>
            </div>
            </div>  
    </div>
  )
};

export default UAMForm