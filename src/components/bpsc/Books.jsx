/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ApiCall from "../../api/callApi";

const BOOK_IMAGE_URL = process.env.REACT_APP_Bucket_URL + "ebook/image/";

var page = 1;
const Books = ({ display }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [courseAreas, setCourseAreas] = useState([]);
  const [_state, setStateName] = useState("");
  const [sorting, setSorting] = useState("");
  const [allBooks, setAllBooks] = useState([]);
  console.log();
  const setBooksData = (event, type) => {
    if (type === "state") {
      setStateName(event);
      page = 1;
      filterBooks([], "", event, type);
    } else {
      setSorting(event);
      filterBooks([], "", event, type);
    }
  };

  function filterBooks(arr, type, event, filtertype) {
    const body = {
      state: filtertype === "state" ? String(event) : String(_state),
      sorting: filtertype === "sorting" ? event : sorting,
      book: type === "book" ? arr : [],
      teachers: type === "teacher" ? arr : [],
      page: page,
      random: "false",
    };
    ApiCall(body, "get", "fetchBooks", filterbookcallback);
  }

  useEffect(() => {
    getData();
    setBooksData(id, "state");
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

  // courses
  const filterbookcallback = useCallback((response) => {
    if (response.data.status === 200) {
      if (response.data.total_page !== page && response.data.total_page !== 0) {
        page = page + 1;
      }
      setAllBooks(response.data.data);
    } else {
      console.log("error");
    }
  }, []);

  const { stateName } = useParams();
  const viewAllBooks = () => {
    navigate(`/${stateName}/${id}/all-books`);
    window.scrollTo(0, 0);
  };
  let booksLength = 0;
  allBooks.forEach((element) => {
    if (element.area_id === `["${id}"]`) {
      booksLength++;
    }
  });
  return (
    <div id="books" className="custom_container container py-5">
      {display ? (
        <div className="d-flex justify-content-between align-content-center">
          <h2 className="text_gradient ff_inter fw-bold fs_4xl">Books</h2>
          <span
            onClick={() => {
              viewAllBooks();
            }}
            className={`ff_inter fw-semibold text_gradient mb-0 cursor_pointer ${
              booksLength === 0 ? "disabled" : ""
            }`}
          >
            View All <span>&rarr;</span>{" "}
          </span>
        </div>
      ) : (
        ""
      )}
      <div className="row">
        {booksLength === 0 ? (
          <p className="mb-0 ff_inter mt-3">No books available.</p>
        ) : (
          allBooks.map((book) =>
            book.area_id === `["${id}"]` ? (
              <div key={book.id} className="col-md-6 mt-4">
                <Link to={`/book-detail/${id}/${book.id}`}>
                  <div className="border_light_brown h-100">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        className="w-100 book_fit"
                        src={`${BOOK_IMAGE_URL}${book.image}`}
                        alt={book.title}
                      />
                    </div>
                    <h2 className="ff_inter fw-bolder fs-5 text_gradient mb-0 px-4 mt-3">
                      {book.title}
                    </h2>

                    <div className="mt-3 d-flex align-items-center justify-content-between px-4 pb-3">
                      <p className="mb-0 text_gradient fw-bold mb-0">Price :</p>
                      <div>
                        <span className="mb-0 text_gradient fw-bold mb-0">
                          ₹{book.price}{" "}
                        </span>
                        <span className="fs_desc text_grey ff_inter text-decoration-line-through mb-0">
                          {book.dup_price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              ""
            )
          )
        )}
      </div>
    </div>
  );
};

export default Books;
