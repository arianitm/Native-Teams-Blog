"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-around items-center relative">
      {/* Logo */}
      <Link href={`/`}>
        <img
          src="/default.svg"
          alt="Native Teams Logo"
          className="h-8 w-auto"
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-4">
        <a href="#" className="text-black-700 font-medium">
          Links Group 1
        </a>
        <a href="#" className="text-black-700 font-medium">
          Links Group 2
        </a>
      </nav>

      {/* Desktop CTA */}
      <a
        href="#"
        className="hidden md:inline-block bg-[#5152FB] text-white px-4 py-2 rounded-full"
      >
        Get started
      </a>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl focus:outline-none"
      >
        &#9776;
      </button>

      {/* Optional: Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full right-6 mt-2 bg-white shadow-lg rounded-lg p-4 w-40 flex flex-col gap-2 md:hidden z-50">
          <a href="#" className="text-blue-700 font-medium">
            Links Group 1
          </a>
          <a href="#" className="text-blue-700 font-medium">
            Links Group 2
          </a>
          <a
            href="#"
            className="bg-blue-700 text-white px-4 py-2 rounded-full text-center"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
}
