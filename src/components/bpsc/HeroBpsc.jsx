import React, { useState } from "react";
import LiveClasses from "./LiveClasses";
import RecordedVideos from "./RecordedVideos";
import Test from "./Test";
import Ebooks from "./Ebooks";
import Books from "./Books";
import Register from "./Register";

const HeroBpsc = () => {
  const Study = [
    { name: "Live Class", path: "#liveclass" },
    { name: "Videos", path: "#videos" },
    { name: "Tests", path: "#tests" },
    { name: "Ebooks", path: "#ebooks" },
    { name: "Books", path: "#books" },
  ];

  const [goal, setGoal] = useState();

  return (
    <div className="custom_container container py-5">
      <div className="row mt-5 justify-content-between">
        <div className="col-lg-8 border-end">
          <h2 className="ff_inter fw-semibold fs_8xl mb-0 heading_text">
            BPSC Study Material 2023, Study Plan, Notes
          </h2>
          <p className="mb-0 ff_inter fs_lg text_grey mt-3">
            Buy BPSC Study Material 2023 at Dhurina to get Comprehensive BSSC
            Study notes,BPSC Exam Tips,Study Plan at low price
          </p>

          <div className="d-flex flex-wrap mt-3">
            {Study.map((item, index) => {
              return (
                <a href={item.path}>
                  <button
                    onClick={() => setGoal(item.name)}
                    key={index}
                    className={`${
                      goal === item.name
                        ? "bg_gradient text-white"
                        : "bg_light_orange2 color_black2"
                    } me-3 border-0  px-3 py-2 fw-normal rounded-1 mt-3 fw-semibold ff_inter`}
                    value={item.name}
                  >
                    {item.name}
                  </button>
                </a>
              );
            })}
          </div>
          <LiveClasses />
          <RecordedVideos />
          <Test />
          <Ebooks />
          <Books />
        </div>
        <div className="col-lg-4">
          <Register />
        </div>
      </div>
    </div>
  );
};

export default HeroBpsc;
