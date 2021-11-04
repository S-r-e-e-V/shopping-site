import React from "react";
import "./Billing.css";

export default function Billing() {
  return (
    <div className="billing">
      <div className="left-section">
        <span className="title">Billing Details</span>
        {/* address */}
        <div className="address">
          {/* name */}
          <div className="name">
            <div className="firstname">
              <span className="heading">First Name</span>
              <input />
            </div>
            <div className="lastname">
              <span className="heading">Last Name</span>
              <input />
            </div>
          </div>
          {/* street address */}
          <div className="street-address">
            <span className="heading">Street Address</span>
            <input placeholder="House number and street name" />
            <input placeholder="Appartments,suit,unit etc..." />
          </div>
          {/* city country */}
          <div className="city-country">
            <div className="city">
              <span className="heading">Town / City</span>
              <input />
            </div>
            <div className="country">
              <span className="heading">State / Country</span>
              <input />
            </div>
          </div>
          {/* zip phone */}
          <div className="zip-phone">
            <div className="zip">
              <span className="heading">Postcode / Zip</span>
              <input />
            </div>
            <div className="phone">
              <span className="heading">Phone</span>
              <input />
            </div>
          </div>
          <div className="email">
            <span className="heading">Email address</span>
            <input />
          </div>
        </div>
      </div>
      <div className="right-section">
        <span className="title">Your Order</span>
        {/* product info */}
        <div className="product-info">
          <div className="product-title">
            <span>Product</span>
            <span>Total</span>
          </div>
          <div className="item">
            <span>Denim jacket Blue</span>
            <span>$70.23</span>
          </div>
        </div>
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
        <div className="place-order">Place Order</div>
      </div>
    </div>
  );
}
