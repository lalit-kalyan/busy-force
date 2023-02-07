import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { login } from "../../redux/memberApiCalls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if ((email, phone)) {
      login(dispatch, { email, phone });
      navigate("/");
    } else {
      console.log("email , phone is required to login");
      alert("email , phone is required to login");
    }
  };

  return (
    <div className="login">
      <div className="generalForm">
        <div className="form-title">
          <span>LOGIN</span>
        </div>

        <div className="formContainer  ">
          <div className="form-box-l">
            <img
              src="https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="box"
            />
          </div>
          <div className="form-box-r formCenter ">
            <input
              type="email"
              placeholder="mitthu@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile No."
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <Link to="/register">
              <span>if you dont have an account? Signup </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
