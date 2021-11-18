import React from "react";
import "./Header.css";

import { useHistory } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

import Images from "../../assets";

export default function Header() {
  const history = useHistory();
  const redirect = (url) => {
    history.push(url);
  };
  return (
    <div className="header">
      <div className="first-layer">
        <div className="logo-container">
          {/* <FiMenu className="menu-bar" size="30" /> */}
          <img src={Images.logo} />
        </div>
        <div className="search">
          <div className="search-product">
            <input placeholder="Search products ..." />
            <AiOutlineSearch className="search-icon" />
          </div>
        </div>
      </div>
      <div className="header-titles">
        <span className="title-text" onClick={() => redirect("/")}>
          Browse Categories
        </span>
        <span className="title-text" onClick={() => redirect("/")}>
          Home
        </span>
        <span className="title-text" onClick={() => redirect("/products")}>
          Shops
        </span>
      </div>
    </div>
  );
}
