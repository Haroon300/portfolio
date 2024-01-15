"use client";
import Link from "next/link";
import React, { useState } from "react";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="bg-black bg-opacity-85 sticky top-0 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="text-xl font-bold mr-4">Logo</div>
          <div className="hidden md:flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavbar(!navbar)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {navbar && (
          <div className="md:hidden absolute top-16 right-4 bg-gray-800 p-4">
            <NavLinkMobile href="/">Home</NavLinkMobile>
            <NavLinkMobile href="/projects">Projects</NavLinkMobile>
            <NavLinkMobile href="/about">About</NavLinkMobile>
            <NavLinkMobile href="/contact">Contact</NavLinkMobile>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <Link href={href}>
    <div className="hover:text-gray-300">{children}</div>
  </Link>
);

const NavLinkMobile = ({ href, children }) => (
  <Link href={href}>
    <div className="block text-white py-2">{children}</div>
  </Link>
);
