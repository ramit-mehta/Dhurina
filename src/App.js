import "./App.css";
// ***bootstrap.min.css
import "bootstrap/dist/css/bootstrap.min.css";

// ***components
import Home from "./components/Home";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { Route, Routes } from "react-router-dom";
import BPSC from "./components/BPSC";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bpsc" element={<BPSC />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
