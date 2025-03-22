import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [showImagePage, setShowImagePage] = useState(false);

  if (showImagePage) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <button
          className="absolute top-6 left-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer"
          onClick={() => setShowImagePage(false)}
        >
          Go Back
        </button>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/image/image3.jpg"
          alt="Figma Design"
          className="w-3/4 rounded-lg shadow-lg"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16 md:py-24"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Carbon Crunch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 mb-8"
            >
              Empowering sustainable choices through real-time carbon tracking,
              personalized reduction strategies, and verified offsetting
              projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-4"
            >
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
                onClick={() => setShowImagePage(true)}
              >
                Get Started
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </header>

      {/* Features Section with Animated Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Carbon Crunch?
            </h2>
            <p className="text-lg text-gray-700">
              Transform your sustainability journey with AI-powered insights,
              actionable recommendations, and seamless carbon offsetting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Insights",
                description:
                  "Gain real-time data on your carbon footprint with intelligent analytics and predictive trends.",
              },
              {
                title: "Personalized Sustainability Plans",
                description:
                  "Receive tailored recommendations to make impactful eco-friendly decisions effortlessly.",
              },
              {
                title: "Verified Carbon Offsetting",
                description:
                  "Support globally recognized projects to neutralize your emissions effectively.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-green-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-green-700 text-white mt-16">
        © 2025 Carbon Crunch. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
