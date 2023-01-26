import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo1.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <img src={Logo} className="logo" alt="logo" />
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <img
            src={Bars}
            alt="bars"
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            onClick={() => {
              setMenuOpen(true);
            }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="hero"
              onClick={() => {
                setMenuOpen(false);
              }}
              smooth={true}
            >
              Hero
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              onClick={() => {
                setMenuOpen(false);
              }}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="whyUs"
              onClick={() => {
                setMenuOpen(false);
              }}
              smooth={true}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              onClick={() => {
                setMenuOpen(false);
              }}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to=" testimonials"
              onClick={() => {
                setMenuOpen(false);
              }}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              onClick={() => {
                setMenuOpen(false);
              }}
              smooth={true}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="footer"
              onClick={() => {
                setMenuOpen(false);
              }}
              smooth={true}
            >
              footer
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
