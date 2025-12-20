import React ,{ useContext } from 'react';
import { SideBarContext } from '../context/SideBarContext';
import { FaUser, FaAws, FaClipboardList, FaDollarSign } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const { isOpen } = useContext(SideBarContext);

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
        {isOpen && (
          <h1 className="text-xl font-bold text-center mb-4">SideBar</h1>
        )}

        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            `${base} ${hover} ${isActive ? active : ''}`
          }
        >
          <FaUser />
          {isOpen && <span>User</span>}
        </NavLink>

        <NavLink
          to="/dashboard/aws-services"
          className={({ isActive }) =>
            `${base} ${hover} ${isActive ? active : ''}`
          }
        >
          <FaAws />
          {isOpen && <span>AWS Services</span>}
        </NavLink>

        <NavLink
          to="/dashboard/onboarding"
          className={({ isActive }) =>
            `${base} ${hover} ${isActive ? active : ''}`
          }
        >
          <FaClipboardList />
          {isOpen && <span>Account Onboarding</span>}
        </NavLink>

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
