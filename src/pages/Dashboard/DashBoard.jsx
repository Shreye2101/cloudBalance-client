import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import SideBarProvider from '../../context/SideBarProvider';
import { Outlet } from 'react-router-dom'; 
import React, { useContext } from 'react';
import FormProvider from '../../context/FormProvider';
import { SideBarContext } from '../../context/SideBarContext';

const DashBoard = () => {
  const { isOpen } = useContext(SideBarContext);
  return (
    <SideBarProvider>
      <FormProvider>
        <Navbar />

        <div className="pt-16 flex h-screen">
          <SideBar />
          <div className="flex-1 overflow-auto p-6">
            <Outlet />
          </div>
        </div>
      </FormProvider>
    </SideBarProvider>
  );
};

export default DashBoard;
