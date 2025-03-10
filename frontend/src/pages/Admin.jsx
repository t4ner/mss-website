import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return <div>Admin</div>;
};

export default Admin;
