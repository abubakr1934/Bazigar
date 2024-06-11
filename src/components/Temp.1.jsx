import React from 'react';
import image1 from '../../public/assets/image11.png';
import image2 from '../../public/assets/image22.png';
import image3 from '../../public/assets/image33.png';
import image4 from '../../public/assets/image44.png';
export function Temp() {
  return (
    <div className="container d-flex flex-column flex-md-row align-items-center justify-content-start my-5">
      <div className="col-md-6 col-lg-5 mb-4 mb-md-0 text-center text-md-start">
        <h1 className="main-heading-1">
          Live single-player tournaments, guaranteed cash rewards, connecting with a vibrant gaming community and much more.
        </h1>
        <h3 className="fs-5">Get started instantly!</h3>
        <div className="row align-items-end">
          <div className="col">
            <div className="getlink">
              <p className="getlink-text color-primary small mb-1">
                Enter Mobile Number To Receive Download Link
              </p>
              <div className="input-group mb-2 d-flex justify-content-start col-md-12" style={{ maxWidth: "310px" }}>
                <input
                  type="text"
                  className="form-control getlink-input px-3 mobile_number"
                  id="mobile-number-2"
                  name="mobile_number"
                  placeholder="Enter mobile number"
                  aria-describedby="button-addon2"
                  maxLength="10" />
                <button
                  className="btn getlink-btn px-3"
                  type="button"
                  id="send-app-link-btn-2"
                >
                  Get Link
                </button>
              </div>
              <div
                style={{
                  display: 'none',
                  position: 'absolute',
                }}
                id="success_mobile_num_msg"
                className="text-white text-start success_mobile_num_msg"
              ></div>
              <div
                style={{
                  display: 'none',
                  position: 'absolute',
                }}
                id="err_mobile_num_msg"
                className="text-danger text-start err_mobile_num_msg"
              ></div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div className="scanQR">
              <p className="color-primary small">
                Or Scan The QR Code To Download Bazigar
              </p>
              <div className="qr-code-main">
                <img
                  src="https://bazigar.in/uploads/apk/bazigar-11201.png"
                  alt="QR Code" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-container col-12 col-md-6 col-lg-7 text-center text-md-start" style={{maxWidth:"auto"}}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ width: "650px", height: "300px", borderRadius: "20px" }}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block" alt="First slide" style={{ width: "650px", height: "300px", borderRadius: "10px" }} />
            </div>
            <div className="carousel-item">
              <img src={image2} className="d-block" alt="Second slide" style={{ width: "650px", height: "300px", borderRadius: "10px" }} />
            </div>
            <div className="carousel-item">
              <img src={image3} className="d-block" alt="Third slide" style={{ width: "650px", height: "300px", borderRadius: "10px" }} />
            </div>
            <div className="carousel-item">
              <img src={image4} className="d-block" alt="Fourth slide" style={{ width: "650px", height: "300px", borderRadius: "10px" }} />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}
