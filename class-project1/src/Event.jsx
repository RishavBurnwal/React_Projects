function Events(){
    function print(){
        console.log("Hello Events")
    }
    function add(a,b){
        console.log(`this is parameter function and addition of a,b is ${a+b}`);
    }
    return(
        <>
        <div>
            <h1>Events</h1>
            <button onClick={print}>Print</button>
            <button onClick= {() =>{add(20,20)}}>Add A and B</button>
        </div>
        </>
    )
}
export default Events;