import React from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const COURSE_IMAGE_URL = process.env.REACT_APP_Bucket_URL + "course/";

const LiveClasses = ({ display, course, setSelectedItem }) => {
  const navigate = useNavigate();

  // course display
  const liveCourse = [];
  course.forEach((element) => {
    if (element.live_status === 1) {
      liveCourse.push(element);
    }
  });
  let showLiveCourse = 0;
  if (display) {
    showLiveCourse = 2;
  } else {
    showLiveCourse = liveCourse.length;
  }

  const { stateName } = useParams();
  const viewAllCourse = () => {
    navigate(`/${stateName}/all-live-course`);
    window.scrollTo(0, 0);
  };
  return (
    <div id="liveclass" className="custom_container container py-5">
      {display ? (
        <div className="d-flex justify-content-between align-content-center">
          <h2 className="text_gradient ff_inter fw-bold fs_4xl">Live Class</h2>
          <span
            onClick={() => {
              viewAllCourse();
            }}
            className={`ff_inter fw-semibold text_gradient mb-0 cursor_pointer ${
              liveCourse.length > 0 ? "" : "disabled"
            }`}
          >
            View All <span>&rarr;</span>{" "}
          </span>
        </div>
      ) : (
        ""
      )}

      <div className="row">
        {liveCourse.length === 0 ? (
          <p className="mb-0 ff_inter mt-3">No live classes available.</p>
        ) : (
          liveCourse.map((item, index) => {
            return item.live_status === 1 && index <= showLiveCourse ? (
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

export default LiveClasses;
