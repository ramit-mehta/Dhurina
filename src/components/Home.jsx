import React from "react";
import Hero from "./home/Hero";
import Resources from "./home/Resources";
import Products from "./home/Products";
import Batches from "./home/Batches";
import LearnEnglish from "./home/LearnEnglish";
import Students from "./home/Students";
import Enroll from "./home/Enroll";

const Home = () => {
  return (
    <>
      <Hero />
      <LearnEnglish />
      <Batches />
      <Products />
      <Resources />
      <Enroll />
      <Students />
    </>
  );
};

export default Home;
