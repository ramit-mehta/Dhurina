/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import ApiCall from "../../api/callApi";
import Poster from "../../assets/images/png/bpsc-crack-img.png";

const SingleBook = () => {
  const [allBooks, setAllBooks] = useState([]);

  var { title, id } = useParams();
  let url = "book-detail/" + title + "/" + id;

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  function getData() {
    ApiCall("", "get", url, filterbookcallback);
  }

  const filterbookcallback = useCallback((response) => {
    if (response.data.status === 200) {
      setAllBooks(response.data.data);
    } else {
      console.log("error");
    }
  }, []);

  // const htmlParser = new Parser();
  // const htmlString = `<p className="ff_inter fw-normal text_grey fs_lg pe-lg-5">${courseDetail.web_description}</p>`;
  // const parsedDesc = htmlParser.parse(htmlString);
  return (
    <div className="custom_container container">
      <div className="py-5">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="ff_inter fw-semibold fs_8xl mb-0 pe-lg-5 course_heading">
              {title}
            </h2>

            <h3 className="ff_inter text_gradient fw-semibold fs_8xl mb-0 py-3 mt-4">
              Book Highlights
            </h3>
            <p className="ff_inter fw-normal text_grey fs_lg pe-lg-5">
              Patna High Court Recruitment 2023 Notification for 550 assistant
              posts has been released on employment news. The official pdf will
              be available to download from the official website by 6th February
              2023. The online registration process for Patna High Court
              Recruitment 2023 assistant posts will begin on 6th February 2023.
            </p>
            <div className="course_highlight pb-5 mt-5">
              <div className="bg_light_orange course_des">
                <h4 className="ff_inter text_gradient fw-semibold fs_8xl mb-0 py-3 text-center ">
                  Book Highlights
                </h4>
              </div>
              <ul>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  100+ Hours of Live with Recorded Classes
                </li>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  40+ PDF study materials to boost your preparation
                </li>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  Access to 24X7 recorded classes so that you never miss out
                </li>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  Special Q&A Sessions for all subjects
                </li>
                <span className="text_gradient ff_inter fw-bold fs_lg">
                  Subject Covered:
                </span>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  Patna High Court Assistant Exam 2023
                </li>
                <span className="text_gradient ff_inter fw-bold fs_lg">
                  Subject Covered:
                </span>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  English Language
                </li>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  Hindi Language
                </li>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  Computer Proficiency
                </li>
                <li className="text_grey fw-normal fs_lg ff_inter mt-1">
                  Sintu Morya sir:-(a) Teaching the English Language(b) 6+ Years
                  of Experience(c) More than 1000+ Selection(d) More than 8000+
                  Aspirants Mentored
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 mt-5 mt-lg-0">
            <div className="border_light_brown">
              <div className="">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="w-100"
                    // src={`${COURSE_IMAGE_URL}${courseDetail.image}`}
                    alt=""
                  />
                </div>
              </div>

              <div className="border_light_brown mx-4 mb-3">
                <p className="ff_inter fw-semibold text_grey fs_sm mt-2">
                  General English:- The questions will be designed to test ....
                </p>
                <div className="p-3">
                  <span className="mb-0 text_gradient fw-bold fs_3xl mb-0">
                    {/* {courseDetail.price} */}
                  </span>
                  <span className="fs_desc ms-1 text_grey ff_inter text-decoration-line-through mb-0">
                    {/* {courseDetail.discount} */}
                  </span>
                  {/* <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex mt-2 align-items-center">
                        <p className="mb-0 ff_inter text_gradient fw-semibold fs_desc">
                          "MAY"
                        </p>
                        <p className="text_grey fw-semibold fs_desc mb-0">
                          coupon available
                        </p>
                      </div>
                      <button className="bg_classes apply_btn fw-semibold px-3 fs_desc ff_inter">
                        Apply
                      </button>
                    </div> */}
                  <Link className="bg_gradient text-white ff_inter fs-6 d-block text-center px-3 py-2">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg_crack_bpsc mt-4 p-3 position-relative col-md-6 col-lg-12">
              <h2 className="text-white ff_inter fw-bold fs_8xl">BPSC CRACK</h2>
              <p className="mb-0 text-white ff_inter fs_8xl crack_bpsc_para">
                krna Hua Bahut Aasan..
              </p>
              <button className="fw-semibold ff_inter fs_sm mt-2 register_btn position-relative border-0 py-1 px-3">
                REGISTER
              </button>
              <img
                className="position-absolute bottom-0 end-0 poster"
                src={Poster}
                alt="bpsc_crack"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
