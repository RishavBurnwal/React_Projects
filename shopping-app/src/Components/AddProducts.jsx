import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/AddProducts.css';

function AddProducts() {
  let [object, setObjects] = useState({
    Obj_name: "",
    category: "",
    brand: "",
    price: "",
    desc: "",
    image: "",
    stock: "",
    ratings: ""
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setObjects((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  function product_details(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/Objects", object)
      .then((res) => {
        console.log(res);
        toast.success("Product Added Successfully");
        setObjects({
          Obj_name: "",
          category: "",
          brand: "",
          price: "",
          desc: "",
          image: "",
          stock: "",
          ratings: ""
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Product");
      });
  }

  return (
    <div className='add-products'>
      <div className='details'>
        <form onSubmit={product_details}>
          <label>Name:</label>
          <input value={object.Obj_name} name='Obj_name' onChange={handleChange} type="text" placeholder='Enter Product name' required />

          <label>Category:</label>
          <input value={object.category} name='category' onChange={handleChange} type="text" placeholder='Enter Product category' required />

          <label>Brand:</label>
          <input value={object.brand} name='brand' onChange={handleChange} type="text" placeholder='Enter Product Brand' required />

          <label>Price:</label>
          <input value={object.price} name='price' onChange={handleChange} type="number" placeholder='Enter Product Price' required />

          <label>Description:</label>
          <input value={object.desc} name='desc' onChange={handleChange} type="text" placeholder='Enter Product Description' required />

          <label>Image URL:</label>
          <input value={object.image} name='image' onChange={handleChange} type="url" placeholder='Enter Product Image' required />

          <label>Stock:</label>
          <input value={object.stock} name='stock' onChange={handleChange} type="number" placeholder='Enter Product Stock' required />

          <label>Ratings:</label>
          <input value={object.ratings} name='ratings' onChange={handleChange} type="text" placeholder='Enter Product Ratings' required />

          <button type='submit'>Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
