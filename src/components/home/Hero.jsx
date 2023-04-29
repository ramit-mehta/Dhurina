import React from "react";
import HeroImg from "../../assets/images/png/hero-img.png";
import Ellipse1 from "../../assets/images/png/hero-ellipse-1.png";
import Ellipse2 from "../../assets/images/png/hero-ellipse-2.png";

const Hero = () => {
  return (
    <>
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
            Prepare for your exams
          </p>
          <p className="ff_inter color_dark_blue fs_7xl">
            Watch anywhere, anytime.
          </p>
          <input className="hero_input border-0" type="text" />
        </div>
      </div>
    </>
  );
};

export default Hero;
