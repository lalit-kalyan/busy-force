import React from "react";
import { Link } from "react-router-dom";
import "./login.css"

function Login() {
  return (
    <div className="login">
      <div className="generalForm">
        <div className="form-title">
          <span>LOGIN</span>
        </div>
        <div className="formContainer">
          <div className="form-box-l">
            <img
              src="https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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

export default Login;
