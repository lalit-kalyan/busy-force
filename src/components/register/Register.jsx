import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="generalForm">
        <div className="form-title">
          <span>REGISTER</span>
        </div>
        <div className="formContainer">
          <div className="form-box-l">
            <img
              src="https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
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

export default Register;
