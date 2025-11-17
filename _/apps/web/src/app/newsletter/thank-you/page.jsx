"use client";

import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { Heart, Coffee, Mail } from "lucide-react";

export default function NewsletterThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          {/* Welcome Animation */}
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-soft">
              <Mail className="w-16 h-16 text-white" />
            </div>

            {/* Floating hearts */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-4">
                <Heart
                  className="w-6 h-6 text-pink-400 fill-pink-400 animate-bounce"
                  style={{ animationDelay: "0s" }}
                />
                <Heart
                  className="w-4 h-4 text-purple-400 fill-purple-400 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                />
                <Heart
                  className="w-5 h-5 text-pink-500 fill-pink-500 animate-bounce"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fadeInUp">
            Welcome to the Vault! 💌
          </h1>

          <div
            className="space-y-6 mb-12 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-xl text-gray-600 leading-relaxed">
              You're now part of{" "}
              <span className="gradient-text font-semibold">
                The Cozy Internet Club
              </span>{" "}
              — where I share behind-the-scenes moments, creative inspiration,
              and the stories that make us all feel a little less alone on the
              internet ✨
            </p>

            <p className="text-lg text-gray-500">
              Expect cozy stories, creative updates, and maybe some chai
              recommendations in your inbox soon!
            </p>
          </div>

          {/* What to Expect */}
          <div
            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              What to Expect 📬
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                  <span className="text-xl">📸</span>
                </div>
                <h3 className="font-bold text-gray-800">Behind the Scenes</h3>
                <p className="text-gray-600 text-sm">
                  Raw moments, creative process, and the real stories behind my
                  content
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-400 rounded-xl flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
                <h3 className="font-bold text-gray-800">
                  Creative Inspiration
                </h3>
                <p className="text-gray-600 text-sm">
                  Mood boards, trending finds, and things that spark joy
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl">💭</span>
                </div>
                <h3 className="font-bold text-gray-800">Cozy Thoughts</h3>
                <p className="text-gray-600 text-sm">
                  Personal reflections, random thoughts, and friendly
                  conversations
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div
            className="space-y-6 animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <h2 className="text-2xl font-bold text-gray-800">
              While You're Here... 💕
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/nikivault"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                📱 Follow on Instagram
              </a>
              <a
                href="/portfolio"
                className="border-2 border-purple-300 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 hover:scale-105 transition-all duration-300"
              >
                🎨 View My Work
              </a>
              <a
                href="https://buymeacoffee.com/nikivault"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-yellow-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Coffee size={20} />
                Buy Me Chai
              </a>
            </div>
          </div>

          {/* Fun Note */}
          <div
            className="mt-12 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-l-4 border-yellow-400 animate-fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-gray-700">
              <strong>Pro tip:</strong> Add nikithasudeer@gmail.com to your
              contacts so my emails don't get lost in spam! I'd hate for you to
              miss the cozy stories 📧
            </p>
          </div>

          {/* Back to Home */}
          <div
            className="mt-12 animate-fadeInUp"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors font-medium"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
