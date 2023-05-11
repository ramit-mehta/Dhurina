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
      <div className="custom_container container py-5 mx-auto">
        <div className="row">
          <div className="col-6 col-md-3">
            <p className="ff_inter text_gradient fw-bold fs_xl mb-0">Company</p>
            <ul className="ps-0 list_style_none">
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
          </div>

          <div className="col-6 col-md-3 mt_footer_courses">
            <p className="ff_inter text_gradient fw-bold fs_xl mb-0">Courses</p>

            <ul className="ps-0 list_style_none">
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
          <div className="col-6 col-md-3">
            <p className="ff_inter text_gradient fw-bold fs_xl mt-3 mt-md-0">
              Products
            </p>

            <ul className="ps-0 list_style_none">
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
            <ul className="ps-0 mt-4 list_style_none">
              <p className="ff_inter text_gradient fw-bold fs_xl mt-3 mt-md-0 mb-0">
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
          <div className="col-6 col-md-3">
            <p className="ff_inter text_gradient fw-bold fs_xl mt-3 mt-md-0 mb-0">
              Latest Online Coaching
            </p>

            <ul className="ps-0 list_style_none">
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
        <div className="mt-4 d-flex align-items-end justify-content-between">
          <img className="footer_logo" src={FooterLogo} alt="FooterLogo" />
          <div>
            <p className="ff_inter fs_lg text-light fw-lighter mb-2">
              Follow On:
            </p>
            <Link target="_blank">
              <img className="footer_icon" src={FbIcon} alt="FbIcon" />
            </Link>
            <Link target="_blank" className="ms-2">
              <img
                className="footer_icon"
                src={TwitterIcon}
                alt="TwitterIcon"
              />
            </Link>
            <Link target="_blank" className="ms-2">
              <img className="footer_icon" src={InstaIcon} alt="InstaIcon" />
            </Link>
            <Link target="_blank" className="ms-2">
              <img className="footer_icon" src={TeleIcon} alt="TeleIcon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
