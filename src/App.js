import "./App.css";
import About from "./components/About";
import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactSec from "./components/ContactSec";
import Preload from "./components/Preload";
import Newslatters from "./components/Newslatters";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [loader, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    },3000);
  }, []);

  return (
    <>
      {loader ? (
        <div>
          <Preload />
        </div>
      ) : (
        <div className="position-relative">
          <div className="bg-hero d-flex flex-column">
            <MyNav />
            <MyHeader />
          </div>
          <About />
          <WhyChooseUs />
          <ContactSec />
          <Newslatters />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
