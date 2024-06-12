import React from 'react';

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, description, img } = testiMonialDetail;
  return (
    <div className="item">
      <div className="shadow-effect">
        <img className="img-circle" src={img} alt={name} style={{ height: '300px', width: '260px' }} />
        
      </div>
       <div className="testimonial-name ">
        <h2 style={{fontWeight:"1000"}} className="section-title">{name}</h2 >
        <p style={{marginTop:"-10px"}} >{description}</p> 
        
      </div> 
      
    </div>
  );
};

export default TestiMonialsDetails;
