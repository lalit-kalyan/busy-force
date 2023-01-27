import { Link } from "react-router-dom";
import React from "react";
import("./editAdmin.css");

function EditAdmin() {
  return (
    <div className="adminEdit">
      <div className="generalForm">
        <div className="form-title">
          <span>EDIT ADMIN</span>
        </div>
        <div className="formContainer">
          <div className="form-box-l">
            <img
              src="https://images.unsplash.com/photo-1632781297772-1d68f375d878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
              alt="box"
            />
          </div>
          <div className="form-box-r">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Mobile No." />
            <input type="text" placeholder="Joining Date" />
            <input type="text" placeholder="xxxx" />
            <input type="text" placeholder="xxxx" />
            <input type="text" placeholder="xxxx" />
            <button>Join</button>
            <Link to="/login">
              <span>if you have already register? login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAdmin;
