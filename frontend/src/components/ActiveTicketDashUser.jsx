import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import ActiveTicketModal from '../modals/ActiveTicketModal'
import UpdateTicketForm from '../modals/UpdateTicketForm';
import ApprovalToCloseModal from '../modals/ApprovalToCloseModal';

const ActiveTicketDashUser = () => {
    let txtSearch = useRef(null);
    const [getActiveUAM, setGetActiveUAM] = useState([]);
    const [getActiveSR, setGetActiveSR] = useState([]);
    const [passID, setPassID] = useState("");
    const [tabType, setTabType] = useState("UAM");
    const [getText, setTextSearch] = useState("");
    let array = [];

    useEffect(() => {
        handleReloadList();
    }, []);

    const handleShowModal =(e, id) => {
        e.preventDefault();
        setPassID(id);
    }

    const handleReloadList = async () => {
        let id = parseInt(sessionStorage.getItem("sessionid"));

        const response = await axios.get(`/api/getactiveuamtickets/${id}`);
        setGetActiveUAM(response.data);

        const result = await axios.get(`/api/getactivesrtickets/${id}`);
        setGetActiveSR(result.data);

    }

    const getTabPane = (e, type) => {
        e.preventDefault();
        setTabType(type);
    }

    if(tabType == "UAM") {
        array = getActiveUAM;
    } else {
        array = getActiveSR;
    }


    const handleSearch = (e) => {
        e.preventDefault();
        setTextSearch(txtSearch.current.value);
    }
  return (
    <div >
        <div id="rightDashboard" className="col-lg-12">
                <div className="navbar mt-3 mb-3">
                      <div className="container-fluid">
                          <span className="navbar-brand">Active Tickets</span>
                          <form className="d-flex">
                              <input className="form-control me-2" ref={txtSearch} onChange={handleSearch} type="search" placeholder="Search Ticket..." aria-label="Search"/>
                              <button className="btn buttonStyleGlobal" type="submit">Search</button>
                          </form>
                      </div>  
                </div>
                <div className="card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="UAM-tab" onClick={(e) => getTabPane(e, "UAM")} data-bs-toggle="tab" href="#UAM" role="tab" aria-controls="UAM" aria-selected="true" >User Access Management</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="SR-tab" onClick={(e) => getTabPane(e, "SR")} data-bs-toggle="tab" href="#SR" role="tab" aria-controls="SR" aria-selected="false">Service Request</a>
                        </li>
                        
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="UAM" role="tabpanel" aria-labelledby="UAM-tab">
                                <div className="row ">
                                    <div className="col-sm-12">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th scope="col">Ticket No.</th>
                                                <th scope="col">Date Requested</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                               array.filter((items) => {
                                                   if(txtSearch === "") {
                                                       return items
                                                   } else if(items.ticket_id.toLowerCase().includes(getText.toLowerCase()) || 
                                                             items.category_name.toLowerCase().includes(getText.toLowerCase()) ||
                                                             items.ticket_status.toLowerCase().includes(getText.toLowerCase())) {
                                                        return items
                                                   }
                                               }).map((item) => {
                                                    return(
                                                        <tr>
                                                            <th ><a href="#" data-bs-toggle="modal" onClick={(e) => handleShowModal(e, (item.ticket_id))}  data-bs-target={(item.ticket_status != 'Returned') ?  ((item.ticket_status == 'For Post Checking') ? '#UAMTicketComplete' : '#activeUAMTicketModal') : '#activeUAMTicketUpdate'}>{item.ticket_id}</a></th>
                                                            <td>{item.date_created}</td>
                                                            <td>{item.category_name}</td>
                                                            <td>{item.ticket_status}</td>
                                                        </tr>
                                                    )
                                               })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="SR" role="tabpanel" aria-labelledby="SR-tab">
                                <div className="row  ">
                                    <div className="col-sm-12">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th scope="col">Ticket No.</th>
                                                <th scope="col">Date Requested</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    array.filter((items) => {
                                                        if(txtSearch === "") {
                                                            return items
                                                        } else if(items.ticket_id.toLowerCase().includes(getText.toLowerCase()) || 
                                                                  items.category_name.toLowerCase().includes(getText.toLowerCase()) ||
                                                                  items.ticket_status.toLowerCase().includes(getText.toLowerCase())) {
                                                             return items
                                                        }
                                                    }).map((item) => {
                                                         return(
                                                             <tr>
                                                                 <th ><a href="#" data-bs-toggle="modal" onClick={(e) => handleShowModal(e, (item.ticket_id))} data-bs-target={(item.ticket_status != 'Returned') ?  ((item.ticket_status == 'For Post Checking') ? '#SRTicketComplete' : '#activeSRTicketModal') : '#activeSRTicketUpdate'}>{item.ticket_id}</a></th>
                                                                 <td>{item.date_created}</td>
                                                                 <td>{item.category_name}</td>
                                                                 <td>{item.ticket_status}</td>
                                                             </tr>
                                                         )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>     
                        </div>
                    </div>
                </div>
        
        </div> 
        <ActiveTicketModal ticketNo={passID} />
        <ApprovalToCloseModal ticketNo={passID} handleReloadList={handleReloadList} />
        <UpdateTicketForm ticketNo={passID} handleReload={handleReloadList} />
    </div>
  )
}

export default ActiveTicketDashUser