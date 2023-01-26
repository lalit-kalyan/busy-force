import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./adminHome.css";

function AdminHome() {
  return (
    <div className="admin">
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="strip"
        className="strip"
      />
      <div>
        <span className="stroke-text">BUSY FORCE</span>
        <span style={{ color: "white" }}>ADMIN PANNEL</span>
      </div>
      <div className="adminMain">
        <div className="adminMain-l">
            <AdminSidebar/>
        </div>
        <div className="adminMain-r">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
