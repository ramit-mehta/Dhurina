import React, { useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiCall from "../../api/callApi";

const Books = () => {
  const [mainloading, setMainLoading] = useState(true);
  const [bookItemData, setBookItem] = useState([]);
  const [user_id, setUserId] = useState("");
  const [state, setState] = useState({
    loading: true,
    booksData: [],
    notesData: [],
  });
  useEffect(() => {
    getData();

    if (localStorage.getItem("id") === null) {
    } else {
      setUserId(localStorage.getItem("id"));
    }
  }, []);

  function getData(params) {
    ApiCall("", "get", "books", book_data);
  }

  const book_data = useCallback((response) => {
    if (response.data.status === 200) {
      setBookItem(response.data.books);

      console.log(response.data.books);
      setState({
        ...state,
        notesData: response.data.pdf,
        booksData: response.data.free_book,
        loading: false,
      });
      setMainLoading(false);
    } else {
      console.log("error");
    }
  });
  const navigate = useNavigate();
  return (
    <div id="books" className="custom_container container py-5">
      <div className="d-flex justify-content-between align-content-center">
        <h2 className="text_gradient ff_inter fw-bold fs_4xl">Books</h2>
        <Link
          to="/all-books"
          className="ff_inter fw-semibold text_gradient mb-0"
        >
          View All <span>&rarr;</span>{" "}
        </Link>
      </div>
      <div className="row">
        {bookItemData.map((item, index) => {
          return (
            <div
              onClick={() => {
                navigate("/book");
              }}
              key={index}
              className="col-md-6 mt-4 cursor_pointer"
            >
              <Link>
                <div className="border_light_brown">
                  <div className="bg_books py-5 text-center position-relative">
                    <p className="mb-0 text-white bg_gradient ff_inter position-absolute fs_sm px-3 py-1 combo_label">
                      COMBO
                    </p>
                    <img
                      className="img-fluid h-50"
                      src={item.image}
                      alt={item.image}
                    />
                  </div>
                  <p className="ff_inter text_grey fs_desc pt-3 fw-semibol mb-0 px-3">
                    {item.title}
                  </p>
                  <div className="mt-3 d-flex align-items-center justify-content-between px-3 pb-3">
                    <div>
                      <span className="mb-0 text_gradient fw-bold ff_inter mb-0">
                        ₹{item.price}{" "}
                      </span>
                      <span className="fs_desc text_grey ff_inter text-decoration-line-through mb-0">
                        ₹ {item.dup_price}
                      </span>
                    </div>
                    <div className="coupon_bg px-2">
                      <p className="mb-0 ff_inter fw-bold fs_sm text-black">
                        "<span className=" text_gradient">BPSC</span>"
                        <span className="fs_xsm fw-semibold ms-1 text-black">
                          Coupon Applied
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
