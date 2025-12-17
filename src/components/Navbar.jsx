import React from 'react'
import logo from '../assets/cloudkeeper.webp'
import {useState,useContext, createContext} from 'react'
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import { SideBarContext } from '../context/SideBarContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
 const {isOpen,setIsOpen} = useContext(SideBarContext);
 const handleSideBar = () =>{
    console.log("toggle clicked, before:", isOpen);
    setIsOpen(prev => !prev)
 } 

 const handleLogout = () => {
  localStorage.clear(); 
  navigate("/", { replace: true });
};

  return (
    <div className='main flex border border-grey-400'>
    <div className='left  w-1/2 flex gap-4'>
    <div className='w-60 flex justify-items-center align-center'>
    <img
    src={logo}
    alt='logo'
    className='w-60 m-4'
    />
    </div>
    <div className='flex justify-center align-center'>
      <IconButton onClick={handleSideBar}>
        <MenuIcon/>
      </IconButton>


      <div className="flex flex-col items-center justify-center p-3 gap-1.5 w-fit h-fit">
      <span>Module</span>
  
       <select className="border p-1 rounded">
        <option value="">select role</option>
        <option value="admin">admin</option>
        <option value="customer">customer</option>
        <option value="user">user</option>
       </select>
       </div>
  

       </div>
       </div>

      <div className="right w-1/2 flex justify-end items-center gap-4 p-2">

      <div className="flex items-center gap-2 p-2 rounded ">
      <PeopleIcon className="p-1 rounded-full" fontSize='large' />
      <div className="text-sm leading-tight">
      <div className="font-semibold">Welcome,</div>
      <div>Shreyash Srivastava</div>
      </div>
      </div>

      <div className="bg-white border border-sky-100 flex items-center gap-1 p-4 rounded cursor-pointer hover:bg-sky-600"
      onClick={handleLogout}>
      <LogoutIcon />
      <span>logout</span>
      </div>

      </div>
       </div>
  )
}

export default Navbar 