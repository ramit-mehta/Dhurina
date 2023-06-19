import React, { useCallback, useEffect, useState } from "react";
import Unlock from "../../assets/images/svg/lock-ssc.svg";
import { useParams } from "react-router-dom";
import ApiCall from "../../api/callApi";

const PremiumTest = () => {
  const { id, stateName } = useParams();

  const [allTests, setAllTests] = useState([]);
  const [_state, setStateName] = useState("");
  const [sorting, setSorting] = useState("");
  const formattedStateName = stateName.replace("-", " ");
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
    setTestData(id, "state");
  }, []);

  const filterTestCallback = useCallback((response) => {
    if (response.data.status === 200) {
      setAllTests(response.data.test_series.data);
    } else {
      console.log("error");
    }
  }, []);
  let testId = [];
  allTests.forEach((element) => {
    // console.log(element.area_id.length );
    const elementParse = JSON.parse(element.area_id);
    if (element.price > 0) {
      elementParse.forEach((area) => {
        if (area == id) {
          testId.push(element);
        }
      });
    }
  });
  console.log(testId);
  return (
    <div className="position-relative">
      <div className="custom_container container py-5 gradient_after">
        <h2 className="ff_inter fw-bold fs-3 text-white">
          {formattedStateName} Premium Tests
        </h2>
        <p className="ff_inter mt-2 text-white">{testId.length} Tests</p>
        <div className="row">
          {testId.map((item, index) => {
            return (
              <div key={index} className="col-lg-3 col-md-6 mt-3">
                <div className="mock_box p-3 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div key={index}>
                      <h2 className="ff_inter fw-bold text_gradient fs-4 mb-0">
                        {item.title}
                      </h2>

                      <p className="mb-0 text_grey border_brown_bottom pb-3 ff_inter mt-1"></p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-0 mt-2 ff_inter text_grey fw-semibold">
                            Questions
                          </p>
                          <p className="mb-0 mt-2 ff_inter text_grey fw-semibold">
                            100
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-0 ff_inter text_grey fw-semibold">
                            Max Marks
                          </p>
                          <p className="mb-0 ff_inter text_grey fw-semibold">
                            100
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-0 ff_inter text_grey fw-semibold">
                            Time
                          </p>
                          <p className="mb-0 ff_inter text_grey fw-semibold">
                            90 Mins
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto bg_gradient col-6 mt-3 px-4 py-1 d-flex align-items-center justify-content-center">
                      <button className="ff_inter text-white border-0 fs-6 bg-transparent">
                        Unlock
                      </button>
                      <img className="ms-1" src={Unlock} alt="unlock_test" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PremiumTest;
