import React from "react";
import { BpscClass } from "../common/Helper";
import { Link } from "react-router-dom";

const RecordedVideos = () => {
  return (
    <div id="tests" className="custom_container container py-5">
      <h2 className="text_gradient ff_inter fw-bold fs_4xl">Tests</h2>
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
                        <h2 className="ff_inter fw-bolder fs_xl text_gradient mb-0">
                          {item.bpscTitle}
                        </h2>
                        <p className="ff_inter fw-semibold fs_md text_gradient mb-0">
                          {item.type}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="ff_inter text_grey fs_md pt-3 fw-semibol mb-0 px-3">
                    {item.desc}
                  </p>
                  <div className="mt-3 d-flex align-items-center justify-content-between px-3 pb-3">
                    <div>
                      <span className="mb-0 text_gradient fw-bold fs_3xl mb-0">
                        ₹{item.price}{" "}
                      </span>
                      <span className="fs_md text_grey ff_inter text-decoration-line-through mb-0">
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

export default RecordedVideos;
