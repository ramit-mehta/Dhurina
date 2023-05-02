import React from "react";
import HomeIcon from "../../assets/images/svg/home-icon.svg";
import Accordion from "react-bootstrap/Accordion";
import IndiaIcon from "../../assets/images/svg/india-icon.svg";
import IndiaGateIcon from "../../assets/images/svg/indiagate-icon2.svg";
const Batches = () => {
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
    { icon: IndiaIcon, name: "State Exam", eventKey: "0" },
    { icon: IndiaGateIcon, name: "All State", eventKey: "1" },
    { icon: IndiaGateIcon, name: "Govt Jobs", eventKey: "2" },
    { icon: IndiaGateIcon, name: "JEE/NEET", eventKey: "3" },
    { icon: IndiaGateIcon, name: "K1-12", eventKey: "4" },
    { icon: IndiaGateIcon, name: "All State", eventKey: "5" },
    { icon: IndiaGateIcon, name: "Govt Jobs", eventKey: "6" },
    { icon: IndiaGateIcon, name: "JEE/NEET", eventKey: "7" },
    { icon: IndiaGateIcon, name: "K1-12", eventKey: "8" },
  ];
  return (
    <div className="container custom_container py-5  my-5 batches">
      <div className="row accordion_scroll_bar ">
        <div className="col-4 vh_70 overflow-auto position-relative">
          <Accordion className="w-75 mx-auto">
            {Courses.map((item, index) => {
              return (
                <Accordion.Item
                  eventKey={item.eventKey}
                  key={index}
                  className="py-2 border-0"
                >
                  <Accordion.Header>
                    <img src={item.icon} alt={item.icon} /> {item.name}
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>JAIIB & CAIIB</li>
                      <li>Banking</li>
                      <li>SSC</li>
                      <li>Railway</li>
                      <li>Banking</li>
                      <li>JAIIB & CAIIB</li>
                      <li>SSC</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
        <div className="col-8">
          <div className="row">
            {Batch.map((item, index) => {
              return (
                <div className="w-20 text-center" key={index}>
                  <img src={item.icon} alt={item.icon} />
                  <p className="ff_inter fs_lg color_light_black fw-semibold lh-sm mt-1">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Batches;
