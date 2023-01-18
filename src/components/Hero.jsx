import React from 'react';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <div className="hero-main-text">This website is awesome</div>
        <div className="hero-subtext">This website has some subtext and goes under the main title. It&apos;s smaller font and the color is lower contrast.</div>
        <button type="button">Sign up</button>
      </div>
      <div className="hero-img">
        <img src="/src/assets/flowers.jpg" alt="some pretty flowers" />
      </div>
    </div>
  );
}

export default Hero;
