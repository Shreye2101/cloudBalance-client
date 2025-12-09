import React, { useEffect, useState } from 'react'
import logo from '../../assets/cloudkeeper.webp'
import {useNavigate} from 'react-router-dom'
import DashBoard from '../Dashboard/DashBoard'

const Login = () => {
  const navigate = useNavigate()
  const [count,setCount] = useState(0)
  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (email && password) {
      navigate('/dashboard/users', { replace: true });
    }
  }, [navigate]);

  useEffect(()=>{
     setCount(count + 1)}
  ,[])

  
  const handleSubmit = (e) =>{
     e.preventDefault();
     const email = e.target.email.value
     const password = e.target.password.value
     localStorage.setItem("email",email)
     localStorage.setItem("password",password)
     console.log("email and password saved successfully");
     navigate('dashboard/users');
  }
  return (
   <div className="min-h-screen flex flex-col items-center justify-center">
  
   <div className="w-50 h-24 mb-6">
    <img
      src={logo}
      alt="logo"
      className="w-full h-full object-contain"
    />
   </div>

   <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col gap-3 w-80">
    <label>Email:</label>
    <input 
    name='email' 
    type='email' 
    className="border p-2 rounded"
    placeholder='enter your email'
    />

    <label>Password:</label>
    <input 
    name='password' 
    type='password' 
    className="border p-2 rounded"
    placeholder='enter your password' />

    <button  className="bg-blue-400 text-white p-2 rounded mt-2 cursor-pointer">
      Login
    </button>
   </form>
   </div>

  )
}

export default Login