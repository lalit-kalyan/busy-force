import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [joining, setJoining] = useState("");
  const [plan, setPlan] = useState("");
  const [pic, setPic] = useState("");
  let navigate = useNavigate();

  const photoUpload = (photo) => {
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

    try {
      const newMember = {
        username,
        email,
        phone,
        pic,
        joining,
        plan,
      };

      await publicRequest.post("/members", newMember);
      alert("Your account has been created......!please login");
      setUsername("");
      setEmail("");
      setPhone("");
      setPic("");
      setJoining("");
      setPlan("");
      navigate("/login");
    } catch (error) {
      if (error.response?.data) {
        console.log(error.response?.data);
        alert(error.response?.data);
      }
    }
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
              type="file"
              className="fileinput"
              accept=".png , .jpeg , .jpg"
              onChange={(e) => photoUpload(e.target.files[0])}
            />
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
