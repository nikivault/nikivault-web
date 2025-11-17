"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  Play,
  Heart,
  Users,
  Coffee,
  Instagram,
  Briefcase,
  Headphones,
  Sparkles,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  const [vaultCounts, setVaultCounts] = useState({
    collabs: 5,
    trips: 3,
    coffees: 0,
  });

  const scrollToCollab = () => {
    document
      .getElementById("work-with-me")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fadeInUp">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                  Hey, I'm <span className="gradient-text">Niki</span> and I
                  create short-form videos that inspire and inform, from fashion
                  styling and makeup reviews to travel diaries and so on! 👋
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  I love creating content that feels real, from styling looks I
                  actually wear, to sharing honest beauty finds, to discovering
                  places and brands worth talking about.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToCollab}
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  💌 Work With Me
                </button>
                <a
                  href="https://instagram.com/nikivault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-purple-300 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 hover:scale-105 transition-all duration-300"
                >
                  <Play size={20} />🎥 Watch My Reels
                </a>
              </div>
            </div>

            {/* Hero Image/Montage */}
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://ucarecdn.com/cc21bc66-5984-4f63-bdf8-c39215e77272/-/format/auto/"
                  alt="Niki creating content - fashion, beauty, and travel moments"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-semibold text-lg">@nikivault</p>
                  <p className="text-purple-200">Fashion • Beauty • Travel</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-bounce-soft">
                <Instagram className="w-8 h-8 text-purple-500" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg animate-bounce-soft"
                style={{ animationDelay: "0.5s" }}
              >
                <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Mood Board */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Current Vibes ✨
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Song I'm loving */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Headphones className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">
                🎧 Song I'm loving
              </h3>
              <p className="text-gray-600">Flowers - Miley Cyrus</p>
              <p className="text-sm text-purple-600 mt-2">
                On repeat for days!
              </p>
            </div>

            {/* Product of the week */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Sparkles className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">
                💄 Product of the week
              </h3>
              <p className="text-gray-600">Dot&Key Lip Gloss</p>
              <p className="text-sm text-pink-600 mt-2">
                Obsessed with this shade!
              </p>
            </div>

            {/* Place I want to visit */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">
                ✈️ Place I want to visit next
              </h3>
              <p className="text-gray-600">Japan & Switzerland</p>
              <p className="text-sm text-purple-600 mt-2">
                Cherry blossoms & mountains!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Vault Counter */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Live from the Vault 🗃️
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Briefcase className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {vaultCounts.collabs}
              </div>
              <p className="text-gray-700 font-semibold">Brand Collabs</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MapPin className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-pink-600 mb-2">
                {vaultCounts.trips}
              </div>
              <p className="text-gray-700 font-semibold">Dream Trips</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Coffee className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {vaultCounts.coffees}
              </div>
              <p className="text-gray-700 font-semibold">Chais Bought</p>
              <p className="text-sm text-orange-600 mt-2">
                Be the first one! ☕
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Me Preview */}
      <section id="work-with-me" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Let's Create Something Amazing Together ✨
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            I create short-form content that feels real, aesthetic, and tailored
            for curious, creative audiences.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "👗",
                title: "Fashion Collabs",
                desc: "Styling & outfit ideas",
              },
              {
                icon: "💄",
                title: "Beauty Reviews",
                desc: "Honest product demos",
              },
              {
                icon: "✈️",
                title: "Travel Features",
                desc: "Stays & experiences",
              },
              {
                icon: "🎥",
                title: "Brand Content",
                desc: "Creative promotional videos",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">Brands I've worked with:</p>
            <div className="flex flex-wrap justify-center gap-4 text-purple-600 font-semibold">
              {["BuyDost", "Rebella", "Ningen", "One Wish", "Aqualens"].map(
                (brand, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 px-4 py-2 rounded-full"
                  >
                    ✅ {brand}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/work-with-me"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              📩 Ready to collaborate? Let's talk!
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
