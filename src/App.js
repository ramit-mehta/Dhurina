import "./App.css";
// ***bootstrap.min.css
import "bootstrap/dist/css/bootstrap.min.css";

// ***components
import Home from "./components/Home";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

function App() {
  return (
    <>
      <div className="custom_container container">
        <Header />
        <Home />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
