import React, { useState } from "react";
import "./addMember.css";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

function AddMember() {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [joining, setJoining] = useState("");
  const [plan, setPlan] = useState("");
  const [planId, setPlanId] = useState("silver");
  let navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await publicRequest.post("/members", {
        username,
        address,
        phone,
        email,
        joining,
        plan,
        planId,
      });
      alert("Your account has been created......!please login");
      setUsername("");
      setEmail("");
      setPhone("");
      setJoining("");
      setPlan("");
      setPlanId("");
      navigate("/admin/member-list");
    } catch (error) {
      if (error.response?.data) {
        console.log(error.response?.data);
        alert(error.response?.data);
      }
    }
  };

  return (
    <div className="addMember">
      <div className="generalForm">
        <div className="form-title">
          <span>ADD NEW MEMBER</span>
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
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
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
              type="number"
              placeholder="Add monthly amount"
              onChange={(e) => setPlan(e.target.value)}
            />

            <div className="loginplans">
              <label>Select a Plan</label>
              <select
                name="plans"
                defaultValue="silver"
                onChange={(e) => setPlanId(e.target.value)}
              >
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="platinum">Platinum</option>
                <option value="diamond">Diamond</option>
                <option value="silver"> Pro Silver</option>
                <option value="gold">Pro Gold</option>
                <option value="platinum">Pro Platinum</option>
                <option value="diamond">Pro Diamond</option>
              </select>
            </div>
            <button onClick={handleRegister}>ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMember;
