"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, CreditCard, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Create Account",
    description: "Sign up in seconds with just your email. No complicated forms or verification delays.",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Deposit Funds",
    description: "Choose from 50+ payment methods including cards, crypto, and e-wallets.",
  },
  {
    icon: Trophy,
    number: "03",
    title: "Start Winning",
    description: "Browse thousands of games and start playing instantly with your bonus funds.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-bg-dark relative">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgba(255,46,99,0.5)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass font-body text-sm text-secondary mb-4">
            ⚡ Quick Start
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            <span className="text-text-primary">How It </span>
            <span className="gradient-text">Works</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Get started in just 3 simple steps and start winning big
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-bg-card rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <step.icon size={28} className="text-bg-dark" />
                  </div>
                  <span className="font-heading text-4xl font-bold text-primary/20">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                <p className="font-body text-base text-text-secondary">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight size={24} className="text-primary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}