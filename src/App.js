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
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/course" element={<Course />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
