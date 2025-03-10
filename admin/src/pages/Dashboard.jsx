import React from "react";
import "./Dashboard.css";
import Sidetile from "../components/Sidetile";
import { FaPlus, FaBook, FaSignOutAlt,FaClipboardList } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    navigate('/'); 
  };

  return (
    <div className="mdiv" style={{ display: "flex" }}>
      {/* Sidebar */}
      <div className="sidebar">
        <Sidetile icon={<FaPlus />} label="Add a Book" onClick={() => navigate("addbook")} />
        <Sidetile icon={<FaBook />} label="All Books" onClick={() => navigate("allbooks")} />
        <Sidetile icon={<FaClipboardList />} label="Orders" onClick={() => navigate("order")} />
        <Sidetile icon={<FaSignOutAlt />} label="Logout" onClick={handleLogout} />
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
