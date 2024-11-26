'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
                }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/images/REG AI Logo.png"
                        alt="REG AI Logo"
                        width={40}
                        height={40}
                    />
                    <span className="text-2xl font-bold text-white">REG AI</span>
                </Link>
                <ul className="flex space-x-8">
                    <li><Link href="#features" className="text-gray-300 hover:text-white transition-colors">Features</Link></li>
                    <li><Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link></li>
                    <li><Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
                    <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                </ul>
            </nav>
        </motion.header>
    )
}

