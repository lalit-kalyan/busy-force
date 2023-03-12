import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./adminRegister.css";
import { publicRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";

function AdminRegister() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", file);
    data.append("username", username);
    data.append("phone", phone);
    data.append("email", email);

    try {
      //console.log(newAdmin);

      await publicRequest.post("/admin", data);
      alert("Your account has been created......!please login");
      setUsername("");
      setEmail("");
      setPhone("");
      setFile(null);
      navigate("/adminLogin");
    } catch (error) {
      if (error.response?.data) {
        console.log(error.response?.data);
        alert(error.response?.data);
      }
    }
  };

  return (
    <div className="adminRegister">
      <div className="generalForm">
        <div className="form-title">
          <span>ADMIN REGISTER</span>
        </div>
        <div className="formContainer">
          <div className="form-box-l">
            <img
              src="https://images.unsplash.com/photo-1638805981949-362f5964521e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt="box"
            />
          </div>
          <div className="form-box-r">
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                backgroundColor: "orange",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              <label> Select a photo</label>
              <input
                type="file"
                accept=".png , .jpeg , .jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="gym@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="9802980200"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            <Link to="/login">
              <span>if you have already register? login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminRegister;
