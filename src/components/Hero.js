"use client";

import { motion } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden grid-bg"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark/50 to-bg-dark" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />

      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,46,99,0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-1 rounded-full glass font-body text-sm text-secondary border border-secondary/30">
            ✨ Welcome to the Future of Gaming
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        >
          <span className="text-text-primary">THE FUTURE</span>
          <br />
          <span className="gradient-text">OF GAMING</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-body text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl mx-auto"
        >
          Experience next-level entertainment with cutting-edge games, massive jackpots,
          and unparalleled excitement.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 46, 99, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full font-heading font-semibold text-bg-dark flex items-center justify-center gap-2"
          >
            <Play size={20} className="group-hover:translate-x-1 transition-transform" />
            Start Playing
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 rounded-full font-heading font-semibold text-text-primary border border-text-secondary/30 glass flex items-center justify-center gap-2 hover:border-primary transition-colors"
          >
            <span className="w-8 h-8 rounded-full border border-text-secondary/50 flex items-center justify-center">
              ▶
            </span>
            Watch Trailer
            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition-transform text-text-secondary"
            />
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex items-center justify-center gap-8 md:gap-16"
        >
          {[
            { label: "10K+", sub: "Games" },
            { label: "5M+", sub: "Players" },
            { label: "$50M+", sub: "Jackpots" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-heading text-2xl md:text-4xl font-bold text-accent">
                {stat.label}
              </div>
              <div className="font-body text-text-secondary text-sm">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute hidden lg:block right-10 top-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-48 h-48 md:w-64 md:h-64 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl rotate-12 blur-xl" />
          <div className="relative w-full h-full bg-bg-card rounded-3xl border border-white/10 flex items-center justify-center">
            <div className="text-8xl">🎮</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-text-secondary/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-text-secondary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}