import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { SideBarContext } from "../context/SideBarContext";
import React from "react";
import { toast } from "react-toastify";
import { FormContext } from "../context/FormContext";

const AddUser = () => {
  const navigate = useNavigate();
  const { isOpen } = useContext(SideBarContext);

  const {formData,setFormData} = useContext(FormContext)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error("Failed to add user");
    }

    toast.success("User added successfully!");
    navigate("/dashboard/users");
    setFormData({ firstName: "", lastName: "", email: "", role: "" });

  } catch (error) {
    toast.error("Something went wrong!");
    console.error(error);
  }
};


  const handleCancelClick = () => {
    navigate("/dashboard/users");
  };

  return (
    <div
      className={`transition-all duration-300 p-6 ${
        isOpen ? "ml-[260px]" : "ml-20"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6">Add New User</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter First Name"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter Last Name"
            />
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
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter Email"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-semibold">Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter Role"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-sky-600 text-white rounded"
          >
            Add User
          </button>
          <button
            type="button"
            onClick={handleCancelClick}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
