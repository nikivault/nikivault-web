"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  Coffee,
  Heart,
  Gift,
  DollarSign,
  ExternalLink,
  Star,
} from "lucide-react";

export default function SupportPage() {
  const supportOptions = [
    {
      title: "Buy Me a Chai",
      description:
        "Fuel my creativity with a cozy chai! Perfect for saying thanks for content that brightened your day ☕",
      icon: Coffee,
      link: "https://buymeacoffee.com/nikivault",
      color: "from-yellow-600 to-orange-500",
      emoji: "☕",
      amount: "₹25 minimum",
    },
    {
      title: "Gift Wishlist",
      description:
        "Want to surprise me with something special? Check out my wishlist for items I'm currently loving!",
      icon: Gift,
      link: "#wishlist",
      color: "from-pink-500 to-purple-400",
      emoji: "🎁",
      amount: "Various",
    },
    {
      title: "Tip Jar",
      description:
        "Support my content creation journey with a tip! Every bit helps me continue creating authentic content ✨",
      icon: DollarSign,
      link: "https://razorpay.me/@nikivault",
      color: "from-purple-500 to-pink-400",
      emoji: "💝",
      amount: "Any amount",
    },
  ];

  const wishlistItems = [
    {
      name: "Ring Light for Better Content",
      price: "₹2,500",
      description: "For those perfect lighting setups!",
      image:
        "https://images.unsplash.com/photo-1481887328591-3e277f9473dc?w=300&h=300&fit=crop&auto=format",
      link: "https://amazon.in",
    },
    {
      name: "Polaroid Camera",
      price: "₹8,000",
      description: "To capture aesthetic moments instantly",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop&auto=format",
      link: "https://amazon.in",
    },
    {
      name: "Skincare Set",
      price: "₹1,500",
      description: "Always testing new products for honest reviews!",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop&auto=format",
      link: "https://nykaa.com",
    },
    {
      name: "Aesthetic Props Box",
      price: "₹1,000",
      description: "Pretty props for flat lay photography",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop&auto=format",
      link: "https://amazon.in",
    },
  ];

  const supporters = [
    {
      name: "Anonymous",
      message: "Love your authentic content! Keep being you ✨",
      amount: "₹100",
    },
    {
      name: "Priya K.",
      message: "Your styling tips changed my wardrobe game!",
      amount: "₹200",
    },
    {
      name: "Anonymous",
      message: "Thank you for always being honest about products 💕",
      amount: "₹150",
    },
    {
      name: "Aditi S.",
      message: "Your travel content inspired my solo trip!",
      amount: "₹300",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Support Niki 💕
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Creating authentic content takes time, love, and lots of chai! ☕
            <br />
            Your support helps me continue sharing real, relatable moments with
            you all.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ways to Support ✨
            </h2>
            <p className="text-gray-600">
              Choose what feels right for you — any support means the world to
              me!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <span className="text-2xl">{option.emoji}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {option.description}
                </p>

                <div className="mb-6">
                  <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-semibold text-purple-600">
                    {option.amount}
                  </span>
                </div>

                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${option.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300`}
                >
                  <option.icon size={20} />
                  Support Now
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wishlist Section */}
      <section
        id="wishlist"
        className="py-16 px-6 bg-gradient-to-br from-purple-100 to-pink-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Gift Wishlist 🎁
            </h2>
            <p className="text-gray-600">
              Items that would help me create even better content for you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlistItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">
                      {item.price}
                    </span>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      View Item
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fan Shoutouts */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Fan Shoutouts Wall 💌
            </h2>
            <p className="text-gray-600">
              Amazing humans who've supported the journey!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {supporters.map((supporter, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-800">
                        {supporter.name}
                      </h3>
                      <span className="text-sm font-semibold text-purple-600">
                        {supporter.amount}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm italic">
                      "{supporter.message}"
                    </p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Support */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-8">
            Why Your Support Matters 🌟
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">📸</span>
              </div>
              <h3 className="text-xl font-bold">Better Equipment</h3>
              <p className="text-purple-100">
                Invest in cameras, lighting, and tools for higher quality
                content
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">✈️</span>
              </div>
              <h3 className="text-xl font-bold">More Travel Content</h3>
              <p className="text-purple-100">
                Explore new places and share amazing travel experiences with you
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">💄</span>
              </div>
              <h3 className="text-xl font-bold">Product Reviews</h3>
              <p className="text-purple-100">
                Try more products to give you honest, helpful reviews
              </p>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Every Contribution Counts! 💕
            </h3>
            <p className="text-lg text-purple-100 mb-6">
              Whether it's ₹50 for a chai or supporting a bigger goal, your
              kindness fuels my creativity and keeps me motivated to create
              content that feels real and relatable.
            </p>
            <p className="text-purple-200">
              Thank you for being part of this beautiful journey! 🥺✨
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
