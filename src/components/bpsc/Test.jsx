/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import { Link, json, useNavigate, useParams } from "react-router-dom";
import ApiCall from "../../api/callApi";

const TEST_IMAGE_URL = process.env.REACT_APP_Bucket_URL + "combo/";

const Test = ({ display }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [courseAreas, setCourseAreas] = useState([]);
  const [_state, setStateName] = useState("");
  const [sorting, setSorting] = useState("");
  const [allTests, setAllTests] = useState([]);

  function filterTests(arr, type, event, filtertype) {
    const body = {
      state: filtertype === "state" ? String(event) : String(_state),
      sorting: filtertype === "sorting" ? event : sorting,
      test: type === "test" ? arr : [],
      teachers: type === "teacher" ? arr : [],
      random: "false",
    };
    ApiCall(body, "post", "test_series", filterTestCallback);
  }

  const setTestData = (event, type) => {
    if (type === "state") {
      setStateName(event);
      filterTests([], "", event, type);
    } else {
      setSorting(event);
      filterTests([], "", event, type);
    }
  };

  useEffect(() => {
    getData();
    setTestData(id, "state");
  }, []);

  function getData(params) {
    ApiCall("", "get", "course_area", course_area);
  }

  // course area
  const course_area = useCallback((response) => {
    if (response.data.status === 200) {
      setCourseAreas(response.data.data);
    } else {
      console.log("error");
    }
  });

  const filterTestCallback = useCallback((response) => {
    if (response.data.status === 200) {
      setAllTests(response.data.test_series.data);
    } else {
      console.log("error");
    }
  }, []);

  const { stateName } = useParams();
  const viewAllTests = () => {
    navigate(`/test-series/${stateName}/${id}`);
    window.scrollTo(0, 0);
  };
  let testLength = 0;

  const testId = [];
  allTests.forEach((element) => {
    // console.log(element.area_id.length );
    const elementParse = JSON.parse(element.area_id);

    elementParse.forEach((area) => {
      if (area == id) {
        testId.push(element);
        testLength++;
      }
    });
  });
  const stateTests = [];
  const filteredTests = testId.filter((test, index) => {
    if (display && (index === 0 || index === 1)) {
      stateTests.push(test);
    } else if (!display) {
      stateTests.push(test);
    }
  });

  return (
    <div id="tests" className="custom_container container py-5">
      {display ? (
        <div className="d-flex justify-content-between align-content-center">
          <h2 className="text_gradient ff_inter fw-bold fs_4xl">Test Series</h2>
          <span
            onClick={() => {
              viewAllTests();
            }}
            className={`ff_inter fw-semibold text_gradient mb-0 cursor_pointer ${
              testLength === 0 ? "disabled" : ""
            }`}
          >
            View All <span>&rarr;</span>{" "}
          </span>
        </div>
      ) : (
        ""
      )}
      <div className="row">
        {testLength === 0 ? (
          <p className="mb-0 ff_inter mt-3">No Test Series available.</p>
        ) : (
          stateTests &&
          stateTests.map((test, index) => (
            <div key={index} className="col-md-6 mt-4">
              <Link>
                <div className="border_light_brown">
                  <img
                    className="img-fluid"
                    src={`${TEST_IMAGE_URL}${test.image}`}
                    alt="bpsc_logo "
                  />
                  <div className="ms-2 mt-3 mb-0">
                    <h2 className="ff_inter fw-bolder fs-6 text_gradient mb-0">
                      {test.title}
                    </h2>
                  </div>
                  <div className="mt-3 d-flex align-items-center justify-content-between px-3 pb-3">
                    <div>
                      <span className="mb-0 text_gradient fw-bold mb-0">
                        ₹{test.price}{" "}
                      </span>
                    </div>
                    {/* <div className="coupon_bg px-2">
                      <p className="mb-0 ff_inter fw-bold fs_sm text-black">
                        "<span className=" text_gradient">{test.coupon}</span>"
                        <span className="fs_xsm fw-semibold ms-1 text-black">
                          Coupon Applied
                        </span>
                      </p>
                    </div> */}
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Test;
