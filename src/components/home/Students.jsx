import React, { useRef } from "react";
import OurStudent from "../../assets/images/png/our-student.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Prev from "../../assets/images/svg/slider-prev.svg";
import Next from "../../assets/images/svg/slider-next.svg";
import Ellipse1 from "../../assets/images/png/orange-ellipse.png";
import Ellipse2 from "../../assets/images/png/orange-ellipse2.png";
import Dots from "../../assets/images/png/our-student-dots.png";
import Quotes from "../../assets/images/svg/quotes.svg";
import Polygon from "../../assets/images/png/our-student-polygon.png";
import Polygon2 from "../../assets/images/png/our-student-polygon2.png";

const Students = () => {
  const sliderRef = useRef(null);

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg_students position-relative">
      <div className="custom_container container py-5">
        <img
          className="cursor_pointer arrows position-absolute prev"
          onClick={() => sliderRef.current.slickPrev()}
          src={Prev}
          alt="prev"
        />
        <img
          className="cursor_pointer arrows position-absolute next"
          onClick={() => sliderRef.current.slickNext()}
          src={Next}
          alt="Next"
        />
        <img
          className="position-absolute orange_ellipse"
          src={Ellipse1}
          alt="ellipse1 "
        />
        <img
          className="position-absolute orange_ellipse2"
          src={Ellipse2}
          alt="ellipse2"
        />
        <img className="position-absolute orange_dots" src={Dots} alt="dots" />
        <img
          className="position-absolute students_polygon"
          src={Polygon}
          alt="polygon"
        />
        <img
          className="position-absolute students_small_polygon top-50 translate-middle"
          src={Polygon2}
          alt="small_polygon"
        />
        <h2 className="ff_inter color_dark_blue  text-center fw-bold mb-0 position-relative our_students_line">
          What Our Students <span className="text_gradient">Say?</span>
        </h2>
        <Slider {...settings} ref={sliderRef}>
          <div className="row d-flex align-items-center justify-content-center my-5 py-4">
            <div className="col-lg-6">
              <img
                className="our_student mx-auto"
                src={OurStudent}
                alt="OurStudent"
              />
            </div>
            <div className="col-lg-6">
              <img
                className="text-start mt-4 mt-lg-0"
                src={Quotes}
                alt="quotes"
              />
              <h3 className="ff_inter fw-bold text_dark_grey mt-2 mb-0">
                Babita Choudhary
              </h3>
              <p className="ff_inter fw-lighter fs_lg mt-2 text_grey mb-0">
                I recently qualified for IBPS SO. I worked in a private sector
                bank and during that period I decided to crack Banking exams. I
                started preparing in 2019. A Big thanks to the Dhurina team. The
                mock test that they provide helped me a lot, the questions are
                of very good quality and the daily quizzes are of great help to
                boost speed.
              </p>
            </div>
          </div>
          <div className="row d-flex align-items-center my-5 py-4">
            <div className="col-lg-6">
              <img
                className="our_student mx-auto"
                src={OurStudent}
                alt="OurStudent"
              />
            </div>
            <div className="col-lg-6 mx-auto">
              <img className="mt-4 mt-lg-0" src={Quotes} alt="quotes" />
              <h3 className="ff_inter fw-bold text_dark_grey mt-2 mb-0">
                Babita Choudhary
              </h3>
              <p className="ff_inter fw-lighter fs_lg mt-2 text_grey mb-0">
                I recently qualified for IBPS SO. I worked in a private sector
                bank and during that period I decided to crack Banking exams. I
                started preparing in 2019. A Big thanks to the Dhurina team. The
                mock test that they provide helped me a lot, the questions are
                of very good quality and the daily quizzes are of great help to
                boost speed.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Students;
