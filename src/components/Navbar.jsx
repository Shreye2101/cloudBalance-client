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
  const navigate = useNavigate();
  const { setIsOpen } = useContext(SideBarContext);

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b z-50 flex items-center justify-between px-4">
      
  
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" className="w-40" />

        <IconButton onClick={() => setIsOpen(prev => !prev)}>
          <MenuIcon />
        </IconButton>

        <div className="flex flex-col text-sm">
          <span>Module</span>
          <select className="border p-1 rounded">
            <option>select role</option>
            <option>admin</option>
            <option>customer</option>
            <option>user</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm">
          <div className="font-semibold">Welcome,</div>
          <div>Shreyash Srivastava</div>
        </div>

        <button
          className="border px-4 py-2 rounded hover:bg-sky-600 hover:text-white"
          onClick={() => {
            localStorage.clear();
            navigate("/", { replace: true });
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};


export default Navbar 