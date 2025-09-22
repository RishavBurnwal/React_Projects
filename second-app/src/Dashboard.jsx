import './Dashboard.css'

function Dashboard(){
    let cart = [
        {
            id : "101",
            name : "Iphone 17",
            image : "https://tse3.mm.bing.net/th/id/OIP.lk-RwLXQqE7HWCPIonem3AHaEK?pid=Api&P=0&h=180",
            price : "150000.00"
        },
        {
            id : "102",
            name : "car",
            image : "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?cs=srgb&dl=automobile-automotive-car-1335077.jpg&fm=jpg",
            price : "550000.00"
        },
        {
            id : "103",
            name : "bed",
            image : "https://tse2.mm.bing.net/th/id/OIP.7giVYfu8XegrAS92YKxwUgHaHa?pid=Api&P=0&h=180",
            price : "30000.00"
        },
        {
            id : "104",
            name : "T-shirt",
            image : "https://tse1.mm.bing.net/th/id/OIP.DSjZPk9uy01_f2ox4Q5QPgAAAA?pid=Api&P=0&h=180",
            price : "1000.00"
        }
    ]
    return(
        <>
        <h1>Dashboard</h1>
        {cart.map((item)=>{
            return (
                <>
                <div className="items">
                    <b>ITEM_ID : {item.id}</b>
                    <h1>{item.name}</h1>
                    <h2>M.R.P {item.price}</h2>
                    <img style={{height : "300px", width : "200px"}} src={item.image} alt="" />
                    <hr />
                </div>
                </>
            )
        })}
    </>
    )
}

export default Dashboard