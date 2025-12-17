import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import SideBarProvider from '../../context/SideBarProvider';
import { Outlet } from 'react-router-dom'; 
import React from 'react';
import FormProvider from '../../context/FormProvider';

const DashBoard = () => {
  return (
    <SideBarProvider>
      <FormProvider>
        <Navbar />
        <SideBar />
        <div>
          <Outlet />
        </div>
      </FormProvider>
    </SideBarProvider>
  );
};

export default DashBoard;
