import React, { useEffect, useState } from "react";
import "./memberDetails.css";
import { Link } from "react-router-dom";
import {
  BsPencilSquare,
  BsFillPersonCheckFill,
  BsFillPersonXFill,
} from "react-icons/bs";
import { useParams } from "react-router-dom";
import { privateRequest } from "../../requestMethods";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getmembersDetails = async () => {
      try {
        const res = await privateRequest.get(`/members/${id}`);
        setMember(res.data);
      } catch (error) {}
    };
    getmembersDetails();
  }, [id]);

  const deleteMember = async () => {
    try {
      await privateRequest.delete(`/members/${id}`);
      alert("the members has been delete......!");
      navigate("/admin/member-list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="details">
      <div className="d-left">
        <div className="d-left-back"></div>
        <img src={member.pic} alt="" />
        <div>
          <span style={{ textTransform: "uppercase" }}>{member.username}</span>
          <span>M.no. {member.phone}</span>
        </div>
        <div className="actvBtns">
          <button className="activatebtn btnone ">
            <i>
              <BsFillPersonCheckFill />
            </i>
          </button>
          <button className="activatebtn btnTwo">
            <i>
              <BsFillPersonXFill />
            </i>
          </button>
        </div>
      </div>
      <div className="d-right">
        {member.isActive ? (
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
          <span className="da dd">{member.planId}</span>
        </div>

        <div className="d-div">
          <span className="da">AMOUNT - </span>
          <span className="da dd">{member.plan}/month</span>
        </div>

        <div className="dates">
          <div className="d-div">
            <span className="da">JOINING DATE -</span>
            <span className="da dd">
              <Moment format="YYYY-MM-DD">{member.joining}</Moment>
            </span>
          </div>
          <div className="d-div">
            <span className="da">PLAN START -</span>
            <span className="da dd">
              <Moment format="YYYY-MM-DD">{member.lastActive}</Moment>
            </span>
          </div>
          <div className="d-div">
            <span className="da">PLAN END -</span>
            <span className="da dd">
              <Moment format="YYYY-MM-DD">{member.lastActive}</Moment>{" "}
            </span>
          </div>
        </div>

        <div className="detailButton">
          <button>
            <Link to={`/admin/editMember/${member._id}`} className="link">
              <span>Edit</span>
              <BsPencilSquare />
            </Link>
          </button>
          <button onClick={deleteMember}>DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default MemberDetails;
