import React from "react";
import "./Dashboard.css";
import Sidetile from "../components/Sidetile";
import { FaPlus, FaBook, FaSignOutAlt } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="mdiv" style={{ display: "flex" }}>
      {/* Sidebar */}
      <div className="sidebar">
        <Sidetile icon={<FaPlus />} label="Add a Book" onClick={() => navigate("addbook")} />
        <Sidetile icon={<FaBook />} label="All Books" onClick={() => navigate("allbooks")} />
        <Sidetile icon={<FaSignOutAlt />} label="Logout" onClick={() => navigate("/")} />
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
