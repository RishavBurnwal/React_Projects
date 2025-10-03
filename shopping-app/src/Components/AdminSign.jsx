import { useState } from 'react'
import { toast } from 'react-toastify';
import '../Styles/AdminSign.css'
import axios from 'axios'

function AdminSign() {
    let [admin,SetAdmin]=useState({
        U_name:"",
        email:"",
        password:"",
        re_password:"",
        phone:"",
        age:"",
        Profile:""
    })
    function handleChange(e){
        let {name,value}=e.target;
        SetAdmin((prevState)=>({
            ...prevState,
            [name]:value
        }))
    }
    function register_admin(e){
        e.preventDefault();
        axios.post("http://localhost:1000/Admins",admin)
        .then((res)=>{
            console.log(res);
            toast.success("Admin registered Success")
        })
        .catch((err)=>{
            console.log(err);
            toast.error("Invalid Information")
        })
    }
    
  return (
    <div className='AdminSign'>
        <div className="thumbnail"></div>
        <form onSubmit={register_admin} action="">

        <label htmlFor="">Name :</label>
        <input type="text " value={admin.U_name} name='U_name' onChange={handleChange} placeholder='Enter Name of Admin' required />

        <label htmlFor="">email: </label>
        <input type="text " value={admin.email} name='email' onChange={handleChange} placeholder='Enter email of Admin' required />

        <label htmlFor=""> Password :</label>
        <input type="password "value={admin.password} name='password' onChange={handleChange}  placeholder='Enter password of Admin' required />

        <label htmlFor="">Re_password</label>
        <input type="password "value={admin.re_password} name='re_password' onChange={handleChange}  placeholder='Enter Name of Admin' required />

        <label htmlFor="">Phone: </label>
        <input type="phone" value={admin.phone} name='phone' onChange={handleChange} placeholder='Enter phone number of Admin' required />
        
        <label htmlFor="">Age :</label>
        <input type="text " value={admin.age} name='age' onChange={handleChange}  placeholder='Enter Age of Admin' required />

        <label htmlFor="">Profile :</label>
        <input type="text " value={admin.Profile} name='Profile' onChange={handleChange}  placeholder='Enter profile' required />

        <button>Register</button>
      </form>
    </div>
  )
}

export default AdminSign;