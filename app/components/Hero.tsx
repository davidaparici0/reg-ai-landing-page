"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[url('/fine-dining-hero.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-playfair mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI-Powered Learning Management for Fine Dining Excellence
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reduce training costs by up to 70% while maintaining the excellence
            your fine dining establishment demands
          </motion.p>
          <motion.div
            className="space-y-4 md:space-y-0 md:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="#contact"
              className="inline-block bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold py-4 px-8 rounded-full text-lg hover:from-amber-500 hover:to-amber-700 transition-all duration-300"
            >
              Request Demo
            </Link>
            <span className="inline-block text-amber-400 mt-4 md:mt-0">
              Only $50/month per restaurant
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
