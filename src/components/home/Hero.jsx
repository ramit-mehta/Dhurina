import React from "react";
import HeroImg from "../../assets/images/png/hero-img.png";
import Ellipse1 from "../../assets/images/png/hero-ellipse-1.png";
import Ellipse2 from "../../assets/images/png/hero-ellipse-2.png";
import PlayStore from "../../assets/images/png/google-play.png";
import AppStore from "../../assets/images/png/app-store.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="custom_container container">
        <div className="row align-items- flex-row-reverse justify-content-center mt-5 pt-5">
          <div className="col-lg-5 position-relative">
            <img
              className="position-absolute hero_ellipse_1"
              src={Ellipse1}
              alt={Ellipse1}
            />
            <img
              className="position-absolute hero_ellipse_2 "
              src={Ellipse2}
              alt={Ellipse2}
            />
            <img className="w-100" src={HeroImg} alt={HeroImg} />
          </div>
          <div className="col-lg-7 mt-4">
            <h2 className="ff_inter fw-normal color_dark_blue fs_10xl mb-0">
              Get direction to
            </h2>
            <p className="text_gradient ff_inter fs_10xl fw-bold mb-0 text-nowrap">
              Prepare for your exam
            </p>
            <p className="ff_inter color_dark_blue fs_7xl">
              Watch anywhere, anytime.
            </p>
            <div className="d-flex bg-white hero_input px-4 py-2 hero_input mt-2 align-items-center">
              <input
                className=" border-0 bg-transparent w-100 ff_inter fs_md"
                type="text"
                placeholder="Find Exam Based Video, Mock Test & Notes"
              />
              <button className="border_gradient_2 text-white border-0 rounded-pill px-4 py-2 fs_xl">
                Search
              </button>
            </div>
            <div className="mt-4 pt-2">
              <Link to="https://play.google.com/store">
                <img src={PlayStore} alt={PlayStore} />
              </Link>
              <Link to="https://www.apple.com/app-store/">
                <img className="ms-2" src={AppStore} alt={AppStore} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
