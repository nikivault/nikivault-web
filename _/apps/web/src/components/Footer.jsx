"use client";

import { useState } from "react";
import { Heart, Instagram, Mail, MapPin, Coffee } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Redirect to thank you page
    window.location.href = "/newsletter/thank-you";
  };

  return (
    <footer className="bg-gradient-to-b from-purple-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Join The Cozy Internet Club ☕
          </h3>
          <p className="text-gray-600 mb-6">where I tell you stories!</p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="max-w-md mx-auto flex gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-full border border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Join 💌
            </button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full flex items-center justify-center">
                <Heart size={16} className="text-white fill-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                @nikivault
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Creating aesthetic, relatable content that inspires and informs ✨
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/nikivault"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
              >
                <Instagram size={20} />
                <span>@nikivault</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Me", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Work With Me", href: "/work-with-me" },
                { label: "Contact", href: "/contact" },
                { label: "Hidden Confessions", href: "/confessions" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Support Niki</h4>
            <div className="space-y-3">
              <a
                href="https://buymeacoffee.com/nikivault"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
              >
                <Coffee size={20} />
                <span>Buy Me a Chai</span>
              </a>
              <a
                href="/support"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
              >
                <Heart size={20} />
                <span>Gift Wishlist</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} />
            <span>Based in Kerala, India</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:nikithasudeer@gmail.com"
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
            >
              <Mail size={16} />
              <span>nikithasudeer@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>thanks for stopping by 💕</p>
          <p className="mt-1">
            © 2024 Niki (@nikivault). Made with love and chai ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
