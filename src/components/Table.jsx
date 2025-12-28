import React, { useEffect, useState, useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { SideBarContext } from "../context/SideBarContext";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { jwtDecode } from "jwt-decode";

const Table = () => {
  const [data, setData] = useState([]);
  const { isOpen } = useContext(SideBarContext);
  const navigate = useNavigate();
  const userRole = localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token")).role : null;

  const fetchUsers = async () => {
  try {
    const res = await api.get("/api/users");
    setData(res?.data);
  } catch (err) {
    console.error("Failed to fetch users", err);
  }
};

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUserClick = () => {
    navigate("/dashboard/add-user");
  };

  const handleEditUserClick = (user) => {
    navigate("/dashboard/add-user", { state: { user } });
  };

  return (
    <div className="p-6 transition-all duration-300">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User Table</h1>

       {userRole === 'ADMIN' && ( 
        <button
          onClick={handleAddUserClick}
          className="px-4 py-2 bg-sky-400 text-white rounded-md hover:bg-sky-500 transition-all font-medium text-base"
        >
          Add User
        </button>
       )}
      </div>

      <div className="rounded-xl border border-gray-200 shadow-sm bg-white overflow-hidden">
        <div className="max-h-[70vh] overflow-y-auto text-base">
          <table className="min-w-full border-separate border-spacing-0">
            <thead className="bg-gray-50 sticky top-0 z-10 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">First Name</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">Last Name</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-right text-sm font-bold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 bg-white">
              {data.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5 text-base text-gray-400">
                    {user.id}
                  </td>
                  
                  <td className="px-6 py-5 text-base font-medium text-gray-900">
                    {user.firstName}
                  </td>

                  <td className="px-6 py-5 text-base font-medium text-gray-900">
                    {user.lastName}
                  </td>

                  <td className="px-6 py-5 text-base text-gray-600">
                    {user.email}
                  </td>

                  <td className="px-6 py-5 text-base text-gray-600">
                    User
                  </td>

                  <td className="px-6 py-5 text-right">
                    {userRole==='ADMIN' ? (
                    <button
                      onClick={() => handleEditUserClick(user)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      title="Edit User"
                    >
                      <EditIcon fontSize="medium" />
                    </button>
                     ) : (
                    <span className="text-gray-400 text-sm italic">View Only</span>
                     )}               
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
