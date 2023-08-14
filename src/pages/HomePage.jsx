import React from "react";
import { Parallax, Background } from "react-parallax";
import runwaymodels from "../Homepageimages/runway-models.jpg";
import lipstick from "../Homepageimages/chanel-lipstick.jpg";
import modelone from "../Homepageimages/model1.jpg";
import modeltwo from "../Homepageimages/model2.jpg";
import chaneleyes from "../Homepageimages/chanel-eyewear.jpg";
import sublime from "../Homepageimages/sublimage.jpg";
import bleu from "../Homepageimages/bleudechanel.jpg";
import watches from "../Homepageimages/watches.jpg";
import jewlery from "../Homepageimages/highjewlery.jpg";
import Navbar from "../components/NavBar";
import "./HomePage.css";
function HomePage() {
  return (
    <div className="container">
      <Navbar />
      <Parallax strength={600} bgImage={runwaymodels}>
        <div className="content">
          <h2 className="text">Haute Couture</h2>
          <h1 className="text-big">FALL-WINTER 2023/24 SHOW</h1>
          <button> SEE MORE</button>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={lipstick}>
        <div className="content">
          <h2 className="text">MAKEUP</h2>
          <h1 className="text-big">CODES COULUER</h1>
          <button> SEE MORE</button>
        </div>
      </Parallax>
      <Parallax strength={-200} bgImage={modelone}>
        <div className="content">
          <h2 className="text-fashion">FASHION</h2>
          <h1 className="text-big-Met">2022/23 METIERS D'ART</h1>
          <button> SEE MORE</button>
        </div>
      </Parallax>
      <Parallax strength={600} bgImage={modeltwo}>
        <div className="content">
          <h2 className="text-fine">FINE JEWERLY</h2>
          <h1 className="text-big-n5">N°5</h1>
          <button> SEE MORE</button>
        </div>
      </Parallax>
      <Parallax strength={-400} bgImage={chaneleyes}>
        <div className="content">
          <h2 className="text-eye">EYEWEAR </h2>
          <h1 className="text-big-camp">2023 CAMPAIGN</h1>
          <button> SEE MORE</button>
        </div>
      </Parallax>
      <Parallax strength={600} bgImage={sublime}>
        <div className="content">
          <h2 className="text-skin">SKINCARE</h2>
          <h1 className="text-big-sub">SUBLIMAGE LA CREME</h1>
          <button> SEE MORE</button>
        </div>
      </Parallax>
      <Parallax strength={-200} bgImage={bleu}>
        <div className="content">
          <h2 className="text-frag">FRAGRANCES</h2>
          <h1 className="text-big-bleu">BLEU DE CHANEL</h1>
          <button> SEE MORE</button>
        </div>
      </Parallax>
      <Parallax strength={600} bgImage={watches}>
        <div className="content">
          <h2 className="text-watch">WATCHES</h2>
          <h1 className="text-big-j12">J12</h1>
          <button> SEE MORE</button>
        </div>
      </Parallax>
      <Parallax strength={-200} bgImage={jewlery}>
        <div className="content">
          <h2 className="text-high">HIGH JEWELRY</h2>
          <h1 className="text-big-collec">COLLECTION 1932</h1>
          <button> SEE MORE</button>
        </div>
      </Parallax>
    </div>
  );
}

export default HomePage;
