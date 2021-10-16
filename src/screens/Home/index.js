import React, { useState, useRef } from "react";
import "./Home.css";

import Images from "../../assets";

import { FiTruck } from "react-icons/fi";
import { ImSpinner11 } from "react-icons/im";
import { CgHeadset } from "react-icons/cg";

import Banner from "../../components/Banner";
import VideoBanner from "../../components/VideoBanner";
import ProductCard from "../../components/ProductCard";

export default function Home() {
  const featuredProducts = useRef();
  const topSelling = useRef();
  const [featuredProductsScroll, setfeaturedProductsScroll] = useState(0);
  const [topSellingScroll, settopSellingScroll] = useState(0);
  const [products, setproducts] = useState([
    {
      image: Images.sample,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
  ]);
  return (
    <div className="home">
      <div className="banner-container">
        <Banner />
        <Banner />
      </div>
      <div className="video-container">
        <VideoBanner video={Images.video1} />
        <VideoBanner video={Images.video2} />
        <VideoBanner video={Images.video1} />
        <VideoBanner video={Images.video1} />
      </div>
      <div className="services">
        <div className="delivery">
          <FiTruck size={30} />
          <div className="services-text">
            <span className="services-heading">payment & delivery</span>
            <span className="services-subheading">
              Free shipping for orders over $50
            </span>
          </div>
        </div>
        <div className="returns">
          <ImSpinner11 size={30} />
          <div className="services-text">
            <span className="services-heading">Return & Refund</span>
            <span className="services-subheading">
              Free 100% money back guarantee
            </span>
          </div>
        </div>
        <div className="quality">
          <CgHeadset size={30} />
          <div className="services-text">
            <span className="services-heading">Quality Support</span>
            <span className="services-subheading">
              Alway online feedback 24/7
            </span>
          </div>
        </div>
      </div>
      <div className="featured-products">
        <span className="featured-title">Featured Products</span>
        <div className="featured-product-list" ref={featuredProducts}>
          {products.map((item, index) => (
            <ProductCard
              image={item.image}
              category={item.category}
              item={item.item}
              price={item.price}
              review={item.review}
              no_of_reviews={item.no_of_reviews}
            />
          ))}
        </div>
        <div className="scroll-ctrl">
          <span
            className={`dot ${
              featuredProductsScroll === 0 ? "active" : "hide"
            }`}
            onClick={() => {
              featuredProducts.current.scrollLeft = 0;
              setfeaturedProductsScroll(0);
            }}
          ></span>
          <span
            className={`dot ${
              featuredProductsScroll !== 0 ? "active" : "hide"
            }`}
            onClick={() => {
              featuredProducts.current.scrollLeft =
                featuredProducts.current.scrollWidth;
              setfeaturedProductsScroll(featuredProducts.current.scrollWidth);
            }}
          ></span>
        </div>
      </div>
      <div className="top-selling-products">
        <span className="top-selling-title">Top Selling</span>
        <div className="top-selling-product-list" ref={topSelling}>
          {products.map((item, index) => (
            <ProductCard
              image={item.image}
              category={item.category}
              item={item.item}
              price={item.price}
              review={item.review}
              no_of_reviews={item.no_of_reviews}
            />
          ))}
        </div>
        <div className="scroll-ctrl">
          <span
            className={`dot ${topSellingScroll === 0 ? "active" : "hide"}`}
            onClick={() => {
              topSelling.current.scrollLeft = 0;
              settopSellingScroll(0);
            }}
          ></span>
          <span
            className={`dot ${topSellingScroll !== 0 ? "active" : "hide"}`}
            onClick={() => {
              topSelling.current.scrollLeft = topSelling.current.scrollWidth;
              settopSellingScroll(topSelling.current.scrollWidth);
            }}
          ></span>
        </div>
      </div>
    </div>
  );
}
