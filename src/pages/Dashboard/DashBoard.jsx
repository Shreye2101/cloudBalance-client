import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import SideBarProvider from '../../context/SideBarProvider';
import { Outlet, replace, useNavigate } from 'react-router-dom'; 
import React from 'react'
import FormProvider from '../../context/FormProvider';


const DashBoard = () => {
  const navigate = useNavigate()
  const email = localStorage.getItem("email")
  const password = localStorage.getItem("password")
  if(!email || !password){
       return navigate('/',{replace : true});
  }
  return (
    <div>
      <SideBarProvider>
        <FormProvider>
        <Navbar />
        <SideBar />
        <div>
          <Outlet />
        </div>
        </FormProvider>
      </SideBarProvider>
    </div>
  );
};

export default DashBoard;
