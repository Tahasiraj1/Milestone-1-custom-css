"use client";

import React, { useState } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import Link from 'next/link';

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="header">
        <h1 className="header-logo">NAME</h1>
        <div className="nav-links">
            <ul>
            <Link href="/"><li>HOME</li></Link>
            <Link href="/products"><li>PRODUCTS</li></Link>
            <Link href="/about"><li>ABOUT</li></Link>
            <Link href="/contact"><li>CONTACT</li></Link>
            </ul>
        </div>
        <div className="icon-container">
            <HiOutlineShoppingBag className="icon" />
            <FaRegCircleUser className="icon" />
            <button className="menu-button" onClick={() => setOpen(!open)}>
            <RiMenu3Line className="icon" />
            </button>
        </div>
        {open && (
            <div className="mobile-menu">
            <ul>
                <Link href="/"><li>Home</li></Link>
                <hr />
                <Link href="/products"><li>Products</li></Link>
                <hr />
                <Link href="/about"><li>About</li></Link>
                <hr />
                <Link href="/contact"><li>Contact</li></Link>
            </ul>
            </div>
        )}
    </div>
  )
}

export default Header
