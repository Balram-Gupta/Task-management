import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);

      login(res.data.token);  

      alert("Login Successful!");
      navigate("/"); 
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <div className="card glass">
        <h2>Welcome Back</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button className="btn login-btn">Login</button>
        </form>

        <p className="register-text">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
