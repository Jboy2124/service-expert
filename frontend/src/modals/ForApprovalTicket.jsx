import React from 'react'


const ForApprovalTicket = () => {
  return (
    <div>
         <div class="modal fade" id="forApprovalTicket"  tabindex="-1" aria-labelledby="forApprovalTicketLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="forApprovalTicketLabel">TN: 001 - Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
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
                            <div class="modal-footer">
                                <button className='btn btn-secondary'><a className="text-white text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#returnTicket">Return Ticket for Revision</a> </button>

                                <button className='btn buttonStyleGlobal '><a className="text-white text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#approveTicket">Approve Ticket</a> </button>
                
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
         <div class="modal fade" id="returnTicket"  tabindex="-1" aria-labelledby="returnTicketLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="returnTicketLabel">TN: 001 - Return Ticket for Revision</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form > 
                            <div class="row mb-1">
                                <label for="" class="col-sm-3 form-label">Date Requested </label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" name='' disabled  />
                                </div>
                            </div>
                            <div class="row mb-1">
                                <label for="" class="col-sm-3 form-label">Reason for Return </label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" name=''   />
                                </div>
                            </div>
                            <div class="row mb-1">
                                <label for="" class="col-sm-3 form-label">Remarks </label>
                                <div class="col-sm-9">
                                    <textarea class="form-control" placeholder="Leave a comment here" ></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn buttonStyleGlobal " >Return Ticket</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="approveTicket"  tabindex="-1" aria-labelledby="approveTicketLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="approveTicketLabel">TN: 001 </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form > 
                            <div class="row mb-1">
                                <label for="" class="col-sm-3 form-label">Date Requested </label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" name='' disabled  />
                                </div>
                            </div>
                            <div class="row mb-1">
                                <label for="" class="col-sm-3 form-label">Remarks </label>
                                <div class="col-sm-9">
                                    <textarea class="form-control" placeholder="Leave a comment here" ></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn buttonStyleGlobal " >Approve Ticket</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="ticketDetailsinActiveTab"  tabindex="-1" aria-labelledby="ticketDetailsinActiveTabLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ticketDetailsinActiveTabLabel">TN: 001 - Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
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
                            <div class="modal-footer">
                                <button className='btn btn-secondary'><a className="text-white text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#isApprovalTicket">For I.S Approval</a> </button>
                                <button className='btn buttonStyleGlobal '><a className="text-white text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#implementTicket">Implement Ticket</a> </button>
                
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="isApprovalTicket"  tabindex="-1" aria-labelledby="isApprovalTicketLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="isApprovalTicketLabel">TN: 001 - For I.S Approval</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form > 
                            <div class="row mb-1">
                                <label for="" class="col-sm-3 form-label">Date Requested </label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" name='' disabled  />
                                </div>
                            </div>
                            <div class="row mb-1">
                                <label for="" class="col-sm-3 form-label">Remarks </label>
                                <div class="col-sm-9">
                                    <textarea class="form-control" placeholder="Leave a comment here" ></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn buttonStyleGlobal " >Transfer Ticket for IS Approval</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="implementTicket"  tabindex="-1" aria-labelledby="implementTicketLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="implementTicketLabel">TN: 001 - For Implementation</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form > 
                            <div class="row mb-1">
                                <label for="" class="col-sm-3 form-label">Date Requested </label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" name='' disabled  />
                                </div>
                            </div>
                            <div class="row mb-1">
                                <label for="" class="col-sm-3 form-label">Remarks </label>
                                <div class="col-sm-9">
                                    <textarea class="form-control" placeholder="Leave a comment here" ></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn buttonStyleGlobal " >Implement Activity</button>
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