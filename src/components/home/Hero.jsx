import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../../assets/images/png/hero-img.png";
import Ellipse1 from "../../assets/images/png/hero-ellipse-1.png";
import Ellipse2 from "../../assets/images/png/hero-ellipse-2.png";
import PlayStore from "../../assets/images/png/google-play.png";
import AppStore from "../../assets/images/png/app-store.png";
import { Link } from "react-router-dom";
import ApiCall from "../../api/callApi";

const Image_URL = process.env.REACT_APP_Bucket_URL;

const Hero = () => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   // Fetch data from the API
  //   const fetchData = async () => {
  //     try {
  //       const response = await makeApiCall(null, "get", "/your-api-endpoint");
  //       setData(response.data); // Assuming the response data is in the format you expect
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const [loading, setLoading] = useState(true);
  const [cartcount, setCartCount] = useState(0);
  const [testSeriesData, setTestSeries] = useState([]);
  const [bookItemData, setBookItem] = useState([]);
  const [allCourseData, setAllCourse] = useState([]);
  const [newCourseData, setNewCourse] = useState([]);
  const [mainloading, setMainLoading] = useState(true);
  const [show_succ, setShowSucc] = useState(false);
  const [show_fail, setShowFail] = useState(false);
  const [message, setMessage] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [faculty, setFaculty] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("selectpre")) {
      var prepval = localStorage.getItem("selectpre");

      if (prepval === "School") {
        return navigate("/school");
      }

      if (prepval === "Skill") {
        return navigate("/skill");
      }
    }
    getData();
  }, []);

  // const addToCart = (e, index, price) => {
  //   let newArray = [...bookItemData];
  //   let obj = newArray[index];
  //   obj.cart_status = true;
  //   newArray[index] = obj;
  //   setBookItem(newArray);

  //   var body = {
  //     type: "book",
  //     type_id: e,
  //     quantity: 1,
  //     user_id: localStorage.getItem("id"),
  //     price: price,
  //     pages: 5,
  //   };
  //   ApiCall(body, "post", "cart", cartcallback);
  // };

  const cartcallback = useCallback((response) => {
    if (response.data.status === "true") {
      setMessage("Book added in cart");
      setShowSucc(true);
      setShowFail(false);
      setTimeout(() => {
        setShowSucc(false);
      }, 3000);
    } else {
      setMessage("Error in added cart");
      setShowSucc(false);
      setShowFail(true);
      setTimeout(() => {
        setShowFail(false);
      }, 3000);
    }
  });

  function getData(params) {
    var body = {
      user_id: "",
    };

    if (
      localStorage.getItem("id") !== null &&
      localStorage.getItem("id") !== ""
    ) {
      body = {
        user_id: localStorage.getItem("id"),
      };
    }
    ApiCall(body, "post", "home_data", home_data);
  }

  const home_data = useCallback((response) => {
    if (response.data.status === 200) {
      console.log(response.data.books);
      setCartCount(response.data.cart_count);
      setFaculty(response.data.faculty);
      setTestSeries(response.data.test_series);
      setNewCourse(response.data.new_course);
      setAllCourse(response.data.all_course);
      setBookItem(response.data.books);

      setLoading(false);
      setMainLoading(false);
    } else {
      console.log("error");
    }
  });

  const RouteChange = (e) => {
    navigate("/search-result?keyword=" + searchInput, {
      state: { course: searchInput },
    });
  };

  return (
    <>
      <div className="custom_container container">
        <div className="row  flex-row-reverse justify-content-center mt-5 pt-5">
          <div className="col-md-5 text-center text-md-start position-relative">
            <img
              className="position-absolute hero_ellipse_1"
              src={Ellipse1}
              alt="Ellipse1"
            />
            <img
              className="position-absolute hero_ellipse_2 "
              src={Ellipse2}
              alt="Ellipse2"
            />
            <img className="w-100 hero_img" src={HeroImg} alt="HeroImg" />
          </div>
          <div className="col-md-7 col-9 mt-4 text-center text-md-start">
            <h2 className="ff_inter fw-semibold color_dark_blue fs_11xl mb-0">
              Get direction to
            </h2>
            <p className="text_gradient ff_inter fs_11xl fw-bold mb-0 text-lg-nowrap">
              Prepare for your exam
            </p>
            <p className="ff_inter color_dark_blue fs_7xl">
              Watch anywhere, anytime.
            </p>
            <div className="d-flex bg-white mx-auto mx-lg-0 px-3 py-2 hero_input mt-2 align-items-center">
              <input
                className=" border-0 bg-transparent w-100 ff_inter fs_md"
                type="text"
                placeholder="Find Exam Based Video, Mock Test & Notes"
              />
              <button className="bg_gradient text-white border-0 rounded-pill px-3 py-1 px-lg-4 fs_xl">
                Search
              </button>
            </div>
            <div className="mt-4 pt-sm-2">
              <Link target="_blank" to="https://play.google.com/store">
                <img className="store_icon" src={PlayStore} alt="PlayStore" />
              </Link>
              <Link target="_blank" to="https://www.apple.com/app-store/">
                <img
                  className="ms-2 store_icon"
                  src={AppStore}
                  alt="AppStore"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
