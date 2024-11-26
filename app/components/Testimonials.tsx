"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "REG AI has transformed our staff training. The personalized approach ensures every team member excels.",
    author: "Emily Chen",
    role: "Head Chef, Le Bernardin",
    image: "/placeholder.svg",
  },
  {
    quote:
      "The real-time analytics have been a game-changer for our restaurant's performance and guest satisfaction.",
    author: "Michael Johnson",
    role: "General Manager, Per Se",
    image: "/placeholder.svg",
  },
  {
    quote:
      "Implementing REG AI was seamless. Our staff love the interactive learning experience it provides.",
    author: "Sarah Thompson",
    role: "Owner, Eleven Madison Park",
    image: "/placeholder.svg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black/50 backdrop-blur-lg rounded-lg p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
