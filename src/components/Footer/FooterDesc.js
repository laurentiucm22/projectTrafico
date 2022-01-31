import React, { useEffect } from "react";
import "./FooterDesc.css";
import FooterCar from "../../images/footercar.svg";
import VectorOne from "../../images/vector1.svg";
import VectorTwo from "../../images/vector2.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterForm from "./FooterForm";
import FooterCredits from "./FooterCredits";
import FaceBook from "./f.svg";
import Twitter from "./t.svg";
import Instagram from "./i.svg";

const FooterDesc = (props) => {
  const faceBook = "https://facebook.com";
  const twitter = "https://twitter.com";
  const instagram = "https://instagram.com";
  const quoteMessage =
    "We provide traffic management consultants so you get started quickly, contact us for a quote today!";

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="row-and-col__container container">
      <div className="row-one__content">
        <div className="footer-img__container">
          <img className="footer-vectore__one" src={VectorOne} />
          <img
            className="footer-car"
            data-aos="fade-right"
            data-aos-duration="2500"
            src={FooterCar}
          />
          <img className="footer-vectore__two" src={VectorTwo} />
        </div>
        <div className="card-container">
          <div className="card-footer">
            <div className="footer-col__container content">
              <div className="col-one_container">
                <div className="footer-desc">
                  <span className="footer-span"></span>
                  <p className="footer-p">{quoteMessage}</p>
                </div>
              </div>
              <FooterForm />
            </div>
            <FooterCredits />
          </div>
        </div>
        <div className="rights-reserved content">
          <h2 className="copy-rights">Copyrights @ 2019 </h2>
          <div className="social-media">
            <a href={faceBook} target="_blank">
              <img src={FaceBook} />
            </a>
            <a href={twitter} target="_blank">
              <img src={Twitter} />
            </a>
            <a href={instagram} target="_blank">
              <img src={Instagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDesc;
