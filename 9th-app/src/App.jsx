import React, {useState} from 'react'
import {useMemo} from 'react'

function App() {

  let [count, setCount] = useState(0);
  let [name, setName] = useState("");
  console.log(name);

  
  
  return (
    <div className='App'>
      <h1>App</h1>
      <h1>the value of count is : {PerformExpensiveCalc}</h1>
      <button onClick={() =>{setCount(count+1)}}>Print</button>
      <h1>Count: {count}</h1>

      <form action="">
        <label htmlFor="">Username</label>
        <input type="text" value={name} onChange={(e)  =>{
          setName(e.target.value)
        }} placeholder='Enter the text' />
        <h1>Text : {name}</h1>
      </form>
      
    </div>
  )
}

export default App
