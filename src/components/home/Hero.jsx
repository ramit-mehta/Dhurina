import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../../assets/images/png/hero-img.png";
import Ellipse1 from "../../assets/images/png/hero-ellipse-1.png";
import Ellipse2 from "../../assets/images/png/hero-ellipse-2.png";
import { Button, FormControl } from "react-bootstrap";

const Image_URL = process.env.REACT_APP_Bucket_URL;

const Hero = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const RouteChange = (e) => {
    navigate("/search-result?keyword=" + searchInput, {
      state: { course: searchInput },
    });
  };

  return (
    <>
      <div className="custom_container container">
        <div className="row  flex-row-reverse justify-content-center mt-5 pt-5">
          <div className="col-md-5 text-center text-md-start position-relative">
            <img
              className="position-absolute hero_ellipse_1"
              src={Ellipse1}
              alt="Ellipse1"
            />
            <img
              className="position-absolute hero_ellipse_2 "
              src={Ellipse2}
              alt="Ellipse2"
            />
            <img className="w-100 hero_img" src={HeroImg} alt="HeroImg" />
          </div>
          <div className="col-md-7 col-9 mt-4 text-center text-md-start">
            <h2 className="ff_inter fw-semibold color_dark_blue fs_11xl mb-0">
              Get direction to
            </h2>
            <p className="text_gradient ff_inter fs_11xl fw-bold mb-0 text-lg-nowrap">
              Prepare for your exam
            </p>
            <p className="ff_inter color_dark_blue fs_7xl">
              Watch anywhere, anytime.
            </p>
            <div className="d-flex bg-white mx-auto mx-lg-0 px-3 py-2 hero_input mt-2 align-items-center">
              <FormControl
                className=" border-0 bg-transparent w-100 ff_inter fs_md"
                type="text"
                placeholder="Search your Best Courses, Tests & Books... "
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Button
                variant="home-search"
                className="mt-0 bg_gradient text-white border-0 rounded-pill px-3 py-1 px-lg-4 fs_xl"
                onClick={(e) => RouteChange(e)}
              >
                Search
              </Button>
            </div>
            <div className="mt-4 pt-sm-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.dhurina"
                target="_blank"
                rel="noreferrer"
                className="mb-3 d-inline-block me-sm-3"
              >
                <img
                  className="store_icon"
                  alt="Google Play"
                  src={Image_URL + "img/google-play-button.png"}
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/dhurina/id1479858722"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="store_icon"
                  alt="App Store"
                  src={Image_URL + "img/app-store-button.png"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
