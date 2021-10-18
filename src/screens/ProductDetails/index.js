import React, { useState } from "react";
import "./ProductDetails.css";

import Images from "../../assets";

import { GoStar } from "react-icons/go";
import Footer from "../../components/Footer";

export default function ProductDetails() {
  let review = 2;
  const [reviewStar, setreviewStar] = useState([0, 0, 0, 0, 0]);
  const [quantity, setquantity] = useState(1);
  const [qtyError, setqtyError] = useState("");
  const [previewImage, setPreviewImage] = useState(Images.sample);
  const [boxDisplayContent, setboxDisplayContent] = useState("d");
  const [style, setstyle] = useState({
    backgroundImage: `url(${previewImage})`,
    backgroundPosition: "0% 0%",
  });
  const substractQty = () => {
    if (quantity !== 1) {
      setquantity(quantity - 1);
    }
  };
  const addQty = () => {
    if (quantity !== 5) {
      setquantity(quantity + 1);
    }
  };
  const Validate = (value) => {
    if (value.match("/^[1-9]d*$/s")) {
      console.log("fsf");
    }
    if (!value) {
      setqtyError("Please specify the quantity");
      setquantity(value);
    } else if (!value.match(/^[1-9]\d*$/s)) {
      setqtyError("Invalid input");
      setquantity(value);
    } else {
      setquantity(parseInt(value.trim()));
      setqtyError("");
    }
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setstyle({
      ...style,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "800px",
    });
  };
  console.log(style);
  return (
    <div className="product-details">
      <div className="section1">
        <div className="product-images">
          <div className="images-list">
            <div className="side-image">
              <img src={Images.sample} />
            </div>
            <div
              className="side-image"
              onClick={() => {
                setPreviewImage(Images.banner_img);
                setstyle({
                  backgroundImage: `url(${Images.banner_img})`,
                  backgroundPosition: "0% 0%",
                });
              }}
            >
              <img src={Images.banner_img} />
            </div>
            <div className="side-image">
              <img src={Images.sample} />
            </div>
          </div>
          <figure onMouseMove={handleMouseMove} style={style}>
            <img src={previewImage} />
          </figure>
        </div>
        <div className="product-info">
          <div className="product-title">Tie-detail top</div>
          <div className="review">
            {reviewStar.map((item, index) => (
              <GoStar
                size={20}
                style={index < review ? { color: "red" } : {}}
              />
            ))}
            <div>{`(${"2"} reviews)`}</div>
          </div>
          <div className="price">
            <div className="offer-price">$50.25</div>
            <div className="original-price">$50.25</div>
          </div>
          <div className="content">
            Morbi purus libero, faucibus adipiscing, commodo quis, gravida id,
            est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
            neque euismod dui, eu pulvinar nunc sapien
          </div>
          <div className="qty">
            <div className="qty-label">Quantity</div>
            <div className="qty-field">
              <input
                className="input-field"
                value={quantity}
                onChange={(e) => {
                  Validate(e.target.value);
                }}
              />
              <span className="minus" onClick={substractQty}>
                -
              </span>
              <span className="plus" onClick={addQty}>
                +
              </span>
            </div>
            <div className="error">{qtyError}</div>
          </div>
          <div className="purchase-button">Purchase</div>
          <hr />
          <div className="category">
            Category:Men,Clothing,Fashion & clothing,Women
          </div>
        </div>
      </div>
      <div className="additional-info">
        <div className="add-info-titles">
          <span
            onClick={() => setboxDisplayContent("d")}
            style={
              boxDisplayContent === "d"
                ? { borderBottom: "2px solid #000000" }
                : {}
            }
          >
            Description
          </span>
          <span
            onClick={() => setboxDisplayContent("a")}
            style={
              boxDisplayContent === "a"
                ? { borderBottom: "2px solid #000000" }
                : {}
            }
          >
            Additional Information
          </span>
          <span
            onClick={() => setboxDisplayContent("s")}
            style={
              boxDisplayContent === "s"
                ? { borderBottom: "2px solid #000000" }
                : {}
            }
          >
            Shipping & Returns
          </span>
          <span
            onClick={() => setboxDisplayContent("r")}
            style={
              boxDisplayContent === "r"
                ? { borderBottom: "2px solid #000000" }
                : {}
            }
          >
            Reviews (2)
          </span>
        </div>
        <div className="additional-info-details">
          <div
            className="description"
            style={boxDisplayContent === "d" ? { display: "block" } : {}}
          >
            Product Information Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
            malesuada erat ut turpis. Suspendisse urna viverra non, semper
            suscipit, posuere a, pede. Donec nec justo eget felis facilisis
            fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
            pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a
            lectus. Donec consectetuer ligula vulputate sem tristique cursus.
            Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.
            Vivamus finibus vel mauris ut vehicula. Nullam a magna porttitor,
            dictum risus nec, faucibus sapien. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
            eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non,
            semper suscipit, posuere a, pede. Donec nec justo eget felis
            facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean
            dignissim pellentesque felis. Phasellus ultrices nulla quis nibh.
            Quisque a lectus. Donec consectetuer ligula vulputate sem tristique
            cursus.
          </div>
          <div
            className="add-info"
            style={boxDisplayContent === "a" ? { display: "block" } : {}}
          >
            Product Information Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
            malesuada erat ut turpis. Suspendisse urna viverra non, semper
            suscipit, posuere a, pede. Donec nec justo eget felis facilisis
            fermentum. Aliquam porttitor mauris sit amet orci.
          </div>
          <div
            className="shipping"
            style={boxDisplayContent === "s" ? { display: "block" } : {}}
          >
            Product Information Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
            malesuada erat ut turpis. Suspendisse urna viverra non, semper
            suscipit, posuere a, pede. Donec nec justo eget felis facilisis
            fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
            pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a
            lectus. Donec consectetuer ligula vulputate sem tristique cursus.
            Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.
            Vivamus finibus vel mauris ut vehicula. Nullam a magna porttitor,
            dictum risus nec, faucibus sapien. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
            eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non,
            semper suscipit, posuere a, pede. Donec nec justo eget felis
            facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean
            dignissim pellentesque felis. Phasellus ultrices nulla quis nibh.
            Quisque a lectus. Donec consectetuer ligula vulputate sem tristique
            cursus.
          </div>
          <div
            className="reviews"
            style={boxDisplayContent === "r" ? { display: "block" } : {}}
          >
            Product Information Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
            malesuada erat ut turpis. Suspendisse urna viverra non, semper
            suscipit, posuere a, pede. Donec nec justo eget felis facilisis
            fermentum. Aliquam porttitor mauris sit amet orci.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
