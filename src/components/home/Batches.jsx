import React, { useState } from "react";
import HomeIcon from "../../assets/images/svg/home-icon.svg";
import Accordion from "react-bootstrap/Accordion";
import IndiaIcon from "../../assets/images/svg/india-icon.svg";
import IndiaGateIcon from "../../assets/images/svg/indiagate-icon2.svg";
import OpenIcon from "../../assets/images/svg/indiagate-icon.svg";

const Batches = () => {
  const [openItems, setOpenItems] = useState([]);

  const handleAccordionToggle = (eventKey) => {
    if (openItems.includes(eventKey)) {
      setOpenItems(openItems.filter((item) => item !== eventKey));
    } else {
      setOpenItems([...openItems, eventKey]);
    }
  };

  const Batch = [
    {
      icon: HomeIcon,
      name: "Foundation Batch",
    },
    {
      icon: HomeIcon,
      name: "Foundation Batch",
    },
    {
      icon: HomeIcon,
      name: "Foundation Batch",
    },
    {
      icon: HomeIcon,
      name: "Foundation Batch",
    },
    {
      icon: HomeIcon,
      name: "Foundation Batch",
    },
    {
      icon: HomeIcon,
      name: "Foundation Batch",
    },
    {
      icon: HomeIcon,
      name: "Foundation Batch",
    },
    {
      icon: HomeIcon,
      name: "Foundation Batch",
    },
    {
      icon: HomeIcon,
      name: "Foundation Batch",
    },
    {
      icon: HomeIcon,
      name: "Foundation Batch",
    },
    {
      icon: HomeIcon,
      name: "Foundation Batch",
    },
    {
      icon: HomeIcon,
      name: "Foundation Batch",
    },
    {
      icon: HomeIcon,
      name: "Foundation Batch",
    },
  ];
  const Courses = [
    { icon: IndiaIcon, openIcon: OpenIcon, name: "State Exam", eventKey: "0" },
    {
      icon: IndiaGateIcon,
      openIcon: OpenIcon,
      name: "All State",
      eventKey: "1",
    },
    {
      icon: IndiaGateIcon,
      openIcon: OpenIcon,
      name: "Govt Jobs",
      eventKey: "2",
    },
    {
      icon: IndiaGateIcon,
      openIcon: OpenIcon,
      name: "JEE/NEET",
      eventKey: "3",
    },
    { icon: IndiaGateIcon, openIcon: OpenIcon, name: "K1-12", eventKey: "4" },
    {
      icon: IndiaGateIcon,
      openIcon: OpenIcon,
      name: "All State",
      eventKey: "5",
    },
    {
      icon: IndiaGateIcon,
      openIcon: OpenIcon,
      name: "Govt Jobs",
      eventKey: "6",
    },
    {
      icon: IndiaGateIcon,
      openIcon: OpenIcon,
      name: "JEE/NEET",
      eventKey: "7",
    },
    { icon: IndiaGateIcon, openIcon: OpenIcon, name: "K1-12", eventKey: "8" },
  ];
  return (
    <div className="px-3">
      <div className="container custom_container py-5 my-5 batches">
        <div className="row accordion_scroll_bar">
          <div className="col-6 col-lg-4 vh_70 overflow-auto position-relative">
            <Accordion className="w-75 mx-auto">
              {Courses.map((item, index) => (
                <Accordion.Item
                  eventKey={item.eventKey}
                  key={index}
                  className="my-3"
                >
                  <Accordion.Header
                    onClick={() => handleAccordionToggle(item.eventKey)}
                  >
                    {openItems.includes(item.eventKey) ? (
                      <img
                        className="me-md-2"
                        src={item.openIcon}
                        alt={item.openIcon}
                      />
                    ) : (
                      <img
                        className="me-md-2"
                        src={item.icon}
                        alt={item.icon}
                      />
                    )}
                    <p className="ff_inter fw-semibold fs_lg mb-0">
                      {item.name}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="ps_0">
                      <li className="ff_inter fw-semibold fs_lg">Banking</li>
                      <li className="ff_inter fw-semibold fs_lg">SSC</li>
                      <li className="ff_inter fw-semibold fs_lg">Railway</li>
                      <li className="ff_inter fw-semibold fs_lg">Banking</li>
                      <li className="ff_inter fw-semibold fs_lg">
                        JAIIB & CAIIB
                      </li>
                      <li className="ff_inter fw-semibold fs_lg">SSC</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <div className="col-6 col-lg-8">
            <div className="row mt-3">
              {Batch.map((item, index) => (
                <div className="w-20 text-center" key={index}>
                  <img
                    className="batches_icon"
                    src={item.icon}
                    alt={item.icon}
                  />
                  <p className="ff_inter fs_lg color_light_black fw-semibold lh-sm mt-1">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Batches;
