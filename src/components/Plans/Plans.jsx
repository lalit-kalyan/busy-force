import React from "react";
import "./plans.css";
import { plansData } from "../../data/plansData";
import WhiteTick from "../../assets/whiteTick.png";

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
            <span> $ {plan.price}</span>
            <div className="features">
              {plan.features.map((f, i) => (
                <div className="feature" key={i}>
                  <img src={WhiteTick} alt="" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -></span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
