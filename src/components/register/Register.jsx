import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <span>REGISTER</span>
      <div className="register-box">
        <div className="r-box-l">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
            alt="box"
          />
        </div>
        <div className="r-box-r">
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
  );
}

export default Register;