import React from "react";
import { Link } from "react-router-dom";
import { Company } from "./Helper";
import { Courses } from "./Helper";
import { Products } from "./Helper";
import { Coaching } from "./Helper";
import { MockTests } from "./Helper";
import FooterLogo from "../../assets/images/png/footer-logo.png";
import FbIcon from "../../assets/images/svg/fb-icon.svg";
import TwitterIcon from "../../assets/images/svg/twitter-icon.svg";
import InstaIcon from "../../assets/images/svg/instagram-icon.svg";
import TeleIcon from "../../assets/images/svg/telegram-icon.svg";

const Footer = () => {
  return (
    <div className="bg_dark_blue">
      <div className="custom_container container py-5">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <img
              className="w-lg-75 w-50 mb-4 d-sm-block d-md-none"
              src={FooterLogo}
              alt={FooterLogo}
            />
            <p className="ff_inter text_gradient fw-bold fs_xl">Company</p>
            <ul className="ps-0">
              {Company.map((item, index) => {
                return (
                  <li key={index} className="mt-2">
                    <Link className="ff_inter fs_lg text-light fw-light">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <img
              className="w-75 mt-4 d-none d-md-block"
              src={FooterLogo}
              alt={FooterLogo}
            />
          </div>

          <div className="col-sm-6 col-md-3">
            <p className="ff_inter text_gradient fw-bold fs_xl">Courses</p>

            <ul className="ps-0">
              {Courses.map((item, index) => {
                return (
                  <li key={index} className="mt-2">
                    <Link className="ff_inter fs_lg text-light fw-light">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <p className="ff_inter text_gradient fw-bold fs_xl">Products</p>

            <ul className="ps-0">
              {Products.map((item, index) => {
                return (
                  <li key={index} className="mt-2">
                    <Link className="ff_inter fs_lg text-light fw-light">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="ps-0 mt-4">
              <p className="ff_inter text_gradient fw-bold fs_xl">
                Latest Mock Tests
              </p>

              {MockTests.map((item, index) => {
                return (
                  <li key={index} className="mt-2">
                    <Link className="ff_inter fs_lg text-light fw-light">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <p className="ff_inter text_gradient fw-bold fs_xl">
              Latest Online Coaching
            </p>

            <ul className="ps-0">
              {Coaching.map((item, index) => {
                return (
                  <li key={index} className="mt-2">
                    <Link className="ff_inter fs_lg text-light fw-light">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <p className="ff_inter fs_lg text-light fw-lighter">Follow On:</p>
          <Link>
            <img className="footer_icon" src={FbIcon} alt={FbIcon} />
          </Link>
          <Link className="ms-2">
            <img className="footer_icon" src={TwitterIcon} alt={TwitterIcon} />
          </Link>
          <Link className="ms-2">
            <img className="footer_icon" src={InstaIcon} alt={InstaIcon} />
          </Link>
          <Link className="ms-2">
            <img className="footer_icon" src={TeleIcon} alt={TeleIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
