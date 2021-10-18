import React from "react";
import "./Footer.css";

import { CgFacebook, CgInstagram } from "react-icons/cg";
import { SiTwitter } from "react-icons/si";

export default function Footer() {
  return (
    <div className="footer">
      <div className="left-side">
        {/* <div className="text">
          Copyright © 2021 Mala Store.All Rights Reserved.
        </div> */}
        <div className="policies">
          <span>Terms of Use</span> | <span>Privacy Policy</span>
        </div>
        <div className="policies">
          <span>FAQ</span> | <span>Contact us</span>
        </div>
      </div>
      <div className="text">
        Copyright © 2021 Mala Store.All Rights Reserved.
      </div>
      <div className="right-side">
        <span>Social Media</span>
        <CgFacebook className="social-icons fb" />
        <SiTwitter className="social-icons twitter" />
        <CgInstagram className="social-icons insta" />
      </div>
    </div>
  );
}
