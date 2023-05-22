import React from "react";
import Register from "../bpsc/Register";

const SingleEbook = () => {
  return (
    <div className="custom_container container">
      <div className="py-5">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="ff_inter fw-semibold fs_8xl mb-0 pe-lg-5 course_heading">
              Patna High Court Assistant Written Test (Descriptive Type) 2023
              Final Selection ebook Notes
            </h2>

            <h3 className="ff_inter text_gradient fw-semibold fs_8xl mb-0 py-3 mt-4">
              Product Descipition
            </h3>
            <p className="ff_inter fw-normal text_grey fs_lg pe-lg-5">
              Patna High Court Recruitment 2023 Notification for 550 assistant
              posts has been released on employment news. The official pdf will
              be available to download from the official website by 6th February
              2023. The online registration process for Patna High Court
              Recruitment 2023 assistant posts will begin on 6th February 2023.
            </p>
            <div className="course_highlight pb-5 mt-5">
              <div className="bg_light_orange course_des">
                <h4 className="ff_inter text_gradient fw-semibold fs_8xl mb-0 py-3 text-center ">
                  Ebook Highlights
                </h4>
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
          <div className="col-lg-4">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEbook;
