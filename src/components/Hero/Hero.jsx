import React from "react";
import "./hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

function Hero() {
  const transition = { typeof: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="hero-l">
        <Header />
        <button className="pannel">ADMIN PANNEL</button>
        <div className="the-best-add">
          <motion.div
            initial={{ left: mobile ? "120px": "170px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness in the town</span>
        </div>
        {/* hero Headeing */}
        <div className="hero-text">
          <div>
            <span className="stroke-text ">Shape</span> YOUR<span></span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}

        <div className="figures">
          <div>
            <span>+20</span>
            <span>Expret Coachs</span>
          </div>
          <div>
            <span>+200</span> <span>Joined members</span>
          </div>
          <div>
            <span>+50</span> <span>fitness programs</span>
          </div>
        </div>
        {/* BUTTONS */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="hero-r">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={{ ...transition }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
