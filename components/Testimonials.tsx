"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import "@/app/Testimonials.css"

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
      <div className="testimonials">
        <h1>Feedbacks Corner</h1>
        <Carousel className="carousel" 
              opts={{
                loop: true,
              }}
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}        
        >
          <CarouselContent>
            <CarouselItem className="carousel-item md:basis-1/2 lg:basis-1/3">
              
              <svg className='mb-4' width="87" height="62" viewBox="0 0 87 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.3331 12.686L83.5741 0C63.7088 0.910025 49.9382 9.17535 49.9382 33.4821V61.4603H84.6437V26.2958H71.4999C71.5001 18.4966 76.3936 13.9093 86.3331 12.686Z" fill="green"/>
              <path d="M36.7281 12.6862L33.9691 0.000244141C14.1038 0.910269 0.333252 9.17582 0.333252 33.4825V61.4607H35.0401V26.2961H21.888C21.888 18.4968 26.7816 13.9096 36.7281 12.6862Z" fill="green"/>
              </svg>
              <p>
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
              <hr />
              <div className="testimonial-info">
                <Image src="/images/Avater.png" alt="Avatar 1" width={80} height={30} />
                <h2>
                  Oberon Shaw, MCH <br />
                  Head of Talent Acquisition, North America
                </h2>
              </div>
            </CarouselItem>
            
            <CarouselItem className="carousel-item md:basis-1/2 lg:basis-1/3">
              
              <svg className='mb-4' width="87" height="62" viewBox="0 0 87 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.3331 12.686L83.5741 0C63.7088 0.910025 49.9382 9.17535 49.9382 33.4821V61.4603H84.6437V26.2958H71.4999C71.5001 18.4966 76.3936 13.9093 86.3331 12.686Z" fill="green"/>
              <path d="M36.7281 12.6862L33.9691 0.000244141C14.1038 0.910269 0.333252 9.17582 0.333252 33.4825V61.4607H35.0401V26.2961H21.888C21.888 18.4968 26.7816 13.9096 36.7281 12.6862Z" fill="green"/>
              </svg>
              <p>
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
              <hr />
              <div className="testimonial-info">
                <Image src="/images/Avater.png" alt="Avatar 1" width={80} height={30} />
                <h2>
                  Oberon Shaw, MCH <br />
                  Head of Talent Acquisition, North America
                </h2>
              </div>
            </CarouselItem>

            <CarouselItem className="carousel-item md:basis-1/2 lg:basis-1/3">
              
              <svg className='mb-4' width="87" height="62" viewBox="0 0 87 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.3331 12.686L83.5741 0C63.7088 0.910025 49.9382 9.17535 49.9382 33.4821V61.4603H84.6437V26.2958H71.4999C71.5001 18.4966 76.3936 13.9093 86.3331 12.686Z" fill="green"/>
              <path d="M36.7281 12.6862L33.9691 0.000244141C14.1038 0.910269 0.333252 9.17582 0.333252 33.4825V61.4607H35.0401V26.2961H21.888C21.888 18.4968 26.7816 13.9096 36.7281 12.6862Z" fill="green"/>
              </svg>
              <p>
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
              <hr />
              <div className="testimonial-info">
                <Image src="/images/Avater.png" alt="Avatar 1" width={80} height={30} />
                <h2>
                  Oberon Shaw, MCH <br />
                  Head of Talent Acquisition, North America
                </h2>
              </div>
            </CarouselItem>

            <CarouselItem className="carousel-item md:basis-1/2 lg:basis-1/3">
              
              <svg className='mb-4' width="87" height="62" viewBox="0 0 87 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.3331 12.686L83.5741 0C63.7088 0.910025 49.9382 9.17535 49.9382 33.4821V61.4603H84.6437V26.2958H71.4999C71.5001 18.4966 76.3936 13.9093 86.3331 12.686Z" fill="green"/>
              <path d="M36.7281 12.6862L33.9691 0.000244141C14.1038 0.910269 0.333252 9.17582 0.333252 33.4825V61.4607H35.0401V26.2961H21.888C21.888 18.4968 26.7816 13.9096 36.7281 12.6862Z" fill="green"/>
              </svg>
              <p>
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
              <hr />
              <div className="testimonial-info">
                <Image src="/images/Avater.png" alt="Avatar 1" width={80} height={30} />
                <h2>
                  Oberon Shaw, MCH <br />
                  Head of Talent Acquisition, North America
                </h2>
              </div>
            </CarouselItem>

            <CarouselItem className="carousel-item md:basis-1/2 lg:basis-1/3">
              
              <svg className='mb-4' width="87" height="62" viewBox="0 0 87 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.3331 12.686L83.5741 0C63.7088 0.910025 49.9382 9.17535 49.9382 33.4821V61.4603H84.6437V26.2958H71.4999C71.5001 18.4966 76.3936 13.9093 86.3331 12.686Z" fill="green"/>
              <path d="M36.7281 12.6862L33.9691 0.000244141C14.1038 0.910269 0.333252 9.17582 0.333252 33.4825V61.4607H35.0401V26.2961H21.888C21.888 18.4968 26.7816 13.9096 36.7281 12.6862Z" fill="green"/>
              </svg>
              <p>
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
              <hr />
              <div className="testimonial-info">
                <Image src="/images/Avater.png" alt="Avatar 1" width={80} height={30} />
                <h2>
                  Oberon Shaw, MCH <br />
                  Head of Talent Acquisition, North America
                </h2>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

  )
}

export default Testimonials