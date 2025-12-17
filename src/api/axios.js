import axios from "axios";

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

    
    if ((status === 401 || status === 403) && error.response?.data?.message !== "Email already exists") {
  localStorage.removeItem("token");
  window.location.href = "/";
}

    
    if (!error.response) {
      console.error("Network error or server not reachable");
    }

    return Promise.reject(error);
  }
);

export default api;
