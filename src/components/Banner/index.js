import React from "react";
import "./Banner.css";

import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Images from "../../assets";

export default function Banner(img, height) {
  return (
    <div className="banner">
      <img src={Images.banner_img} />
      <div className="text">
        <span>SHOP MEN'S</span>
      </div>
    </div>
  );
}
