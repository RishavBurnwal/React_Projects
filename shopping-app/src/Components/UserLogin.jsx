import React, { useEffect, useState } from "react";
import "../styles/UserLogin.css"; // Make sure you create this CSS file
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users from userData.json
    axios
      .get("http://localhost:3001/Users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Load saved credentials if "Remember Me" was checked
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const login_user = (e) => {
    e.preventDefault();

    // Check if user exists in the fetched data
    const isPresent = users.filter(
      (user) => user.email === email && user.password === password
    );

    if (isPresent.length > 0) {
      toast.success("Login Successful ✅");

      // Save credentials in localStorage if Remember Me is checked
      if (rememberMe) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
      } else {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPassword");
      }

      navigate("/user-homepage"); // Redirect after login
    } else {
      toast.error("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="user-login-container">
      <form className="user-login-form" onSubmit={login_user}>
        <h2>User Login</h2>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <div className="remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <span>Remember Me</span>
        </div>

        <button type="submit">Login</button>
        <Link to="/user-sign"> New User? Register Here </Link>
      </form>
    </div>
  );
}

export default UserLogin;
