import React from "react";
import { Premium } from "../common/Helper";
import Unlock from "../../assets/images/svg/lock-ssc.svg";

const PremiumTest = () => {
  return (
    <div className="position-relative">
      <div className="custom_container container py-5 gradient_after">
        <h2 className="ff_inter fw-bold fs-3 text-white">
          Delhi Police Constable Premium Tests
        </h2>
        <p className="ff_inter mt-2 text-white">19 Tests</p>
        <div className="row">
          {Premium.map((item, index) => {
            return (
              <div key={index} className="col-lg-3 col-md-6 mt-3">
                <div className="mock_box p-3">
                  <div key={index}>
                    <h2 className="ff_inter fw-bold text_gradient fs-4 mb-0">
                      {item.title}
                    </h2>

                    <p className="mb-0 text_grey border_brown_bottom pb-3 ff_inter mt-1">
                      {item.expire}
                    </p>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0 mt-2 ff_inter text_grey fw-semibold">
                        Questions
                      </p>
                      <p className="mb-0 mt-2 ff_inter text_grey fw-semibold">
                        {item.ques}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0 ff_inter text_grey fw-semibold">
                        Max Marks
                      </p>
                      <p className="mb-0 ff_inter text_grey fw-semibold">
                        {item.marks}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0 ff_inter text_grey fw-semibold">
                        Time
                      </p>
                      <p className="mb-0 ff_inter text_grey fw-semibold">
                        {item.time}
                      </p>
                    </div>
                  </div>
                  <div className="mx-auto bg_gradient col-6 mt-3 px-4 py-1 d-flex align-items-center justify-content-center">
                    <button className="ff_inter text-white border-0 fs-6 bg-transparent">
                      Unlock
                    </button>
                    <img className="ms-1" src={Unlock} alt="unlock_test" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PremiumTest;
