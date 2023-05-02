import React, { useState, useEffect } from "react";
import MobileIcon from "../assets/images/svg/mobile-icon.svg";
import LoginImg from "../assets/images/png/login-img.png";
const Login = () => {
  const [otp, setOtp] = useState("Enter Mobile Number");
  const [seconds, setSeconds] = useState("SEND OTP");
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(interval);
        setSeconds("Resend OTP");
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div className="custom_container container">
      <div className=" row align-items-end flex-column-reverse flex-lg-row py-3">
        <div className="col-lg-6 text-center mt-4 mt-lg-0">
          <p className="color_dark_blue fs_10xl fw-normal ff_inter mb-0">
            Get direction to{" "}
          </p>
          <p className="text_gradient fs_10xl fw-bold ff_inter pb-4 mb-2">
            Prepare for your exams
          </p>
          <p className="fs_8xl text_gradient ff_inter fw-semibold mb-5 pb-4">
            JOIN
          </p>
          <div className="position-relative">
            <input
              className="w-100 login_input pb-3 fs_4xl color_grey "
              type="number"
              name="number"
              id="number"
              placeholder={otp}
            />
            <button
              onClick={() => {
                if (isNaN(seconds)) {
                  setSeconds(60);
                  setOtp("Enter OTP");
                }
              }}
              className="position-absolute ff_inter top-0 end-0 border-0 bg-transparent text_gradient fw-semibold fs_4xl"
            >
              {" "}
              {seconds < 10 && !isNaN(seconds)
                ? `00:0${seconds}`
                : !isNaN(seconds)
                ? `00:${seconds}`
                : seconds}
            </button>
            <img
              className="position-absolute mobile_icon start-0 "
              src={MobileIcon}
              alt="MobileIcon"
            />
          </div>
          <button className="mt-5 w-100 py-4 text-white fs_8xl ff_inter fw-normal border-0 login_btn">
            Login
          </button>
        </div>
        <div className="col-lg-6 text-center">
          <img className="img-fluid" src={LoginImg} alt={LoginImg} />
        </div>
      </div>
    </div>
  );
};

export default Login;
