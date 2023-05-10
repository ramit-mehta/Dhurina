import React, { useState } from "react";
import UserIcon from "../assets/images/svg/user-icon.svg";
import LocationIcon from "../assets/images/svg/location-icon.svg";
import EmailIcon from "../assets/images/svg/email-icon.svg";
import WelcomeImg from "../assets/images/png/welcome-img.png";
import Close from "../../src/assets/images/svg/popup-close-icon.svg";
const Welcome = () => {
  const states = [
    {
      name: "Andhra Pradesh",
    },
    {
      name: "Arunachal Pradesh",
    },
    {
      name: "Assam",
    },
    {
      name: "Bihar",
    },
    {
      name: "Chhattisgarh",
    },
    {
      name: "Goa",
    },
    {
      name: "Gujarat",
    },
    {
      name: "Haryana",
    },
    {
      name: "Himachal Pradesh",
    },
    {
      name: "Jharkhand",
    },
    {
      name: "Karnataka",
    },
    {
      name: "Kerala",
    },
    {
      name: "Madhya Pradesh",
    },
    {
      name: "Maharashtra",
    },
    {
      name: "Manipur",
    },
    {
      name: "Meghalaya",
    },
    {
      name: "Mizoram",
    },
    {
      name: "Nagaland",
    },
    {
      name: "Odisha",
    },
    {
      name: "Punjab",
    },
    {
      name: "Rajasthan",
    },
    {
      name: "Sikkim",
    },
    {
      name: "Tamil Nadu",
    },
    {
      name: "Telangana",
    },
    {
      name: "Tripura",
    },
    {
      name: "Uttar Pradesh",
    },
    {
      name: "Uttarakhand",
    },
    {
      name: "West Bengal",
    },
  ];
  const Goals = [
    { name: "Compitition Exam" },
    { name: "JEE/NEET" },
    { name: "K1-K12" },
    { name: "Skill" },
  ];
  const [goal, setGoal] = useState();
  console.log(goal);
  return (
    <div className="container">
      <div className="text-end">
        <img className="cursor_pointer" src={Close} alt="popup_close" />
        <div className=" row align-items-end flex-column-reverse flex-lg-row py-3">
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <p className="text_gradient fs_9xl fw-semibold ff_inter pb-4 mb-2">
              Welcome
            </p>
            <div className="position-relative">
              <input
                className="w-100 login_input pb-3 fs_3xl color_grey "
                type="text"
                name="number"
                id="number"
                placeholder="Enter Name"
              />

              <img
                className="position-absolute mobile_icon start-0 "
                src={UserIcon}
                alt="UserIcon"
              />
            </div>
            <div className="position-relative mt-4">
              <input
                className="w-100 login_input pb-3 fs_3xl color_grey "
                type="email"
                name="number"
                id="number"
                placeholder="Enter Email"
              />

              <img
                className="position-absolute mobile_icon start-0 "
                src={EmailIcon}
                alt="EmailIcon"
              />
            </div>
            <div className="position-relative mt-4 select_scroll ">
              <select
                className="w-100 login_input pb-3 fs_3xl color_grey"
                name="state"
                id="state"
              >
                <option value="Select State" disabled>
                  Select State
                </option>
                {states.map((item, index) => {
                  return (
                    <option
                      key={index}
                      className="text_dark_grey"
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>

              <img
                className="position-absolute mobile_icon start-0 "
                src={LocationIcon}
                alt="LocationIcon"
              />
            </div>
            <p className="text_gradient fs_lg mb-1 fw-semibold ff_inter text-start mt-4">
              Select your goal
            </p>
            <div className="d-flex flex-wrap">
              {Goals.map((item, index) => {
                return (
                  <button
                    onClick={() => setGoal(item.name)}
                    key={index}
                    className={`${
                      goal === item.name
                        ? "bg_gradient text-white"
                        : "bg_light_orange2 color_black2"
                    } me-3 border-0  px-3 py-2 fw-normal rounded-1 mt-3`}
                    value={item.name}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <button className="mt-5 w-100 py-3 text-white fs_5xl ff_inter fw-normal border-0 login_btn">
              Submit
            </button>
          </div>
          <div className="col-lg-6 text-center">
            <img className="img-fluid" src={WelcomeImg} alt={WelcomeImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
