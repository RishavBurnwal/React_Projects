import React from 'react'
import '../Styles/AddProducts.css'

function AddProducts() {

    let[object, setObjects] = useState({
        Obj_name: "",
        category: "",
        brand: "",
        price: "",
        desc: "",
        image: "",
        stock: "",
        rating: ""
    })
    function handleChange(e){
      let {name, value} = e.target;
      setObjects((prevState)=>({
        ...prevState,
        [name] : value
      }))
    }

    function product_details(e){
      e.preventDefault();
        axios.post("http://localhost:1000/Admins",object)
        .then((res)=>{
            console.log(res);
            toast.success("Product Added Successfully")
        })
        .catch((err)=>{
            console.log(err);
            toast.error("Invalid Product")
        })
    }

  return (
    <div className='add-products'>
      <div className='details'>
        <form onSubmit={product_details} action="">
        <label htmlFor="">Name : </label>
        <input onChange={handleChange} type="text" placeholder='Enter Product name' required />

        <label htmlFor="">Category :</label>
        <input type="text" placeholder='Enter Product category' required />

        <label htmlFor="">Brand :</label>
        <input type="text" placeholder='Enter Product Brand' required />

        <label htmlFor="">Price :</label>
        <input type="number" placeholder='Enter Product Price' required />

        <label htmlFor="">Desc :</label>
        <input type="text" placeholder='Enter Product Description' required />

        <label htmlFor="">Image :</label>
        <input type="url" placeholder='Enter Product Image' required />

        <label htmlFor="">Stock :</label>
        <input type="number" placeholder='Enter Product Stock' required />
        
        <label htmlFor="">Ratings</label>
        <input type="text" placeholder='Enter Product ratings' required />

      </form>
      </div>

    </div>
  )
}

export default AddProducts
