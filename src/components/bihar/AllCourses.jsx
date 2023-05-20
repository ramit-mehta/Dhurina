import React from "react";
import LiveClasses from "../bpsc/LiveClasses";
import { AllLiveCourses, HeroBihar } from "../common/Helper";
import Hero from "../bpsc/Hero";
import Register from "../bpsc/Register";

const AllCourses = () => {
  return (
    <>
      <div className="custom_container container py-5">
        <div className="row mt-5 justify-content-between">
          <div className="col-lg-8 border-end">
            <Hero display={false} Hero={HeroBihar} />
            <LiveClasses display={false} Classes={AllLiveCourses} />
          </div>
          <div className="col-lg-4">
            <Register />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCourses;
