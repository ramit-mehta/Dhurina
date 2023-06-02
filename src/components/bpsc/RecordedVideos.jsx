import React from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const COURSE_IMAGE_URL = process.env.REACT_APP_Bucket_URL + "course/";

const RecordedVideos = ({ display, course, setSelectedItem }) => {
  const navigate = useNavigate();

  // course display
  const recordCourse = [];
  course.forEach((element) => {
    if (element.live_status === 0) {
      recordCourse.push(element);
    }
  });
  let showRecordCourse = 0;
  if (display) {
    showRecordCourse = 2;
  } else {
    showRecordCourse = recordCourse.length;
  }

  const { stateName } = useParams();
  const viewAllCourse = () => {
    navigate(`/${stateName}/all-recorded-course`);
    window.scrollTo(0, 0);
  };

  return (
    <div id="videos" className="custom_container container py-5">
      {display ? (
        <div className="d-flex justify-content-between align-content-center">
          <h2 className="text_gradient ff_inter fw-bold fs_4xl">
            Recorded Class
          </h2>
          <span
            onClick={() => {
              viewAllCourse();
            }}
            className={`ff_inter fw-semibold text_gradient mb-0 cursor_pointer ${
              recordCourse.length > 0 ? "" : "disabled"
            }`}
          >
            View All <span>&rarr;</span>{" "}
          </span>
        </div>
      ) : (
        ""
      )}
      <div className="row">
        {recordCourse.length === 0 ? (
          <p className="mb-0 ff_inter mt-3">No recorded videos available.</p>
        ) : (
          recordCourse.map((item, index) => {
            return item.live_status === 0 && index <= showRecordCourse ? (
              <div
                onClick={() => {
                  setSelectedItem(item);
                  navigate("/course");
                  window.scrollTo(0, 0);
                }}
                key={index}
                className="col-md-6 mt-4"
              >
                <Link>
                  <div className="border_light_brown h-100">
                    <div className="bg_classe">
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          className="w-100"
                          src={`${COURSE_IMAGE_URL}${item.image}`}
                          alt={item.name}
                        />
                      </div>
                    </div>
                    <h2 className="ff_inter fw-bolder fs-6 text_gradient mb-0 px-4 mt-3">
                      {item.name}
                    </h2>

                    <div className="mt-3 d-flex align-items-center justify-content-between px-4 pb-3">
                      <div>
                        <span className="mb-0 text_gradient fw-bold mb-0">
                          ₹{item.price}{" "}
                        </span>
                        <span className="fs_desc text_grey ff_inter text-decoration-line-through mb-0">
                          {item.discount}
                        </span>
                      </div>
                      <div className="coupon_bg px-2">
                        <p className="mb-0 ff_inter fw-bold fs_sm text-black">
                          <span className="fs_xsm fw-semibold ms-1 text-black">
                            {item.teacher}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ) : null;
          })
        )}
      </div>
    </div>
  );
};

export default RecordedVideos;
