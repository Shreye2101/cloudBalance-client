import React, { useEffect, useState } from 'react';
import logo from '../../assets/cloudkeeper.webp';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from "../../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard/users", { replace: true });
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
      const response = await api.post("/api/auth/login", {
        email,
        password,
      });

      const token = response.data?.token;

      if (!token) {
        throw new Error("Token missing");
      }

      localStorage.setItem("token", token);
      localStorage.setItem("userEmail", email);

      navigate("/dashboard/users", { replace: true });

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