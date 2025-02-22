import React from 'react'
import LandingPage from './SupplierDashboard/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'

import "./App.css"

const App = () => {
  return (
    <div>
      <div>
       <Routes>
        <Route path={'/'} element={<LandingPage/>}/>
       </Routes>
    </div>
    </div>
  )
}

export default App
