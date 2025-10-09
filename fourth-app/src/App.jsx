import { useRef } from 'react'
import './App.css'

function App() {
  let name = useRef();
  let password = useRef();
  let image = useRef();
  let h1 = useRef();

  function login(e){
    e.preventDefault();
    console.log(name.current.value);
    console.log(password.current.value);
    console.log(image.current);
    console.log(h1.current);
    h1.current.innerText = "Welcome to Html";
    h1.current.style.color = "red"

    image.current.src = "https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/homepage/26my-azure/GT%20Azure%20Dynamic%20Desktop.jpg/_jcr_content/renditions/original.image_file.1286.643.file/GT%20Azure%20Dynamic%20Desktop.jpg"
    if(name.current.value === "abcd" && password === "1234"){
      alert("Login Successful")
    }
    else{
      alert("Login Failed")
    }
  }

  return (
    <div className='App'>
      <form action="">
        <h1 ref={h1}></h1>
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

export default App
