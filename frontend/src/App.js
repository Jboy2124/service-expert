import React from 'react'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp'
import Home from "./pages/Home";
import Dashboard from './components/Dashboard';


const App = () => {
  return (
      <div className="app">
        <ToastContainer position='top-center' />
          <Router>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/SignUp" element={<SignUp />} />
                  <Route exact path='/Dashboard' element={<Dashboard />} />
              </Routes>
          </Router>
      </div>
  )
}


export default App;