import React from 'react'
import Login from './component/Login'
import css from './stylesheets/App.module.css'
import { Link, NavLink, Route, Routes } from "react-router-dom"
import DashBoard from './component/DashBoard'

const App = () => {
  return (
    <div>
       <Routes >
        <Route path='/' element={<Login/>} />

        <Route path='/dashboard' element={<DashBoard />} />
        
      </Routes>
      
    </div>
  )
}

export default App