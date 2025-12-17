import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { SideBarContext } from "../context/SideBarContext";
import React from "react";
import { toast } from "react-toastify";
import api from "../api/axios"; // ✅ axios interceptor
import { FormContext } from "../context/FormContext";

const AddUser = () => {
  const navigate = useNavigate();
  const { isOpen } = useContext(SideBarContext);
  const { formData, setFormData } = useContext(FormContext);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  
  const location = useLocation();
  const { user } = location.state || {}; 
  
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: "", 
        role: user.role,
      });
    }
  }, [user, setFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName" || name === "lastName") {
      if (!/^[A-Za-z\s]*$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Only letters and spaces are allowed",
        }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; 
    setLoading(true);

    try {
      if (user) {
        await api.put(`/api/users/${user.id}`, formData);
        toast.success("User updated successfully!");
      } else {
        await api.post("/api/users/addUser", formData);
        toast.success("User added successfully!");
      }
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
      });

      navigate("/dashboard/users");

    } catch (err) {
      console.error("Add/Edit user failed", err);

      if (err.response?.status === 409) {
        toast.error("Email already exists");
      } else {
        toast.error(err.response?.data?.message || "Failed to add or update user");
      }
    } finally {
      setLoading(false); 
    }
  };

  const handleCancelClick = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
    });
    navigate("/dashboard/users");
  };

  return (
    <div
      className={`transition-all duration-300 p-6 ${
        isOpen ? "ml-[260px]" : "ml-20"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6">{user ? "Edit User" : "Add New User"}</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
      
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
              placeholder="Enter First Name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="w-1/2">
            <label className="block font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
              placeholder="Enter Last Name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
              placeholder="Enter Email"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password || ""}
              onChange={handleChange}
             
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
              placeholder="Enter Password"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-semibold">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-600 bg-white"
            >
              <option value="" disabled>Select Role</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="MANAGER">Manager</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
          >
            {user ? "Save Changes" : "Add User"}
          </button>
          <button
            type="button"
            onClick={handleCancelClick}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
