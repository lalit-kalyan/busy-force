import React, { useEffect } from "react";
import "./singleMember.css";
import { BsChatLeftText, BsPersonCheck, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { publicRequest } from "../../requestMethods";

function SingleMember({ member, activteMember }) {
  useEffect(() => {
    const deativate = async () => {
      try {
        publicRequest.put(`/members/deactivate/${member._id}`);
      } catch (error) {}
    };
    deativate();
  }, [member]);

  return (
    <>
      <div className={member.isActive ? "memberS" : "memberS notActive"}>
        <div className="memberDetailsS">
          <Link to="/admin/details/1234">
            <img src={member.pic} alt="member" />
          </Link>
          <span>{member.username} </span>
        </div>
        <div className="planId">
          <button className={`${member.planId}`}>{member.planId}</button>
        </div>
        <span>
          <Moment format="YYYY-MM-DD">{member.joining}</Moment>
        </span>
        <span>
          <Moment format="YYYY-MM-DD">{member.lastActive}</Moment>
        </span>
        <span>{member.plan}</span>
        <div className="membersButtonS">
          <button>
            <i>
              <BsChatLeftText />
            </i>
          </button>

          {member.isActive ? (
            <button className="deactiveBtn">
              <span onClick={() => activteMember(member._id)}>Activated</span>
            </button>
          ) : (
            <button className="activeBtn">
              <span onClick={() => activteMember(member._id)}> Activate</span>
              <i>
                <BsPersonCheck />
              </i>
            </button>
          )}
          <button>
            <BsTrash />
          </button>
        </div>
      </div>
    </>
  );
}

export default SingleMember;
