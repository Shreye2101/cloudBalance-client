import React ,{ useContext } from 'react';
import { SideBarContext } from '../context/SideBarContext';
import { FaUser, FaAws, FaClipboardList, FaDollarSign } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../context/AuthContext';

const SideBar = () => {
  const { user } = useAuth();
  const { isOpen } = useContext(SideBarContext);
  const token = localStorage.getItem("token");
  const decoded = token ? jwtDecode(token) : null;
  console.log("decoded token in sidebar : " , decoded);
  
  // const userRole = 'ADMIN';
  const userRole = decoded?.role;

  const base =
    'flex items-center gap-3 p-2 rounded-md transition cursor-pointer';
  const active = 'bg-sky-300 font-semibold';
  const hover = 'hover:bg-sky-200';

  return (
    <div
      className={`bg-sky-50 border-r transition-all duration-300
      ${isOpen ? 'w-[260px]' : 'w-20'}`}
    >
      <div className="h-full flex flex-col gap-4 p-4">

       {(user?.role==='ADMIN'|| user?.role=='READ_ONLY') && 
        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            `${base} ${hover} ${isActive ? active : ''}`
          }
        >
          <FaUser />
          {isOpen && <span>User</span>}
        </NavLink>
         }

        <NavLink
          to="/dashboard/aws-services"
          className={({ isActive }) =>
            `${base} ${hover} ${isActive ? active : ''}`
          }
        >
          <FaAws />
          {isOpen && <span>AWS Services</span>}
        </NavLink>

        {(user?.role==='ADMIN'|| user?.role=='READ_ONLY') &&
        <NavLink
          to="/dashboard/onboarding"
          className={({ isActive }) =>
            `${base} ${hover} ${isActive ? active : ''}`
          }
        >
          <FaClipboardList />
          {isOpen && <span>Account Onboarding</span>}
        </NavLink>
        }

        <NavLink
          to="/dashboard/cost-explorer"
          className={({ isActive }) =>
            `${base} ${hover} ${isActive ? active : ''}`
          }
        >
          <FaDollarSign />
          {isOpen && <span>Cost Explorer</span>}
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
