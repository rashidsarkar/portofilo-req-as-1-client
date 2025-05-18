"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ExternalLink, Mail, Code2, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-16">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Hi, I'm MD Rashid Sarkar
        </h1>
        <h2 className="text-2xl md:text-3xl text-primary flex items-center gap-2">
          <Code2 className="w-8 h-8" />
          Full Stack Developer
        </h2>
        <p className="text-gray-600 text-lg">
          A passionate developer specializing in building modern web applications
          using the MERN stack. I love creating efficient, scalable, and
          user-friendly solutions.
        </p>
        <div className="flex gap-4">
          <Button
            onClick={() => window.open('/assets/Resume-MD Rashid Sarkar-L2.pdf', '_blank')}
            className="bg-primary hover:bg-primary-hover text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            View Resume
          </Button>
          <Link href="/contact" className="block">
            <Button className="bg-white border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-blue-500 to-purple-500"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ filter: "blur(20px)", opacity: 0.3 }}
        />

        {/* Glowing border */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 40px rgba(59, 130, 246, 0.3)",
              "0 0 20px rgba(59, 130, 246, 0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Main image with floating animation */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.05,
            rotate: 5,
            transition: { duration: 0.3 },
          }}
          className="relative z-10"
        >
          <Image
            src="/assets/myImg.png"
            alt="MD Rashid Sarkar"
            width={400}
            height={400}
            className="rounded-full relative z-10"
            priority
          />
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-purple-500/20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </motion.div>
    </section>
  );
} 