import React from "react";
import SscLogo from "../../assets/images/png/ssc-logo.png";
import { SscHero } from "../common/Helper";

const HeroSsc = () => {
  return (
    <div className="bg_hero_ssc mt-5">
      <div className="custom_container container py-5">
        <img src={SscLogo} alt="ssc_logo" />
        <span className="ff_inter fw-semibold text_gradient mb-0 ms-3">
          SSC & Railway
        </span>
        <div className="row mt-4">
          {SscHero.map((item, index) => {
            return (
              <div key={index} className="col-lg-7">
                <h2 className="ff_inter fw-bold fs-3">{item.heading}</h2>
                <p className="ff_inter mt-2 text_grey">{item.para}</p>
                <ul className="ul_ticks">
                  {item.list.map((data) => {
                    return (
                      <li className="ff_inter fw-semibold text-capitalize text_dark_grey mt-2">
                        {data.detail}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="col-lg-5 text-center">
            <button className="bg_gradient ff_inter fw-semibold text-white border-0 py-2 px-4 fs-5 mt-5">
              Unlock All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSsc;
