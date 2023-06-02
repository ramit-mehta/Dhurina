/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link, useNavigate } from "react-router-dom";
import ApiCall from "../../api/callApi";

const COURSE_AREA_IMAGE_URL =
  process.env.REACT_APP_Bucket_URL + "course/areas/";
const EXAM_CATEGORY_IMAGE_URL = process.env.REACT_APP_Bucket_URL + "exam/";
var page = 1;

const Batches = ({ setCourse, onCourseClick }) => {
  const navigate = useNavigate();
  const [courseAreas, setCourseAreas] = useState([]);
  const [examCategories, setExamCategories] = useState([]);
  const [examSubCategories, setExamSubCategories] = useState([]);
  const [allCourse, setAllCourse] = useState([]);
  const [_state, setStateName] = useState("");
  const [sorting, setSorting] = useState("");

  // store clicked course details
  const handleCourseClick = (item) => {
    onCourseClick(item.name);
    window.scrollTo(0, 0);
  };
  const setCourseData = (event, type) => {
    if (type === "state") {
      setStateName(event);
      page = 1;
      filterCourse([], "", event, type);
    } else {
      setSorting(event);
      filterCourse([], "", event, type);
    }
  };

  function filterCourse(arr, type, event, filtertype) {
    const body = {
      state: filtertype === "state" ? String(event) : String(_state),
      sorting: filtertype === "sorting" ? event : sorting,
      course: type === "course" ? arr : [],
      teachers: type === "teacher" ? arr : [],
      page: page,
      random: "false",
    };

    ApiCall(body, "post", "all_course", filtercoursecallback);
  }

  useEffect(() => {
    getData();
  }, []);

  function getData(params) {
    ApiCall("", "get", "course_area", course_area);
    ApiCall("", "get", "exam_categories", examCategory);
    ApiCall("", "get", "exam_sub_categories", exam_sub_categories);
  }

  // course area
  const course_area = useCallback((response) => {
    if (response.data.status === 200) {
      setCourseAreas(response.data.data);
    } else {
      console.log("error");
    }
  });

  // courses
  const filtercoursecallback = useCallback((response) => {
    if (response.data.status === 200) {
      if (response.data.total_page !== page && response.data.total_page !== 0) {
        page = page + 1;
      }
      setAllCourse(response.data.all_course);
      setCourse(response.data.all_course);
    } else {
      console.log("error");
    }
  }, []);

  // exam category
  const examCategory = useCallback((response) => {
    if (response.data.status === 200) {
      setExamCategories(response.data.data);
    } else {
      console.log("error");
    }
  });
  // examsub category
  const exam_sub_categories = useCallback((response) => {
    if (response.data.status === 200) {
      setExamSubCategories(response.data.data);
    } else {
      console.log("error");
    }
  });
  const getCourseData = (item) => {
    const url = item.name;
    const stateName = url.replace(/\s/g, "-");
    console.log(stateName);

    navigate(`/${stateName}`);
  };

  return (
    <div className="px-3">
      <div className="container custom_container py-5 my-5 batches">
        <div className="row accordion_scroll_bar">
          <div className="col-6 col-lg-3 vh_70 overflow-auto position-relative">
            <Accordion className="w-75 mx-auto" defaultActiveKey="0">
              {examCategories.map((item, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className="my-2"
                >
                  <Accordion.Header>
                    <img
                      className="me-md-2 exam_category_logo"
                      src={`${EXAM_CATEGORY_IMAGE_URL}${item.image}`}
                      alt={item.image}
                    />
                    <p className="ff_inter fw-semibold fs_md mb-0 me-2">
                      {item.name}
                    </p>
                  </Accordion.Header>

                  <Accordion.Body>
                    <ul className="ps_0">
                      {examSubCategories
                        .filter(
                          (subcategory) => subcategory.category_id === item.id
                        )
                        .map((subcategory) => (
                          <Link key={subcategory.id}>
                            <li className="ff_inter fw-semibold fs_desc text-black sub_category_link mt-1">
                              {subcategory.name}
                            </li>
                          </Link>
                        ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <div className="col-6 col-lg-9">
            <div className="row mt-3">
              {courseAreas.map((item, index) => (
                <div
                  className="w-20 text-center"
                  key={index}
                  onClick={() => {
                    handleCourseClick(item);
                    setCourseData(item.id, "state");
                  }}
                >
                  <div onClick={() => getCourseData(item)}>
                    <Link>
                      <img
                        className="batches_icon"
                        src={`${COURSE_AREA_IMAGE_URL}${item.image}`}
                        alt={item.image}
                      />
                      <p className="ff_inter fs_desc color_light_black fw-semibold lh-sm mt-1">
                        {item.name}
                      </p>
                    </Link>
                  </div>
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
