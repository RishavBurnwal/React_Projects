import React from 'react'
import { useContext } from 'react'
import { ContextApi } from '../App'

function Profile() {
    let state = useContext(ContextApi)
    console.log(state.count);
    
  return (
    <div>
      <h1>Profile: {state.count}</h1>

      
    </div>
  )
}

export default Profile
