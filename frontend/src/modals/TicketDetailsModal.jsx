import React from 'react'
import { ExportToExcel } from '../admin_components/ExportToExcel';
import axios from 'axios';
import { useState, useEffect } from 'react';


const TicketDetailsModal = () => {

    const [data, setData] = useState([])
    const fileName = "closed_ticket_list"; // here enter filename for your excel file
  
    useEffect(() => {
      const fetchData = () =>{
       axios.get('http://localhost:3001/api/download').then(r => setData(r.data) )
      }
      fetchData()
    }, [])
   
  return (
    <div>
        <div className="modal fade" id="ticketDetails" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="ticketDetailsLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ticketDetailsLabel">Ticket Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Date Requested:</th>
                                    <td>03-03-2020 08:08:00pm</td>
                                </tr>
                                <tr>
                                    <th>Requestor:</th>
                                    <td>Elizabeth Santos</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>mail@company.com</td>
                                </tr>
                                <tr>
                                    <th>Department:</th>
                                    <td>Engineering</td>
                                </tr>
                                <tr>
                                    <th>Type of Request:</th>
                                    <td>User Access Management</td>
                                </tr>
                                <tr>
                                    <th>Request Category:</th>
                                    <td>New User Account Creation</td>
                                </tr>
                                <tr>
                                    <th>System:</th>
                                    <td></td>
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
                                    <th>First Approver:</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Second Approver:</th>
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
                                <ExportToExcel apiData={data} fileName={fileName} />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default TicketDetailsModal