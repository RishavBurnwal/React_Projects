// import React from "react"
import Navbar from './Navbar'

function Dashboard({count}){
    console.log(count);

    return(
        <div>
            <hr />
            <h1>the num in Dashboard is : {count}</h1>1
            <Navbar value = {count}/>
        </div>
    )
}

export default Dashboard;