import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
        <div className="hero-section">
        <div className="hero-text-container">
            <h1 className="hero-title">
            Discover and<br /> Find Your Own<br /> Fashion!
            </h1>
            <p className="hero-description">
            Explore our curated collection of stylish<br /> clothing and accessories tailored to your unique taste.
            </p>
            <button className="explore-button">
            EXPLORE NOW
            </button>
        </div>
        <Image
            src="/images/bestselling2.jpg"
            alt="Hero-Model"
            width={1000}
            height={1000}
            className="hero-image"
        />
        </div>
  )
}

export default Hero
