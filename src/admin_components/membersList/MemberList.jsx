import React, { useEffect, useState } from "react";
import "./memberList.css";
import SingleMember from "../singleMember/SingleMember";
import { Link } from "react-router-dom";
import { privateRequest, publicRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";

function MemberList() {
  const [membersList, setMemberList] = useState([]);
  let navigate = useNavigate();
  const memberActivate = async (id) => {
    try {
      const res = await privateRequest.put(`/members/activate/${id}`);
      console.log(res.data);
      navigate("/admin/treasury");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getMembers = async () => {
      try {
        const res = await publicRequest.get("/members/all");
        //console.log(res.data);
        setMemberList(res.data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    };
    getMembers();
  }, []);

  return (
    <div className="memberList">
      <div className="memberListbar">
        <div>
          <input type="text" />
          <button>Search</button>
        </div>
        <div>
          <button>
            <Link to="/admin/add-member" className="link">
              ADD NEW MEMBER
            </Link>
          </button>
        </div>
      </div>

      <div className="member">
        <div className="memberDetails">
          <span>Member Details</span>
        </div>
        <span className="planId2">Plan</span>
        <span>Joining Date</span>

        <span>Last Active</span>
        <span className="price">$-Price</span>
        <div className="membersButton">
          <span>Activity</span>
        </div>
      </div>
      <div className="allMembers">
        {membersList?.map((m) => (
          <SingleMember key={m._id} member={m} activteMember={memberActivate} />
        ))}
      </div>
    </div>
  );
}

export default MemberList;
