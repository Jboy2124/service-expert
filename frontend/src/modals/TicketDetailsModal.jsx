import React from 'react'

const TicketDetailsModal = () => {
  return (
    <div>
        <div class="modal fade" id="ticketDetails" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ticketDetailsLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="ticketDetailsLabel">Ticket Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form > 
                                <div class="row mb-1">
                                  <label for="" class="col-sm-3 form-label">Ticket No. </label>
                                  <div class="col-sm-9">
                                    <input type="text" class="form-control" id=""disabled/>
                                  </div>
                                </div>
                                <div class="row mb-1">
                                    <label for="" class="col-sm-3 form-label">Date and Time: </label>
                                    <div class="col-sm-9">
                                      <input type="text" class="form-control" disabled/>
                                    </div>
                                </div>
                                <div class="row mb-1">
                                    <label for="" class="col-sm-3 form-label">Requestor: </label>
                                    <div class="col-sm-9">
                                      <input type="text" class="form-control" id="" disabled/>
                                    </div>
                                </div>
                                <div class="row mb-1">
                                    <label for="" class="col-sm-3 form-label">Email: </label>
                                    <div class="col-sm-9">
                                      <input type="text" class="form-control" id="" disabled/>
                                    </div>
                                </div>
                                <div class="row mb-1">
                                    <label for="" class="col-sm-3 form-label">Department:</label>
                                    <div class="col-sm-9">
                                      <input type="text" class="form-control" id="" disabled/>
                                    </div>
                                </div>
                                <div class="row mb-1">
                                    <label for="" class="col-sm-3 form-label">Type of Request:</label>
                                    <div class="col-sm-9">
                                      <input type="text" class="form-control" id="" disabled/>
                                    </div>
                                </div>
                                <div class="row mb-1">
                                    <label for="" class="col-sm-3 form-label">Request Category:</label>
                                    <div class="col-sm-9">
                                          <input type="text" class="form-control" id="" disabled/>
                                    </div>
                                </div>
                                <div class="row mb-1">
                                    <label for="" class="col-sm-3 form-label">System:</label>
                                    <div class="col-sm-9">
                                          <input type="text" class="form-control" id="" disabled/>
                                    </div>
                                </div>
                                <div class="row mb-1">
                                    <label for="" class="col-sm-3 form-label">Operation Rights:</label>
                                    <div class="col-sm-9">
                                          <input type="text" class="form-control" id="" disabled/>
                                    </div>
                                </div>
                                <div class="row mb-1">
                                    <label for="" class="col-sm-3 form-label">Validity Period:</label>
                                    <div class="col-sm-9">
                                          <input type="text" class="form-control" id="" disabled/>
                                    </div>
                                </div>
                                <div class="row mb-1">
                                    <label for="" class="col-sm-3 form-label">Request Details:  </label>
                                    <div class="col-sm-9">
                                      <input type="text" class="form-control" id=""  disabled/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="" class="col-sm-3 form-label">Reason for request:  </label>
                                    <div class="col-sm-9">
                                      <input type="text" class="form-control" id=""   disabled />
                                    </div> 
                                </div>   
                                <div class="row mb-3">
                                    <label for="" class="col-sm-3 form-label">Approver: </label>
                                    <div class="col-sm-9">
                                      <input type="text" class="form-control" id=""   disabled />
                                    </div> 
                                </div> 
                                <div class="row mb-3">
                                    <label for="" class="col-sm-3 form-label">Implementor: </label>
                                    <div class="col-sm-9">
                                      <input type="text" class="form-control" id=""   disabled />
                                    </div> 
                                </div> 
                                <div class="row mb-3">
                                    <label for="" class="col-sm-3 form-label">Attached Logs: </label>
                                    <div class="col-sm-9">
                                      <input type="text" class="form-control" id=""   disabled />
                                    </div> 
                                </div> 
                                <div class="row mb-3">
                                    <label for="" class="col-sm-3 form-label">Remarks: </label>
                                    <div class="col-sm-9">
                                      <input type="text" class="form-control" id=""   disabled />
                                    </div> 
                                </div>                           
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn buttonStyleGlobal">Download Ticket Details</button>
                                </div>
                              </form>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default TicketDetailsModal