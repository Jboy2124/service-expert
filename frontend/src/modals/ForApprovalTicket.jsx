import React from 'react'


const ForApprovalTicket = () => {
  return (
    <div>
         <div className="modal fade" id="forApprovalTicket"  tabIndex="-1" aria-labelledby="forApprovalTicketLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="forApprovalTicketLabel">TN: 001 - Details</h5>
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
                                    <th>Requesteor:</th>
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
                                    <th>Request Type:</th>
                                    <td>UAM -New Account Creation</td>
                                </tr>
                                <tr>
                                    <th>System:</th>
                                    <td>Ubuntu</td>
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
                            </thead>
                        </table>
                            <div className="modal-footer">
                                <button className='btn btn-secondary'><a className="text-white text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#returnTicket">Return Ticket for Revision</a> </button>

                                <button className='btn buttonStyleGlobal '><a className="text-white text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#approveTicket">Approve Ticket</a> </button>
                
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
         <div className="modal fade" id="returnTicket"  tabIndex="-1" aria-labelledby="returnTicketLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="returnTicketLabel">TN: 001 - Return Ticket for Revision</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form > 
                            <div className="row mb-1">
                                <label className="col-sm-3 form-label">Date Requested </label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name='' disabled  />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label className="col-sm-3 form-label">Reason for Return </label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name=''   />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label  className="col-sm-3 form-label">Remarks </label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" placeholder="Leave a comment here" ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn buttonStyleGlobal " >Return Ticket</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="approveTicket"  tabIndex="-1" aria-labelledby="approveTicketLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="approveTicketLabel">TN: 001 </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form > 
                            <div className="row mb-1">
                                <label  className="col-sm-3 form-label">Date Requested </label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name='' disabled  />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label className="col-sm-3 form-label">Remarks </label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" placeholder="Leave a comment here" ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn buttonStyleGlobal " >Approve Ticket</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="ticketDetailsinActiveTab"  tabIndex="-1" aria-labelledby="ticketDetailsinActiveTabLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ticketDetailsinActiveTabLabel">TN: 001 - Details</h5>
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
                                    <th>Requesteor:</th>
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
                                    <th>Request Type:</th>
                                    <td>UAM -New Account Creation</td>
                                </tr>
                                <tr>
                                    <th>System:</th>
                                    <td>Ubuntu</td>
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
                            </thead>
                        </table>
                            <div className="modal-footer">
                                <button className='btn btn-secondary'><a className="text-white text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#isApprovalTicket">For I.S Approval</a> </button>
                                <button className='btn buttonStyleGlobal '><a className="text-white text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#implementTicket">Implement Ticket</a> </button>
                
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="isApprovalTicket"  tabIndex="-1" aria-labelledby="isApprovalTicketLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="isApprovalTicketLabel">TN: 001 - For I.S Approval</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form > 
                            <div className="row mb-1">
                                <label  className="col-sm-3 form-label">Date Requested </label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name='' disabled  />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label  className="col-sm-3 form-label">Remarks </label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" placeholder="Leave a comment here" ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn buttonStyleGlobal " >Transfer Ticket for IS Approval</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="implementTicket"  tabIndex="-1" aria-labelledby="implementTicketLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="implementTicketLabel">TN: 001 - For Implementation</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form > 
                            <div className="row mb-1">
                                <label  className="col-sm-3 form-label">Date Requested </label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name='' disabled  />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label  className="col-sm-3 form-label">Remarks </label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" placeholder="Leave a comment here" ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn buttonStyleGlobal " >Implement Activity</button>
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