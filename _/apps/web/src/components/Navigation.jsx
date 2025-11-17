"use client";

import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Work With Me", href: "/work-with-me" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Heart size={16} className="text-white fill-white" />
            </div>
            <span className="text-xl font-bold gradient-text">@nikivault</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-400 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
            <a
              href="/support"
              className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              ☕ Support Niki
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-purple-50 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-purple-100 animate-fadeInUp">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/support"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200 text-center mt-2"
              >
                ☕ Support Niki
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
