import "./App.css";
// ***bootstrap.min.css
import "bootstrap/dist/css/bootstrap.min.css";

// ***components
import Home from "./components/Home";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { Route, Routes } from "react-router-dom";
import BPSC from "./components/BPSC";
import Bihar from "./components/Bihar";
import AllCourses from "./components/bihar/AllCourses";
import Shorts from "./components/Shorts";
import Ssc from "./components/Ssc";
import Course from "./components/bihar/Course";
import AllEbooks from "./components/bihar/AllEbooks";
import Allbooks from "./components/bihar/Allbooks";
import SingleBook from "./components/bihar/SingleBook";
import SingleEbook from "./components/bihar/SingleEbook";
import { useState } from "react";
function App() {
  const [course, setCourse] = useState([]);

  // Callback function to save the course name in local storage
  const onCourseClick = (courseName) => {
    localStorage.setItem("courseName", courseName);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home setCourse={setCourse} onCourseClick={onCourseClick} />}
        />
        <Route path="/bpsc" element={<BPSC course={course} />} />
        <Route path="/bihar" element={<Bihar />} />
        <Route path="/ssc" element={<Ssc />} />

        <Route path="/all-live-course" element={<AllCourses />} />
        <Route path="/all-ebooks" element={<AllEbooks />} />
        <Route path="/all-books" element={<Allbooks />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/course" element={<Course />} />
        <Route path="/book" element={<SingleBook />} />
        <Route path="/ebook" element={<SingleEbook />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
