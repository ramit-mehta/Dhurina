import React from "react";
import Hero from "./home/Hero";
import Resources from "./home/Resources";
import Products from "./home/Products";
import Batches from "./home/Batches";
import LearnEnglish from "./home/LearnEnglish";
import Students from "./home/Students";
import Enroll from "./home/Enroll";
// import Welcome from "./Welcome";

const Home = ({ setCourse, onCourseClick, selectedItem, setSelectedItem }) => {
  return (
    <>
      <Hero />
      <LearnEnglish />
      <Batches
        setCourse={setCourse}
        onCourseClick={onCourseClick}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <Products />
      <Resources />
      <Enroll />
      <Students />
      {/* <Welcome /> */}
    </>
  );
};

export default Home;
