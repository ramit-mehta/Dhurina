import "./App.css";
// ***bootstrap.min.css
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

// ***components
import Home from "./components/Home";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { Route, Routes } from "react-router-dom";
import BPSC from "./components/BPSC";
import AllCourses from "./components/bihar/AllCourses";
import AllRecorded from "./components/bihar/AllRecorded";
import Shorts from "./components/Shorts";
import Ssc from "./components/Ssc";
import Course from "./components/bihar/Course";
import AllEbooks from "./components/bihar/AllEbooks";
import Allbooks from "./components/bihar/Allbooks";
import SingleBook from "./components/bihar/SingleBook";
import SingleEbook from "./components/bihar/SingleEbook";
import { useState } from "react";
import Bihar from "./components/Bihar";
function App() {
  const [course, setCourse] = useState([]);
  // Callback function to save the course name in local storage
  const onCourseClick = (courseName) => {
    localStorage.setItem("courseName", courseName);
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home setCourse={setCourse} onCourseClick={onCourseClick} />
            }
          />
          <Route path="/:stateName" element={<BPSC course={course} />} />
          <Route path="/ssc" element={<Ssc />} />
          <Route path="/bihar" element={<Bihar />} />

          <Route path="/shorts" element={<Shorts />} />
          <Route
            path="/:stateName/all-live-course"
            element={<AllCourses course={course} />}
          />
          <Route
            path="/:stateName/all-recorded-course"
            element={<AllRecorded course={course} />}
          />
          <Route path="/all-ebooks" element={<AllEbooks />} />
          <Route path="/all-books" element={<Allbooks />} />
          <Route path="/course" element={<Course />} />
          <Route path="/book" element={<SingleBook />} />
          <Route path="/ebook" element={<SingleEbook />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
