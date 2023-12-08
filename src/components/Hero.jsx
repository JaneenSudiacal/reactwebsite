import React from 'react';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <div className="hero-main-text">Let&apos;s get cooking!</div>
        <div className="hero-subtext">
          Find all of Chef Ninni&apos;s recipes here. From appetizers, entrees, and especially
          {' '}
          <strong>desserts</strong>
          . So put on your aprons and discover your next favorite meal.
        </div>
        <button type="button">Sign up</button>
      </div>
      <div className="hero-img">
        <img src="/src/assets/cute-cookies.webp" alt="cute cookies" />
      </div>
    </div>
  );
}

export default Hero;
