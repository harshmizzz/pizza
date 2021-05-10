import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hero from "./components/hero/index";
import Products from "./components/products";
import { productData, productDataTwo } from "./components/products/data";
import Feature from "./components/feature/index";
import { GlobalStyle } from "./globalstyle";
import Footer from "./components/footer";
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose Your Favourite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats For You" data={productDataTwo} />
      <Footer />
    </Router>
  );
};

export default App;
