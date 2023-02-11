import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./adminSidebar.css";
import {
  FaHome,
  FaUserFriends,
  FaDollarSign,
  FaUserAltSlash,
  FaUserEdit,
  FaUpload,
  FaCommentDots,
} from "react-icons/fa";
import { useSelector } from "react-redux";

import Bars from "../../assets/bars.png";

function AdminSidebar({ getToStuff }) {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  const admin = useSelector((state) => state.admin.currentAdmin);
  return (
    <div className="sidebarContainer">
      <div className="sidebarAdmin">
        <div className="sidebarAdminBox">
          <img src={admin.pic} alt="profilepic" className="profilePic" />
          <span>{admin.username}</span>
          <span style={{ textTransform: "none" }}>{admin.email}</span>
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
                  getToStuff();
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
                  getToStuff();
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
                  getToStuff();
                }}
                to="/admin/treasury"
              >
                <span>Treasury</span>
              </Link>
            </li>
            <li>
              <i>
                <FaUpload />
              </i>
              <Link
                onClick={() => {
                  setMenuOpen(false);
                  getToStuff();
                }}
                to="/admin/upload"
              >
                <span>Image Upload</span>
              </Link>
            </li>

            <li>
              <i>
                <FaCommentDots />
              </i>
              <Link
                onClick={() => {
                  setMenuOpen(false);
                  getToStuff();
                }}
                to="/admin/publish"
              >
                <span>Publish</span>
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
