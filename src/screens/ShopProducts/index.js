import React, { useState } from "react";
import "./ShopProducts.css";

import Images from "../../assets";

import { IoIosArrowDown } from "react-icons/io";
import { BsFillGrid3X2GapFill, BsFillGridFill } from "react-icons/bs";

import ProductCard from "../../components/ProductCard";

export default function ShopProducts() {
  const [expand, setexpand] = useState({
    category: false,
    size: false,
    color: false,
    brand: false,
    price: false,
  });
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
  return (
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
            <div>Furnitures</div>
            <div>Furnitures</div>
            <div>Furnitures</div>
            <div>Furnitures</div>
            <div>Furnitures</div>
          </div>
        </div>
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
            <div>Extra Small</div>
            <div>Small</div>
            <div>Medium</div>
            <div>Large</div>
            <div>Extra Large</div>
          </div>
        </div>
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
            <div>Nike</div>
            <div>Geox</div>
            <div>Nike</div>
            <div>Nike</div>
            <div>Nike</div>
          </div>
        </div>
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
            <div className="price">
              <span className="text">
                Price Range: <span className="amount">{`$${0}-$${1000}`}</span>
              </span>
            </div>
            <div className="range"></div>
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
  );
}
