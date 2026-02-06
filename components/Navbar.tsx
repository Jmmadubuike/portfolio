"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Technologies", href: "#technologies" },
    { label: "Leadership Impact", href: "#impact" },
    { label: "Timeline", href: "#timeline" },
    { label: "Metrics", href: "#metrics" },
    { label: "Honors", href: "#honors" },
    { label: "Media", href: "#media" },
  ];

  return (
    <nav className="bg-[#f4f6f2] border-b border-[#556b2f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl text-[#2f4f2f] font-bold hover:text-[#556b2f] transition"
        >
          JMmadubuike
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#2f4f2f] hover:text-[#556b2f] transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md text-[#2f4f2f] hover:text-[#556b2f] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f4f6f2] border-t border-[#556b2f]">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-[#2f4f2f] hover:text-[#556b2f] transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
