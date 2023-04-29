import React from "react";
import Logo from "../../assets/images/png/dhurina-logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import WhatsappLogo from "../../assets/images/png/whatsapp-logo.png";

const Header = () => {
  return (
    <>
      <nav className="mt-5 d-flex justify-content-between align-items-end">
        <div className="d-flex align-items-end">
          <img src={Logo} alt={Logo} />
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
        <div className="d-flex mb-0">
          <div className="d-flex border_gradient px-3 py-1">
            <button className="text_gradient ff_inter border-0 fw-semibold fs_lg">
              Whatsapp
            </button>
            <img
              className="ms-2 whatsapp_logo"
              src={WhatsappLogo}
              alt={WhatsappLogo}
            />
          </div>
          <button className="ms-3 fs_lg text-white ff_inter border_gradient_2 border-0 px-3 py-1">
            Sign Up/Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
