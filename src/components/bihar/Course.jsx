/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import LiveIcon from "../../assets/images/svg/live-icon.svg";
import RecordIcon from "../../assets/images/svg/record-icon.svg";
import TestIcon from "../../assets/images/svg/test-icon.svg";
import Play from "../../assets/images/png/orange-play.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Poster from "../../assets/images/png/bpsc-crack-img.png";
import { Parser } from "html-to-react";
import ApiCall from "../../api/callApi";
const COURSE_IMAGE_URL = process.env.REACT_APP_Bucket_URL + "course/";
var page = 1;
const Course = () => {
  const [validity, setValidity] = useState();

  const validityPeriods = [{ time: 12 }, { time: 6 }];

  const [description, setDescription] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [isViewPolicy, setIsViewPolicy] = useState(true);
  const [show, setShow] = useState(false);
  const togglePolicy = () => {
    setIsViewPolicy(!isViewPolicy);
  };
  const [mainloading, setMainLoading] = useState(true);
  const [courseDetail, setCourseDetail] = useState("");
  const [course_tags, setTags] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [purchase_status, setPurchaseStatus] = useState(0);
  var { course_url, courseId } = useParams();
  const navigate = useNavigate();
  let url = "course_detail/" + course_url + "/" + courseId;

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  //----------Course Detail Data------------//
  function getData() {
    ApiCall("", "get", url, courseCallback);
  }

  const courseCallback = useCallback((response) => {
    if (response.data.status === 200 || response.data.status === 301) {
      if (response.data.status === 301) {
        navigate("/course-detail/" + response.data.new_url + "/" + courseId);
      }

      setTeacher(JSON.parse(response.data.course.faculity));
      let course = response.data.course;

      setCourseDetail(course);
      setTags(response.data.subcatname);
      setDescription(response.data.course.web_description);
      if (
        response.data.course.sub_heading !== "" ||
        response.data.course.sub_heading != null ||
        response.data.course.sub_heading !== "null"
      ) {
        setSeoDescription(response.data.course.sub_heading);
      } else {
        setSeoDescription(response.data.course.description);
      }
      setPurchaseStatus(response.data.purchase_status);
      setMainLoading(false);

      // set datalayer google tags
      window.dataLayer.push({
        event: "page_view",
        send_to: "AW-11012643170",
        value: response.data.course.price,
        items: [
          {
            id: response.data.course.id,
            // 'location_id': 'replace with value',
            google_business_vertical: "education",
          },
        ],
      });
    } else if (response.data.status === 404) {
      navigate("/page-not-found");
    } else {
      console.log("error");
    }
  });

  const htmlParser = new Parser();
  const htmlString = `<p className="ff_inter fw-normal text_grey fs_lg pe-lg-5">${courseDetail.web_description}</p>`;
  const parsedDesc = htmlParser.parse(htmlString);

  return (
    <div className="custom_container container">
      <div className="py-5">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="ff_inter fw-semibold fs_8xl mb-0 pe-lg-5 course_heading">
              {courseDetail.name}
            </h2>
            <span className="me-3 text_gradient fs_lg ff_inter fw-bold">
              Select Validity
            </span>
            {validityPeriods.map((item, index) => {
              return (
                <button
                  onClick={() => setValidity(item.time)}
                  key={index}
                  className={`${
                    validity === item.time
                      ? "bg_gradient text-white"
                      : "bg_light_orange2 color_black2"
                  } me-3 border-0  px-3 py-2 fw-normal rounded-1 mt-3 fw-semibold ff_inter mt-5`}
                  value={item.time}
                >
                  {item.time} Months
                </button>
              );
            })}
            <div className="course_highlight mt-5">
              <div className="bg_light_orange course_des">
                <h3 className="ff_inter text_gradient fw-semibold fs_8xl mb-0 py-3 text-center ">
                  Course Description
                </h3>
              </div>
              <p className="ff_inter fw-normal text_grey fs_lg px-4 ms-0">
                {parsedDesc}
              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-5 mt-lg-0">
            <div className="border_light_brown">
              <div className="">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="w-100"
                    src={`${COURSE_IMAGE_URL}${courseDetail.image}`}
                    alt={courseDetail.name}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <img className="ms-5" src={LiveIcon} alt="live_icon" />
                <p className="mb-0 ff_inter fw-semibold text_grey fs_sm ms-1">
                  12+ Live Classes
                </p>
              </div>
              <div className="d-flex align-items-center mt-2">
                <img className="ms-5" src={RecordIcon} alt="record_icon" />
                <p className="mb-0 ff_inter fw-semibold text_grey fs_sm ms-1">
                  26+ Recorded Classes
                </p>
              </div>
              <div className="d-flex align-items-center mt-2">
                <img className="ms-5" src={TestIcon} alt="test_icon" />
                <p className="mb-0 ff_inter fw-semibold text_grey fs_sm ms-1">
                  25+ Test
                </p>
              </div>
              <div className="p-3 mt-3">
                <h2 className="text_gradient fs-5 fw-semibold">Demo Class</h2>
              </div>
              <div className="border_light_brown mx-4 mb-3">
                <div className="bg_classes text-center p-4">
                  <img src={Play} alt="play_btn" />
                </div>
                <p className="ff_inter fw-semibold text_grey px-3 fs_sm mt-2">
                  General English:- The questions will be designed to test ....
                </p>
                <div className="p-3">
                  <span className="mb-0 text_gradient fw-bold fs_3xl mb-0">
                    {courseDetail.price}
                  </span>
                  <span className="fs_desc ms-1 text_grey ff_inter text-decoration-line-through mb-0">
                    {courseDetail.discount}
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

export default Course;
