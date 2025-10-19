import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Dashboard() {
  const [products, setProducts] = useState([]);
  let [force, setForce] = useState(0);
  // here declaring the force variable so that jb v force update hoga toh producta wala componnent update oga

  // Fetch products from server when component mounts
  useEffect(() => {
    axios
      .get("http://localhost:1000/products") // Your products JSON server endpoint
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });
  }, [force]);
  // yha pr force ko data dependencies pass kr rh h taki jb v update ho toh  dashboard wla omponent render hgoga

  function remove_item(id, pr_name) {
    axios
      .delete(`http://localhost:1000/products/${id}`)
      .then((res) => {
        console.log(res);
        toast.success(`${pr_name} has been Deleted `);
        setForce(++force);
        // yha pr jb v force update hoga toh component render krega
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${pr_name} product not found  `);
      });
  }

  //@1
  let navigate = useNavigate();
  function edit_item(id) {
    navigate(`/admin-homepage/updateproduct/${id}`);
  }
  //@1

  return (
    <div className="dashboard-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>All Products</h2>
        <p style={{ fontWeight: "bold" }}>Total Products: {products.length}</p>
      </div>

      <div className="products-grid">
        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.pr_imageurl}
                alt={product.pr_name}
                className="product-image"
              />
              <h3>
                <Link 
                  state={product}
                  to={`/admin-home/viewProducts/${product.id}`}
                  className="landing-link"
                  style={{ textDecoration: "none" }}
                >
                  {product.pr_name}
                </Link>
              </h3>
              <h2>hey</h2>
              <h3>hejbhwj</h3>
              <p>
                <strong>Category:</strong> {product.pr_category}
              </p>
              <p>
                <strong>Brand:</strong> {product.pr_brand}
              </p>
              <p>
                <strong>Price:</strong> ₹{product.pr_price}
              </p>
              <p>
                <strong>Stock:</strong> {product.pr_stock}
              </p>
              <p>
                <strong>Rating:</strong> {product.pr_rating}
              </p>
              <div className="product-buttons">
                <button onClick={() => edit_item(product.id)}>Edit</button>
                <button
                  onClick={() => remove_item(product.id, product.pr_name)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
