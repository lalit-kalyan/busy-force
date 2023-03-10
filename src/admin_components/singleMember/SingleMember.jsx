import React, { useEffect } from "react";
import "./singleMember.css";
import { BsChatLeftText, BsPersonCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { privateRequest } from "../../requestMethods";

function SingleMember({ member, activteMember }) {
  // console.log(member);

  useEffect(() => {
    const today = new Date();
    const memberDate = new Date(member.lastActive);
    //console.log(memberDate , today);
    const sendMessage = async () => {
      if (member.isActive === false) {
        try {
          await privateRequest.post("/message");
          alert("message sent.....!");
        } catch (error) {}
        console.log("message sent");
      }
    };
    if (memberDate === today) {
      sendMessage();
    }
  }, [member.lastActive, member.isActive]);

  useEffect(() => {
    const deativate = async () => {
      try {
        privateRequest.put(`/members/deactivate/${member._id}`);
      } catch (error) {
        console.log(error);
      }
    };
    deativate();
  }, [member._id]);

  const initial = member.username.split("")[0]
  

  return (
    <>
      <div className={member.isActive ? "memberS" : "memberS notActive"}>
        <div className="memberDetailsS">
          <Link className="link" to={`/admin/details/${member._id}`}>
            <div className="initials " >
              <h3 className="initLetter" >{initial}</h3>
            </div>
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
        </div>
      </div>
    </>
  );
}

export default SingleMember;
