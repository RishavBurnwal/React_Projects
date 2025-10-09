import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function UpdateProduct() {

    const [product, setProduct] = useState({
        pr_name: "",
        pr_category: "",
        pr_brand: "",
        pr_price: "",
        pr_desc: "",
        pr_imageurl: "",
        pr_stock: "",
        pr_rating: "",
      });
    
      // 🔹 Handle Input Changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      let param = useParams()
      console.log(param.id)

      useEffect(()=>{
        axios.get(`http://localhost:1000/Products/${param.id}`)
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
      },[])

      function update_item(e){
        e.preventDefault();
        axios.put(`http://localhost:1000/Products/${param.id}`, products)
        .then((res) =>{
            toast.success("Data Updated Successfully")
        })
        .catch((err) =>{
            toast.error("Invalid Updation")
        })
      }

      let pr_category = [
    "Electronics",
    "Fashion",
    "Home Appliances",
    "Beauty & Personal Care",
    "Books",
    "Sports & Fitness",
    "Groceries",
    "Toys & Games"
  ]

  // creating dropdown meunu for  productbrand 
  let pr_brand =[
  "Samsung",        // Electronics
  "Nike",           // Fashion
  "Whirlpool",      // Home Appliances
  "Maybelline",     // Beauty & Personal Care
  "Penguin",        // Books
  "Nike",           // Sports & Fitness
  "Haldiram's",     // Groceries
  "Lego"            // Toys & Games
]

  return (
    <div className='UpdateProduct'>
      <form onSubmit={update_item}>
        <label>Product Name:</label>
        <input
          type="text"
          name="pr_name"
          value={product.pr_name}
          onChange={handleChange}
          placeholder="Enter product name"
          required
        />

        <label>Category:</label>

        {/* here creating drop down menu  */}
        <select onChange={handleChange} 
        value={product.pr_category} 
        name="pr_category" 
        id="">
        {
          pr_category.map((item)=>{
            return(
              <option>{item}</option>
            )
          })
        }
        
        </select>



          {/* This is for nnormal input  */}
        {/* <input
          type="text"
          name="pr_category"
          value={product.pr_category}
          onChange={handleChange}
          placeholder="Enter product category"
          required
        /> */}

        <label>Brand:</label>
        <select onChange={handleChange} 
        value={product.pr_brand} 
        name="pr_brand" 
        id="">
        {
          pr_brand.map((item)=>{
            return(
              <option>{item}</option>
            )
          })
        }
        </select>



        {/* <input
          type="text"
          name="pr_brand"
          value={product.pr_brand}
          onChange={handleChange}
          placeholder="Enter brand name"
          required
        /> */}

        <label>Price:</label>
        <input
          type="number"
          name="pr_price"
          value={product.pr_price}
          onChange={handleChange}
          placeholder="Enter product price"
          required
        />

        <label>Description:</label>
        <textarea
          name="pr_desc"
          value={product.pr_desc}
          onChange={handleChange}
          placeholder="Enter product description"
          rows="3"
          required
        ></textarea>

        <label>Image URL:</label>
        <input
          type="text"
          name="pr_imageurl"
          value={product.pr_imageurl}
          onChange={handleChange}
          placeholder="Enter product image URL"
          required
        />

        <label>Stock:</label>
        <input
          type="number"
          name="pr_stock"
          value={product.pr_stock}
          onChange={handleChange}
          placeholder="Enter available stock"
          required
        />

        <label>Rating:</label>
        <input
          type="number"
          name="pr_rating"
          value={product.pr_rating}
          onChange={handleChange}
          placeholder="Enter rating (1–5)"
          min="1"
          max="5"
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default UpdateProduct
