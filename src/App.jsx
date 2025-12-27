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
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>

    <SideBarProvider>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Protected><DashBoard /></Protected>}>
            <Route index element={
            <Protected allowedRoles={['ADMIN', 'READ_ONLY']}>
            <Table />
            </Protected>
             } />
            
            <Route path="users" element={
              <Protected allowedRoles={['ADMIN', 'READ_ONLY']}><Table /></Protected>
            } />
            
            <Route path="add-user" element={
              <Protected allowedRoles={['ADMIN']}><AddUser /></Protected>
            } />

            <Route path="aws-services" element={<AwsService />} />
            <Route path="cost-explorer" element={<CostExplorer />} />

            <Route path="onboarding" element={
              <Protected allowedRoles={['ADMIN', 'READ_ONLY']}><OnBoarding /></Protected>
            } />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </SideBarProvider>
    </AuthProvider>
  );
};

export default App;