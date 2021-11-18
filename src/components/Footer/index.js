import React from "react";
import "./Footer.css";

import { CgFacebook, CgInstagram } from "react-icons/cg";
import { SiTwitter } from "react-icons/si";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
        <span>FAQ</span>
        <span>Contact us</span>
        <span>About us</span>
      </div>
      <div className="bottom">
        <div className="text">
          Copyright © 2021 Mala Store.All Rights Reserved.
        </div>
        {/* <div className="right-side">
          <span>Social Media</span>
          <CgFacebook className="social-icons fb" />
          <SiTwitter className="social-icons twitter" />
          <CgInstagram className="social-icons insta" />
        </div> */}
      </div>
    </div>
  );
}
