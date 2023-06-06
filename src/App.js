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
import Bihar from "./components/Bihar";
import SearchResult from "./components/SearchResult";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:stateName/:id" element={<BPSC />} />
          <Route path="/ssc" element={<Ssc />} />
          <Route path="/bihar" element={<Bihar />} />

          <Route path="/shorts" element={<Shorts />} />
          <Route
            path="/:stateName/:id/all-live-course"
            element={<AllCourses />}
          />
          <Route
            path="/:stateName/:id/all-recorded-course"
            element={<AllRecorded />}
          />
          <Route path="/:stateName/:id/all-books" element={<Allbooks />} />
          <Route path="/all-ebooks" element={<AllEbooks />} />
          <Route
            path="/course-detail/:course_url/:courseId"
            element={<Course />}
          />
          <Route path="/book" element={<SingleBook />} />
          <Route path="/ebook" element={<SingleEbook />} />
          <Route path="/search-result" element={<SearchResult />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
