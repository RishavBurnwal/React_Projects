import { useState } from 'react'
import './Components/HomePage'
import './App.css'
import { createContext } from 'react';
import HomePage from './Components/HomePage';

export let ContextApi = createContext();


function App() {
  let [count, setCount] = useState(0);
  let [num, setnum] = useState(10);

  return (
    <ContextApi.Provider value={{count,num}}>
      <div className='buttons'>
        <h1>App: {count}</h1>
        <button onClick={() =>{setCount(++count)}}>Increment</button>
        <button onClick={() =>{setCount(--count)}}>Decrement</button>
        <button onClick={() =>{setCount(0)}}>Reset</button>
        <hr />
        <button onClick={() =>{setnum(++num)}}>Increment</button>
        <button onClick={() =>{setnum(--num)}}>Decrement</button>
        <button onClick={() =>{setnum(0)}}>Reset</button>

        <HomePage/>

      </div>
      
    </ContextApi.Provider>
  )
}

export default App
