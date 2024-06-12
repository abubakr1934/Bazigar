import React from 'react';

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, description, img } = testiMonialDetail;
  return (
    <div className="item">
      <div className="shadow-effect">
        <img className="img-circle" src={img} alt={name} style={{ height: '300px', width: '280px' }} />
      </div>
      {/* <div className="testimonial-name">
        <h1 >{name}</h1 >
        <p >{description}</p>
      </div> */}
    </div>
  );
};

export default TestiMonialsDetails;
