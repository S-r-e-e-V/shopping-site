import React, { useState } from "react";
import "./ProductDetails.css";

import Images from "../../assets";

import { useHistory } from "react-router";

import { GoStar } from "react-icons/go";
import { FaPlay } from "react-icons/fa";

import Modal from "react-modal";

import Footer from "../../components/Footer";

export default function ProductDetails() {
  let review = 2,
    sideimages = [0, 0, 0, 0];

  const history = useHistory();

  let subtitle;
  const [reviewStar, setreviewStar] = useState([0, 0, 0, 0, 0]);
  const [quantity, setquantity] = useState(1);
  const [qtyError, setqtyError] = useState("");
  const [previewImage, setPreviewImage] = useState(Images.productImg1);
  const [selectedImageId, setselectedImageId] = useState(0);
  const [boxDisplayContent, setboxDisplayContent] = useState("d");
  const [isOpenModal, setisOpenModal] = useState(false);
  const [style, setstyle] = useState({
    backgroundImage: `url(${previewImage})`,
    backgroundPosition: "0% 0%",
  });
  // quantity
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
  // purchase
  const purchase = () => {
    history.push("/shopping-cart");
  };
  // quantity validation
  const Validate = (value) => {
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
  // image preview functions 🌉
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
  const handleSideImage = (img, index) => {
    setPreviewImage(img);
    setselectedImageId(index);
    setstyle({
      backgroundImage: `url(${img})`,
      backgroundPosition: "0% 0%",
    });
  };

  // custom modal styles
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const closeModal = () => {
    setisOpenModal(false);
  };
  return (
    <div className="product-details">
      <div className="section1">
        <div className="product-images">
          <div className="images-list">
            {sideimages.map((item, index) => (
              <>
                {index !== 2 ? (
                  <div
                    className={`side-image ${
                      selectedImageId === index ? "selected" : ""
                    }`}
                    onClick={() => handleSideImage(Images.productImg1, index)}
                  >
                    <img src={Images.productImg1} />
                  </div>
                ) : (
                  <div
                    className="side-video"
                    onClick={() => setisOpenModal(true)}
                  >
                    <img src={Images.productImg1} />
                    <FaPlay className="play-icon" />
                  </div>
                )}
              </>
            ))}
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
                size={17}
                className={`review-star ${index < review ? "rated" : ""}`}
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
          <div className="purchase-button" onClick={() => purchase()}>
            Purchase
          </div>
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
      {/* modal */}
      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <video width="240" height="240" autoPlay={true} loop muted={true}>
          <source src={Images.video1} type="video/mp4" />
        </video>
      </Modal>
    </div>
  );
}
