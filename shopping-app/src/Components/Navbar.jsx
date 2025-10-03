import React from 'react'
import Profile from './DropDownBootStrap.jsx'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="logo">
            <h1>SHop<span>py</span></h1>
        </div>
        <div className="search">
            <input type="text" placeholder='enter the name of fachion,electronics,accessories,etc...' />
            <button className='btn btn-outline-primary py-1' >Search</button>
            <Link to="/admin-HomePage/add-products">Add Products</Link>
        </div>
        <div className="Profile">
            <Profile/>
        </div>
      
    </div>
  )
}

export default Navbar