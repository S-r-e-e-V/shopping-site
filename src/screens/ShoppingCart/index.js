import React, { useState } from "react";
import "./ShoppingCart.css";

import Images from "../../assets";

import { MdOutlineClose } from "react-icons/md";
import { FiRefreshCw } from "react-icons/fi";

import { useHistory } from "react-router";

export default function ShoppingCart() {
  const history = useHistory();
  //   const [quantity, setquantity] = useState(1);
  //   const [qtyError, setqtyError] = useState("");
  const [cartProducts, setcartProducts] = useState([
    {
      id: 1,
      image: Images.hoverImg,
      name: "Jacket",
      price: 70.2,
      quantity: 1,
      totalPrice: 120,
    },
    {
      id: 2,
      image: Images.hoverImg,
      name: "abcd",
      price: 70.2,
      quantity: 3,
      totalPrice: 120,
    },
    {
      id: 3,
      image: Images.hoverImg,
      name: "qwerty",
      price: 70.2,
      quantity: 2,
      totalPrice: 120,
    },
  ]);

  // quantity
  const substractQty = (index) => {
    if (cartProducts[index].quantity !== 1) {
      //   setquantity(quantity - 1);
      setcartProducts([
        ...cartProducts.slice(0, index),
        {
          ...cartProducts[index],
          quantity: cartProducts[index].quantity - 1,
        },
        ...cartProducts.slice(index + 1),
      ]);
    }
  };
  const addQty = (index) => {
    if (cartProducts[index].quantity !== 5) {
      //   setquantity(quantity + 1);
      setcartProducts([
        ...cartProducts.slice(0, index),
        {
          ...cartProducts[index],
          quantity: cartProducts[index].quantity + 1,
        },
        ...cartProducts.slice(index + 1),
      ]);
    }
  };
  // quantity validation
  //   const Validate = (value) => {
  //     if (!value) {
  //       setqtyError("Please specify the quantity");
  //       setquantity(value);
  //     } else if (!value.match(/^[1-9]\d*$/s)) {
  //       setqtyError("Invalid input");
  //       setquantity(value);
  //     } else {
  //       setquantity(parseInt(value.trim()));
  //       setqtyError("");
  //     }
  //   };

  //   remove a cart item
  const removeItem = (id) => {
    setcartProducts(
      cartProducts.filter((item) => {
        return item.id !== id;
      })
    );
  };

  //   redirect to specific URL
  const redirect = (url) => {
    history.push(url);
  };
  return (
    <div className="shopping-cart">
      <div className="left-section">
        <div className="titles">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
        <div className="cart-products">
          {cartProducts.map((item, index) => (
            <div className="item">
              <div className="item-name">
                <img src={item.image} />
                <span>{item.name}</span>
              </div>
              <span className="price">${item.price}</span>
              <div className="qty-section">
                <div className="qty-field">
                  {/* <input
                  className="input-field"
                  value={item.quantity}
                  onChange={(e) => {
                    Validate(e.target.value);
                  }}
                /> */}
                  <span className="quantity">{item.quantity}</span>
                  <span className="minus" onClick={() => substractQty(index)}>
                    -
                  </span>
                  <span className="plus" onClick={() => addQty(index)}>
                    +
                  </span>
                </div>
              </div>
              <div className="total-price">${item.totalPrice}</div>
              <MdOutlineClose
                onClick={() => removeItem(item.id)}
                className="item-remove"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="right-section">
        <div className="cart-total">
          <span className="title">Cart Total</span>
          {/* subtotal */}
          <div className="subtotal">
            <span>Subtotal</span>
            <span>$70.23</span>
          </div>
          {/* shipping */}
          <div className="shipping">
            <span>Shipping</span>
            <span>Free shipping</span>
          </div>
          {/* total */}
          <div className="total">
            <span>Total</span>
            <span>$70.23</span>
          </div>
          {/* dlivery type */}
          {/* <div className="delivery-type">
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
        </div> */}
          {/* place order button */}
          <div className="place-order" onClick={() => redirect("billing")}>
            Proceed to checkout
          </div>
        </div>
        <div
          className="continue-shopping"
          onClick={() => redirect("/products")}
        >
          <span>Continue shopping</span>
          <FiRefreshCw className="refresh" />
        </div>
      </div>
    </div>
  );
}
