import React, { useState } from "react";
import "./ShopProducts.css";

import Slider from "@mui/material/Slider";

import Images from "../../assets";

import { IoIosArrowDown } from "react-icons/io";
import { BsFillGrid3X2GapFill, BsFillGridFill } from "react-icons/bs";

import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";

export default function ShopProducts() {
  const [expand, setexpand] = useState({
    category: false,
    size: false,
    color: false,
    brand: false,
    price: false,
  });
  const [sliderValue, setsliderValue] = useState([0, 1000]);
  const minDistance = 100;
  function valuetext(value) {
    return `°C`;
  }
  const [gridColumns, setgridColumns] = useState("three");
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

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 1000 - minDistance);
        setsliderValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setsliderValue([clamped - minDistance, clamped]);
      }
    } else {
      setsliderValue(newValue);
    }
  };
  return (
    <>
      <div className="shop-products">
        <div className="filters">
          <div className="filters-header">
            <span>Filters</span>
            <span>clear all</span>
          </div>
          <hr />
          <div className="category">
            <div
              className="title"
              onClick={() => {
                setexpand({ ...expand, category: !expand.category });
              }}
            >
              <span>Category</span>
              <IoIosArrowDown
                className={`arrow ${expand.category ? "active" : ""}`}
              />
            </div>
            <div className={`items ${expand.category ? "active" : ""}`}>
              <div>
                <span>Furnitures</span>
                <span>8</span>
              </div>
              <div>
                <span>Decoration</span>
                <span>8</span>
              </div>
              <div>
                <span>Electronics</span>
                <span>8</span>
              </div>
              <div>
                <span>Armchairs & Chaises</span>
                <span>8</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="size">
            <div
              className="title"
              onClick={() => {
                setexpand({ ...expand, size: !expand.size });
              }}
            >
              <span>Size</span>
              <IoIosArrowDown
                className={`arrow ${expand.size ? "active" : ""}`}
              />
            </div>
            <div className={`items ${expand.size ? "active" : ""}`}>
              <label class="checkbox-container">
                Extra Small
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="checkbox-container">
                Small
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="checkbox-container">
                Medium
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="checkbox-container">
                Large
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="checkbox-container">
                Extra Large
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <hr />
          <div className="color">
            <div
              className="title"
              onClick={() => {
                setexpand({ ...expand, color: !expand.color });
              }}
            >
              <span>Colour</span>
              <IoIosArrowDown
                className={`arrow ${expand.color ? "active" : ""}`}
              />
            </div>
            <div className={`items ${expand.color ? "active" : ""}`}>
              <span className="red"></span>
              <span className="blue"></span>
              <span className="green"></span>
              <span className="violet"></span>
              <span className="black"></span>
            </div>
          </div>
          <hr />
          <div className="brand">
            <div
              className="title"
              onClick={() => {
                setexpand({ ...expand, brand: !expand.brand });
              }}
            >
              <span>Brand</span>
              <IoIosArrowDown
                className={`arrow ${expand.brand ? "active" : ""}`}
              />
            </div>
            <div className={`items ${expand.brand ? "active" : ""}`}>
              <label class="checkbox-container">
                Nike
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="checkbox-container">
                Geox
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="checkbox-container">
                Next
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="checkbox-container">
                River island
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <hr />
          <div className="price">
            <div
              className="title"
              onClick={() => {
                setexpand({ ...expand, price: !expand.price });
              }}
            >
              <span>Price</span>
              <IoIosArrowDown
                className={`arrow ${expand.price ? "active" : ""}`}
              />
            </div>
            <div className={`items ${expand.price ? "active" : ""}`}>
              <div className="price-text">
                <span className="text">
                  Price Range:{" "}
                  <span className="amount">{`$${sliderValue[0]}-$${sliderValue[1]}`}</span>
                </span>
              </div>
              <Slider
                getAriaLabel={() => "Minimum distance shift"}
                value={sliderValue}
                min={0}
                max={1000}
                onChange={handleChange2}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
              />
            </div>
          </div>
        </div>
        <div className="list-of-products">
          <div className="list-of-products-header">
            <span>{`showing ${12} of ${144}`}</span>
            <div className="right-end">
              <div className="sort">
                <span className="text">Sort by: </span>
                <select>
                  <option value="123" />
                </select>
              </div>
              <BsFillGridFill
                size={10}
                style={{ cursor: "pointer" }}
                onClick={() => setgridColumns("two")}
              />
              <BsFillGrid3X2GapFill
                style={{ cursor: "pointer" }}
                onClick={() => setgridColumns("three")}
              />
            </div>
          </div>
          <hr />
          <div className={`products-list ${gridColumns}`}>
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
        </div>
      </div>
      <Footer />
    </>
  );
}
