import React from "react";
import Logo from "../../assets/images/png/dhurina-logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import WhatsappLogo from "../../assets/images/png/whatsapp-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
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
                All Courses
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg_light_orange color_dark_blue">
                <Dropdown.Item className="ff_inter" href="#/action-1">
                  Action
                </Dropdown.Item>
                <Dropdown.Item className="ff_inter" href="#/action-2">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item className="ff_inter" href="#/action-3">
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
            <Link to="/login">
              <button className="ms-3 fs-sm text-white ff_inter bg_gradient border-0 px-3 py-2">
                Sign Up/Login
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
