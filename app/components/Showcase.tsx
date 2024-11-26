'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Showcase() {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-playfair mb-4">Your Operations Demand Smarter Tools—Unlock Exceptional Growth with AI</h2>
                </motion.div>
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden">
                        <video
                            className="w-full"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/REGAI Demo Video.mov" type="video/quicktime" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </motion.div>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold py-4 px-12 rounded-full text-lg hover:from-amber-500 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Request Demo
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

