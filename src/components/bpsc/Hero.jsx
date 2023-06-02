import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Hero = ({ Hero, display }) => {
  const [goal, setGoal] = useState();
  const { stateName } = useParams();
  const formattedStateName = stateName.replace("-", " ");
  return (
    <>
      <h2 className="ff_inter fw-semibold fs_8xl mb-0 heading_text">
        {formattedStateName} Study Material
      </h2>
      <p className="mb-0 ff_inter fs_lg text_grey mt-3">
        Buy {formattedStateName} Study Material 2023 at Dhurina to get
        Comprehensive {formattedStateName} Study notes, Exam Tips, Study Plan at
        low price
      </p>
      {display ? (
        <div className="d-flex flex-wrap mt-3">
          {Hero[0].Study.map((item, index) => {
            return (
              <a key={index} href={item.path}>
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
      ) : (
        ""
      )}
    </>
  );
};

export default Hero;
