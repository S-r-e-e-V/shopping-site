import React from "react";
import "../App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Home from "../screens/Home";
import ProductDetails from "../screens/ProductDetails";

const Routes = () => {
  return (
    <Router>
      <div className="route">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/product-details/:id"
              component={ProductDetails}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default Routes;
