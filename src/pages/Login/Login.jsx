import React, { useEffect, useState } from 'react';
import logo from '../../assets/cloudkeeper.webp';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from "../../api/axios";
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp > currentTime) {
        navigate("/dashboard/users", { replace: true });
      }
    } catch (e) {
      localStorage.removeItem("token");
    }
  }
}, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setError("");
    setLoading(true);

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    try {
      const response = await api.post("/api/auth/login", { email, password });
      
      const accessToken = response.data?.token;

      if (!accessToken) throw new Error("Token missing");

      login(accessToken); 
      //localStorage.setItem("userEmail", email);
      
      navigate("/dashboard", { replace: true });

    } catch (err) {
      console.error("Login failed", err);

      const status = err.response?.status;

      if (status === 401) {
        setError("Invalid email or password");
      } else if (!err.response) {
        setError("Server not reachable. Please try again.");
      } else {
        setError("Login failed. Please try again later.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="min-h-screen flex flex-col items-center justify-center">
  
   <div className="w-50 h-24 mb-6">
    <img
      src={logo}
      alt="logo"
      className="w-full h-full object-contain"
    />
   </div>

   <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
    
    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

    <label>Email:</label>
    <input 
      name='email' 
      type='email' 
      required
      className="border p-2 rounded"
      placeholder='enter your email'
    />

    <label>Password:</label>
    <input 
      name='password' 
      type='password' 
      required
      className="border p-2 rounded"
      placeholder='enter your password' 
    />

    <button 
      disabled={loading}
      className={`p-2 rounded mt-2 text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-400 cursor-pointer'}`}
    >
      {loading ? "Logging in..." : "Login"}
    </button>
   </form>
   </div>
  )
}

export default Login