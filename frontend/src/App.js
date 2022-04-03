import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp'
import Home from "./pages/Home";
import AdminDashBoard from './pages/AdminDashBoard';
import UserDashBoard from './pages/UserDashBoard';



const App = () => {
  return (
      <div className="app">
        <ToastContainer position='top-center' />
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
                  <Route path="/UserDashBoard" element={<UserDashBoard />} />
              </Routes>
          </Router>
      </div>
  )
}


export default App;