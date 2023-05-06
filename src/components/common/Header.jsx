import React, { useState } from "react";
import Logo from "../../assets/images/png/dhurina-logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import WhatsappLogo from "../../assets/images/png/whatsapp-logo.png";
import { Link } from "react-router-dom";
import Login from "../Login";

const Header = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Courses");

  // Dropdown option select
  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.innerHTML);
  };
  return (
    <>
      <div className="custom_container container">
        <nav className="mt-2 d-flex flex-column flex-md-row justify-content-between align-items-md-end">
          <div className="d-flex align-items-end mb-3 mb-md-0">
            <Link to="/">
              <img className="dhurina_logo" src={Logo} alt={Logo} />
            </Link>
            <Dropdown className="ms-5 ps-3 ">
              <Dropdown.Toggle
                className="courses_dropdown border-0 color_dark_blue ff_inter fw-semibold border_oval bg_light_orange"
                id="dropdown-basic"
              >
                {selectedOption}
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg_light_orange color_dark_blue">
                <Dropdown.Item
                  className="ff_inter"
                  onClick={handleOptionSelect}
                >
                  Action
                </Dropdown.Item>
                <Dropdown.Item
                  className="ff_inter"
                  onClick={handleOptionSelect}
                >
                  Another action
                </Dropdown.Item>
                <Dropdown.Item
                  className="ff_inter"
                  onClick={handleOptionSelect}
                >
                  Something else
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3 mt-md-0 justify-content-md-end">
            <div className="d-flex border_gradient px-3 py-1">
              <button className="text_gradient ff_inter border-0 fw-semibold fs-sm">
                Whatsapp
              </button>
              <Link>
                <img
                  className="ms-2 whatsapp_logo"
                  src={WhatsappLogo}
                  alt={WhatsappLogo}
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
        </nav>
      </div>

      {/* Login Popup */}
      {loginPopup ? (
        <div className="position-fixed top-50 start-50 translate-middle bg-white login_popup w-100 max-vh-100 p-4">
          <Login setLoginPopup={setLoginPopup} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
