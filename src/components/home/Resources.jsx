import React from "react";
import { ResourceData } from "../common/Helper";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="bg_gradient ">
      <div className="custom_container container py-5">
        <h2 className="ff_inter fw-bold text-white text-center">
          Free Resources
        </h2>
        <div className="row my-5">
          {ResourceData.map((item, index) => {
            return (
              <div
                key={index}
                className=" col-6 col-sm-4 col-lg-2 mt-4 mt-lg-0 text-center"
              >
                <Link>
                  <img className="w-50" src={item.image} alt={item.title} />
                </Link>
                <p className="mb-0 mt-2 text-white fs_xxl fw-semibold">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resources;
