import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../api/axios';
import { replace, useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (token) => {
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };
const logout = async () => {
  const token = localStorage.getItem("token"); 
  
  try {
    await api.post("/api/auth/logout");
    
    console.log("Logged out from server and cookie cleared");
  } catch (err) {
    console.error("Backend logout/blacklist failed or session already expired");
  } finally {

    localStorage.clear();
    setUser(null);
    window.location.href = "/"
  }
};

 useEffect(() => {
  const initializeAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded); 
      } catch (err) {
        localStorage.clear();
      }
    }
    setLoading(false);
  };
  initializeAuth();
}, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);