import React from "react";
import { MockTest } from "../common/Helper";

const FreeMock = () => {
  return (
    <>
      <div className="custom_container container py-5">
        <h2 className="ff_inter fw-bold fs-3">
          Delhi Police Constable: Free Mock Tests
        </h2>
        <p className="ff_inter mt-2 text_grey pb-md-3 pb-lg-5">
          Try Free Mock Tests
        </p>
      </div>
      <div className="bg_gradient_ssc px-3 py-4 px-md-0 py-md-0">
        <div className="custom_container container">
          <div className="row mt-md-5">
            {MockTest.map((item, index) => {
              return (
                <div key={index} className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                  <div className="mock_box p-3 translate_top">
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
                    <div className="text-center">
                      <button className="bg_gradient ff_inter text-white border-0 py-1 px-2 fs-6 mt-3">
                        Attempt <span>&rarr;</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeMock;
