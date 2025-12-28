import axios from "axios";
import { toast } from "react-toastify"; // Optional: to notify the user

const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

  
    if (status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }

    if (status === 403) {
      console.error("Access Denied: You do not have the required role.");
      toast.error("You don't have permission to perform this action.");
 
    }

    if (!error.response) {
      toast.error("Server is unreachable. Please check your connection.");
    }

    return Promise.reject(error);
  }
);

export default api;