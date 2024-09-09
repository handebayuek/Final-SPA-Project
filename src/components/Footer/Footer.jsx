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
      <div className="footer">
        <div className="copy-part">
          <p className="footer-p">&copy; 2021 Company. All rights reserved.</p>
        </div>
        <div className="about-us">
          <h5>About Us</h5>
          <ul>
            <li href="">BotaniPure Mission</li>
            <li href="">Careers</li>
          </ul>
        </div>
        <div className="footer-icon">
          <h5>Follow Us</h5>
          <ul>
            <li
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} color="#1DA1F2" />
            </li>
            <li
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} color=" #e95950 " />
            </li>
            <li
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={24} color="#EE1D51" />
            </li>
            <li
              href="https://linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} color="#0A66C2" />
            </li>
          </ul>
        </div>

        <div className="footer-phone">
          <h5>Contact Us</h5>
          <p className="footer-p">📞 +1-234-567-890</p>
          <p className="footer-p">✉️ info@company.com</p>
        </div>
        <div className="customer-service">
          <h5>Customer Service</h5>
          <ul>
            <li href="">FAQ</li>
            <li href="">Shipping & Returns</li>
            <li href="">Contact Us</li>
          </ul>
        </div>

        <div className="your-account">
          <h5>Your Account</h5>
          <ul>
            <li href="">My Account</li>
            <li href="">Order History</li>
            <li href="">Wishlist</li>
          </ul>
        </div>

        <div className="footer-img">
          <img src={allnewpath} alt="all-logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
