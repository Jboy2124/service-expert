import React from 'react'
import { ExportToExcel } from '../admin_components/ExportToExcel';
import axios from 'axios';
import { useState, useEffect } from 'react';


const TicketDetailsModal = (props) => {
    const [getInfo, setInfo] = useState([]);
    const [data, setData] = useState([])
    const fileName = "closed_ticket_list"; // here enter filename for your excel file
    
    useEffect(() => {
        getDataList();
        fetchData();
    },[props.ticketNo]);


    const getDataList = async (e) => {
        e.preventDefault();
        const response = await axios.get(`/api/ticket_details_modal/${props.ticketNo}`);
        setInfo(response.data);
    } 


    // useEffect(() => {
      const fetchData = () =>{
       axios.get(`/api/ticket_details_modal/${props.ticketNo}`).then(r => setData(r.data))
      }
      
    // }, [])
   
  return (
    <div>
        <div className="modal fade" id="ticketDetails" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="ticketDetailsLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ticketDetailsLabel">Ticket No.: { getInfo.map((item) => { return ( item.ticket_id ) }) }</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Date Requested:</th>
                                    <td>{getInfo.map((items)=>{ return( items.date_created ) })}</td>
                                </tr>
                                <tr>
                                    <th>Requestor:</th>
                                    <td>{getInfo.map((items)=>{ return( items.fullname ) })}</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>{getInfo.map((items)=>{ return( items.email ) })}</td>
                                </tr>
                                <tr>
                                    <th>Department:</th>
                                    <td>{getInfo.map((items)=>{ return( items.department ) })}</td>
                                </tr>
                                <tr>
                                    <th>Type of Request:</th>
                                    <td>{getInfo.map((items)=>{ return( items.ticket_type ) })}</td>
                                </tr>
                                <tr>
                                    <th>Request Category:</th>
                                    <td>{getInfo.map((items)=>{ return( items.category_name ) })}</td>
                                </tr>
                                <tr>
                                    <th>System:</th>
                                    <td>{getInfo.map((items)=>{ return( items.system_name ) })}</td>
                                </tr>
                                <tr>
                                    <th>Operation Rights:</th>
                                    <td>{getInfo.map((items)=>{ return( items.operation_name ) })}</td>
                                </tr>
                                <tr>
                                    <th>Validity Period:</th>
                                    <td>{getInfo.map((items)=>{ return( items.ticket_validity ) })}</td>
                                </tr>
                                <tr>
                                    <th>Request Details:</th>
                                    <td>{getInfo.map((items)=>{ return( items.request_details ) })}</td>
                                </tr>
                                <tr>
                                    <th>Reason for Request:</th>
                                    <td>{getInfo.map((items)=>{ return( items.request_reason ) })}</td>
                                </tr>
                                <tr>
                                    <th>First Approver:</th>
                                    <td>{getInfo.map((items)=>{ return( items.FirstApprover ) })}</td>
                                </tr>
                                <tr>
                                    <th>Second Approver:</th>
                                    <td>{getInfo.map((items)=>{ return( items.SecondApprover ) })}</td>
                                </tr>
                                <tr>
                                    <th>Implementor:</th>
                                    <td>{getInfo.map((items)=>{ return( items.Implementor ) })}</td>
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