import { useState } from "react";
function Counter(){
    //let [Dynamic_state, setState] = useState(initial_Value)
    let [count, setCount] = useState(0);
    function incr_emp(){
        setCount(++count);
        console.log("The number of current emp : ", count);     
    }
     function decr_emp(){
        setCount(--count);
        console.log("The number of current emp : ", count);     
    }
    return(
        <div>
            <h1>Counter</h1>
            <h1>The number of employees is : {count}</h1>
            <button onClick = {incr_emp}>Add Employee</button>
            <button onClick = {decr_emp}>Remove Employee</button>
        </div>
    )
}
export default Counter;