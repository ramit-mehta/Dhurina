import React from "react";
import Trophy from "../../assets/images/png/english-quiz-trophy.png";
import { Link } from "react-router-dom";

const EnglishQuiz = () => {
  return (
    <div className="bg_eng_quiz mt-4">
      <div className="custom_container container py-5">
        <div className="row d-flex flex-column-reverse flex-md-row mt-lg-3">
          <div className="col-md-6 col-lg-8">
            <h2 className="ff_inter fw-bold text-white fs-3 mt-4">
              Super English Quiz Challenge
            </h2>
            <p className="mb-0 text-white ff_inter fw-normal mt-3">
              Ultimate English Quiz Challenge! This quiz is designed to test
              your advanced English language skills across various .............
            </p>
            <ul className="ps-3 mt-3 ul_tick2 mb-0">
              <li className="ff_inter fw-semibold text-white ms-2">
                Subject:English
              </li>
              <li className="ff_inter fw-semibold text-white mt-2 ms-2">
                No.Of Questions: 10 Questions
              </li>
              <li className="ff_inter fw-semibold text-white mt-2 ms-2">
                Prize: Rs1000
              </li>
            </ul>
            <Link className="btn_register px-3 py-2">
              <button className="text_gradient border-0 fs-5 fw-semibold mt-4">
                Free Register
              </button>
            </Link>
          </div>
          <div className="col-md-6 col-lg-4 text-center text-md-start">
            <img className="trophy_mw" src={Trophy} alt="english_quiz_trophy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglishQuiz;
