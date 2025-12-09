import { useContext } from 'react';
import { SideBarContext } from '../context/SideBarContext';
import React from 'react';
import { FaUser, FaAws, FaClipboardList, FaDollarSign } from 'react-icons/fa'; // You can use icons for better UI
import { Navigate, useNavigate } from 'react-router-dom';

const SideBar = () => {
  const { isOpen } = useContext(SideBarContext);
  const navigate = useNavigate()

  return (
    <div className="relative flex">
      <div
        className={`absolute left-0 top-0 h-screen bg-sky-50 text-black transition-all duration-300 
          ${isOpen ? "w-[260px]" : "w-20"}`}
      >
        <div className="h-full flex flex-col gap-4 p-4">
  
          <div className="flex justify-center mb-4">
            {isOpen && <h1 className="text-3xl font-bold">SideBar</h1>}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sky-300 cursor-pointer" onClick={()=>navigate('/dashboard/users')}>
              <FaUser />
              {isOpen && <span className="text-sm">User</span>}
            </div>
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sky-300 cursor-pointer">
              <FaAws />
              {isOpen && <span className="text-sm">AWS Services</span>}
            </div>
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sky-300 cursor-pointer">
              <FaClipboardList />
              {isOpen && <span className="text-sm">Account Onboarding</span>}
            </div>
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sky-300 cursor-pointer">
              <FaDollarSign />
              {isOpen && <span className="text-sm">Cost Explorer</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
