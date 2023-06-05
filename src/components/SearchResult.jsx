import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row, Image } from "react-bootstrap";
import ApiCall from "../api/callApi";

const BOOK_IMAGE_URL = process.env.REACT_APP_Bucket_URL + "ebook/image/";
const COURSE_IMAGE_URL = process.env.REACT_APP_Bucket_URL + "course/";

const SearchResult = () => {
  const navigate = useNavigate();

  let current_url = window.location.href;
  let search_keyword = current_url.substring(current_url.lastIndexOf("=") + 1);

  const [keyword, setKeyword] = useState(search_keyword);
  const [filterCourse, setFilterCourse] = useState([]);
  const [filterBook, setFilterBook] = useState([]);
  const [filterTestSeries, setFilterTestSeries] = useState([]);

  let url = "search_course";
  const body = {
    name: search_keyword,
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search_keyword]);

  function getData() {
    ApiCall(body, "post", url, filterCourseCallback);
  }

  const filterCourseCallback = useCallback((response) => {
    if (response.data.status === 200) {
      setKeyword(response.data.keyword);
      setFilterCourse(response.data.course);
      setFilterBook(response.data.book);
      setFilterTestSeries(response.data.test_series);
    } else {
      console.log("error");
    }
  }, []);
  return (
    <>
      <section className="bg_students mt-4">
        <div className="custom_container container py-3">
          <h3 className="mb-0 ff_inter text_gradient fw-semibold">{keyword}</h3>
        </div>
      </section>

      <div className="custom_container container py-5">
        <div className="row">
          {filterCourse.length === 0 ? (
            <p className="mb-0 ff_inter mt-3 text_gradient fw-semibold fs-6">
              No Data Found Related Search In Course
            </p>
          ) : (
            filterCourse.map((item, index) => (
              <div
                onClick={() => {
                  navigate(`/course-detail/${item.course_url}/${item.id}`);
                  window.scrollTo(0, 0);
                }}
                key={index}
                className="col-md-6 col-lg-4 mt-4"
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
                    <h2 className="ff_inter fw-bolder fs-6 text_gradient mb-0 px-3 mt-3">
                      {item.name}
                    </h2>
                    <div className="mt-3 d-flex align-items-center justify-content-between px-3 pb-3">
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
                          <span className="fs_desc ff_inter fw-bold text_gradient">
                            {item.live_status === 0 ? "Recorded" : "Live"}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

      <section className="py-5 bg_students">
        <div className="custom_container container py-5">
          <Row>
            <Col lg={12}>
              <p className="fs-5 fw-bold ff_inter">Related Test Series</p>
              <Row>
                {filterTestSeries.length === 0 ? (
                  <p className="mb-0 ff_inter mt-3 text_gradient fw-semibold fs-6">
                    No Data Found Related Search In Test Series
                  </p>
                ) : (
                  filterTestSeries.map((item, index) => {
                    return (
                      <Col key={index} className="mt-4" md={3} xs={6}>
                        <Link
                          to={
                            "/test-series/" +
                            item.test_series_url +
                            "/" +
                            item.id
                          }
                        >
                          <div className="border_gradient p-2 h-100">
                            <h2 className="ff_inter fw-bolder fs-6 text_gradient mb-0 mt-2">
                              {item.title}
                            </h2>
                            <div className="ff_inter fs-6 fw-semibold text_gradient mb-0 mt-3">
                              Offer:{" "}
                              <span className="fs-6 fw-semibold me-1">
                                {" "}
                                ₹{item.price}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    );
                  })
                )}
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      <section className="bg_students py-5">
        <div className="custom_container container py-5">
          <Row>
            <Col lg={12}>
              <p className="fs-5 ff_inter fw-bold mb-4">Related Book Series</p>
              <Row>
                {filterBook.length === 0 ? (
                  <p className="mb-0 ff_inter mt-3 text_gradient fw-semibold fs-6">
                    No Data Found Related Search In Books
                  </p>
                ) : (
                  filterBook.map((item, index) => {
                    return (
                      <Col key={index} md={4} xs={6}>
                        <div className="item" key={item.id}>
                          <Link to={"/book-detail/" + item.id}>
                            <Image
                              className="w-100"
                              alt={item.title}
                              src={`${BOOK_IMAGE_URL}${item.image}`}
                            />
                            <div className="text-center">
                              <h2 className="ff_inter fw-bolder fs-6 text_gradient mb-0 mt-2">
                                {item.title}
                              </h2>
                              <span className="text_gradient fs-5 fw-semibold mt-4">
                                ₹{item.price}
                              </span>
                            </div>
                          </Link>
                        </div>
                      </Col>
                    );
                  })
                )}
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};
export default SearchResult;
