import React, { useState } from "react";
import Logo from "../../assets/images/png/dhurina-logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import WhatsappLogo from "../../assets/images/png/whatsapp-logo.png";
import Whatsapp from "../../assets/images/svg/whatsapp-white.svg";
import HomeUl from "../../assets/images/svg/ul-home.svg";
import ExamUl from "../../assets/images/svg/ul-exam.svg";
import TestUl from "../../assets/images/svg/ul-test.svg";
import { Link } from "react-router-dom";
import Login from "../Login";

const Header = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Courses");
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showList, setShowList] = useState(false);

  // Dropdown option select
  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.innerHTML);
  };
  const handleClick = () => {
    setShowNav(!showNav);
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("humburger");
    document.body.parentElement.classList.toggle("overflow-hidden");
  };

  const show = () => {
    setShowList(!showList);
  };

  return (
    <>
      <div className="custom_container container">
        <nav className="mt-2 d-flex justify-content-between align-items-center align-items-md-end position-relative">
          <Link className="d-md-none" to="/">
            <img
              className="dhurina_logo position-relative"
              src={Logo}
              alt="Logo"
            />
          </Link>
          <div className="d-flex align-items-end mb-3 mb-md-0 d-none d-md-flex">
            <Link to="/">
              <img className="dhurina_logo" src={Logo} alt="Logo" />
            </Link>
            <Dropdown className="ms-5 ps-3">
              <Dropdown.Toggle
                className="border-0 color_dark_blue ff_inter fw-semibold border_oval bg_light_orange"
                id="dropdown-basic"
              >
                {selectedOption}
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg_light_orange color_dark_blue">
                <Dropdown.Item className="ff_inter">
                  <Link
                    className="color_dark_blue d-block"
                    to="/bpsc"
                    onClick={(handleOptionSelect, handleClick)}
                  >
                    BPSC
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  className="ff_inter"
                  onClick={(handleOptionSelect, handleClick)}
                >
                  Another action
                </Dropdown.Item>
                <Dropdown.Item
                  className="ff_inter"
                  onClick={(handleOptionSelect, handleClick)}
                >
                  Something else
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-flex align-items-center  justify-content-center mt-3 mt-md-0 justify-content-md-end">
            <div className="d-flex border_gradient px-3 py-1 d-none d-lg-flex">
              <button className="text_gradient ff_inter border-0 fw-semibold fs-sm ">
                Whatsapp
              </button>
              <Link>
                <img
                  className="ms-2 whatsapp_logo"
                  src={WhatsappLogo}
                  alt="WhatsappLogo"
                />
              </Link>
            </div>
            <Link>
              <button
                onClick={() => {
                  setLoginPopup(true);
                }}
                className="ms-0 ms-lg-3 btn_login text-white ff_inter bg_gradient border-0 p-2 px-lg-3 py-lg-2"
              >
                Sign Up/Login
              </button>
            </Link>
            {/* Hamburger toggler  */}
            <div
              onClick={handleClick}
              className={`hamburger-menu d-flex flex-column d-md-none ms-4 ${
                menuOpen ? "open" : ""
              }`}
            >
              <span className="menu_1"></span>
              <span className="menu_2"></span>
              <span className="menu_3"></span>
            </div>
          </div>
        </nav>
        <div
          className={
            showNav
              ? "navShow w-100 d-md-none d-flex flex-column justify-content-between"
              : "width_0 overflow-hidden top-0 end-0 position-absolute"
          }
        >
          <ul className="list_style_none d-flex flex-column justify-content-center mt-4">
            <Link to="/">
              <li className="d-flex align-items-center mt-3">
                <img src={HomeUl} alt="home_icon" />
                <p className="ff_inter fw-semibold color_dark_blue mb-0 ms-2 fs-5">
                  Home
                </p>
              </li>
            </Link>
            <Link>
              <li className="d-flex align-items-center mt-3" onClick={show}>
                <img src={ExamUl} alt="exam_icon" />
                <p className="ff_inter fw-semibold color_dark_blue mb-0 ms-2 fs-5">
                  Select Exam
                </p>
              </li>
              {showList && (
                <ul className="ps-5 ms-5" style={{ listStyleType: "disc" }}>
                  <li className="ff_inter fw-semibold color_dark_blue">SSC</li>
                  <li className="ff_inter fw-semibold color_dark_blue">BPSC</li>
                  <li className="ff_inter fw-semibold color_dark_blue">
                    BANKING
                  </li>
                  <li className="ff_inter fw-semibold color_dark_blue">
                    RAILWAY
                  </li>
                </ul>
              )}
            </Link>
            <Link to="/test-series">
              <li className="d-flex align-items-center mt-3">
                <img src={TestUl} alt="test_icon" />
                <p className="ff_inter fw-semibold color_dark_blue mb-0 ms-2 fs-5">
                  Test Series
                </p>
              </li>
            </Link>
          </ul>
          <Link>
            <div className="d-flex col-6 mx-auto bg_gradient align-items-center justify-content-center p-2 mb-3">
              <p className="text-white ff_inter border-0 fs-sm mb-0">
                {" "}
                Whatsapp{" "}
              </p>
              <img
                className="ms-2 whatsapp_logo"
                src={Whatsapp}
                alt="WhatsappLogo"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Login Popup */}
      <div className={loginPopup ? "blur" : ""}></div>
      {loginPopup ? (
        <div className="position-fixed top-50 start-50 translate-middle bg-white login_popup w-100 vh_100 px-4 py-2 overflow-auto">
          <Login setLoginPopup={setLoginPopup} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
