import React from 'react'
import Profile from './Profile'
import { useContext } from 'react'
import { ContextApi } from '../App'

function Navbar() {
    let a = useContext(ContextApi)
  return (
    <div>
      <h1>Navbar : {a.num}</h1>
      <Profile/>
    </div>
  )
}

export default Navbar
