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
import Alltests from "./components/bihar/Alltests";
import SingleBook from "./components/bihar/SingleBook";
import SingleEbook from "./components/bihar/SingleEbook";
import SearchResult from "./components/SearchResult";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Pages  */}
          <Route path="/" element={<Home />} />
          <Route path="/:stateName/:id" element={<BPSC />} />
          <Route path="/ssc" element={<Ssc />} />
          <Route path="/shorts" element={<Shorts />} />

          {/* All Courses and Books  */}
          <Route
            path="/:stateName/:id/all-live-course"
            element={<AllCourses />}
          />
          <Route
            path="/:stateName/:id/all-recorded-course"
            element={<AllRecorded />}
          />
          <Route path="/:stateName/:id/all-books" element={<Allbooks />} />
          <Route path="/:stateName/:id/all-tests" element={<Alltests />} />
          <Route path="/all-ebooks" element={<AllEbooks />} />

          {/* Detail Page  */}
          <Route
            path="/course-detail/:course_url/:courseId"
            element={<Course />}
          />
          <Route path="/book-detail/:title/:id" element={<SingleBook />} />
          <Route path="/ebook" element={<SingleEbook />} />

          {/* Search Result  */}
          <Route path="/search-result" element={<SearchResult />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
