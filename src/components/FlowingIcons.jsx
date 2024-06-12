import React from 'react';
import '../../src/App.css'

const iconData = [
  {
    imgSrc: 'https://bazigar.in/assets/website/images/home-page/real-player.gif',
    altText: 'Real Player',
    description: 'Why play with bots when you can have your own community of verified players? On Bazigar, play real-time tournaments while keeping your game spirit burning.',
    title: 'Real Player'
  },
  {
    imgSrc: 'https://bazigar.in/assets/website/images/home-page/instant-cash-withdrawals.gif',
    altText: 'Instant Cash Withdrawls',
    description: 'Withdraw the cash that you win immediately with a few simple steps.',
    title: 'Instant Cash Withdrawls'
  },
  {
    imgSrc: 'https://bazigar.in/assets/website/images/home-page/interactive-gaming-communities.gif',
    altText: 'Interactive Gaming Community',
    description: 'Dive into one-on-one combat fun on Baazigar.in. Conquer challenges with players nearby. Let the gaming bonanza begin!',
    title: 'Interactive Gaming Community'
  },
  {
    imgSrc: 'https://bazigar.in/assets/website/images/home-page/customer-support.gif',
    altText: '24*7 Customer Support',
    description: 'Our support team is always available. We are here to turn frowns into smiles whenever you need help!',
    title: '24*7 Customer Support'
  },
  {
    imgSrc: 'https://bazigar.in/assets/website/images/home-page/winning.gif',
    altText: 'Winnings',
    description: 'Get a chance to win 5x in 5mins. Get in the game now!',
    title: 'Winnings'
  },
  {
    imgSrc: 'https://bazigar.in/assets/website/images/home-page/tds.gif',
    altText: '0% TDS',
    description: 'With 0% TDS deductions on Bazigar, claim 100% winning money into your bank account.',
    title: '0% TDS'
  }
];

function FlowingIcons() {
  return (
    <div className="container spacing">
      <div className="heading section-title">
        <h2>
          <span>Why </span>
          <img src="https://bazigar.in/assets/website/images/bazigar-text.gif" alt="" style={{ width: '156px', height: '32px' }} />
          <span className="fst-normal"> ?</span>
        </h2>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-6 justify-content-between align-items-start">
        {iconData.map((icon, index) => (
          <div className="col" key={index}>
            <div className="servicebox--1">
              <div className="why-bazigar-image">
                <img src={icon.imgSrc} alt={icon.altText} style={{ width: '100px', height: '100px' }} />
                <p>{icon.title}</p>
              </div>
              <div className="dropdown-text">{icon.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlowingIcons;
