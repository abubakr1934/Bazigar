import React, { useEffect } from "react";
import "../../src/App.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
import "owl.carousel";

function MovingCarousel() {
  useEffect(() => {
    $(".owl-carousel").owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  }, []);

  return (
    <div className="container-fluid px-0">
      <div className="section-title">
        <h2>Tournaments</h2>
      </div>
      <div className="tournament">
        <div className="owl-carousel-wrapper">
          <div className="owl-carousel">
            <div className="item">
              <div className="inner-item" data-content-section="game_content_1">
                <div className="img-banner">
                  <img
                    src="https://bazigar.in/assets/website/images/home-page/tetris-neo-3.webp"
                    className="img-fluid"
                    alt="tetris neo"
                  />
                </div>
                <div className="new-challenges">
                  <small>New Daily Challenges</small>
                </div>
                <div className="overlay-bottom">
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/inr_icon.svg"
                      alt="INR Icon"
                      className="img-fluid"
                    />
                    Bazi &nbsp;{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>10
                    </strong>
                    ,{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>20
                    </strong>
                  </span>
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/trophy.webp"
                      alt="Trophy"
                      className="img-fluid"
                    />
                    Win &nbsp; <strong>5X</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner-item" data-content-section="game_content_2">
                <div className="img-banner">
                  <img
                    src="https://bazigar.in/assets/website/images/home-page/tetris-classNameic-3.webp"
                    className="img-fluid"
                    alt="tetris neo"
                  />
                </div>
                <div className="new-challenges">
                  <small>New Daily Challenges</small>
                </div>
                <div className="overlay-bottom">
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/inr_icon.svg"
                      alt="INR Icon"
                      className="img-fluid"
                    />
                    Bazi &nbsp;{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>10
                    </strong>
                    ,{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>20
                    </strong>
                  </span>
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/trophy.webp"
                      alt="Trophy"
                      className="img-fluid"
                    />
                    Win &nbsp; <strong>5X</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner-item" data-content-section="game_content_3">
                <div className="img-banner">
                  <img
                    src="https://bazigar.in/assets/website/images/home-page/snow-snake-3.webp"
                    className="img-fluid"
                    alt="tetris neo"
                  />
                </div>
                <div className="new-challenges">
                  <small>New Daily Challenges</small>
                </div>
                <div className="overlay-bottom">
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/inr_icon.svg"
                      alt="INR Icon"
                      className="img-fluid"
                    />
                    Bazi &nbsp;{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>10
                    </strong>
                    ,{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>20
                    </strong>
                  </span>
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/trophy.webp"
                      alt="Trophy"
                      className="img-fluid"
                    />
                    Win &nbsp; <strong>5X</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner-item" data-content-section="game_content_4">
                <div className="img-banner">
                  <img
                    src="https://bazigar.in/assets/website/images/home-page/jungle-snake-3.webp"
                    className="img-fluid"
                    alt="tetris neo"
                  />
                </div>
                <div className="new-challenges">
                  <small>New Daily Challenges</small>
                </div>
                <div className="overlay-bottom">
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/inr_icon.svg"
                      alt="INR Icon"
                      className="img-fluid"
                    />
                    Bazi &nbsp;{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>10
                    </strong>
                    ,{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>20
                    </strong>
                  </span>
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/trophy.webp"
                      alt="Trophy"
                      className="img-fluid"
                    />
                    Win &nbsp; <strong>5X</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner-item" data-content-section="game_content_5">
                <div className="img-banner">
                  <img
                    src="https://bazigar.in/assets/website/images/home-page/desert-snake-3.webp"
                    className="img-fluid"
                    alt="tetris neo"
                  />
                </div>
                <div className="new-challenges">
                  <small>New Daily Challenges</small>
                </div>
                <div className="overlay-bottom">
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/inr_icon.svg"
                      alt="INR Icon"
                      className="img-fluid"
                    />
                    Bazi &nbsp;{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>10
                    </strong>
                    ,{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>20
                    </strong>
                  </span>
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/trophy.webp"
                      alt="Trophy"
                      className="img-fluid"
                    />
                    Win &nbsp; <strong>5X</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner-item" data-content-section="game_content_6">
                <div className="img-banner">
                  <img
                    src="https://bazigar.in/assets/website/images/home-page/solitaire-onecard-3.webp"
                    className="img-fluid"
                    alt="tetris neo"
                  />
                </div>
                <div className="new-challenges">
                  <small>New Daily Challenges</small>
                </div>
                <div className="overlay-bottom">
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/inr_icon.svg"
                      alt="INR Icon"
                      className="img-fluid"
                    />
                    Bazi &nbsp;{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>10
                    </strong>
                    ,{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>20
                    </strong>
                  </span>
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/trophy.webp"
                      alt="Trophy"
                      className="img-fluid"
                    />
                    Win &nbsp; <strong>5X</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner-item" data-content-section="game_content_7">
                <div className="img-banner">
                  <img
                    src="https://bazigar.in/assets/website/images/home-page/solitaire-threecard-3.webp"
                    className="img-fluid"
                    alt="tetris neo"
                  />
                </div>
                <div className="new-challenges">
                  <small>New Daily Challenges</small>
                </div>
                <div className="overlay-bottom">
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/inr_icon.svg"
                      alt="INR Icon"
                      className="img-fluid"
                    />
                    Bazi &nbsp;{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>10
                    </strong>
                    ,{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>20
                    </strong>
                  </span>
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/trophy.webp"
                      alt="Trophy"
                      className="img-fluid"
                    />
                    Win &nbsp; <strong>5X</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner-item" data-content-section="game_content_8">
                <div className="img-banner">
                  <img
                    src="https://bazigar.in/assets/website/images/home-page/hextris-3.webp"
                    className="img-fluid"
                    alt="tetris neo"
                  />
                </div>
                <div className="new-challenges">
                  <small>New Daily Challenges</small>
                </div>
                <div className="overlay-bottom">
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/inr_icon.svg"
                      alt="INR Icon"
                      className="img-fluid"
                    />
                    Bazi &nbsp;{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>10
                    </strong>
                    ,{" "}
                    <strong>
                      <i className="bi bi-currency-rupee"></i>20
                    </strong>
                  </span>
                  <span>
                    <img
                      src="https://bazigar.in/assets/website/images/trophy.webp"
                      alt="Trophy"
                      className="img-fluid"
                    />
                    Win &nbsp; <strong>5X</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovingCarousel;
