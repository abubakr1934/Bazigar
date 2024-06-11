import React from 'react';
import '../../src/App.css'
function FlowingIcons() {
  return (
    <div className="container">
      <div className="heading section-title">
        <h2>
          <span>Why </span>
          <img src="https://bazigar.in/assets/website/images/bazigar-text.gif" alt="" style={{ width: '156px', height: '32px' }} />
          <span className="fst-normal"> ?</span>
        </h2>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-6 justify-content-between align-items-start">
        <div className="col">
          <div className="servicebox--1">
            <div className="why-bazigar-image">
              <img src="https://bazigar.in/assets/website/images/home-page/real-player.gif" alt="" style={{ width: '100px', height: '100px' }} />
              <p>Real Player</p>
            </div>
            <div className="dropdown-text">Why play with bots when you can have your own community of verified players? On Bazigar, play real-time tournaments while keeping your game spirit burning.</div>
          </div>
        </div>
        <div className="col">
          <div className="servicebox--1">
            <div className="why-bazigar-image">
              <img src="https://bazigar.in/assets/website/images/home-page/instant-cash-withdrawals.gif" alt="" style={{ width: '100px', height: '100px' }} />
              <p>Instant Cash Withdrawls</p>
            </div>
            <div className="dropdown-text">Withdraw the cash that you win immediately with a few simple steps.</div>
          </div>
        </div>
        <div className="col">
          <div className="servicebox--1">
            <div className="why-bazigar-image">
              <img src="https://bazigar.in/assets/website/images/home-page/interactive-gaming-communities.gif" alt="" style={{ width: '100px', height: '100px' }} />
              <p>Interactive Gaming Community</p>
            </div>
            <div className="dropdown-text">Dive into one-on-one combat fun on Baazigar.in. Conquer challenges with players nearby. Let the gaming bonanza begin!</div>
          </div>
        </div>
        <div className="col">
          <div className="servicebox--1">
            <div className="why-bazigar-image">
              <img src="https://bazigar.in/assets/website/images/home-page/customer-support.gif" alt="" style={{ width: '100px', height: '100px' }} />
              <p>24*7 Customer Support</p>
            </div>
            <div className="dropdown-text">Our support team is always available. We are here to turn frowns into smiles whenever you need help!</div>
          </div>
        </div>
        <div className="col">
          <div className="servicebox--1">
            <div className="why-bazigar-image">
              <img src="https://bazigar.in/assets/website/images/home-page/winning.gif" alt="" style={{ width: '100px', height: '100px' }} />
              <p>Winnings</p>
            </div>
            <div className="dropdown-text">Get a chance to win 5x in 5mins. Get in the game now!</div>
          </div>
        </div>
        <div className="col">
          <div className="servicebox--1">
            <div className="why-bazigar-image">
              <img src="https://bazigar.in/assets/website/images/home-page/tds.gif" alt="" style={{ width: '100px', height: '100px' }} />
              <p>0% TDS</p>
            </div>
            <div className="dropdown-text">With 0% TDS deductions on Bazigar, claim 100% winning money into your bank account.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingIcons;
