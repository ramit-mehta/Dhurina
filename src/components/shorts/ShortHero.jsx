import React from "react";
import Logo from "../../assets/images/svg/short_hero_logo.svg";
import HeroImg from "../../assets/images/png/shorts_hero_img.png";
const ShortHero = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center pt-4">
        <div className="text-center short_hero_para">
          <img className="img-fluid" src={Logo} alt="Logo" />
          <p className="text-white  fw-normal fs_6xl mt-2 text-nowrap">
            Education Motivation Inspiration
          </p>
        </div>
        <div className="short_hero_img">
          <img className="img-fluid" src={HeroImg} alt={HeroImg} />
        </div>
      </div>
    </>
  );
};

export default ShortHero;
