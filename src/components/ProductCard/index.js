import React, { useState } from "react";
import "./ProductCard.css";

import Images from "../../assets";

import { useHistory } from "react-router-dom";

import { GoStar } from "react-icons/go";

export default function ProductCard({
  image,
  image1,
  category,
  item,
  price,
  review,
  no_of_reviews,
}) {
  const history = useHistory();
  const [showImage, setshowImage] = useState(Images.productImg);
  const [reviewStar, setreviewStar] = useState([0, 0, 0, 0, 0]);

  const redirect = (url) => {
    history.push(url);
  };
  return (
    <div className="card" onClick={() => redirect("/product-details/1")}>
      <img
        className="product-img"
        src={showImage}
        onMouseOver={() => setshowImage(Images.hoverImg)}
        onMouseOut={() => setshowImage(Images.productImg)}
      />
      <div className="details">
        <span className="category">{category}</span>
        <span className="item">{item}</span>
        <span className="price">${price}</span>
        <div className="review">
          {reviewStar.map((item, index) => (
            <GoStar size={20} style={index < review ? { color: "red" } : {}} />
          ))}
          <span>{`(${no_of_reviews} reviews)`}</span>
        </div>
      </div>
    </div>
  );
}
