import React from 'react'
import '../../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image11 from '../../public/assets/image11.png'
import image22 from '../../public/assets/image22.png'
import image33 from '../../public/assets/image33.png'
import image44 from '../../public/assets/image44.png'
function Carousel() {
  return (
    <div className="carousel-container">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{width:"600px", height:"300px", borderRadius:"10px"}}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image11} className="d-block" alt="First slide" style={{width:"600px", height:"300px", borderRadius:"10px"}}/>
          </div>
          <div className="carousel-item">
            <img src={image22} className="d-block" alt="Second slide" style={{width:"600px", height:"300px", borderRadius:"10px"}}/>
          </div>
          <div className="carousel-item">
            <img src={image33} className="d-block" alt="Third slide" style={{width:"600px", height:"300px", borderRadius:"10px"}}/>
          </div>
          <div className="carousel-item">
            <img src={image44} className="d-block" alt="Fourth slide" style={{width:"600px", height:"300px", borderRadius:"10px"}}/>
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
  )
}

export default Carousel;
