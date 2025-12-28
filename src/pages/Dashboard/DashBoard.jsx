import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import SideBarProvider from '../../context/SideBarProvider';
import { Navigate, Outlet, useLocation } from 'react-router-dom'; 
import React, { useContext } from 'react';
import FormProvider from '../../context/FormProvider';
import { SideBarContext } from '../../context/SideBarContext';
import { jwtDecode } from 'jwt-decode';

const DashBoard = () => {
  const { isOpen } = useContext(SideBarContext);
  const location = useLocation();
  
  const token = localStorage.getItem("token");
  let userRole = "";
  
  if (token) {
    const decoded = jwtDecode(token);
    userRole = decoded.role;
  }

  if (userRole === 'CUSTOMER' && (location.pathname === '/dashboard' || location.pathname === '/dashboard/')) {
    return <Navigate to="/dashboard/aws-services" replace />;
  }

  return (
    <FormProvider>
      <Navbar />
      <div className="pt-16 flex h-screen">
        <SideBar />
        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </div>
    </FormProvider>
  );
};

export default DashBoard;
