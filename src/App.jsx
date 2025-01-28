import './App.css'
import { useState, useEffect } from "react"
import { Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar'
function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main_container">
        <Outlet />
      </main>
    </div>
  )
}
export default App