import React, { useState } from "react";
import Logo from "../../assets/images/png/dhurina-logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import WhatsappLogo from "../../assets/images/png/whatsapp-logo.png";
import { Link } from "react-router-dom";
import Login from "../Login";

const Header = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Courses");
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  if (loginPopup) {
    document.body.parentElement.classList.add("overflow-hidden");
  } else {
    document.body.parentElement.classList.remove("overflow-hidden");
  }
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
          <div className="d-flex align-items-center  justify-content-center mt-3 mt-md-0 justify-content-md-end d-none d-md-flex">
            <div className="d-flex border_gradient px-3 py-1">
              <button className="text_gradient ff_inter border-0 fw-semibold fs-sm">
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
                onClick={() => setLoginPopup(true)}
                className="ms-3 fs-sm text-white ff_inter bg_gradient border-0 px-3 py-2"
              >
                Sign Up/Login
              </button>
            </Link>
          </div>

          {/* Hamburger toggler  */}
          <div
            onClick={handleClick}
            className={`hamburger-menu d-flex flex-column d-md-none ${
              menuOpen ? "open" : ""
            }`}
          >
            <span className="menu_1"></span>
            <span className="menu_2"></span>
            <span className="menu_3"></span>
          </div>
        </nav>
        <div
          className={
            showNav
              ? "navShow w-100 d-md-none"
              : "width_0 overflow-hidden top-0 end-0 position-absolute"
          }
        >
          <Dropdown>
            <Dropdown.Toggle
              className="border-0 color_dark_blue ff_inter fw-semibold border_oval bg-white"
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
          <div className="d-flex border_gradient px-3 py-1 mt-4">
            <button className="text_gradient ff_inter border-0 fw-semibold fs-sm">
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
              onClick={() => setLoginPopup(true)}
              className=" fs-sm text-white ff_inter bg_gradient border-0 px-3 py-2 mt-4"
            >
              Sign Up/Login
            </button>
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
