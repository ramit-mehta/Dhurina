import React from "react";
import JanhaviImg from "../../assets/images/png/JANHAVI-PNG.png";
import BgEllipse from "../../assets/images/png/learn-english-ellipse.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const LearnEnglish = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="custom_container container py-2 py-sm-5">
      <Slider {...settings}>
        <div className="px-sm-3 px-1">
          <div className="d-flex align-items-center learn py-lg-0">
            <div className="col-5 col-lg-4 position-relative">
              <img className="w-100" src={BgEllipse} alt="BgEllipse" />
              <img
                className="position-absolute janhavi_img start-50 translate-middle-x "
                src={JanhaviImg}
                alt="JanhaviImg"
              />
            </div>
            <div className="col-4 col-lg-6">
              <h2 className="ff_inter fw-bold fs_9xl text_gradient mb-0 text-center text-lg-start mt-2 mt-lg-0">
                Learn English{" "}
              </h2>
              <p className="ff_inter fw-semibold fs_6xl color_dark_blue mb-0 text-center text-lg-start">
                Spoken Courses & Language Courses
              </p>
              <p className="ff_inter fs_md color_dark_blue mb-0 text-center text-lg-start">
                By Wonder Girl Janvavi Panwar
              </p>
            </div>
            <div className="col-3 col-lg-2 text-center text-lg-start">
              <Link>
                <button className="fs_xl text-white ff_inter bg_gradient border-0 px-2 py-1 px-sm-4 py-sm-2 ">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-sm-3 px-1">
          <div className="d-flex align-items-center learn py-lg-0">
            <div className="col-5 col-lg-4 position-relative">
              <img className="w-100" src={BgEllipse} alt="BgEllipse" />
              <img
                className="position-absolute janhavi_img start-50 translate-middle-x "
                src={JanhaviImg}
                alt="JanhaviImg"
              />
            </div>
            <div className="col-4 col-lg-6">
              <h2 className="ff_inter fw-bold fs_9xl text_gradient mb-0 text-center text-lg-start mt-2 mt-lg-0">
                Learn English{" "}
              </h2>
              <p className="ff_inter fw-semibold fs_6xl color_dark_blue mb-0 text-center text-lg-start">
                Spoken Courses & Language Courses
              </p>
              <p className="ff_inter fs_md color_dark_blue mb-0 text-center text-lg-start">
                By Wonder Girl Janvavi Panwar
              </p>
            </div>
            <div className="col-3 col-lg-2 text-center text-lg-start">
              <Link>
                <button className="fs_xl text-white ff_inter bg_gradient border-0 px-2 py-1 px-sm-4 py-sm-2 ">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-sm-3 px-1">
          <div className="d-flex align-items-center learn py-lg-0">
            <div className="col-5 col-lg-4 position-relative">
              <img className="w-100" src={BgEllipse} alt="BgEllipse" />
              <img
                className="position-absolute janhavi_img start-50 translate-middle-x "
                src={JanhaviImg}
                alt="JanhaviImg"
              />
            </div>
            <div className="col-4 col-lg-6">
              <h2 className="ff_inter fw-bold fs_9xl text_gradient mb-0 text-center text-lg-start mt-2 mt-lg-0">
                Learn English{" "}
              </h2>
              <p className="ff_inter fw-semibold fs_6xl color_dark_blue mb-0 text-center text-lg-start">
                Spoken Courses & Language Courses
              </p>
              <p className="ff_inter fs_md color_dark_blue mb-0 text-center text-lg-start">
                By Wonder Girl Janvavi Panwar
              </p>
            </div>
            <div className="col-3 col-lg-2 text-center text-lg-start">
              <Link>
                <button className="fs_xl text-white ff_inter bg_gradient border-0 px-2 py-1 px-sm-4 py-sm-2 ">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default LearnEnglish;
