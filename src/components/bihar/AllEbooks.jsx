import React from "react";
import Register from "../bpsc/Register";
import { AllEbook } from "../common/Helper";
import { useNavigate } from "react-router-dom";

const AllEbooks = () => {
  const navigate = useNavigate();
  return (
    <div className="custom_container container py-5">
      <div className="row mt-5 justify-content-between">
        <div className="col-lg-8 border-end">
          <h2 className="ff_inter fw-semibold fs_8xl mb-0 heading_text">
            BIHAR STUDY MATERIAL{" "}
          </h2>
          <p className="ff_inter fw-semibold fs_8xl mb-0 heading_text course_heading ">
            Ebooks
          </p>
          <div className="row mt-5">
            {AllEbook.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    navigate("/ebook");
                  }}
                  key={index}
                  className="col-md-6 mt-4 cursor_pointer"
                >
                  <div className="border_light_brown mx-2">
                    <div className="bg_ebooks py-4 px-2 text-center">
                      <img className="mx-auto" src={item.img} alt="bpsc_logo" />

                      <div className="mb-0">
                        <h2 className="ff_inter fw-bolder text-white mb-0 mt-2">
                          {item.Title}
                        </h2>
                        <p className="ff_inter fs-4 text-white mb-0 notes mx-auto">
                          {item.type}
                        </p>
                      </div>
                    </div>
                    <p className="ff_inter text_grey fs_desc pt-3 fw-semibol mb-0 px-2">
                      {item.desc}
                    </p>
                    <div className="mt-3 d-flex align-items-center justify-content-between px-2 pb-3">
                      <div>
                        <span className="mb-0 text_gradient fw-bold fs_3xl mb-0">
                          ₹{item.price}{" "}
                        </span>
                        <span className="fs_desc text_grey ff_inter text-decoration-line-through mb-0">
                          ₹1177
                        </span>
                      </div>
                      <div className="coupon_bg px-2">
                        <p className="mb-0 ff_inter fw-bold fs_sm">
                          "<span className=" text_gradient">{item.coupon}</span>
                          "
                          <span className="fs_xsm fw-semibold ms-1">
                            Coupon Applied
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-4">
          <Register />
        </div>
      </div>
    </div>
  );
};

export default AllEbooks;
