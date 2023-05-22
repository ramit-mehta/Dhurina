import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LiveClasses = ({ Classes, display }) => {
  const navigate = useNavigate();
  return (
    <div id="liveclass" className="custom_container container py-5">
      {display ? (
        <div className="d-flex justify-content-between align-content-center">
          <h2 className="text_gradient ff_inter fw-bold fs_4xl">Live Class</h2>
          <Link
            to="/all-live-course"
            className="ff_inter fw-semibold text_gradient mb-0"
          >
            View All <span>&rarr;</span>{" "}
          </Link>
        </div>
      ) : (
        ""
      )}

      <div className="row">
        {Classes.map((item, index) => {
          return (
            <div
              onClick={() => {
                navigate("/course");
              }}
              key={index}
              className="col-md-6 mt-4"
            >
              <Link>
                <div className="border_light_brown">
                  <div className="bg_classes py-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <img src={item.img} alt="bpsc_logo" />
                      <div className="ms-2 mb-0">
                        <h2 className="ff_inter fw-bolder fs-6 text_gradient mb-0">
                          {item.Title}
                        </h2>
                        <p className="ff_inter fw-semibold text_gradient mb-0">
                          {item.type}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="ff_inter text_grey fs_desc pt-3 fw-semibol mb-0 px-4">
                    {item.desc}
                  </p>
                  <div className="mt-3 d-flex align-items-center justify-content-between px-4 pb-3">
                    <div>
                      <span className="mb-0 text_gradient fw-bold fs_3xl mb-0">
                        ₹{item.price}{" "}
                      </span>
                      <span className="fs_desc text_grey ff_inter text-decoration-line-through mb-0">
                        ₹6777
                      </span>
                    </div>
                    <div className="coupon_bg px-2">
                      <p className="mb-0 ff_inter fw-bold fs_sm text-black">
                        "<span className=" text_gradient">{item.coupon}</span>"
                        <span className="fs_xsm fw-semibold ms-1 text-black">
                          Coupon Applied
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveClasses;
