import AddUser from "./components/AddUser";
import Table from "./components/Table";
import DashBoard from "./pages/Dashboard/DashBoard";
import OnBoarding from "./pages/OnBoarding/OnBoarding"
import AwsService from "./pages/AwsServices/AwsService"
import CostExplorer from "./pages/CostExplorer/CostExplorer";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Protected from "./components/Protected";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound/NotFound";
import SideBarProvider from "./context/SideBarProvider";

const App = () => {
  return (
    <SideBarProvider>
   <Router>
  <ToastContainer />
  <Routes>
  
    <Route path="/" element={<Login />} />

    <Route
      path="/dashboard"
      element={
        <Protected>
          <DashBoard />
        </Protected>
      }
    >
      <Route index element={<Table />} />

      <Route path="users" element={<Table />} />
      <Route path="add-user" element={<AddUser />} />
      <Route path="aws-services" element={<AwsService />} />
      <Route path="onboarding" element={<OnBoarding />} />
      <Route path="cost-explorer" element={<CostExplorer />} />
    </Route>

  
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>
</SideBarProvider>

  );
};

export default App;
