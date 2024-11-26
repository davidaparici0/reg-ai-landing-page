'use client'

import { motion } from 'framer-motion'

const stats = [
    {
        number: "70%",
        label: "Reduction in Training Costs"
    },
    {
        number: "24/7",
        label: "AI-Powered Support"
    },
    {
        number: "100+",
        label: "NYC Restaurants Served"
    },
    {
        number: "15min",
        label: "Average Setup Time"
    }
]

export default function Stats() {
    return (
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl md:text-5xl font-playfair text-amber-400 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

