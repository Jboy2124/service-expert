import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp'
import Home from "./pages/Home";
import RightDashUser from './components/RightDashUser';
import ActiveTicketDashUser from './components/ActiveTicketDashUser';
import TicketHistoryDashUser from './components/TicketHistoryDashUser';


const App = () => {
  return (
      <div className="app">
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
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