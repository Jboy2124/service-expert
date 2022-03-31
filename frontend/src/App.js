import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp'
import Home from "./pages/Home";


const App = () => {
  return (
      <div className="app">
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/SignUp" element={<SignUp />} />
              </Routes>
          </Router>
      </div>
  )
}

export default App;