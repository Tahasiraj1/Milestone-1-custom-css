import React from 'react';
import Link from 'next/link';
import { Dot } from 'lucide-react';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <h2>
          &copy; Name<Dot /> All rights reserved
        </h2>
      </div>
      <div className="icon-container">
        <Link href="https://www.facebook.com/" target="_blank">
          <FaFacebook size={26} className="icon icon-facebook" />
        </Link>

        <Link href="https://www.instagram.com/" target="_blank">
          <AiFillInstagram size={30} className="icon icon-instagram" />
        </Link>

        <Link href="https://www.whatsapp.com/" target="_blank">
          <IoLogoWhatsapp size={26} className="icon icon-whatsapp" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
