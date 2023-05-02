import React from "react";
import MobileIcon from "../assets/images/svg/mobile-icon.svg";
import LoginImg from "../assets/images/png/login-img.png";
const Login = () => {
  return (
    <div className="custom_container container">
      <div className="mt-5 pt-5 row align-items-end">
        <div className="col-6 text-center">
          <p className="color_dark_blue">Get direction to </p>
          <p className="text_gradient">Prepare for your exams</p>
          <p>Join</p>
          <div className="position-relative">
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Enter Mobile Number"
            />
            <button> Send OTP</button>
            <img src={MobileIcon} alt="MobileIcon" />
          </div>
          <button>LOGIN</button>
        </div>
        <div className="col-6">
          <img className="img-fluid" src={LoginImg} alt={LoginImg} />
        </div>
      </div>
    </div>
  );
};

export default Login;
