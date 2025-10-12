import React, {useReducer} from 'react'

function reducer(manager,action) {

  switch(action.type){
    case "AddTask":
      return{
        id : "001",
        name : "Rishav",
        task : manager.task + 1
      }
      
  }
}
function App(){

  let [manager,dispatch] = useReducer(reducer,{
    id : "001",
    name : "Johny",
    task : 0
  })

  return (
    <div className='App'>
      <fieldset>
        <legend>Account</legend>
        <button onClick={()=>{dispatch({type : "AddTask"})}}>Add Task</button>
        <button onClick={()=>{dispatch({type : "RemoveTask"})}}>Remove Task</button>
        <button onClick={()=>{dispatch({type : "Reset"})}}>Reset</button>
        <h1>The number of the task completed by {manager.name} is : {manager.task}</h1>
      </fieldset>
    </div>
  )
}

export default App
