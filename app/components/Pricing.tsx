'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const features = [
    "Unlimited AI-powered training sessions",
    "24/7 staff support",
    "Custom content creation",
    "Performance analytics",
    "Team management tools",
    "Regular updates and improvements"
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-playfair mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Start transforming your restaurant's training today
                    </p>
                </motion.div>
                <div className="max-w-lg mx-auto">
                    <motion.div
                        className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 border border-amber-400/20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-8">
                            <div className="text-amber-400 mb-4">Premium Plan</div>
                            <div className="text-5xl font-playfair mb-4">$50<span className="text-xl text-gray-400">/month</span></div>
                            <div className="text-gray-400">per restaurant</div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <Check className="w-5 h-5 text-amber-400 mr-3" />
                                    <span className="text-gray-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold py-4 px-8 rounded-lg text-lg hover:from-amber-500 hover:to-amber-700 transition-all duration-300">
                            Start Free Trial
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

