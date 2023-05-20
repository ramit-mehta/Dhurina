import React, { useState } from "react";
import Android from "../../assets/images/svg/android-icon.svg";
import AndroidOff from "../../assets/images/svg/android-icon-off.svg";
import Apple from "../../assets/images/svg/apple-icon.svg";
import Apple2 from "../../assets/images/svg/apple-icon-orange.svg";
import Icon1 from "../../assets/images/svg/timeline-orange-icon.svg";
import Icon2 from "../../assets/images/svg/timeline-grey-icon.svg";
import Mobile from "../../assets/images/png/dhurina-android.png";
import Iphone from "../../assets/images/png/dhurina-iphone.png";
import Ellipse from "../../assets/images/png/enroll-ellipse.png";

const Enroll = () => {
  // Toggle switch
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="custom_container container py-5">
      <div className="d-lg-flex justify-content-between align-items-center">
        <h2 className="ff_inter fw-bold color_dark_blue mb-0 text-center text-lg-start">
          How to Enroll in <span className="text_gradient"> Dhurina </span>
        </h2>
        <div className="mb-0 d-flex align-items-center justify-content-center mt-4 mt-lg-0">
          {isOn ? (
            <img className="android_icon" src={AndroidOff} alt="android_icon" />
          ) : (
            <img className="android_icon" src={Android} alt="android_icon" />
          )}
          <div className="toggle-switch mx-2">
            <input
              type="checkbox"
              className="toggle-switch-checkbox"
              checked={isOn}
              onChange={handleToggle}
              id="toggle-switch"
            />
            <label
              className="toggle-switch-label bg_gradient"
              htmlFor="toggle-switch"
            >
              <span className="toggle-switch-inner" />
              <span className="toggle-switch-switch" />
            </label>
          </div>
          {isOn ? (
            <img className="apple_icon" src={Apple2} alt="off" />
          ) : (
            <img className="apple_icon" src={Apple} alt="on" />
          )}
        </div>
      </div>
      <div className="row flex-column-reverse flex-lg-row mt-5 py-4 justify-content-between align-items-center">
        <div className="col-lg-6 mt-5 mt-lg-0 text-center text-lg-start">
          <div class="timeline">
            <div class="py-0 px-4 ms-3 position-relative">
              <h2 className="ff_inter fw-bold text_dark_grey fs-4 ">
                Choose your exam
              </h2>
              <img
                className="position-absolute top-0 start-0 translate-middle-x"
                src={Icon1}
                alt="icon"
              />
            </div>
            <div class="py-0 px-4 mt-5 ms-3 position-relative">
              <h2 className="ff_inter fw-bold text_gradient fs-4 position-relative">
                Select your desired course
              </h2>
              <p className="mt-4 ff_inter fs_lg text_grey mb-0">
                Find a course that contains your desired products and suits your
                needs
              </p>
              <img
                className="position-absolute top-0 start-0 translate-middle-x"
                src={Icon1}
                alt="icon"
              />
            </div>
            <div class="py-0 px-4 mt-5 ms-3 position-relative">
              <h2 className="ff_inter fw-bold text_dark_grey fs-4 ">
                Make the purchase
              </h2>
              <img
                className="position-absolute top-0 start-0 translate-middle-x"
                src={Icon2}
                alt="icon"
              />
            </div>
            <div class="py-0 px-4 mt-5 ms-3 position-relative">
              <h2 className="ff_inter fw-bold text_dark_grey fs-4 ">
                Navigate to My Purchased Courses
              </h2>
              <img
                className="position-absolute top-0 start-0 translate-middle-x"
                src={Icon2}
                alt="icon"
              />
            </div>
            <div class="py-0 px-4 mt-5 ms-3 position-relative">
              <h2 className="ff_inter fw-bold text_dark_grey fs-4 ">
                Choose your exam
              </h2>
              <img
                className="position-absolute top-0 start-0 translate-middle-x"
                src={Icon2}
                alt="icon"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-end position-relative">
          <img
            className="position-absolute start-50 enroll_ellipse"
            src={Ellipse}
            alt="ellipse"
          />
          {isOn ? (
            <img className="mobile_size" src={Iphone} alt="off" />
          ) : (
            <img className="mobile_size" src={Mobile} alt="on" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Enroll;
