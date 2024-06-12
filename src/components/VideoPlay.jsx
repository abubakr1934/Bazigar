import React from 'react';
import '../App.css'
function ResponsiveVideo() {
  return (
    <div className="container my-5 spacing">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
        <h2 className="mb-4">How <span style={{color: "#f6ad02"}}>To Start</span></h2>
          <div className="position-relative">
            <img 
              src="https://bazigar.in/assets/website/images/home-page/step-to-install.webp" 
              alt="Video Thumbnail" 
              className="img-fluid"
              style={{width:"300px",height:"300px",borderRadius:"10px"}}
            />
            <a href="https://bazigar.in/#lg=1&slide=0" target="_blank" rel="noopener noreferrer">
              <button 
                className="btn  position-absolute top-50 start-50 translate-middle"
                style={{ width: '80px', height: '80px', borderRadius: '50%', fontSize: '34px',backgroundColor:"#d3cec3",opacity:"50%",borderColor:"white",border:"5px solid #ffffff"}}
              >
                ▶
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveVideo;

