import React from "react";
import "./Header.css";

import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

import Images from "../../assets";

export default function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        {/* <FiMenu className="menu-bar" size="30" /> */}
        <img src={Images.logo} />
      </div>
      <div className="header-titles">
        <span className="title-text">Home</span>
        <span className="title-text">Shops</span>
        <span className="title-text">Sample</span>
      </div>
      <div className="search">
        <div className="search-product">
          <input placeholder="Search Products" />
          <AiOutlineSearch className="search-icon" />
        </div>
      </div>
    </div>
  );
}
