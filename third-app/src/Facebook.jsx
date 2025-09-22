// import React from 'react'
import { useEffect, useState } from 'react'
import './Facebook.css';


function Facebook() {
    let [Uname, setUname] = useState("");
    let [pwd, setPwd] = useState("");
    let [Admin, setAdmin] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let res = await fetch("http://localhost:1000/Admin");

            let data = await res.json();
            setAdmin(data); 
        }
        fetchData()
    }, [])
    console.log(Admin);
    let isPresent = Admin.filter((user) => {
        return (
            user.name === Uname && user.password === pwd
        )
    })
    console.log(Uname);
    function val_Facebook(){
        if(isPresent.length >0)
        {
            alert("Login Succesfull");

        }
        else{
            alert("Login Failed ")
        }
    }
    return (
        <div className='facebook'>
            <div className="thumbnail">
                <h1>Facebook</h1>
            </div>
            <form action="">
                <p>Log  In to facebook</p>
                <input value={Uname} onChange={(e)=>{setUname(e.target.value)}} type="text"  placeholder="Enter the Email"/>
                {/*  here place the eye image  */}
                <input value={pwd} onChange={(e)=>{setPwd(e.target.value)}} type="password" placeholder='Enter Password ' />
                <button type="button" onClick={val_Facebook}>Login</button>
                <a href="">Forget password</a>
            </form>
        </div>
    )
}

export default Facebook