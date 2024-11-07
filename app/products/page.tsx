import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { RiShoppingCart2Line } from "react-icons/ri";
import "@/app/products-page.css"

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
  {id: 21, name: 'product 1', price: 100, image: '/images/bestselling3.jpg' },
  {id: 22, name: 'product 1', price: 100, image: '/images/bestselling1.jpg' },
  {id: 23, name: 'product 1', price: 100, image: '/images/bestselling2.jpg' },
  {id: 24, name: 'product 1', price: 100, image: '/images/bestselling3.jpg' },
  {id: 25, name: 'product 1', price: 100, image: '/images/bestselling1.jpg' },
  {id: 26, name: 'product 1', price: 100, image: '/images/bestselling2.jpg' },
  {id: 27, name: 'product 1', price: 100, image: '/images/bestselling3.jpg' },
  {id: 28, name: 'product 1', price: 100, image: '/images/bestselling1.jpg' },
]

const ProductsPage = () => {
    return (
        <div className='products-page'>
            {products.map((product) => (
                <div key={product.id} className='product'>
                    <Image 
                        src={product.image} 
                        alt={product.name}
                        width={1000}
                        height={1000}
                        className='product-image'
                    />
                    <div className='product-details'>
                        <h2 className='product-name'>{product.name}</h2>
                        <p className='product-price'>PKR {product.price}</p>
                    </div>
                    <div className='product-actions'> 
                        <Button className='order-button'>
                            Order Now
                        </Button>
                        <RiShoppingCart2Line size={25} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductsPage;

