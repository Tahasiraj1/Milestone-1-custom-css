"use client";
import Image from 'next/image';
import { TiStar } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";
import "@/app/Best-selling.css"


const Bestselling = () => {
    return (
        <div className="bestselling-container">
            <h1 className="bestselling-title">Best Selling</h1>
            <p className="bestselling-description">
                Get in on the trend with our curated selection of best-selling styles.
            </p>
            <div className='best-selling-products'>
            <div className='best-selling-1'>
                <Image
                        src="/images/bestselling1.jpg"
                        alt="best selling cloth 1"
                        width={300}
                        height={350}
                        className="mb-4 object-cover rounded-lg"
                    />
                    <p className="text-lg font-semibold mb-2">Cloth 1</p>
                    <div className="carousel-price-rating">
                        <p>1000</p>
                        <span className="divider"></span>
                        <div className="carousel-rating">
                            <TiStar className="star-icon" /> 
                            <span>5.0</span>
                        </div>
                    </div>
            </div>
            <div className='best-selling-2'>
                <Image
                        src="/images/bestselling2.jpg"
                        alt="best selling cloth 1"
                        width={300}
                        height={350}
                        className="mb-4 object-cover rounded-lg"
                    />
                    <p className="text-lg font-semibold mb-2">Cloth 1</p>
                    <div className="carousel-price-rating">
                        <p>1000</p>
                        <span className="divider"></span>
                        <div className="carousel-rating">
                            <TiStar className="star-icon" /> 
                            <span>5.0</span>
                        </div>
                    </div>
            </div>
            <div className='best-selling-3'>
                <Image
                        src="/images/bestselling3.jpg"
                        alt="best selling cloth 1"
                        width={300}
                        height={350}
                        className="mb-4 object-cover rounded-lg"
                    />
                    <p className="text-lg font-semibold mb-2">Cloth 1</p>
                    <div className="carousel-price-rating">
                        <p>1000</p>
                        <span className="divider"></span>
                        <div className="carousel-rating">
                            <TiStar className="star-icon" /> 
                            <span>5.0</span>
                        </div>
                    </div>
            </div>
            </div>
            <button className="explore-button">
                Explore All <FaArrowRightLong />
            </button>
            <hr className="divider-line" />
        </div>
    );
};

export default Bestselling;

