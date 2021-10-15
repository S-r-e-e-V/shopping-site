import React, { useState } from "react";
import "./ProductCard.css";

import { GoStar } from "react-icons/go";

export default function ProductCard({
  image,
  category,
  item,
  price,
  review,
  no_of_reviews,
}) {
  const [reviewStar, setreviewStar] = useState([0, 0, 0, 0, 0]);
  console.log(category);
  return (
    <div className="card">
      <img src={image} />
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
