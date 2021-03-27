import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer-container">
        <p>Follow Me:</p>
        <SocialIcon url="https://www.linkedin.com/in/arbazalam01" className="social-icons" bgColor="#dbf6e9" style={{ height: 35, width: 35 }}/>
        <SocialIcon url="https://github.com/arbazalam01" className="social-icons" bgColor="#dbf6e9" style={{ height: 35, width: 35 }}/>
        <SocialIcon url="https://www.instagram.com/_arbazalam" className="social-icons" bgColor="#dbf6e9" style={{ height: 35, width: 35 }}/>
      </div>
  );
};
export default Footer;
