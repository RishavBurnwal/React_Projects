import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AddProducts from './AddProducts';
import Dashboard from './Dashboard';
import ViewProduct from './ViewProduct'; 
import UpdateProduct from './UpdateProduct';

function AdminHome() {
  return (
    <div>
      <NavBar />

      <Routes>

        <Route index element={<Dashboard />} />
        <Route path="add-products" element={<AddProducts />} />
        <Route path="viewProducts/:id" element={<ViewProduct />} />
        <Route path="/updateproduct/:id" element={<UpdateProduct/>}/>
      </Routes>
    </div>
  );
}

export default AdminHome;
