import React from 'react'
import OwlCarousel from "react-owl-carousel";
import TestiMonialsDetails from './TestiMonialsDetails';
import image1 from '../../public/images/image1.webp'
import image2 from '../../public/images/image2.webp'
import image3 from '../../public/images/image3.webp'
import image4 from '../../public/images/image4.webp'
import image5 from '../../public/images/image5.webp'
import image6 from '../../public/images/image6.webp'
import image7 from '../../public/images/image7.webp'
function Testimonial({setInitialString}) {
    
        const testiMonials = [
          {
            
            img: image1,
            name: 'Tetris Neo',
            description: 'Place multiple shapes in order to form a straight line. The catch here is that the shapes keep changing, and you need to decide while placing the shapes where it fits. Use the designated buttons to rotate and move these shapes. Earn more points with every row you build. Just keep in mind that these shapes better not reach the top if you want to ensure victory.'
          },
          {
            
            img: image2,
            name: 'Desert Snake',
            description: 'Slither through a sandy adventure in Desert Snake! Munch on juicy apples, avoid skeletons, and grow your snake for higher scores. Can you survive the desert and earn cash rewards?'
          },
          {
            
            img: image3,
            name: 'Jungle Snake',
            description: 'Embark on a wild jungle adventure with your desert snake! Devour delicious apples, dance with dazzling fireflies, and slither over water. Grow your snake by munching three apples, score big, and win awesome rewards!'
          },
          {
            
            img: image4,
            name: 'Snow Snake',
            description: 'Slither through the frosty snow, surrounded by playful bushes! Boost your score by munching on juicy apples. Gobble up three, and watch your snake grow. Dive into Snow Snake for a chance to win cash on Bazigar!'
          },
          {
            
            img: image5,
            name: 'Solitaire One Card',
            description: 'Arrange cards of the same suit from Ace to King within a set time. Draw a card when no other moves are available. Organise additional cards to increase your score and earn more money.'
          },
          {
            
            img: image6,
            name: 'Solitaire Three Card',
            description: 'Shake a leg and claim victory by arranging the cards from Ace to King for every suit. When you run out of moves, draw three cards at a time and use the first card that was drawn. You need to finish within the allotted time. The more cards you arrange, the higher you score.'
          },
          {
            
            img: image7,
            name: 'Classic Tetris',
            description: 'Place multiple shapes in order to form a straight line. Using the designated buttons, you can rotate and move these shapes. You earn more points with every row you build. Keep in mind that these shapes better not reach the top if you want to ensure victory.'
          },
        ];
        //Owl Carousel Settings
        const options = {
          loop: true,
          center: true,
          items: 3,
          margin: 0,
          autoplay: true,
          dots: true,
          autoplayTimeout: 8500,
          smartSpeed: 450,
          
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 5,
            },
          },
        };
        return (
            <section id="testimonial" className="testimonials pt-70 pb-70">
              <div class="section-title">
                <h2>Tournaments</h2>
            </div>
              
                <div className="row">
                  <div className="col-md-12">
                    <OwlCarousel
                      id="customer-testimonoals"
                      className="owl-carousel owl-theme"
                      {...options}
                    >
                      {testiMonials.length === 0 ? (
                        <div class="item">
                          <div class="shadow-effect">
                            <img class="img-circle" src={userPic} />
        
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                              magna.
                            </p>
                          </div>
                          <div class="testimonial-name">
                            <h5>Rajon Rony</h5>
                            <small>ITALY</small>
                          </div>
                        </div>
                      ) : (
                        testiMonials.map((testiMonialDetail) => {
                          return (
                            <TestiMonialsDetails
                              testiMonialDetail={testiMonialDetail}
                              key={testiMonialDetail._key}
                            />
                          );
                        })
                      )}
                    </OwlCarousel>
                  </div>
                </div>
              
            </section>
          );
}

export default Testimonial