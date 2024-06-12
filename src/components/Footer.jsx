import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./Footer.css";
import "../App.css";
function Footer() {
  return (
    <>
      <div className="container spacing">
        <div className="row g-3 row-cols-1 row-cols-md-3 justify-content-between">
          <div className="col col-md-auto col-lg-4">
            <div className="bazi-footer">
              <div className="baz-footer-heading pb-4">
                <span className="text-uppercase">LINKS</span>
              </div>
              <div className="bazi-footer-content d-md-flex justify-content-between">
                <ul className="list-unstyled mb-0">
                  <li className="pb-3 d-flex">
                    <img
                      src="https://bazigar.in/assets/website/images/footer-icon.webp"
                      alt="footer-icon"
                      width="20"
                      height="20"
                      className="me-2"
                    />
                    <a href="#">Terms and Conditions</a>
                  </li>
                  <li className="pb-3 d-flex">
                    <img
                      src="https://bazigar.in/assets/website/images/footer-icon.webp"
                      alt="footer-icon"
                      width="20"
                      height="20"
                      className="me-2"
                    />
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="pb-3 d-flex">
                    <img
                      src="https://bazigar.in/assets/website/images/footer-icon.webp"
                      alt="footer-icon"
                      width="20"
                      height="20"
                      className="me-2"
                    />
                    <a href="#">Legality</a>
                  </li>
                  <li className="pb-3 d-flex">
                    <img
                      src="https://bazigar.in/assets/website/images/footer-icon.webp"
                      alt="footer-icon"
                      width="20"
                      height="20"
                      className="me-2"
                    />
                    <a href="#">Help &amp; Support</a>
                  </li>
                  <li className="pb-3 d-flex">
                    <img
                      src="https://bazigar.in/assets/website/images/footer-icon.webp"
                      alt="footer-icon"
                      width="20"
                      height="20"
                      className="me-2"
                    />
                    <a href="#">Bazigar Rules</a>
                  </li>
                </ul>
                <ul className="list-unstyled mb-0">
                  <li className="pb-3 d-flex">
                    <img
                      src="https://bazigar.in/assets/website/images/footer-icon.webp"
                      alt="footer-icon"
                      width="20"
                      height="20"
                      className="me-2"
                    />
                    <a href="#">Version Release</a>
                  </li>
                  <li className="pb-3 d-flex">
                    <img
                      src="https://bazigar.in/assets/website/images/footer-icon.webp"
                      alt="footer-icon"
                      width="20"
                      height="20"
                      className="me-2"
                    />
                    <a href="#">GST Rules &amp; TDS Rules</a>
                  </li>
                  <li className="pb-3 d-flex">
                    <img
                      src="https://bazigar.in/assets/website/images/footer-icon.webp"
                      alt="footer-icon"
                      width="20"
                      height="20"
                      className="me-2"
                    />
                    <a href="#">Tournament Rules</a>
                  </li>
                  <li className="pb-3 d-flex">
                    <img
                      src="https://bazigar.in/assets/website/images/footer-icon.webp"
                      alt="footer-icon"
                      width="20"
                      height="20"
                      className="me-2"
                    />
                    <a href="#">Safe And Secure</a>
                  </li>
                  <li className="pb-3 d-flex">
                    <img
                      src="https://bazigar.in/assets/website/images/footer-icon.webp"
                      alt="footer-icon"
                      className="me-2"
                    />
                    <a href="#">Blogs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-md-auto col-lg-auto">
            <div className="baz-footer-heading pb-2">
              <span className="text-uppercase">Member of</span>
            </div>
            <div className="bazi-footer-content" style={{ padding: "0 5px" }}>
              <img
                src="https://bazigar.in/assets/website/images/home-icons/egf.webp"
                alt="EGF"
                className="img-fluid rounded bg-white footer-img"
                width="120"
                height="100"
              />
              <img
                src="https://bazigar.in/assets/website/images/home-icons/iamai.webp"
                alt="IAMAI"
                className="img-fluid rounded bg-white footer-img"
                width="120"
                height="100"
              />
            </div>

            <hr />
            <div className="baz-footer-heading pb-2">
              <span className="text-uppercase">Withdrawal from</span>
            </div>
            <div className="bazi-footer-content mb-3">
              <div className="row g-2 row-cols-2 row-cols-md-2 justify-content-start">
                <div className="col-auto col-md-auto text-center">
                  <span className="fs-6">Bank Transfer</span>
                  <div>
                    <img
                      src="https://bazigar.in/assets/website/images/home-icons/bank-transfer.webp"
                      alt="bank-transfer"
                      className="img-fluid rounded"
                      width="120"
                      height="100"
                    />
                  </div>
                </div>
                <div className="col-auto col-md-auto text-center">
                  <span className="fs-6">UPI</span>
                  <div>
                    <img
                      src="https://bazigar.in/assets/website/images/home-icons/upi.webp"
                      alt="UPI"
                      className="img-fluid rounded"
                      width="120"
                      height="100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-auto col-lg-4">
            <div className="bazi-footer">
              <div className="baz-footer-heading pb-2">
                <span className="text-uppercase">Disclaimer</span>
              </div>
              <div className="bazi-footer-content">
                <p className="disclaimerFooter">
                  Bazigar, social gaming app in India, offers exhilarating
                  games, accessible only to individuals above 18, it operates in
                  states where skill-based online gaming is regulated. Despite
                  taking a lot of measures the games are habit-forming or
                  financially risky, please play responsibly.
                </p>
              </div>
              <div className="bazi-footer-content">
                <ul className="social-network">
                  <li>
                    <a href="#" target="_blank" className="icoFacebook">
                      <FaFacebook />
                      <span className="tooltip">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="icoInstagram">
                      <AiFillInstagram />
                      <span className="tooltip">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="icoYoutube">
                      <FaYoutube />
                      <span className="tooltip">Youtube</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4"
        style={{ backgroundColor: "#0f1b23" }}
      >
        <p>
          © 2024 Bazigar. All rights reserved.{" "}
          <a className="hover-text" href="#">
            <span className="hover-text">Upsports Vision Private Limited.</span>
          </a>
        </p>
      </div>
      <div className="outer-container" style={{marginTop:"-23px"}}>
        <div className="inner-container" id="player">
          <div className="pacman"></div>
          <marquee>
            Players from Andhra Pradesh, Meghalaya, Nagaland, Sikkim and
            Telangana are not allowed to play online games for prizes.
          </marquee>
        </div>
      </div>
    </>
  );
}

export default Footer;
