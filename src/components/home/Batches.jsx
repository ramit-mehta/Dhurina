import React from "react";
import HomeIcon from "../../assets/images/svg/home-icon.svg";
import Accordion from "react-bootstrap/Accordion";
import IndiaIcon from "../../assets/images/svg/india-icon.svg";
import IndiaGateIcon from "../../assets/images/svg/indiagate-icon2.svg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Batches = () => {
  // const settings = {
  //   arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

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
    <div className="px-3">
      <div className="container custom_container py-5 my-5 batches">
        <div className="row accordion_scroll_bar">
          <div className="col-6 col-lg-4 vh_70 overflow-auto position-relative">
            <Accordion className="w_75 mx-auto">
              {Courses.map((item, index) => {
                return (
                  <Accordion.Item
                    eventKey={item.eventKey}
                    key={index}
                    className="my-3"
                  >
                    <Accordion.Header>
                      <img className="me-2" src={item.icon} alt={item.icon} />{" "}
                      <p className="ff_inter fw-semibold fs_lg mb-0">
                        {item.name}
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li className="ff_inter fw-semibold fs_lg">
                          JAIIB & CAIIB
                        </li>
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
                );
              })}
            </Accordion>
          </div>
          <div className="col-6 col-lg-8">
            {/* <Slider {...settings}> */}
            <div className="row mt-3">
              {Batch.map((item, index) => {
                return (
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
                );
              })}
            </div>

            {/* </Slider> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Batches;
