import React, { useState } from "react";
import "./ProductCard.css";

import Images from "../../assets";

import { useHistory } from "react-router-dom";

import { GoStar } from "react-icons/go";

export default function ProductCard({ productDetails, ishoverImage = true }) {
  const history = useHistory();
  const [showImage, setshowImage] = useState(productDetails.image);
  const [reviewStar, setreviewStar] = useState([0, 0, 0, 0, 0]);

  const redirect = (url) => {
    history.push(url);
  };

  return (
    <div
      className="card"
      onClick={() => redirect("/product-details/1")}
      onMouseOver={() => ishoverImage && setshowImage(Images.hoverImg)}
      onMouseOut={() => ishoverImage && setshowImage(productDetails.image)}
    >
      <img className="product-img" src={showImage} />
      <div className="details">
        <span className="category">{productDetails.category}</span>
        <span className="item">{productDetails.item}</span>
        <span className="price">${productDetails.price}</span>
        <div className="review">
          {reviewStar.map((item, index) => (
            <GoStar
              size={17}
              className={`review-star ${
                index < productDetails.review ? "rated" : ""
              }`}
            />
          ))}
          <span>{`(${productDetails.no_of_reviews} reviews)`}</span>
        </div>
      </div>
    </div>
  );
}
