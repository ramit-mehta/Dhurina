import React from "react";
import { Short } from "../common/Helper";

const ShortsPlay = () => {
  return (
    <div>
      <div className="d-flex bg-white mx-auto px-3 py-2 col-11 col-sm-10 col-lg-7 short_input mt-2 align-items-center mb-5 ">
        <input
          className=" border-0 bg-transparent w-100 ff_inter fs_3xl color_grey"
          type="text"
          placeholder="Type Teacher Name & Study Goal"
        />
        <button className="bg_gradient text-white border-0 rounded-pill px-5 py-3 fs_xl">
          Search
        </button>
      </div>

      <div className="row mb-5">
        {Short.map((item, index) => {
          return (
            <div
              className="col-sm-6 col-lg-4 mt-5 text-center text-sm-start px-5"
              key={index}
            >
              <div className="position-relative ">
                <img className="img-fluid" src={item.img} alt={item.img} />
                <img
                  className="position-absolute top-50 start-50 translate-middle cursor_pointer"
                  src={item.resumeBtn}
                  alt={item.resumeBtn}
                />
              </div>
              <p className="mb-0 mt-2 ff_inter fw-semibold fs_5xl">
                {item.para}
              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-sm-start">
                <img src={item.viewIcon} alt={item.viewIcon} />
                <span className="ms-1 color_grey ff_inter fw-normal fs_lg">
                  {item.views}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShortsPlay;
