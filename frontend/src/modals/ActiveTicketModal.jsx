import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ActiveTicketModal = (props) => {
    const [getUAMInfoList, setUAMInfoList] = useState([]);
    const [getSRInfoList, setSRInfoList] = useState([]);

    useEffect(() => {
        axios.get(`/api/requestor_ticket_modal_uam/${props.ticketNo}`).then((response) => {
            setUAMInfoList(response.data);
        });

        axios.get(`/api/requestor_ticket_modal_sr/${props.ticketNo}`).then((response) => {
            setSRInfoList(response.data);
        });
    },[props.ticketNo]);


    
    let id=(props.ticketNo), date_="", fname="", 
    email="", department="", category="", system_="",
    operation_="", validity="", req_details="", req_reason="",
    status="", first_approver="", second_approver="", implementor="",
    activity_name="",activity_details="", activity_start="", activity_end="",
    severity="", purpose="";

    getUAMInfoList.forEach((items) => {
            date_=items.date_created;
            fname=items.fullname;
            email=items.email;
            department=items.department;
            category=items.category_name;
            system_=items.system_name;
            operation_=items.operation_name;
            validity=items.uam_validity;
            req_details=items.request_details;
            req_reason=items.request_reason;
            status=items.ticket_status;
            first_approver=items.first_approver;
            second_approver=items.second_approver;
            implementor=items.implementor;
    });
   

    getSRInfoList.forEach((items) => {
            date_=items.date_created;
            fname=items.fullname;
            email=items.email;
            department=items.department;
            category=items.category_name;
            system_=items.system_name;
            activity_name=items.activity_name;
            activity_details=items.activity_details;
            activity_start=items.activity_start;
            activity_end=items.activity_end;
            severity=items.severity;
            purpose=items.purpose;
            status=items.ticket_status;
            first_approver=items.first_approver;
            second_approver=items.second_approver;
            implementor=items.implementor
    });

  return (
    <div>
        <div className="modal fade" id="activeUAMTicketModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="activeUAMTicketModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="activeUAMTicketModal">Ticket Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Ticket No.</th>
                                    <td>{id}</td>
                                </tr>
                                <tr>
                                    <th>Date Requested:</th>
                                    <td>{date_}</td>
                                </tr>
                                <tr>
                                    <th>Requestor:</th>
                                    <td>{fname}</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <th>Department</th>
                                    <td>{department}</td>
                                </tr>
                                <tr>
                                    <th>UAM-Category</th>
                                    <td>{category}</td>
                                </tr>
                                <tr>
                                    <th>System:</th>
                                    <td>{system_}</td>
                                </tr>
                                <tr>
                                    <th>Operation Rights:</th>
                                    <td>{operation_}</td>
                                </tr>
                                <tr>
                                    <th>Validity Period:</th>
                                    <td>{validity}</td>
                                </tr>
                                <tr>
                                    <th>Request Details:</th>
                                    <td>{req_details}</td>
                                </tr>
                                <tr>
                                    <th>Reason for Request:</th>
                                    <td>{req_reason}</td>
                                </tr>
                                <tr>
                                    <th>Status:</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Approver:</th>
                                    <td>{first_approver}</td>
                                </tr>
                                <tr>
                                    <th>IS Approver:</th>
                                    <td>{second_approver}</td>
                                </tr>
                                <tr>
                                    <th>Implementor:</th>
                                    <td>{implementor}</td>
                                </tr>
                                <tr>
                                    <th>Remarks:</th>
                                    <td></td>
                                </tr>
                            </thead>
                            </table>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                          </div>
                    </div>
                </div>
        </div>
        <div className="modal fade" id="activeSRTicketModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="activeSRTicketModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="activeSRTicketModal">Ticket Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Ticket No.</th>
                                    <td>{id}</td>
                                </tr>
                                <tr>
                                    <th>Date Requested:</th>
                                    <td>{date_}</td>
                                </tr>
                                <tr>
                                    <th>Requestor:</th>
                                    <td>{fname}</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <th>Department</th>
                                    <td>{department}</td>
                                </tr>
                                <tr>
                                    <th>SR-Category</th>
                                    <td>{category}</td>
                                </tr>
                                <tr>
                                    <th>System:</th>
                                    <td>{system_}</td>
                                </tr>
                                <tr>
                                    <th>Activity Name:</th>
                                    <td>{activity_name}</td>
                                </tr>
                                <tr>
                                    <th>Activity Details:</th>
                                    <td>{activity_details}</td>
                                </tr>
                                <tr>
                                    <th>Act. Schedule Start:</th>
                                    <td>{activity_start}</td>
                                </tr>
                                <tr>
                                    <th>Act. Schedule End:</th>
                                    <td>{activity_end}</td>
                                </tr>
                                <tr>
                                    <th>Severity:</th>
                                    <td>{severity}</td>
                                </tr>
                                <tr>
                                    <th>Purpose:</th>
                                    <td>{purpose}</td>
                                </tr>
                                <tr>
                                    <th>Status:</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Approver:</th>
                                    <td>{first_approver}</td>
                                </tr>
                                <tr>
                                    <th>IS Approver:</th>
                                    <td>{second_approver}</td>
                                </tr>
                                <tr>
                                    <th>Implementor:</th>
                                    <td>{implementor}</td>
                                </tr>
                                <tr>
                                    <th>Remarks:</th>
                                    <td></td>
                                </tr>
                            </thead>
                            </table>                                      
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                         </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ActiveTicketModal