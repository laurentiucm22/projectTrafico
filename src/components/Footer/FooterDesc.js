import React, { useEffect } from "react";
import "./FooterDesc.css";
import FooterCar from "../../images/footercar.svg";
import VectorOne from "../../images/vector1.svg";
import VectorTwo from "../../images/vector2.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const FooterDesc = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="row-and-col__container container">
      <div className="row-one__container">
        <div className="row-one__content">
          <div className="footer-img__container">
            <img className="footer-vectore__one" src={VectorOne} />
            <img
              className="footer-car"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-offset="200"
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
                    <p className="footer-p">
                      We provide traffic management consultants so you get
                      started quickly, contact us for a quote today!
                    </p>
                  </div>
                </div>
                <div className="col_two-container">
                  <form className="footer-form">
                    <label>Name</label>
                    <input type="text" placeholder="Name" />
                    <label>Email Address</label>
                    <input type="email" placeholder="Your email address" />
                    <button type="submit">Get started</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDesc;
