import React from "react";
import "./plans.css";
import { plansData, ProPlansData } from "../../data/plansData";
import WhiteTick from "../../assets/whiteTick.png";
import { BsArrowRight } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";

function Plans() {
  return (
    <div className="plans-container">
      <div className="blur plans-blur"></div>
      <div className="blur plans-blur-2"></div>

      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      {/* plans Card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>
              <span className="rupee">
                <BiRupee />
              </span>
              {plan.price}
            </span>
            <div className="features">
              {plan.features.map((f, i) => (
                <div className="feature" key={i}>
                  <img src={WhiteTick} alt="tick" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div>
              <span
                style={{
                  display: "flex ",
                  alineItem: "center",
                  gap: ".5rem",
                  justifyContent: "center",
                }}
              ></span>
            </div>
          </div>
        ))}
      </div>

      <div className="plans">
        {ProPlansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>
              <span className="rupee">
                <BiRupee />
              </span>
              {plan.price}
            </span>
            <div className="features">
              {plan.features.map((f, i) => (
                <div className="feature" key={i}>
                  <img src={WhiteTick} alt="tick" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div>
              <span
                style={{
                  display: "flex ",
                  alineItem: "center",
                  gap: ".5rem",
                  justifyContent: "center",
                }}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
