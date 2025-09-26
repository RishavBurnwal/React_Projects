import React, { useState } from 'react'
import './AdminLogin.css'
import { toast } from 'react-toastify'

function AdminLogin() {
  let [email, setEmail] = useState("")
  let [pwd, setPwd] = useState("")

  function val_login(e) {
    e.preventDefault();
    if (email === "abcd" && pwd === "1234") {
      toast.success("Login Successfull")
    } else {
      toast.error("Login Failed")
    }
  }

  return (
    <div className='AdminLogin'>
      <form onSubmit={val_login}>
        <label>Username : </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder='Enter Email'
          required
        />
        <label>Password : </label>
        <input
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          type="password"
          placeholder='Enter Password'
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default AdminLogin
