import Image from 'next/image';
import React from 'react';
import "@/app/About.css"

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-content'>
        <Image
          src="/images/bestselling1.jpg"
          alt="about us"
          width={400}
          height={300}
          className='about-image'
        />
        <p className='about-text'>
          Welcome to &ldquo;Your Brand Name&ldquo;, where style meets substance.
          Founded with a passion for quality and a commitment to timeless design, 
          we create clothing that reflects individuality and empowers self-expression. 
          Each piece is crafted with attention to detail, using premium materials 
          sourced responsibly, ensuring both comfort and durability. At &ldquo;Your 
          Brand Name&ldquo;, we believe in celebrating diversity and inclusivity, 
          embracing unique styles that resonate with every story. Whether you&apos;re 
          seeking classic essentials or statement pieces, our collections are designed 
          to elevate your everyday wardrobe with elegance and ease. Join us in redefining 
          fashion, one piece at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
