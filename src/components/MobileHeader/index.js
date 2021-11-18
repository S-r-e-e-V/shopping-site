import React, { useContext } from "react";
import "./MobileHeader.css";

import { AppContext } from "../../context/AppContext";

import { FiMenu } from "react-icons/fi";
import Images from "../../assets/index";

export default function MobileHeader() {
  const { setisopenSidenav } = useContext(AppContext);
  return (
    <div className="mobile-header">
      <FiMenu className="handburg" onClick={() => setisopenSidenav(true)} />
      <img src={Images.logo} />
    </div>
  );
}
