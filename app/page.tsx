import Hero from "@/components/Hero";
import Image from "next/image";
import Bestselling from "@/components/Best-selling";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Bestselling />
      <Products />
      <Testimonials />
    </>
  );
}
