import React from "react";
import { FaTwitter, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

/* const veganPath = "../../image/veganLogo.png";
const crueltyFreePath = "../../image/crueltyFree.png";
const allskintypePath = "../../image/allskintype.png"; */
const allnewpath = "../../image/allnew.png";

function Footer() {
  return (
    <footer>
      <div>
        <p className="footer-p">&copy; 2021 Company. All rights reserved.</p>
      </div>
      <div className="footer-icon">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} color="#1DA1F2" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} color=" #e95950 " />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={24} color="#EE1D51" />
        </a>
        <a href="https://linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} color="#0A66C2" />
        </a>
      </div>

      <div className="footer-phone">
        <p className="footer-p">📞 +1-234-567-890</p>
        <p className="footer-p">✉️ info@company.com</p>
      </div>

      <div className="footer-img">
        {/*  <img src={veganPath} alt="vegan" />
        <img src={crueltyFreePath} alt="crueltyfree" />
        <img src={allskintypePath} alt="allskintype" /> */}
        <img src={allnewpath} alt="all-logo" />
      </div>
    </footer>
  );
}

export default Footer;
