import React from "react";
import Hero from "./bpsc/Hero";
import LiveClasses from "./bpsc/LiveClasses";
import RecordedVideos from "./bpsc/RecordedVideos";
import Test from "./bpsc/Test";
import Ebooks from "./bpsc/Ebooks";
import Books from "./bpsc/Books";
import Register from "./bpsc/Register";
import { HeroBpsc } from "./common/Helper";
import { BpscClass } from "./common/Helper";
import { BpscRecorded } from "./common/Helper";
import { BpscTest } from "./common/Helper";
import { BpscEbooks } from "./common/Helper";
import { BpscBooks } from "./common/Helper";

const BPSC = ({ course, setSelectedItem }) => {
  return (
    <>
      <div className="custom_container container py-5">
        <div className="row mt-5 justify-content-between">
          <div className="col-lg-8 border-end">
            <Hero display={true} Hero={HeroBpsc} course={course} />
            <LiveClasses
              display={true}
              course={course}
              setSelectedItem={setSelectedItem}
              Classes={BpscClass}
            />
            <RecordedVideos
              display={true}
              course={course}
              setSelectedItem={setSelectedItem}
              Recorded={BpscRecorded}
            />
            <Test display={true} Test={BpscTest} />
            <Ebooks Ebook={BpscEbooks} />
            <Books
              display={true}
              course={course}
              setSelectedItem={setSelectedItem}
              Books={BpscBooks}
            />
          </div>
          <div className="col-lg-4">
            <Register />
          </div>
        </div>
      </div>
    </>
  );
};

export default BPSC;
