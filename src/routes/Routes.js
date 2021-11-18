import React, { useRef, useContext } from "react";
import "../App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AppContext } from "../context/AppContext";

import Header from "../components/Header";
import Home from "../screens/Home";
import ProductDetails from "../screens/ProductDetails";
import ShopProducts from "../screens/ShopProducts";
import Billing from "../screens/Billing";
import ShoppingCart from "../screens/ShoppingCart";
import TopHeader from "../components/TopHeader";
import Sidenav from "../components/Sidenav";
import MobileHeader from "../components/MobileHeader";

const Routes = () => {
  const ref = useRef(null);
  const { setcontainerScrollTop } = useContext(AppContext);
  const onScroll = () => {
    setcontainerScrollTop(ref.current.scrollTop);
  };
  return (
    <Router>
      <div className="route">
        <TopHeader />
        <Header />
        <MobileHeader />
        <Sidenav />
        <div className="container" onScroll={() => onScroll()} ref={ref}>
          <Switch>
            <Route exact path="/products" component={ShopProducts} />
            <Route
              exact
              path="/product-details/:id"
              component={ProductDetails}
            />
            <Route exact path="/shopping-cart" component={ShoppingCart} />
            <Route exact path="/billing" component={Billing} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default Routes;
