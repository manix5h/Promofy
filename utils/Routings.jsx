import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Home from "../src/components/Home";
import AppDevelopment from "../src/services/AppDevelopment";
import WebDevelopment from "../src/services/WebDevelopment";
import Seo from "../src/services/Seo";
import Campaign from "../src/services/Campaign";
import ProductsTemp from "../src/portfolioProducts/ProductsTemp";
import app1 from "../src/img/portfolio/img1.png";

import product1 from "../src/img/portfolio/img2.png";

import branding1 from "../src/img/portfolio/img3.png";

import Hireus from "../src/services/Hireus";

const Routings = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/seo-optimization" element={<Seo />} />
        <Route path="/campagin-creation" element={<Campaign />} />
        <Route path="/hireus" element={<Hireus />} />
        <Route path="Marketing-Website/portfolio">
          <Route path="app1" element={<ProductsTemp img={app1} />} />
          <Route path="product1" element={<ProductsTemp img={product1} />} />
          <Route path="brand1" element={<ProductsTemp img={branding1} />} />
          
        </Route>
      </Routes>
    </div>
  );
};

export default Routings;
