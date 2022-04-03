import React from 'react'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp'
import Home from "./pages/Home";
import RightDashUser from './components/RightDashUser';
import ActiveTicketDashUser from './components/ActiveTicketDashUser';
import TicketHistoryDashUser from './components/TicketHistoryDashUser';
import Dashboard from './components/Dashboard';


const App = () => {
  return (
      <div className="app">
        <ToastContainer position='top-center' />
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path='/Dashboard' element={<Dashboard />} />
                  <Route path="/SignUp" element={<SignUp />} />
                   <Route path="/RightDashUser" element={<RightDashUser />} />
                  <Route path="/ActiveTicketDashUser" element={<ActiveTicketDashUser />} />
                  <Route path="/TicketHistoryDashUser" element={<TicketHistoryDashUser />} />
              </Routes>
          </Router>
      </div>
  )
}


export default App;