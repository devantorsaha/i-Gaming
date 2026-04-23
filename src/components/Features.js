"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Headphones, Zap, Crown, Gamepad2, Smartphone } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Your data is protected with state-of-the-art encryption and security protocols.",
    color: "from-primary to-pink-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our expert support team is available around the clock to assist you.",
    color: "from-secondary to-cyan-500",
  },
  {
    icon: Zap,
    title: "Fast Payouts",
    description: "Get your winnings processed within minutes, not days.",
    color: "from-accent to-yellow-500",
  },
  {
    icon: Crown,
    title: "VIP Rewards",
    description: "Exclusive perks and bonuses for our most loyal players.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Gamepad2,
    title: "Multiple Games",
    description: "Over 10,000 games including slots, poker, sports, and live casino.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Play anywhere on any device with our seamless mobile experience.",
    color: "from-blue-500 to-indigo-500",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-20 md:py-32 bg-bg-card relative">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass font-body text-sm text-secondary mb-4">
            🚀 Why Choose Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            <span className="text-text-primary">Amazing </span>
            <span className="gradient-text">Features</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Experience gaming like never before with our premium features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative bg-bg-dark rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-colors h-full">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon size={28} className="text-bg-dark" />
                </div>

                <h3 className="font-heading text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="font-body text-base text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}