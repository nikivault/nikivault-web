"use client";

import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Send, Heart, MessageCircle, Eye, EyeOff } from "lucide-react";

export default function ConfessionsPage() {
  const [confession, setConfession] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confessions, setConfessions] = useState([]);

  // Sample confessions for display
  const sampleConfessions = [
    {
      id: 1,
      text: "I've been following your content for months and it genuinely brightens my day. Your authenticity is so refreshing in a world full of fake perfection.",
      timestamp: "2 days ago",
    },
    {
      id: 2,
      text: "I bought the exact lip gloss you recommended and now I get so many compliments! Thank you for always being honest about products ✨",
      timestamp: "5 days ago",
    },
    {
      id: 3,
      text: "Your travel content made me book my first solo trip to Goa. Currently planning and so excited! Your confidence inspired me.",
      timestamp: "1 week ago",
    },
    {
      id: 4,
      text: "Sometimes I watch your styling videos when I'm sad because they make me feel like I have a creative friend who gets it 💕",
      timestamp: "2 weeks ago",
    },
    {
      id: 5,
      text: "I'm a small creator too and seeing how genuine you are with your audience gives me hope that authentic content still matters.",
      timestamp: "3 weeks ago",
    },
  ];

  useEffect(() => {
    setConfessions(sampleConfessions);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!confession.trim()) return;

    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Add to confessions list (in real app, this would be handled by backend)
    const newConfession = {
      id: Date.now(),
      text: confession,
      timestamp: "Just now",
    };
    setConfessions([newConfession, ...confessions]);

    setSubmitted(true);
    setIsSubmitting(false);
    setConfession("");

    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Eye className="w-8 h-8 text-purple-500" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Hidden Confessions
            </h1>
            <EyeOff className="w-8 h-8 text-pink-500" />
          </div>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A safe space for anonymous thoughts, feelings, and confessions.
            <br />
            Share what's on your heart — no names, no judgment, just connection
            💌
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Confession Form */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Share Your Anonymous Confession 🤫
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <textarea
                  value={confession}
                  onChange={(e) => setConfession(e.target.value)}
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl border border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-colors resize-none"
                  placeholder="What's on your heart? Share a compliment, a story, a secret, or just something you want to get off your chest. This is your safe space 💕"
                  maxLength={500}
                />
                <div className="text-right text-sm text-gray-500 mt-2">
                  {confession.length}/500 characters
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || !confession.trim()}
                  className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending anonymously...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Anonymous Confession
                    </>
                  )}
                </button>
              </div>

              {submitted && (
                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                  <p className="text-green-700 font-medium">
                    ✨ Your confession has been shared! Thank you for opening
                    your heart.
                  </p>
                </div>
              )}
            </form>

            {/* Privacy Note */}
            <div className="mt-6 p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
              <h4 className="font-bold text-gray-800 mb-2">
                🔒 Complete Privacy
              </h4>
              <p className="text-gray-700 text-sm">
                Your confessions are completely anonymous. No names, emails, or
                personal information are collected. This is a judgment-free zone
                where you can share freely and safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confessions Feed */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Recent Confessions 💭
          </h2>

          <div className="space-y-6">
            {confessions.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {item.text}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {item.timestamp}
                      </span>
                      <button className="flex items-center gap-1 text-purple-600 hover:text-purple-700 transition-colors">
                        <Heart size={16} />
                        <span className="text-sm">Send love</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {confessions.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">💌</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Be the First!
              </h3>
              <p className="text-gray-600">
                Share the first anonymous confession and start this beautiful
                conversation.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Community Guidelines 🌟
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💖</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Spread Love</h3>
                  <p className="text-gray-600 text-sm">
                    Share positive thoughts, compliments, encouragement, and
                    kindness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🤗</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Be Authentic</h3>
                  <p className="text-gray-600 text-sm">
                    Share genuine feelings, real experiences, and honest
                    thoughts.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    No Negativity
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Keep it positive — no hate, harassment, or harmful content.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Respect Privacy
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Don't try to identify others or share personal information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
