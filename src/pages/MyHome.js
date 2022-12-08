import React from "react";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../../node_modules/locomotive-scroll/src/locomotive-scroll.scss";
// import Navbar from "../components/Locomotive-tutorial/Navbar/Index.jsx";
import Navbar from "../Components/Navbar/Index.jsx";
import Footer from "../Components/Footer/Index.jsx";
import { imageData } from "../Components/data.js";
import Gallery from "../Components/Gallery/Index.jsx";
import Styles from "../Components/work-style.scss";

const Home = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: "horizontal",
        multiplier: 0.5,
      });
    }
  }, []);

  const images = imageData.map((tuples, index) =>
    tuples.map((url, elementIndex) => (
      <Gallery
        key={url}
        index={elementIndex}
        src={url}
        columnOffset={index * 14}
      />
    ))
  );
  return (
    <>
      <Navbar />
      <div className="main-container">
        {/* need to tell the library which element is the scroll container so we add "data-scroll-container" */}
        <div className="scroll-container" data-scroll-container ref={ref}>
          <div className="content">
            <div className="gallery">
              {images}
              <div className="gallery-helper">Scroll to discover more </div>
              {/* add "data-scroll" to declare which element you'd like to change scroll speed*/}
              {/* add "data-scroll-speed" as the control to pass the timing */}
              <div
                className="behind-text fill"
                data-scroll
                data-scroll-speed={-1}
              >
                everybody loves a good story
              </div>
              <div
                className="behind-text outline"
                data-scroll
                data-scroll-speed={-1}
              >
                everybody loves a good story
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
