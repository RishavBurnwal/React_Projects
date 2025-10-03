import  { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import {Link, useNavigate} from 'react-router-dom'
import '../Styles/AdminLogin.css'
import axios from 'axios';

function AdminLogin() {
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [admins,setAdmin]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:1000/Admins")
        .then((res)=>{
            console.log(res.data);
            setAdmin(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    let isPresent=admins.filter((admin)=>{
        return admin.email===email &&admin.password===password;
    })
    let navigate=useNavigate();
    function login_admin(e){
        e.preventDefault();
        if(isPresent.length>0){
            toast.success("Login Successfull")
            navigate("/admin-homepage")
        }
        else{
            toast.error("Invalid User")
        }
    }
   
    
  return (
    <div className='AdminLogin'>
        <form  onSubmit={login_admin} action="">
        <label htmlFor="">Username</label>
        <input  value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Enter Email' required />
        <label htmlFor="">Password</label>
        <input  value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Enter Password' required />
        <button>Login</button>
        <Link to="/admin-sign">New Admin ? register</Link>
        </form>
      
    </div>
  )
}

export default AdminLogin