/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import ApiCall from "../../api/callApi";

const COURSE_AREA_IMAGE_URL =
  process.env.REACT_APP_Bucket_URL + "course/areas/";
const EXAM_CATEGORY_IMAGE_URL = process.env.REACT_APP_Bucket_URL + "exam/";

const Batches = () => {
  const [courseAreas, setCourseAreas] = useState([]);
  const [examCategories, setExamCategories] = useState([]);
  const [examSubCategories, setExamSubCategories] = useState([]);

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
                            <li className="ff_inter fw-semibold fs_desc text-black">
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
                <div className="w-20 text-center" key={index}>
                  <img
                    className="batches_icon"
                    src={`${COURSE_AREA_IMAGE_URL}${item.image}`}
                    alt={item.image}
                  />
                  <p className="ff_inter fs_desc color_light_black fw-semibold lh-sm mt-1">
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
