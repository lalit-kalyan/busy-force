import React, { useEffect, useState } from "react";
import "./adminList.css";
import { privateRequest } from "../../requestMethods";
import { Link } from "react-router-dom";

function AdminList() {
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    const getAdmins = async () => {
      const res = await privateRequest.get("/admin/all");
      //console.log(res.data);
      setAdmin(res.data);
    };
    getAdmins();
  }, []);
  return (
    <div className="adminList">
      {admin?.map((a) => (
        <div className="adminCard" key={a._id}>
          <img src={a.pic} alt="" className="adminListPic" />
          <span className="textTitle">{a.isAdmin ? "Admin" : "Not Admin"}</span>
          <span className="textTitle">{a.username}</span>
          <span className="textTitle alEmail">{a.email}</span>
          <span className="textTitle">{a.phone}</span>
          <div className="alButtons">
            <button>
              <Link className="link" to={`/admin/adminEdit/${a._id}`}>
                EDIT
              </Link>
            </button>
            <button>DELETE</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminList;
