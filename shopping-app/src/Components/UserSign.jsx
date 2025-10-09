import React, { useState } from "react";
import "../styles/UserSign.css"; // create this CSS or reuse UserLogin.css
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserSign() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    re_password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Register user
  const registerUser = (e) => {
    e.preventDefault();

    // Password validation
    if (user.password !== user.re_password) {
      toast.error("Passwords do not match!");
      return;
    }

    // POST request to JSON server
    axios
      .post("http://localhost:3001/Users", user)
      .then((res) => {
        console.log(res.data);
        toast.success("User Registered Successfully ✅");
        navigate("/user-login"); // Redirect to login after signup
      })
      .catch((err) => {
        console.log(err);
        toast.error("Registration failed ❌");
      });
  };

  return (
    <div className="user-sign-container">
      <form className="user-sign-form" onSubmit={registerUser}>
        <h2>User Registration</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <label>Re-enter Password</label>
        <input
          type="password"
          name="re_password"
          value={user.re_password}
          onChange={handleChange}
          placeholder="Re-enter your password"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default UserSign;
