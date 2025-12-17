import React, { useEffect, useState, useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { SideBarContext } from "../context/SideBarContext";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Table = () => {
  const [data, setData] = useState([]);
  const { isOpen } = useContext(SideBarContext);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const res = await api.get("/api/users");
      setData(res?.data);

    } catch (err) {
      console.error("Failed to fetch users", err);

      
      if (err.response?.status === 401 || err.response?.status === 403) {
        
        navigate("/", { replace: true });
      }
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
    <div
      className={`transition-all duration-300 p-6 ${
        isOpen ? "ml-[260px]" : "ml-20"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">User Table</h1>

      <button
        onClick={handleAddUserClick}
        className="mb-4 p-2 bg-sky-400 text-white rounded transition"
      >
        Add User
      </button>

      <div className="rounded-lg shadow-md bg-white max-h-[70vh] overflow-y-auto">
        <table className="min-w-full">
          <thead className="bg-sky-50 sticky top-0 z-10">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Last Login</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="text-center hover:bg-gray-50">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.firstName}</td>
                <td className="p-3">{user.lastName}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">User</td>
                <td className="p-3">{user.lastLogin || "N/A"}</td>
                <td className="p-3">
                   <button
                    onClick={() => handleEditUserClick(user)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <EditIcon fontSize="small" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
