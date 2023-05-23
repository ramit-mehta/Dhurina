import React, { useState } from "react";

const Course = () => {
  const [validity, setValidity] = useState();
  const validityPeriods = [{ time: 12 }, { time: 6 }];
  return (
    <div className="custom_container container">
      <div className="py-5">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="ff_inter fw-semibold fs_8xl mb-0 pe-lg-5 course_heading">
              Patna High Court Assistant Written Test (Descriptive Type) 2023
              Final Selection Batch 2.0
            </h2>
            <span className="me-3 text_gradient fs_lg ff_inter fw-bold">
              Select Validity
            </span>
            {validityPeriods.map((item, index) => {
              return (
                <button
                  onClick={() => setValidity(item.time)}
                  key={index}
                  className={`${
                    validity === item.time
                      ? "bg_gradient text-white"
                      : "bg_light_orange2 color_black2"
                  } me-3 border-0  px-3 py-2 fw-normal rounded-1 mt-3 fw-semibold ff_inter mt-5`}
                  value={item.time}
                >
                  {item.time} Months
                </button>
              );
            })}
            <h3 className="ff_inter fw-semibold fs_8xl mb-0 mt-3">
              Course Descipition
            </h3>
            <p className="ff_inter fw-normal text_grey fs_lg pe-lg-5 mt-3">
              Patna High Court Recruitment 2023 Notification for 550 assistant
              posts has been released on employment news. The official pdf will
              be available to download from the official website by 6th February
              2023. The online registration process for Patna High Court
              Recruitment 2023 assistant posts will begin on 6th February 2023.
            </p>
            <div className="course_highlight pb-5 mt-5">
              <div className="bg_light_orange course_des">
                <h3 className="ff_inter text_gradient fw-semibold fs_8xl mb-0 py-3 text-center ">
                  Course Descipition
                </h3>
              </div>
              <ul>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  100+ Hours of Live with Recorded Classes
                </li>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  40+ PDF study materials to boost your preparation
                </li>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  Access to 24X7 recorded classes so that you never miss out
                </li>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  Special Q&A Sessions for all subjects
                </li>
                <span className="text_gradient ff_inter fw-bold fs_lg">
                  Subject Covered:
                </span>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  Patna High Court Assistant Exam 2023
                </li>
                <span className="text_gradient ff_inter fw-bold fs_lg">
                  Subject Covered:
                </span>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  English Language
                </li>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  Hindi Language
                </li>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  Computer Proficiency
                </li>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  Sintu Morya sir:-(a) Teaching the English Language(b) 6+ Years
                  of Experience(c) More than 1000+ Selection(d) More than 8000+
                  Aspirants Mentored
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Course;
