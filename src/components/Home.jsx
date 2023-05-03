import React from "react";
import Hero from "./home/Hero";
import Resources from "./home/Resources";
import Products from "./home/Products";
import Batches from "./home/Batches";

const Home = () => {
  return (
    <>
      <Hero />
      <Batches />
      <Products />
      <Resources />
    </>
  );
};

export default Home;
