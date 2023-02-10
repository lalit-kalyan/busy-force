import React from "react";
import "./memberDetails.css";
import Pic from "../../assets/t-image1.png";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";

function MemberDetails() {
  const active = false;
  return (
    <div className="details">
      <div className="d-left">
        <div className="d-left-back"></div>
        <img src={Pic} alt="" />
        <div>
          <span>MITTHU KALYAN</span>
          <span>M.no. 9802070101</span>
        </div>
      </div>
      <div className="d-right">
        {active ? (
          <div className="deactivate">
            <span>PLAN VALID</span>
          </div>
        ) : (
          <div className="activate">
            <span>PLAN EXPIRED</span>
          </div>
        )}

        <div className="d-div">
          <span className="da">ACTIVE PLAN : </span>
          <span className="da dd">SILVER</span>
        </div>

        <div className="d-div">
          <span className="da">ADDRESS : </span>
          <span className="da dd">SHAMGARH</span>
        </div>

        <div className="dates">
          <div className="d-div">
            <span className="da">JOINING DATE -</span>
            <span className="da dd">2023-08-14 </span>
          </div>
          <div className="d-div">
            <span className="da">PLAN START -</span>
            <span className="da dd">2023-08-14 </span>
          </div>
          <div className="d-div">
            <span className="da">PLAN END -</span>
            <span className="da dd">2023-08-14 </span>
          </div>
        </div>

        <div className="detailButton">
          <button>
            <Link to="/admin/editMember" className="link">
              <span>Edit</span>
              <BsPencilSquare />
            </Link>
          </button>
          <button>DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default MemberDetails;
