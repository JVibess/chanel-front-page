import { useEffect } from "react";
import { useRef } from "react";
import { imageData } from "../data";
import React from "react";
import Footer from "../components/footer/Footer";
import GalleryItem from "../components/gallery/GalleryItem";
import LocomotiveScroll from "locomotive-scroll";
import "../../node_modules/locomotive-scroll/src/locomotive-scroll.scss";
import "../styles/home.scss";

const CocoBeach = () => {
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
  const images = imageData.map((tupples, index) =>
    tupples.map((url, elementIndex) => (
      <GalleryItem
        key={url}
        index={elementIndex}
        src={url}
        columnOffset={index * 14}
      />
    ))
  );
  return (
    <>
      <div className="main-container">
        <div className="scroll-contianer" data-scroll-container ref={ref}>
          <div className="content">
            <div className="gallery">
              {images}
              <div className="gallery-helper">CHANEL COCO BEACH</div>
              <div className="behind-text fill">CHANEL COCOBEACH</div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default CocoBeach;
