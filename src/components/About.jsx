import React from "react";
import about from "../assets/images/about-sec-img.webp";
import star from "../assets/images/header-star.svg";
import Commanbtn from "./Commanbtn";

const About = () => {
  return (
    <div className="position-relative z-1">
      <div className="container my-150">
        <div className="row justify-content-center" id="about">
          <div className="col-lg-6 col-sm-9">
            <img className="w-100" src={about} alt="about" />
          </div>
          <div className="col-lg-6 col-sm-9 pt-lg-0 pt-4 d-flex align-items-center justify-content-center">
            <div className="max-w-521">
              <div className="d-flex align-items-center">
                <img src={star} alt="star" />
                <p className="m-0 Exo-2 fw-normal fs-sm leading-sm c-primery-low ms-2">
                  About Us
                </p>
              </div>
              <h2 className="fs-lg Outfit c-primery-low pt-2 m-0">
                <span className="fw-light">Pioneering Vision & Mission-</span>
                <span className="fw-semibold">Driven Sectoral Innovation</span>
              </h2>
              <p className="Exo-2 fw-normal leading-sm fs-sm text-black opacity-70 pb-3 m-0 pt-3 mb-sm-4 max-w-491">
                Imagine a future in Saudi Arabia influenced by the potential of
                Al, with Noble Mind at the forefront of this transformation.
                Healthcare stands to gain with the promise of enhanced data
                precision. In education, there's the potential for
                individualized learning experiences. Finance could witness
                seamless transactions, and entertainment may revel in customized
                experiences. Through Al's promise, transportation could innovate
                and cities might adapt smarter infrastructures. In every domain,
                the vision of Noble Mind hints at a brighter, more efficient
                nation.
              </p>
              <Commanbtn btn="Read More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
