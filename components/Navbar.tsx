"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Biography", href: "#biography" },
    { label: "Systems", href: "#systems" },
    { label: "Leadership", href: "#leadership" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Work Archive", href: "#work-archive" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#050706]/90 border-b border-white/10 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link
          href="/"
          className="font-serif text-xl text-[#f6f1df] font-bold hover:text-[#7ef0b0] transition"
        >
          J. Mmadubuike
        </Link>

        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#c9d2c4] hover:text-[#7ef0b0] transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-md text-[#f6f1df] hover:text-[#7ef0b0] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
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
        <div className="lg:hidden bg-[#050706] border-t border-white/10">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-[#c9d2c4] hover:text-[#7ef0b0] transition"
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
