import React from "react";
import { Link } from "react-router-dom";
import Poster from "../../assets/images/png/bpsc-crack-img.png";

const Register = () => {
  const filter = [
    {
      type: "Online Live Classes",
      path: "#liveclass",
    },
    {
      type: "Recorded Videos",
      path: "#videos",
    },
    {
      type: "Mock Tests/Test Series",
      path: "#tests",
    },
    {
      type: "Books",
      path: "#books",
    },
    {
      type: "Ebooks",
      path: "#ebooks",
    },
  ];
  return (
    <div className="bg_register p-4">
      <h2 className="text_gradient ff_inter fw-semibold fs_6xl mb-3">
        Filter Search
      </h2>
      {filter.map((item, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              name="filter"
              id={item.type}
              value={item.type}
            />
            <label
              className="ff_inter fw-semibold fs_md text_dark_grey ms-2"
              for="filter"
            >
              {item.type}
            </label>
          </div>
        );
      })}

      <h2 className="text_gradient ff_inter fw-semibold fs_6xl mb-3 mt-5">
        Quick Links
      </h2>
      <Link>
        <p className="mb-0 ff_inter text_grey fs_md">
          BSSC CGL ONLINE COACHING
        </p>
      </Link>
      <Link>
        <p className="mb-0 ff_inter text_dark_grey fs_md">BIHAR CIVIL COURT</p>
      </Link>
      <Link>
        <p className="mb-0 ff_inter text_dark_grey fs_md">Online Coaching</p>
      </Link>
      <Link>
        <p className="mb-0 ff_inter text_dark_grey fs_md">
          Bihar PSC Online Coaching
        </p>
      </Link>
      <Link>
        <p className="mb-0 ff_inter text_dark_grey fs_md">BIHAR POLICE</p>
      </Link>
      <Link>
        <p className="mb-0 ff_inter text_dark_grey fs_md">Online Coaching</p>
      </Link>
      <Link>
        <p className="mb-0 ff_inter text_dark_grey fs_md">
          BIHAR CO OPERATIVE BANK
        </p>
      </Link>
      <Link>
        <p className="mb-0 ff_inter text_dark_grey fs_md">Online Coaching</p>
      </Link>

      <div className="bg_crack_bpsc mt-3 p-3 position-relative col-md-6 col-lg-12">
        <h2 className="text-white ff_inter fw-bold fs_8xl">BPSC CRACK</h2>
        <p className="mb-0 text-white ff_inter fs_8xl crack_bpsc_para">
          krna Hua Bahut Aasan..
        </p>
        <button className="fw-semibold ff_inter fs_sm mt-2 register_btn position-relative border-0 py-1 px-3">
          REGISTER
        </button>
        <img
          className="position-absolute bottom-0 end-0 poster"
          src={Poster}
          alt="bpsc_crack"
        />
      </div>
    </div>
  );
};

export default Register;
