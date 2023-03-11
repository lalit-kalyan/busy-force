import React, { useState } from "react";
import { IMAGE_URL, privateRequest } from "../../requestMethods";
import { useNavigate, useParams } from "react-router-dom";
import("./editAdmin.css");

function EditAdmin() {
  const [file, setFile] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const handleAdminUpdate = async () => {
    if (username || email || phone || isAdmin || file) {
      const data = new FormData();
      data.append("file", file);
      data.append("isAdmin", isAdmin);
      data.append("username", username);
      data.append("email", email);
      data.append("phone", phone);
      try {
        const res = await privateRequest.put(`/admin/${id}`, data);
        //console.log(res.data);
        alert("Admin has been updated.....!");
        navigate("/admin/adminList");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("atleast one value requried to updated");
    }
  };

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
            <input
              type="file"
              className="fileinputedit"
              accept=".png , .jpeg , .jpg"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile No."
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="activation">
              <label>Edit Activation</label>
              <select name="plans" onChange={(e) => setIsAdmin(e.target.value)}>
                <option>Select one </option>
                <option value="false">Deativate</option>
                <option value="true">Activate</option>
              </select>
            </div>

            <button onClick={handleAdminUpdate}>UPDATE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAdmin;
