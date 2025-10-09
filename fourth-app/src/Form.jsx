import React from 'react'
import { useRef } from 'react'

function Form() {
    let name = useRef();
    let email = useRef();
    let phoneNo = useRef();
    let password = useRef();
    let image = useRef();
    let h2 = useref();

    function register(e){
        e.preventDefault();
        console.log(name.current.value);
        console.log(email.current.value);
        console.log(phoneNo.current.value);
        console.log(password.current.value);
        console.log(image.current);
        h2.current.innerText = "Hey User"

        image.current.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"

    }


  return (
    <div className='Form'>
        <form action="">
            <h2 ref={h2}></h2>
            <label htmlFor="">Name : </label>
            <input ref={name} type="text" />

            <label htmlFor="">Name : </label>
            <input ref={name} type="text" />
        
            <label htmlFor="">Password : </label>
            <input ref={password} type="text" />

            <img ref={image}/>
            <button onClick={login}>Login</button>
        </form>
      
    </div>
  )
}

export default Form
