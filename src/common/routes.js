import { Route } from "react-router";
import React from "react";

import App from "./containers/App";

//Redux Smart
import AboutPage from "./containers/AboutPage";
import HomePage from "./containers/HomePage";

//Redux Dumb
import SellerPage from "./components/Seller";
import BuyingPage from "./components/Buying";
import error404 from "./components/404";

export default (
  <Route name="app" path="/" component={App}>
      <Route path="home" component={HomePage} />
      <Route path="seller" component={SellerPage} />
      <Route path="buying" component={BuyingPage} />
      <Route path="about" component={AboutPage} />
      <Route path="*" component={error404}/>
  </Route>
);
