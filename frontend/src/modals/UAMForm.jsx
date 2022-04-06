import React, { useState, useEffect } from 'react'
import axios from 'axios';
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

const UAMForm = (props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState([{}]);
    const [getTicketNo, setGetTicketNo] = useState([{}]);
    const [getCategory, setGetCategory] = useState([{}]);
    const [getSystem, setGetSystem] = useState([{}]);
    const [getOperation, setGetOperation] = useState([{}]);
    const [addUAM, setAddUAM] = useState(initialValue);
    const {uamcategory, uamsystem, uamoperation, uamvalidity, uamdetails, uamreason } = addUAM;
    // let propsType = props.type;
    let newTicket ="";



    useEffect(() => {
        const id = parseInt(sessionStorage.getItem("sessionid"));
        axios.get(`http://localhost:3001/api/user_profile/${id}`,).then((response) => {
            setToken(response.data);
        });
    },[]);
    

    useEffect(() => {
        
        const type = props.type;
        console.log([props.type]);
        axios.get(`http://localhost:3001/api/ticketno/${type}`).then((response) => {
            setGetTicketNo(response.data);
        });
        // setTimeout(() => {
        //     navigate("/ActiveTicketDashUser");
        // }, 500);
    }, []);



    useEffect(() => {
        axios.get("http://localhost:3001/api/category").then((response) => {
            setGetCategory(response.data);
        });
    },[]);


    useEffect(() => {
        axios.get("http://localhost:3001/api/getsystem").then((response) => {
            setGetSystem(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/api/getoperation").then((response) => {
            setGetOperation(response.data);
        });
    }, []);


    let getNo = getTicketNo.map((items) => {
        return(
            items.ticket_id
        )
    });


    
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
        toast.success("Ticket successfully added");
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setAddUAM({...addUAM, [name] : value});
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
                        <form action='' method='post'> 
                            <div className="row mb-1">
                              <label for="" className="col-sm-3 form-label">Ticket No. </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" value="" id=""disabled />
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
                                    <select className="form-select" aria-label="Default select">
                                        <option selected="">Select category</option>
                                        <option value="">OP Simulation</option>
                                        <option value="">Troubleshooting</option>
                                        <option value="">Logs Collection</option>
                                        <option value="">Healthcheck</option>
                                        <option value="">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">System:</label>
                                <div className="col-sm-9">
                                    <select className="form-select" aria-label="Default select">
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
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Activity Name:   </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id="" placeholder="Enter activity name" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Activity Details:   </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id="" placeholder="Specify activity details" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Activity Schedule Start:</label>
                                <div className="col-sm-9">
                                    <input id="startDate" className="form-control" type="datetime-local" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Activity Schedule End:</label>
                                <div className="col-sm-9">
                                    <input id="startDate" className="form-control" type="datetime-local" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Severity:</label>
                                <div className="col-sm-9">
                                    <select className="form-select" aria-label="Default select">
                                        <option value="" selected disabled>Select severity of request</option>
                                        <option value="">Minor</option>
                                        <option value="">Major</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label for="" className="col-sm-3 form-label">Purpose:  </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id=""placeholder="Specify purpose of activity"/>
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