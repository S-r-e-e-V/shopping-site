import React, { useState, useRef } from "react";
import "./Home.css";

import Images from "../../assets";

import { FiTruck } from "react-icons/fi";
import { ImSpinner11 } from "react-icons/im";
import { CgHeadset } from "react-icons/cg";

import Banner from "../../components/Banner";
import VideoBanner from "../../components/VideoBanner";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";

export default function Home() {
  const featuredProducts = useRef();
  const topSelling = useRef();
  const [featuredProductsScroll, setfeaturedProductsScroll] = useState(0);
  const [topSellingScroll, settopSellingScroll] = useState(0);
  const [products, setproducts] = useState([
    {
      image: Images.productImg,
      image1: Images.sample,
      category: "women",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "women,men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
    {
      image: Images.sample,
      image1: Images.hoverImg,
      category: "men",
      item: "Blue Jacket",
      price: "70.45",
      review: 2,
      no_of_reviews: 2,
    },
  ]);
  console.log(
    topSellingScroll,
    topSelling?.current?.scrollWidth,
    topSelling?.current?.clientWidth
  );

  console.log(
    "featured",
    featuredProductsScroll,
    featuredProducts?.current?.scrollWidth,
    featuredProducts?.current?.clientWidth
  );
  return (
    <div className="home">
      <div className="banner-container">
        {/* <Banner />
        <Banner /> */}
        <div
          style={{
            border: "1px solid #000",
            height: "350px",
            flex: 3,
            marginRight: ".3rem",
          }}
        ></div>
        <div
          style={{ border: "1px solid #000", height: "350px", flex: 1 }}
        ></div>
      </div>
      <div className="video-container">
        <VideoBanner video={Images.video5} />
        <VideoBanner video={Images.video5} />
        <VideoBanner video={Images.video5} />
        <VideoBanner video={Images.video5} />
        <VideoBanner video={Images.video5} />
      </div>
      <div className="services">
        <div className="delivery">
          <FiTruck className="truck-svg" />
          <div className="services-text">
            <span className="services-heading">payment & delivery</span>
            <span className="services-subheading">
              Free shipping for orders over $50
            </span>
          </div>
        </div>
        <div className="returns">
          <ImSpinner11 className="spinner-svg" />
          <div className="services-text">
            <span className="services-heading">Return & Refund</span>
            <span className="services-subheading">
              Free 100% money back guarantee
            </span>
          </div>
        </div>
        <div className="quality">
          <CgHeadset className="headset-svg" />
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
            <ProductCard productDetails={item} />
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
              featuredProductsScroll ===
              featuredProducts?.current?.scrollWidth / 4
                ? "active"
                : "hide"
            }`}
            onClick={() => {
              featuredProducts.current.scrollLeft =
                featuredProducts.current.scrollWidth / 4;
              setfeaturedProductsScroll(
                featuredProducts.current.scrollWidth / 4
              );
            }}
          ></span>
          <span
            className={`dot ${
              featuredProductsScroll ===
              (featuredProducts?.current?.scrollWidth * 2) / 4
                ? "active"
                : "hide"
            }`}
            onClick={() => {
              featuredProducts.current.scrollLeft =
                (featuredProducts.current.scrollWidth * 2) / 4;
              setfeaturedProductsScroll(
                (featuredProducts.current.scrollWidth * 2) / 4
              );
            }}
          ></span>
          <span
            className={`dot ${
              featuredProductsScroll ===
              (featuredProducts?.current?.scrollWidth * 3) / 4
                ? "active"
                : "hide"
            }`}
            onClick={() => {
              featuredProducts.current.scrollLeft =
                (featuredProducts?.current?.scrollWidth * 3) / 4;
              setfeaturedProductsScroll(
                (featuredProducts.current.scrollWidth * 3) / 4
              );
            }}
          ></span>
          <span
            className={`dot ${
              featuredProductsScroll === featuredProducts?.current?.scrollWidth
                ? "active"
                : "hide"
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
            <ProductCard productDetails={item} ishoverImage={true} />
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
            className={`dot ${
              topSellingScroll === topSelling?.current?.scrollWidth / 4
                ? "active"
                : "hide"
            }`}
            onClick={() => {
              topSelling.current.scrollLeft =
                topSelling.current.scrollWidth / 4;
              settopSellingScroll(topSelling.current.scrollWidth / 4);
            }}
          ></span>
          <span
            className={`dot ${
              topSellingScroll === (topSelling?.current?.scrollWidth * 2) / 4
                ? "active"
                : "hide"
            }`}
            onClick={() => {
              topSelling.current.scrollLeft =
                (topSelling.current.scrollWidth * 2) / 4;
              settopSellingScroll((topSelling.current.scrollWidth * 2) / 4);
            }}
          ></span>
          <span
            className={`dot ${
              topSellingScroll === (topSelling?.current?.scrollWidth * 3) / 4
                ? "active"
                : "hide"
            }`}
            onClick={() => {
              topSelling.current.scrollLeft =
                (topSelling?.current?.scrollWidth * 3) / 4;
              settopSellingScroll((topSelling.current.scrollWidth * 3) / 4);
            }}
          ></span>
          <span
            className={`dot ${
              topSellingScroll === topSelling?.current?.scrollWidth
                ? "active"
                : "hide"
            }`}
            onClick={() => {
              topSelling.current.scrollLeft = topSelling.current.scrollWidth;
              settopSellingScroll(topSelling.current.scrollWidth);
            }}
          ></span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
