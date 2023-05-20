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
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bpsc" element={<BPSC />} />
        <Route path="/bihar" element={<Bihar />} />

        <Route path="/all-live-course" element={<AllCourses />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
