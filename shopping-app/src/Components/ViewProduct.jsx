import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/ViewProduct.css";
// import star from "./Star"; // (use it if you have a star rating component or image)

function ViewProduct() {
    const location = useLocation();
    const product = location.state; // product passed from Link

    if (!product) {
        return <h3>No product data available.</h3>;
    }

    return (
        <div className="view-product-container">
            <div className="view-product-card">
                <img src={product.pr_imageurl} alt={product.pr_name} />
                <div className="view-product-details">
                    <h2>{product.pr_name}</h2>
                    <p><strong>Brand:</strong> {product.pr_brand}</p>
                    <p><strong>Category:</strong> {product.pr_category}</p>
                    <p><strong>Price:</strong> ₹{product.pr_price}</p>
                    <p><strong>Stock:</strong> {product.pr_stock}</p>
                    <p><strong>Rating:</strong> {product.pr_rating}/5</p>
                    <p><strong>Description:</strong> {product.pr_desc}</p>
                </div>
                <div className="view-product-actions">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                </div>
            </div>
        </div>

    );
}

export default ViewProduct;
