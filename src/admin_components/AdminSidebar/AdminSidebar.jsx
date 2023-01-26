import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./adminSidebar.css";
import Profile from "../../assets/t-image3.jpg";
import {
  FaHome,
  FaUserFriends,
  FaDollarSign,
  FaUserPlus,
  FaUserAltSlash,
  FaUserEdit,
} from "react-icons/fa";
import Bars from "../../assets/bars.png";

function AdminSidebar() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="sidebarContainer">
      <div className="sidebarAdmin">
        <div className="sidebarAdminBox">
          <img src={Profile} alt="profilepic" className="profilePic" />
          <span>Mitthu kalyan</span>
        </div>
      </div>

      <div className="sidebarMenu">
        {menuOpen === false && mobile === true ? (
          <div
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
          >
            <img
              src={Bars}
              alt="bars"
              style={{
                width: "1.5rem",
                height: "1.5rem",
              }}
              onClick={() => {
                setMenuOpen(true);
              }}
            />
          </div>
        ) : (
          <ul>
            <li>
              <i>
                <FaHome />
              </i>
              <Link
                onClick={() => {
                  setMenuOpen(false);
                }}
                to="/"
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <i>
                <FaUserFriends />
              </i>
              <Link
                onClick={() => {
                  setMenuOpen(false);
                }}
                to="/admin/member-list"
              >
                <span>Members</span>
              </Link>
            </li>
            <li>
              <i>
                <FaUserEdit />
              </i>
              <Link
                onClick={() => {
                  setMenuOpen(false);
                }}
                to="/admin/adminEdit"
              >
                <span>Edit Admin</span>
              </Link>
            </li>
            <li>
              <i>
                <FaDollarSign />
              </i>
              <Link
                onClick={() => {
                  setMenuOpen(false);
                }}
                to="/admin/treasury"
              >
                <span>Treasury</span>
              </Link>
            </li>
            <li>
              <i>
                <FaUserPlus />
              </i>
              <Link
                onClick={() => {
                  setMenuOpen(false);
                }}
                to="/admin/adminRegister"
              >
                <span>Register</span>
              </Link>
            </li>
            <li>
              <i>
                <FaUserAltSlash />
              </i>
              <Link
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default AdminSidebar;
