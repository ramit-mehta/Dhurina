import React from "react";
import Hero from "./bpsc/Hero";
import { HeroBihar } from "./common/Helper";
import { BiharClass } from "./common/Helper";
import { BiharRecorded } from "./common/Helper";
import { BiharTest } from "./common/Helper";
import { BiharEbooks } from "./common/Helper";
import { BiharBooks } from "./common/Helper";
import LiveClasses from "./bpsc/LiveClasses";
import RecordedVideos from "./bpsc/RecordedVideos";
import Test from "./bpsc/Test";
import Ebooks from "./bpsc/Ebooks";
import Books from "./bpsc/Books";

const Bihar = () => {
  return (
    <div className="custom_container container py-5">
      <div className="row mt-5 justify-content-between">
        <div className="col-lg-8 border-end">
          <Hero Hero={HeroBihar} />
          <LiveClasses Classes={BiharClass} />
          <RecordedVideos Recorded={BiharRecorded} />
          <Test Test={BiharTest} />
          <Ebooks Ebook={BiharEbooks} />
          <Books Books={BiharBooks} />
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default Bihar;
