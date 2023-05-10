import React from "react";
import { Ebooks } from "../common/Helper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const RecordedVideos = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2.04,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="custom_container container py-5">
      <h2 className="text_gradient ff_inter fw-bold fs_4xl">EBooks</h2>
      <div className="row ">
        <Slider className="ms-lg-4" {...settings}>
          {Ebooks.map((item, index) => {
            return (
              <div key={index} className="col-md-6 mt-4">
                <div className="border_light_brown mx-2">
                  <div className="bg_ebooks py-4 px-2 text-center">
                    <img src={item.img} alt="bpsc_logo" />

                    <div className="mb-0">
                      <h2 className="ff_inter fw-bolder fs_8xl text-white mb-0 mt-2">
                        {item.bpscTitle}
                      </h2>
                      <p className="ff_inter fs_7xl text-white mb-0 notes mx-auto">
                        {item.type}
                      </p>
                    </div>
                  </div>
                  <p className="ff_inter text_grey fs_md pt-3 fw-semibol mb-0 px-2">
                    {item.desc}
                  </p>
                  <div className="mt-3 d-flex align-items-center justify-content-between px-2 pb-3">
                    <div>
                      <span className="mb-0 text_gradient fw-bold fs_3xl mb-0">
                        ₹{item.price}{" "}
                      </span>
                      <span className="fs_md text_grey ff_inter text-decoration-line-through mb-0">
                        ₹1177
                      </span>
                    </div>
                    <div className="coupon_bg px-2">
                      <p className="mb-0 ff_inter fw-bold fs_sm">
                        "<span className=" text_gradient">{item.coupon}</span>"
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
          {Ebooks.map((item, index) => {
            return (
              <div key={index} className="col-lg-6 mt-4">
                <div className="border_light_brown mx-2">
                  <div className="bg_ebooks py-4 px-2 text-center">
                    <img src={item.img} alt="bpsc_logo" />

                    <div className="mb-0">
                      <h2 className="ff_inter fw-bolder fs_8xl text-white mb-0 mt-2">
                        {item.bpscTitle}
                      </h2>
                      <p className="ff_inter fs_7xl text-white mb-0 notes mx-auto">
                        {item.type}
                      </p>
                    </div>
                  </div>
                  <p className="ff_inter text_grey fs_md pt-3 fw-semibol mb-0 px-2">
                    {item.desc}
                  </p>
                  <div className="mt-3 d-flex align-items-center justify-content-between px-2 pb-3">
                    <div>
                      <span className="mb-0 text_gradient fw-bold fs_3xl mb-0">
                        ₹{item.price}{" "}
                      </span>
                      <span className="fs_md text_grey ff_inter text-decoration-line-through mb-0">
                        ₹1177
                      </span>
                    </div>
                    <div className="coupon_bg px-2">
                      <p className="mb-0 ff_inter fw-bold fs_sm">
                        "<span className=" text_gradient">{item.coupon}</span>"
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
          {Ebooks.map((item, index) => {
            return (
              <div key={index} className="col-lg-6 mt-4">
                <div className="border_light_brown mx-2">
                  <div className="bg_ebooks py-4 px-2 text-center">
                    <img src={item.img} alt="bpsc_logo" />

                    <div className="mb-0">
                      <h2 className="ff_inter fw-bolder fs_8xl text-white mb-0 mt-2">
                        {item.bpscTitle}
                      </h2>
                      <p className="ff_inter fs_7xl text-white mb-0 notes mx-auto">
                        {item.type}
                      </p>
                    </div>
                  </div>
                  <p className="ff_inter text_grey fs_md pt-3 fw-semibol mb-0 px-2">
                    {item.desc}
                  </p>
                  <div className="mt-3 d-flex align-items-center justify-content-between px-2 pb-3">
                    <div>
                      <span className="mb-0 text_gradient fw-bold fs_3xl mb-0">
                        ₹{item.price}{" "}
                      </span>
                      <span className="fs_md text_grey ff_inter text-decoration-line-through mb-0">
                        ₹1177
                      </span>
                    </div>
                    <div className="coupon_bg px-2">
                      <p className="mb-0 ff_inter fw-bold fs_sm">
                        "<span className=" text_gradient">{item.coupon}</span>"
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
        </Slider>
      </div>
    </div>
  );
};

export default RecordedVideos;
