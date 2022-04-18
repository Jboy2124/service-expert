import axios from 'axios';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';


const ForApprovalTicket = (props) => {
    const [addStatus, setStatus] = useState([]);
    const { ticketRemarks, ticketReason } = addStatus;
    const [getForApproval, setGetForApproval] = useState([]);
    let ticketType = getForApproval.map(i => { return ( i.ticket_type) });
    let ticketStatusForButtons =  (getForApproval.map(i => { return ( i.ticket_status) }) == "Implementing Ticket") ? "Ticket Implemented" : "Implement Activity";

    

    useEffect(() => {
        axios.get(`/api/getticketformodal/${props.ticketNo}`).then((response) => {
            setGetForApproval(response.data);
        });
        
    }, [props.ticketNo]);



    const handleEventTicketStatus = (e, t_status) => {
        e.preventDefault();
        const btnType = e.target.btnImplementTicket.value;
        const userid = parseInt(sessionStorage.getItem("sessionid"));
        const ticketNo = props.ticketNo;
        let ticket_status = "";

        switch(btnType){
            case "Implement Activity":
                if(getForApproval.map((items) => { return (items.ticket_status) }) == "IS Approved") {
                    ticket_status = "For Implementation";
                } else {
                    // ticket_status = "For Implementation";
                    if(getForApproval.map((items) => { return (items.ticket_status) }) == "Approved for Implementation") {
                        ticket_status = "Implementing Ticket";
                    } else {
                        ticket_status = t_status;
                    }
                }
                break;
            case "Ticket Implemented":
                ticket_status = "Implemented";
                break;
            case "Approve Ticket":
                if(getForApproval.map((items) => { return (items.ticket_status) }) == "For IS Approval") {
                    ticket_status = "IS Approved";
                } else {
                    if(getForApproval.map((items) => { return (items.ticket_status) }) == "For Implementation") {
                        ticket_status = "Approved for Implementation";
                    } else {
                        ticket_status = t_status;
                    }
                }
                break;
            case "Return Ticket":
                ticket_status = t_status;
                break;
            case "For IS Approval":
                ticket_status = t_status;
                break;
            default:
                ticket_status = t_status;
                break;
        }



        axios.put("/api/updateticketstatus", {
            ticket_status, ticketNo, userid, ticketRemarks, ticketReason, ticketType
        }).then((response) => {
            if(response.data.message.length > 0) {
                props.passEventHandler();
                swal("Updated", response.data.message, "success");
                setStatus({ ticket_status: "", ticketNo: "", userid: "", ticketRemarks: "", ticketReason:"", ticketType:"" });
            } else {
                swal("Error", "Something went wrong!", "error");
            }
        });
    }


 


    const handleInputChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setStatus({...addStatus, [name] : value});
    }


    const handleReturnInputChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setStatus({...addStatus, [name] : value});
    }

    const handleImplementInputChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setStatus({...addStatus, [name] : value});
    }

    const handleForISInputChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setStatus({...addStatus, [name] : value});
    }

  return (
    <div>
         <div className="modal fade" id="forApprovalTicket"  tabIndex="-1" aria-labelledby="forApprovalTicketLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="forApprovalTicketLabel">TN: { getForApproval.map((item) => { return (item.ticket_id) }) } - Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Date Requested:</th>
                                    <td>{getForApproval.map((item) => { return (item.date_created) })}</td>
                                </tr>
                                <tr>
                                    <th>Requesteor:</th>
                                    <td>{getForApproval.map((item) => { return (item.fullname) })}</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>{getForApproval.map((item) => { return (item.email) })}</td>
                                </tr>
                                <tr>
                                    <th>Department:</th>
                                    <td>{getForApproval.map((item) => { return (item.department) })}</td>
                                </tr>
                                <tr>
                                    <th>Request Type:</th>
                                    <td>{getForApproval.map((item) => { return (item.request_type) })}</td>
                                </tr>
                                <tr>
                                    <th>System:</th>
                                    <td>{getForApproval.map((item) => { return (item.system_name) })}</td>
                                </tr>
                                <tr>
                                    <th>Operation Rights:</th>
                                    <td>{getForApproval.map((item) => { return (item.operation_name) })}</td>
                                </tr>
                                <tr>
                                    <th>Validity Period:</th>
                                    <td>{getForApproval.map((item) => { return (item.ticket_validity) })}</td>
                                </tr>
                                <tr>
                                    <th>Request Details:</th>
                                    <td>{getForApproval.map((item) => { return (item.request_details) })}</td>
                                </tr>
                                <tr>
                                    <th>Reason for Request:</th>
                                    <td>{getForApproval.map((item) => { return (item.request_reason) })}</td>
                                </tr>
                            </thead>
                        </table>
                            <div className="modal-footer">
                                <button className='btn btn-secondary'><a className="text-white text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#returnTicket">Return Ticket for Revision</a> </button>
                                <button className='btn buttonStyleGlobal' ><a className="text-white text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#approveTicket">Approve Ticket</a> </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
         <div className="modal fade" id="returnTicket"  tabIndex="-1" aria-labelledby="returnTicketLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="returnTicketLabel">TN: { getForApproval.map((item) => { return (item.ticket_id) }) } - Return Ticket for Revision</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={(e) => handleEventTicketStatus(e, "Returned")} > 
                            <div className="row mb-1">
                                <label className="col-sm-3 form-label">Date Requested </label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name='' value={getForApproval.map((item) => { return (item.date_created) })} disabled  />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label className="col-sm-3 form-label">Reason for Return </label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name='ticketReason' onChange={handleReturnInputChange}/>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label  className="col-sm-3 form-label">Remarks </label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" name='ticketRemarks' onChange={handleReturnInputChange} placeholder="Leave a comment here" ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" name='btnImplementTicket' className="btn buttonStyleGlobal" value="Return Ticket">Return Ticket</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="approveTicket"  tabIndex="-1" aria-labelledby="approveTicketLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="approveTicketLabel">TN: {props.ticketNo} - Approve Ticket </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={(e) => handleEventTicketStatus(e, "Approved")}> 
                            <div className="row mb-1">
                                <label  className="col-sm-3 form-label">Date Requested </label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name='' value={getForApproval.map((item) => { return (item.date_created) })}  disabled  />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label className="col-sm-3 form-label">Remarks </label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" name='ticketRemarks' onChange={handleInputChange} placeholder="Leave a comment here" ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" name='btnImplementTicket' className="btn buttonStyleGlobal" value="Approve Ticket">Approve Ticket</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="ticketDetailsinActiveTab"  tabIndex="-1" aria-labelledby="ticketDetailsinActiveTabLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ticketDetailsinActiveTabLabel">TN: { getForApproval.map((item) => { return (item.ticket_id) }) } - Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Date Requested:</th>
                                    <td>{ getForApproval.map((item) => { return (item.date_created) }) }</td>
                                </tr>
                                <tr>
                                    <th>Requesteor:</th>
                                    <td>{ getForApproval.map((item) => { return (item.fullname) }) }</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>{ getForApproval.map((item) => { return (item.email) }) }</td>
                                </tr>
                                <tr>
                                    <th>Department:</th>
                                    <td>{ getForApproval.map((item) => { return (item.department) }) }</td>
                                </tr>
                                <tr>
                                    <th>Request Type:</th>
                                    <td>{ getForApproval.map((item) => { return (item.request_type) }) }</td>
                                </tr>
                                <tr>
                                    <th>System:</th>
                                    <td>{ getForApproval.map((item) => { return (item.system_name) }) }</td>
                                </tr>
                                <tr>
                                    <th>Operation Rights:</th>
                                    <td>{ getForApproval.map((item) => { return (item.operation_name) }) }</td>
                                </tr>
                                <tr>
                                    <th>Validity Period:</th>
                                    <td>{ getForApproval.map((item) => { return (item.ticket_validity) }) }</td>
                                </tr>
                                <tr>
                                    <th>Request Details:</th>
                                    <td>{ getForApproval.map((item) => { return (item.request_details) }) }</td>
                                </tr>
                                <tr>
                                    <th>Reason for Request:</th>
                                    <td>{ getForApproval.map((item) => { return (item.request_reason) }) }</td>
                                </tr>
                                <tr>
                                    <th>First Approver:</th>
                                    <td></td>
                                </tr>
                            </thead>
                        </table>
                            <div className="modal-footer">
                                <button style={{ visibility: (getForApproval.map((item) => { return (item.ticket_status) })  == "IS Approved" ) ? "hidden" : "visible" }} className='btn btn-secondary'><a className="text-white text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#isApprovalTicket">For I.S Approval</a> </button>
                                <button className='btn buttonStyleGlobal '><a className="text-white text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#implementTicket">{ticketStatusForButtons}</a> </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="isApprovalTicket"  tabIndex="-1" aria-labelledby="isApprovalTicketLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="isApprovalTicketLabel">TN: { getForApproval.map((item) => { return (item.ticket_id) }) } - For I.S Approval</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={(e) => handleEventTicketStatus(e, "For IS Approval")} > 
                            <div className="row mb-1">
                                <label  className="col-sm-3 form-label">Date Requested </label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name='' value={getForApproval.map((item) => { return (item.date_created) })} disabled  />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label  className="col-sm-3 form-label">Remarks </label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" name='ticketRemarks' onChange={handleForISInputChange} placeholder="Leave a comment here" ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn buttonStyleGlobal" name='btnImplementTicket' value="For IS Approval">Transfer Ticket for IS Approval</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="implementTicket"  tabIndex="-1" aria-labelledby="implementTicketLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="implementTicketLabel">TN: { getForApproval.map((item) => { return (item.ticket_id) }) } - For Implementation</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={(e) => handleEventTicketStatus(e, "For Implementation")} > 
                            <div className="row mb-1">
                                <label  className="col-sm-3 form-label">Date Requested </label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name=''  value={ getForApproval.map((item) => { return (item.date_created) }) } disabled  />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label  className="col-sm-3 form-label">Remarks </label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" name='ticketRemarks' onChange={handleImplementInputChange} placeholder="Leave a comment here" ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" name='btnImplementTicket' className="btn buttonStyleGlobal" value={ticketStatusForButtons}>{ticketStatusForButtons}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    </div>
  )
}

export default ForApprovalTicket