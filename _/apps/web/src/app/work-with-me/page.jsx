"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

export default function WorkWithMePage() {
  const collaborationTypes = [
    {
      type: "Fashion / Beauty Collab",
      deliverables: "1-2 Reel + 1-2 Story",
      idealFor: "Styling, product demos, or tutorials",
      gradient: "from-purple-500 to-pink-400",
      icon: "👗",
    },
    {
      type: "Travel / Stay Feature",
      deliverables: "1–2 Reels + 1-2 Story Set",
      idealFor: "Promoting stays, trips, or experiences",
      gradient: "from-pink-500 to-purple-400",
      icon: "✈️",
    },
    {
      type: "UGC Package",
      deliverables: "1-2 Videos + Edited Photos",
      idealFor: "For brands to reuse on ads/socials",
      gradient: "from-purple-400 to-pink-500",
      icon: "📱",
    },
    {
      type: "Website / Business Feature",
      deliverables: "1 Reel + 1 Story",
      idealFor: "Creative promotional content",
      gradient: "from-pink-400 to-purple-500",
      icon: "💻",
    },
    {
      type: "Gifting / PR",
      deliverables: "1 Reel + Tag",
      idealFor: "For relevant fashion, beauty, or lifestyle brands",
      gradient: "from-purple-500 to-pink-500",
      icon: "🎁",
    },
  ];

  const brandBenefits = [
    "Story-driven, relatable short-form content",
    "Visually consistent, high-quality edits",
    "Authentic audience engagement",
    "Rights to reuse UGC assets (negotiable)",
  ];

  const collaboratedBrands = [
    "BuyDost",
    "Rebella",
    "Ningen",
    "One Wish",
    "Aqualens",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Your Creator Pitch 💌
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            I create short-form content that feels real, aesthetic, and tailored
            for curious, creative audiences, whether it's a fashion brand, a
            beauty launch, or a travel stay worth experiencing.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Collaboration Types Table */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How We Can Collaborate ✨
            </h2>
            <p className="text-gray-600">
              Choose the perfect package for your brand's needs
            </p>
          </div>

          <div className="space-y-6">
            {collaborationTypes.map((collab, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  {/* Type */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${collab.gradient} rounded-xl flex items-center justify-center text-white text-xl`}
                    >
                      {collab.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{collab.type}</h3>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">
                      Deliverables
                    </h4>
                    <p className="text-gray-700">{collab.deliverables}</p>
                  </div>

                  {/* Ideal For */}
                  <div>
                    <h4 className="font-semibold text-pink-600 mb-2">
                      Ideal For
                    </h4>
                    <p className="text-gray-700">{collab.idealFor}</p>
                  </div>

                  {/* CTA */}
                  <div className="text-center md:text-right">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      Get Quote <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Brands Get */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Brands Get 🎯
            </h2>
            <p className="text-gray-600">
              More than just content — authentic connections that convert
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {brandBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Brands I've Worked With 🤝
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {collaboratedBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Star className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <p className="font-bold text-gray-800">{brand}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mb-8">
            Ready to join this amazing list of creative collaborators?
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "Working with Niki was amazing! Her content felt so authentic and
              really connected with our audience. The engagement we got was
              incredible, and her creative approach helped us reach so many new
              customers."
            </blockquote>
            <cite className="font-semibold text-purple-600">
              — Brand Partner
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to collaborate? Let's create something amazing together. 🚀
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            I'm excited to learn about your brand and create content that feels
            authentic and engaging!
          </p>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                📩 Send Collaboration Brief
              </a>
              <a
                href="mailto:nikithasudeer@gmail.com"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                📧 Email Directly
              </a>
            </div>

            <div className="pt-6 border-t border-purple-300">
              <p className="text-purple-100">
                📧{" "}
                <a
                  href="mailto:nikithasudeer@gmail.com"
                  className="text-white hover:underline"
                >
                  nikithasudeer@gmail.com
                </a>{" "}
                • 📱{" "}
                <a
                  href="https://instagram.com/nikivault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  @nikivault
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
