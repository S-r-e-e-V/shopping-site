import React, { useState } from "react";
import "./ProductDetailsCard.css";

import { useHistory } from "react-router-dom";

import { GoStar } from "react-icons/go";

export default function ProductDetailsCard({ productDetails }) {
  const history = useHistory();
  const [reviewStar, setreviewStar] = useState([0, 0, 0, 0, 0]);

  const redirect = (url) => {
    history.push(url);
  };

  return (
    <div className="desc-card" onClick={() => redirect("/product-details/1")}>
      <img src={productDetails.image} />
      <div className="list-item-desc">
        <div className="category">{productDetails.category}</div>
        <div className="title">{productDetails.item}</div>
        <div className="description">
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing.
          Sed lectus.
        </div>
      </div>
      <div className="list-item-details">
        <div className="price">$75.00</div>
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
