"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account and tell us about your restaurant.",
  },
  {
    number: "02",
    title: "Customize",
    description:
      "Tailor the AI to your specific menu, service standards, and training needs.",
  },
  {
    number: "03",
    title: "Train",
    description:
      "Let your staff access the platform and start their personalized learning journey.",
  },
  {
    number: "04",
    title: "Analyze",
    description:
      "Track progress, identify areas for improvement, and optimize your training program.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-4 top-0 text-6xl font-bold text-yellow-400/20">
                {step.number}
              </div>
              <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 h-full">
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
