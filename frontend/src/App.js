import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Homepage'


const App = () => {
  return (
    // <div>
    //   <Homepage/>
    // </div>
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />}></Route>
      </Routes>
    </Router>
  )
}

export default App