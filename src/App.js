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
import Course from "./components/common/Course";
import AllEbooks from "./components/bihar/AllEbooks";
import Allbooks from "./components/bihar/Allbooks";
import SingleBook from "./components/bihar/SingleBook";
import SingleEbook from "./components/bihar/SingleEbook";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bpsc" element={<BPSC />} />
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
