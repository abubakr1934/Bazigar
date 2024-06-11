import React from 'react';

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, description, img } = testiMonialDetail;
  return (
    <div className="item">
      <div className="shadow-effect">
        <img className="img-circle" src={img} alt={name} style={{ height: '250px', width: '250px' }} />
      </div>
      <div className="testimonial-name">
        <h1 style={{fontSize:"35px"}}>{name}</h1 >
        <p style={{width:"1000px",textAlign:"center",marginLeft:"-370px"}}>{description}</p>
      </div>
    </div>
  );
};

export default TestiMonialsDetails;
