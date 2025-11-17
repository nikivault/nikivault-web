"use client";

import { useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Mail, Instagram, MapPin, Send, Heart } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    collaboration: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      brand: "",
      email: "",
      collaboration: "",
      message: "",
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />

        <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white min-h-screen flex items-center justify-center">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-12 h-12 text-white fill-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Thanks for reaching out! 💕
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I'm so excited about the possibility of working together! I'll get
              back to you within 24-48 hours with all the details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                🏠 Back to Home
              </a>
              <a
                href="https://instagram.com/nikivault"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purple-300 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 hover:scale-105 transition-all duration-300"
              >
                📱 Follow My Journey
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Let's Collaborate 📬
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ready to create something beautiful together? I'd love to hear about
            your brand!
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Send Me Your Collaboration Brief 💌
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-colors"
                      placeholder="Your beautiful name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="brand"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Brand / Website
                    </label>
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-colors"
                      placeholder="Your amazing brand"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="collaboration"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Type of Collaboration *
                    </label>
                    <select
                      id="collaboration"
                      name="collaboration"
                      value={formData.collaboration}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-colors"
                    >
                      <option value="">Select collaboration type</option>
                      <option value="fashion-beauty">
                        Fashion / Beauty Collab
                      </option>
                      <option value="travel">Travel / Stay Feature</option>
                      <option value="ugc">UGC Package</option>
                      <option value="business">
                        Website / Business Feature
                      </option>
                      <option value="gifting">Gifting / PR</option>
                      <option value="other">
                        Other (please specify in message)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-colors resize-none"
                      placeholder="Tell me about your brand, your goals, and what kind of content you're envisioning! The more details, the better I can help ✨"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message 💌
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Get in Touch ✨
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  I'm always excited to hear from new brands and creative
                  partners! Whether you have a specific project in mind or just
                  want to explore possibilities, let's start a conversation.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email</h3>
                    <a
                      href="mailto:nikithasudeer@gmail.com"
                      className="text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      nikithasudeer@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-400 rounded-xl flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Instagram</h3>
                    <a
                      href="https://instagram.com/nikivault"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700 transition-colors"
                    >
                      @nikivault
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Location</h3>
                    <p className="text-gray-600">Based in Kerala, India</p>
                    <p className="text-sm text-purple-600">
                      (Open for travel for work purpose)
                    </p>
                  </div>
                </div>
              </div>

              {/* Fun Note */}
              <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-l-4 border-yellow-400">
                <h4 className="font-bold text-gray-800 mb-2">🌟 Quick Note</h4>
                <p className="text-gray-700 text-sm">
                  I typically respond to collaboration inquiries within 2-4
                  hours. If you need something urgent, feel free to send me a DM
                  on Instagram too!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
