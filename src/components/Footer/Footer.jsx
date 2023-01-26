import React from "react";
import "./footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo1.png";

function Footer() {
  return (
    <div className="footer-contaioner">
      <hr />
      <div className="footer">
        <div className="social-link" >
          <img src={Github} alt="github" />
          <img src={Instagram} alt="instagram" />
          <img src={LinkedIn} alt="linkedin" />
        </div>
      </div>
      <div className="logo-f">
        <img src={Logo} alt="productLogo" />
      </div>
      <div className="blur footer-blur"></div>
      <div className="blur footer-blur-2"></div>
  
    </div>
  );
}

export default Footer;
