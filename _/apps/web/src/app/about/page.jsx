"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  Shirt,
  Sparkles,
  Plane,
  CheckCircle,
  Coffee,
  Heart,
  MapPin,
} from "lucide-react";

export default function AboutPage() {
  const contentPillars = [
    {
      icon: Shirt,
      emoji: "👗",
      title: "Fashion & Styling",
      description: "outfit ideas, brand collabs, and aesthetic looks",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Sparkles,
      emoji: "💄",
      title: "Beauty & Skincare",
      description: "honest product reviews and self-care favorites",
      color: "from-pink-500 to-purple-400",
    },
    {
      icon: Plane,
      emoji: "✈️",
      title: "Travel & Lifestyle",
      description: "stays, experiences, and photo diaries",
      color: "from-purple-400 to-pink-500",
    },
  ];

  const collaboratedBrands = [
    { name: "BuyDost", type: "Product discovery reel" },
    { name: "Rebella", type: "Fashion styling" },
    { name: "Ningen", type: "Skincare product feature" },
    { name: "One Wish", type: "Lipstick showcase" },
    { name: "Aqualens", type: "Contact lens demo" },
  ];

  const funDetails = [
    {
      icon: Coffee,
      emoji: "☕",
      label: "Current obsession:",
      value: "Iced Matcha Lattes",
    },
    {
      icon: Heart,
      emoji: "💋",
      label: "Can't live without:",
      value: "Definitely my Dot&Key Lip Gloss",
    },
    {
      icon: MapPin,
      emoji: "🧳",
      label: "Dream destination:",
      value: "Japan + Switzerland",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Your Creator Story 📖
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto rounded-full mb-8"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Image */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://ucarecdn.com/cc21bc66-5984-4f63-bdf8-c39215e77272/-/format/auto/"
                    alt="Niki - Fashion, Beauty & Travel Creator"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl">💫</div>
                </div>
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl">🎨</div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-12">
              {/* Intro Paragraph */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  Hey there! ✨
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm Niki — a creator who loves fashion, beauty, and travel.
                  What started as a small creative outlet has grown into a space
                  where I post real, creative, and relatable moments and share
                  nostalgic throwbacks, fun trends, and the cool internet finds
                  that inspire me.
                </p>
              </div>

              {/* Content Pillars */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-800">
                  What I Create 🎬
                </h3>
                <div className="space-y-6">
                  {contentPillars.map((pillar, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center text-white text-xl`}
                      >
                        {pillar.emoji}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">
                          {pillar.title}
                        </h4>
                        <p className="text-gray-600">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborated Brands Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Brands I've Worked With ✅
            </h2>
            <p className="text-gray-600">
              Amazing partnerships that felt authentic and fun!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaboratedBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-bold text-gray-800 text-lg">
                    {brand.name}
                  </h3>
                </div>
                <p className="text-gray-600">{brand.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Details Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Fun Details About Me 🌟
            </h2>
            <p className="text-gray-600">The little things that make me, me!</p>
          </div>

          <div className="space-y-6">
            {funDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">{detail.emoji}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">
                    {detail.label}
                  </h3>
                  <p className="text-gray-600 text-lg">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Want to Create Something Together? ✨
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's make content that feels authentic, beautiful, and totally you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/work-with-me"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              💌 Work With Me
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              📧 Say Hello
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
