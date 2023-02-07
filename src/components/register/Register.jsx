import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import axios from "axios";
import { calcLength } from "framer-motion";

function Register() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [joining, setJoining] = useState("");
  const [plan, setPlan] = useState("");
  const [pic, setPic] = useState(null);
  const [photo, setPhoto] = useState(null);

  const photoUpload = () => {
    console.log(photo.size);
    if (photo) {
      const data = new FormData();
      data.append("file", photo);
      data.append("upload_preset", "busy_force");
      data.append("cloude_name", "kalyanmitthu");
      //!..........cloudinary start............................
      fetch("https://api.cloudinary.com/v1_1/kalyanmitthu/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
      //!..........cloudinary end...............................
    } else {
      console.log("select a photo first.........!");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    photoUpload();
    try {
    } catch (error) {}
  };

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
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile No."
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="jhon@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="date"
              placeholder="Joining Date"
              onChange={(e) => setJoining(e.target.value)}
            />
            <input
              type="file"
              className="fileinput"
              accept=".png , .jpeg , .jpg"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
            <div className="loginplans">
              <label>Select a Plan</label>
              <select name="plans" onChange={(e) => setPlan(e.target.value)}>
                <option value="800">800</option>
                <option value="1000">1000</option>
                <option value="1200">1200</option>
                <option value="6000">6000</option>
                <option value="100000">10000</option>
              </select>
            </div>
            <button onClick={handleRegister}>Join Now</button>
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
