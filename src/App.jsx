import AddUser from "./components/AddUser";
import Table from "./components/Table";
import DashBoard from "./pages/Dashboard/DashBoard";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Protected from "./components/Protected";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
   <Router>
  <ToastContainer />
  <Routes>
    <Route path="/" element={<Login />} />

    <Route
      path="/dashboard"
      element={<Protected><DashBoard /></Protected>}
    >
      <Route path="users" element={<Table />} />
      <Route path="add-user" element={<AddUser />} />
    </Route>

    <Route path="*" element={<NotFound />} />

  </Routes>
</Router>

  );
};

export default App;
