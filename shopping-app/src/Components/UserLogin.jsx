import React, { useState } from 'react';
import '../Styles/UserLogin.css';
import { toast } from 'react-toastify';

function UserLogin() {
  let [email, setEmail] = useState("")
  let [pwd, setPwd] = useState("")

  function val_login(e) {
    e.preventDefault();
    if (email === "xyz" && pwd === "321") {
      toast.success("Login Successfull")
    } else {
      toast.error("Login Failed")
    }
  }

  return (
    <div className='UserLogin'>
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

export default UserLogin
