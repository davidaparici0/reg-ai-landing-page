"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Clock,
  DollarSign,
  Users,
  BookOpen,
  BarChart,
} from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8 text-amber-400" />,
    title: "AI-Powered Training",
    description:
      "Personalized learning paths that adapt to each employee's progress and restaurant-specific needs.",
  },
  {
    icon: <Clock className="w-8 h-8 text-amber-400" />,
    title: "Real-Time Support",
    description:
      "Instant answers to staff inquiries, available 24/7 to maintain service excellence.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-amber-400" />,
    title: "Cost Reduction",
    description:
      "Cut training expenses by up to 70% while improving efficiency and staff retention.",
  },
  {
    icon: <Users className="w-8 h-8 text-amber-400" />,
    title: "Team Management",
    description:
      "Track progress, identify skill gaps, and optimize your training program in real-time.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-amber-400" />,
    title: "Custom Content",
    description:
      "Training modules tailored to your restaurant's unique menu, service standards, and procedures.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-amber-400" />,
    title: "Performance Analytics",
    description:
      "Detailed insights into staff development and operational improvements.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-4">
            Elevate Your Training
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions designed specifically for fine dining
            establishments in New York City
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
