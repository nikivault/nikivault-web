"use client";

import { useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Filter, ExternalLink } from "lucide-react";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Work", emoji: "✨" },
    { id: "fashion", label: "Fashion & Styling", emoji: "👗" },
    { id: "beauty", label: "Beauty & Skincare", emoji: "💄" },
    { id: "travel", label: "Travel & Lifestyle", emoji: "✈️" },
    { id: "brand", label: "Brand Collaborations", emoji: "🎥" },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Aqualens Contact Lens Demo",
      category: "brand",
      image:
        "https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fwww.instagram.com%2Freel%2FDQjZvH9kkSK%2F%3Futm_source%3Dig_web_copy_link%26igsh%3DMzRlODBiNWFlZA%3D%3D&full_page=true&width=1024&max_height=2048&quality=80",
      description:
        "Halloween-themed Aqualens contact lens showcase - Mystery Hazel shade",
      link: "https://www.instagram.com/reel/DQjZvH9kkSK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tags: ["Brand Collab", "Contact Lens", "Halloween", "Aqualens"],
    },
    {
      id: 2,
      title: "One Wish Lipstick Showcase",
      category: "beauty",
      image:
        "https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fwww.instagram.com%2Freel%2FDQg094vEg6k%2F%3Futm_source%3Dig_web_copy_link%26igsh%3DMzRlODBiNWFlZA%3D%3D&full_page=true&width=1024&max_height=2048&quality=80",
      description:
        "Trying out the new One Wish lipstick - honest review and application demo",
      link: "https://www.instagram.com/reel/DQg094vEg6k/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tags: ["Beauty Review", "Lipstick", "One Wish", "Makeup"],
    },
    {
      id: 3,
      title: "Ningen Skincare Glow Feature",
      category: "beauty",
      image:
        "https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fwww.instagram.com%2Freel%2FDPvbesuk_3r%2F%3Futm_source%3Dig_web_copy_link%26igsh%3DMzRlODBiNWFlZA%3D%3D&full_page=true&width=1024&max_height=2048&quality=80",
      description:
        "Glowing skin reveal with Ningen Glow Revive duo - skincare routine results",
      link: "https://www.instagram.com/reel/DPvbesuk_3r/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tags: ["Skincare", "Glow", "Ningen", "Beauty Routine"],
    },
    {
      id: 4,
      title: "Rebella Fashion Styling",
      category: "fashion",
      image:
        "https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fwww.instagram.com%2Freel%2FDMct1uWyp4w%2F%3Futm_source%3Dig_web_copy_link%26igsh%3DMzRlODBiNWFlZA%3D%3D&full_page=true&width=1024&max_height=2048&quality=80",
      description:
        "Statement tees styling with Rebella - creating versatile looks for every occasion",
      link: "https://www.instagram.com/reel/DMct1uWyp4w/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tags: ["Fashion Styling", "Rebella", "Statement Tees", "Outfit Ideas"],
    },
    {
      id: 5,
      title: "BuyDost Product Discovery",
      category: "brand",
      image:
        "https://e1a4c9d0d2f9f737c5e1.ucr.io/-/preview/https://api.urlbox.io/v1/NTYqWgJv5s0qDIxN/jpeg?url=https%3A%2F%2Fwww.instagram.com%2Freel%2FDK8Hul2hKlO%2F%3Futm_source%3Dig_web_copy_link%26igsh%3DMzRlODBiNWFlZA%3D%3D&full_page=true&width=1024&max_height=2048&quality=80",
      description:
        "Mysterious product discovery with BuyDost - connecting the dots in creative ways",
      link: "https://www.instagram.com/reel/DK8Hul2hKlO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tags: [
        "Brand Collab",
        "Product Discovery",
        "BuyDost",
        "Creative Content",
      ],
    },
    {
      id: 6,
      title: "Everyday Makeup Tutorial",
      category: "beauty",
      image:
        "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=600&fit=crop&auto=format",
      description: "Quick and easy makeup for busy mornings",
      link: "https://instagram.com/nikivault",
      tags: ["Makeup Tutorial", "Quick Look"],
    },
    {
      id: 7,
      title: "Vintage Style Challenge",
      category: "fashion",
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=600&fit=crop&auto=format",
      description: "Recreating iconic vintage looks with modern pieces",
      link: "https://instagram.com/nikivault",
      tags: ["Vintage Fashion", "Style Challenge"],
    },
    {
      id: 8,
      title: "Kerala Backwaters Experience",
      category: "travel",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&auto=format",
      description: "Exploring the serene backwaters of Kerala",
      link: "https://instagram.com/nikivault",
      tags: ["Kerala", "Backwaters", "Local Travel"],
    },
    {
      id: 9,
      title: "Rebella Fashion Styling",
      category: "brand",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&auto=format",
      description: "Creating stunning looks with Rebella fashion pieces",
      link: "https://instagram.com/nikivault",
      tags: ["Fashion Styling", "Brand Collab"],
    },
    {
      id: 10,
      title: "Night Skincare Routine",
      category: "beauty",
      image:
        "https://images.unsplash.com/photo-1610088441520-4352457e7095?w=600&h=600&fit=crop&auto=format",
      description: "My relaxing evening skincare ritual",
      link: "https://instagram.com/nikivault",
      tags: ["Skincare", "Night Routine", "Self Care"],
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Your Work, Visualized 🎨
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A collection of content that feels real, creative, and totally me
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-6 bg-white sticky top-20 z-40 border-b border-purple-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6 overflow-x-auto">
            <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <div className="flex gap-2 flex-nowrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  }`}
                >
                  {category.emoji} {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-purple-50 transition-colors duration-200"
                    >
                      View Content <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-bold text-gray-800 text-lg group-hover:text-purple-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Coming Soon!
              </h3>
              <p className="text-gray-600">
                More amazing content in this category is on the way.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Love What You See? 💕</h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's create something beautiful together for your brand!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/work-with-me"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              💌 Start a Collaboration
            </a>
            <a
              href="https://instagram.com/nikivault"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              📱 Follow for More
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
