import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ActiveTicketModal = (props) => {
    // const [getTicket, setTicket] = useState([]);
    // const {ticket_id, ticket_type, date_created} = getTicket;


    // useEffect(() => {
    //     axios.get(`/api/requestorticket/${props.ticketType}/${props.ticketNo}`).then((response) => {
    //         setTicket(response.data);
    //     });
    // },[props.ticketNo]);

  return (
    <div>
        <div className="modal fade" id="activeUAMTicketModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="activeUAMTicketModalLabel" aria-hidden="true">
                <div className="modal-dialog">
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
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Date Requested:</th>
                                    <td>03-03-2002 09:09:00</td>
                                </tr>
                                <tr>
                                    <th>Requestor:</th>
                                    <td>Angel Aquino</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>angel@company.com</td>
                                </tr>
                                <tr>
                                    <th>Department</th>
                                    <td>Engineering</td>
                                </tr>
                                <tr>
                                    <th>UAM-Category</th>
                                    <td>New user account creation</td>
                                </tr>
                                <tr>
                                    <th>System:</th>
                                    <td>Huawei</td>
                                </tr>
                                <tr>
                                    <th>Operation Rights:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Validity Period:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Request Details:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Reason for Request:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Status:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Approver:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Implementor:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Attached Logs:</th>
                                    <td></td>
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
                <div className="modal-dialog">
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
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Date Requested:</th>
                                    <td>03-03-2002 09:09:00</td>
                                </tr>
                                <tr>
                                    <th>Requestor:</th>
                                    <td>Angel Aquino</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>angel@company.com</td>
                                </tr>
                                <tr>
                                    <th>Department</th>
                                    <td>Engineering</td>
                                </tr>
                                <tr>
                                    <th>SR-Category</th>
                                    <td>OP-Simulation</td>
                                </tr>
                                <tr>
                                    <th>System:</th>
                                    <td>Huawei</td>
                                </tr>
                                <tr>
                                    <th>Activity Name:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Activity Details:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Act. Schedule Start:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Act. Schedule End:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Severity:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Purpose:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Status:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Approver:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Implementor:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Attached Logs:</th>
                                    <td></td>
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