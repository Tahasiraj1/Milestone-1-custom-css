import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import '@/app/Products.css';

const products = [
    {id: 1, name: 'product 1', price: 100, image: '/images/bestselling1.jpg' },
    {id: 2, name: 'product 1', price: 100, image: '/images/bestselling2.jpg' },
    {id: 3, name: 'product 1', price: 100, image: '/images/bestselling3.jpg' },
    {id: 4, name: 'product 1', price: 100, image: '/images/bestselling1.jpg' },
    {id: 5, name: 'product 1', price: 100, image: '/images/bestselling2.jpg' },
    {id: 6, name: 'product 1', price: 100, image: '/images/bestselling3.jpg' },
    {id: 7, name: 'product 1', price: 100, image: '/images/bestselling1.jpg' },
    {id: 8, name: 'product 1', price: 100, image: '/images/bestselling2.jpg' },
    {id: 9, name: 'product 1', price: 100, image: '/images/bestselling3.jpg' },
    {id: 10, name: 'product 1', price: 100, image: '/images/bestselling1.jpg' },
    {id: 11, name: 'product 1', price: 100, image: '/images/bestselling2.jpg' },
    {id: 12, name: 'product 1', price: 100, image: '/images/bestselling3.jpg' },
    {id: 13, name: 'product 1', price: 100, image: '/images/bestselling1.jpg' },
    {id: 14, name: 'product 1', price: 100, image: '/images/bestselling2.jpg' },
    {id: 15, name: 'product 1', price: 100, image: '/images/bestselling3.jpg' },
    {id: 16, name: 'product 1', price: 100, image: '/images/bestselling1.jpg' },
    {id: 17, name: 'product 1', price: 100, image: '/images/bestselling2.jpg' },
    {id: 18, name: 'product 1', price: 100, image: '/images/bestselling3.jpg' },
    {id: 19, name: 'product 1', price: 100, image: '/images/bestselling1.jpg' },
    {id: 20, name: 'product 1', price: 100, image: '/images/bestselling2.jpg' },
];

const Products = () => {
  return (
    <div className="products-container">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Image 
              src={product.image} 
              alt={product.name}
              width={1000}
              height={1000}
              className="product-image"
            />
            <div className="product-info">
              <h2 className="product-name">
                {product.name}
              </h2>
              <p className="product-price">
                PKR {product.price}
              </p>
            </div>
            <div className="product-actions"> 
              <Button className="order-button">
                Order Now
              </Button>
              <RiShoppingCart2Line className="cart-icon" />
            </div>
          </div>
        ))}
      </div>
      <Link href="/products">
        <Button className="explore-button">
          Explore All <FaArrowRightLong className="explore-button-icon" />
        </Button>
      </Link>
    </div>
  );
};

export default Products;
