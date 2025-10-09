import React, { useState } from 'react';
import '../styles/AdminSign.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminSign() {
  const navigate = useNavigate();
  // step 2 : single useState object
  const [admin, setAdmin] = useState({
    U_name: "",
    email: "",
    phone: "",
    password: "",
    re_pass: "",
    prfl: ""
  });

  // step 4: handle input
  function handleChange(e) {
    const { name, value } = e.target;
    setAdmin((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  // step 5: register admin
  function register_admin(e) {
    e.preventDefault();

    axios.post("http://localhost:1000/Admins", admin)
      .then((res) => {
        console.log(res);
        toast.success("Admin Registered Successfully");
        navigate("/admin-login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Registration failed");
      });
  }

  return (
    <div className="AdminSign">
      <div className="thumbnail"></div>
      <form onSubmit={register_admin}>
        <label>Name :</label>
        <input
          name="U_name"
          value={admin.U_name}
          onChange={handleChange}
          type="text"
          placeholder="Enter Your Name"
          required
        />

        <label>Email :</label>
        <input
          name="email"
          value={admin.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter Your Email"
          required
        />

        <label>Phone number :</label>
        <input
          name="phone"
          value={admin.phone}
          onChange={handleChange}
          type="number"
          placeholder="Enter Your Phone No."
          required
        />

        <label>Password :</label>
        <input
          name="password"
          value={admin.password}
          onChange={handleChange}
          type="password"
          placeholder="Enter Your Password"
          required
        />

        <label>Re-enter Password :</label>
        <input
          name="re_pass"
          value={admin.re_pass}
          onChange={handleChange}
          type="password"
          placeholder="Re-enter Your Password"
          required
        />

        <label>Profile :</label>
        <input
          name="prfl"
          value={admin.prfl}
          onChange={handleChange}
          type="text"
          placeholder="Enter Your Profile"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default AdminSign;
