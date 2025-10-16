import React, { useEffect, useState } from 'react';
import '../styles/AdminLogin.css';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [admins, setAdmin] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1200/Admins")
            .then((res) => {
                console.log(res.data);
                setAdmin(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        // 🔹 Load saved credentials from localStorage
        const savedEmail = localStorage.getItem("adminEmail");
        const savedPassword = localStorage.getItem("adminPassword");
        if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
            setRememberMe(true);
        }
    }, []); 






    
      // function val_login(e) {
    //     e.preventDefault();
    //     if(email === "abc" && password === "1234") {
    //         toast.success("Login Successful");
    //     } else {
    //         toast.error("Login Failed");
    //     }
    // }
    let navigate = useNavigate();

    function login_admin(e) {
        e.preventDefault();

        const isPresent = admins.filter((admin) => {
            return admin.email === email && admin.password === password;
        });

        if (isPresent.length > 0) {
            toast.success("Login Successful ");

            // 🔹 Save credentials if Remember Me is checked
            if (rememberMe) {
                localStorage.setItem("adminEmail", email);
                localStorage.setItem("adminPassword", password);
            } else {
                localStorage.removeItem("adminEmail");
                localStorage.removeItem("adminPassword");
            }

            navigate("/admin-HomePage");
        } else {
            toast.error("Invalid Email or Password ");
        }
    }

    return (
        <div className="admin-login-container">
            <form className="admin-login-form" onSubmit={login_admin}>
                <h2>Admin Login</h2>

                <label>Email</label>
                <input
                    type="text"
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

                {/* 🔹 Remember Me Checkbox */}
                <div className="remember-me">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    <span>Remember Me</span>
                </div>

                <button type="submit">Login</button>
                <Link to="/admin-sign"> New Admin? Register Here </Link>
            </form>
        </div>
    );
}

export default AdminLogin;
