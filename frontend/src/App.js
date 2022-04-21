import React, { createContext } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp'
import Home from "./pages/Home";
import Dashboard from './components/Dashboard';
import AdminDashBoard from './pages/AdminDashBoard';
import UserDashBoard from './pages/UserDashBoard';
import ApproverDashBoard from './pages/ApproverDashBoard';
import axios from 'axios';
axios.defaults.baseURL="http://localhost:3001";
export const CounterContext = createContext();
const myCounter = 0;

const App = () => {
  return (
      <div className="app">
        <CounterContext.Provider value={myCounter} >
        <ToastContainer position='top-center' />
          <Router>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path='/Dashboard' element={<Dashboard />} />
                <Route exact path="/SignUp" element={<SignUp />} />
                <Route exact path="/AdminDashBoard" element={<AdminDashBoard />} />
                <Route exact path="/UserDashBoard" element={<UserDashBoard />} />
                <Route exact path="/ApproverDashBoard" element={<ApproverDashBoard />} />
              </Routes>
          </Router>
        </CounterContext.Provider>
      </div>
  )
}


export default App;