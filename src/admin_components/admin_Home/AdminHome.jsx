import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./adminHome.css";
import Strip from "../../assets/bf3.jpg";
import Logo from "../../assets/bf_logo.png";

function AdminHome() {
  const [show, setShow] = useState(true);

  const getToStuff = () => {
    setShow(false);
  };
  return (
    <div className="admin">
      <img src={Strip} alt="strip" className="strip" />
      <div>
        <span className="stroke-text">BUSY FORCE</span>
        <span style={{ color: "white" }}>ADMIN PANNEL</span>
      </div>
      <div className="adminMain">
        <div className="adminMain-l">
          <AdminSidebar getToStuff={getToStuff} />
        </div>
        <div className="adminMain-r">
          {show ? (
            <div>
              <img src={Logo} alt="" className="showLogo" />
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
