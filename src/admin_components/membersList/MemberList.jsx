import React from "react";
import "./memberList.css";
import SingleMember from "../singleMember/SingleMember";
import { Link } from "react-router-dom";

function MemberList() {
  return (
    <div className="memberList">
      <div className="memberListbar">
        <div>
          <input type="text" />
          <button>Search</button>
        </div>
        <div>
          <button>
            <Link to="/admin/editMember" className="link">
              NEW MEMBER
            </Link>
          </button>
        </div>
      </div>

      <div className="member">
        <div className="memberDetails">
          <span>Member Details</span>
        </div>
        <span>Joining Date</span>
        <span>ACtive Pack</span>
        <div className="membersButton">
          <span>Activity</span>
        </div>
      </div>
      <div className="allMembers">
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
        <SingleMember />
      </div>
    </div>
  );
}

export default MemberList;
