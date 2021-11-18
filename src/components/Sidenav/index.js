import React, { useState, useRef, useEffect, useContext } from "react";
import "./Sidenav.css";

import { useHistory } from "react-router";

import { AiOutlineSearch } from "react-icons/ai";
import { AppContext } from "../../context/AppContext";

export default function Sidenav() {
  const history = useHistory();
  const ref = useRef();
  const { isopenSidenav, setisopenSidenav } = useContext(AppContext);
  // handle outside click
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setisopenSidenav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  // reroute form sidenav
  const reRoute = (url) => {
    history.push(url);
    setisopenSidenav(false);
  };
  return (
    <>
      <div className={`sidenav ${isopenSidenav ? "active" : ""}`} ref={ref}>
        <div className="search">
          <div className="search-product">
            <input placeholder="Search products ..." />
            <AiOutlineSearch className="search-icon" />
          </div>
        </div>
        <div className="header-titles">
          <span onClick={() => reRoute("/")}>Home</span>
          <span onClick={() => reRoute("/products")}>Shops</span>
        </div>
      </div>
      <div className={`sidenav-dim ${isopenSidenav ? "active" : ""}`}></div>
    </>
  );
}
