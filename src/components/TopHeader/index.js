import React, { useContext, useState } from "react";
import "./TopHeader.css";

import { AppContext } from "../../context/AppContext";

import { CgFacebook, CgInstagram } from "react-icons/cg";
import { SiTwitter } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

export default function TopHeader() {
  const { containerScrollTop } = useContext(AppContext);
  return (
    <div
      className="top-header"
      style={containerScrollTop > 20 ? { display: "none" } : {}}
    >
      <div className="phone-number">
        <a href="https://wa.me/1234567899" target="_blank">
          <IoLogoWhatsapp className="social-icons whatsapp" />
          <span>+1234567899</span>
        </a>
      </div>
      <div className="social-media">
        <span>Social Media</span>
        <CgFacebook className="social-icons fb" />
        <SiTwitter className="social-icons twitter" />
        <CgInstagram className="social-icons insta" />
      </div>
    </div>
  );
}
