import React from "react";
import { Link } from "react-router-dom";
import { Company } from "./Helper";
import { Courses } from "./Helper";
import { Products } from "./Helper";
import { Coaching } from "./Helper";
import { MockTests } from "./Helper";
import FooterLogo from "../../assets/images/png/footer-logo.png";

const Footer = () => {
  return (
    <div className="bg_dark_blue">
      <div className="custom_container container pt-5">
        <div className="row pt-3">
          <div className="col-3">
            <p className="ff_inter text_gradient fw-bold fs_3xl">Company</p>

            <ul className="ps-0">
              {Company.map((item, index) => {
                return (
                  <li key={index} className="mt-1">
                    <Link className="ff_inter fs_md text_light_grey fw-lighter">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <img className="w-75 mt-4" src={FooterLogo} alt={FooterLogo} />
          </div>
          <div className="col-3">
            <p className="ff_inter text_gradient fw-bold fs_3xl">Courses</p>

            <ul className="ps-0">
              {Courses.map((item, index) => {
                return (
                  <li key={index} className="mt-1">
                    <Link className="ff_inter fs_md text_light_grey fw-lighter">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-3">
            <p className="ff_inter text_gradient fw-bold fs_3xl">Products</p>

            <ul className="ps-0">
              {Products.map((item, index) => {
                return (
                  <li key={index} className="mt-1">
                    <Link className="ff_inter fs_md text_light_grey fw-lighter">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="ps-0 mt-5">
              <p className="ff_inter text_gradient fw-bold fs_3xl">
                Latest Mock Tests
              </p>

              {MockTests.map((item, index) => {
                return (
                  <li key={index} className="mt-1">
                    <Link className="ff_inter fs_md text_light_grey fw-lighter">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-3">
            <p className="ff_inter text_gradient fw-bold fs_3xl">
              Latest Online Coaching
            </p>

            <ul className="ps-0">
              {Coaching.map((item, index) => {
                return (
                  <li key={index} className="mt-1">
                    <Link className="ff_inter fs_md text_light_grey fw-lighter">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
