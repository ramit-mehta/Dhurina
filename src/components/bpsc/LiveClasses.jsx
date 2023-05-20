import React from "react";
import { BpscClass } from "../common/Helper";
import { Link } from "react-router-dom";

const LiveClasses = () => {
  return (
    <div id="liveclass" className="custom_container container py-5">
      <h2 className="text_gradient ff_inter fw-bold fs_4xl">Live Class</h2>
      <div className="row">
        {BpscClass.map((item, index) => {
          return (
            <div key={index} className="col-md-6 mt-4">
              <Link>
                <div className="border_light_brown">
                  <div className="bg_classes py-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <img src={item.img} alt="bpsc_logo" />
                      <div className="ms-2 mb-0">
                        <h2 className="ff_inter fw-bolder fs-6 text_gradient mb-0">
                          {item.bpscTitle}
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
