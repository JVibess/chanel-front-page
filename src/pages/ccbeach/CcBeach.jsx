import React, { useEffect, useRef } from "react";
import "./Ccbeach.css";
import Navbar from "../../components/NavBar";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import imgone from "../../CCbeachimgs/one.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
function CcBeach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <ParallaxProvider>
        <div className="page">
          <div ref={ref} style={{ position: "relative" }} className="boxes">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="card"
            ></motion.div>
          </div>
          <div ref={ref} className="boxes">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="card"
            ></motion.div>
            <motion.div
              variants={{
                hidden: { left: 0 },
                visible: { left: "100%" },
              }}
              initial="hidden"
              animate={slideControls}
              transition={{ duration: 0.5, ease: "easeIn" }}
              style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: "var(--brand)",
                zIndex: 20,
              }}
            />
          </div>
          <div ref={ref} style={{ position: "relative" }} className="boxes">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="card"
            ></motion.div>
          </div>
          <div ref={ref} style={{ position: "relative" }} className="boxes">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="card"
            ></motion.div>
          </div>
        </div>
      </ParallaxProvider>
    </>
  );
}

export default CcBeach;
