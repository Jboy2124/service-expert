import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp'
import Home from "./pages/Home";
import SideBar from './components/SideBar';


const App = () => {
  return (
      <div className="app">
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/SideBar" element={<SideBar />} />
              </Routes>
          </Router>
      </div>
  )
}

export default App;