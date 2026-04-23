"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, Medal, Crown } from "lucide-react";

const awards = [
  {
    year: "2024",
    title: "Best Gaming Platform",
    organization: "Gaming Awards",
    icon: Award,
    color: "from-primary to-pink-500",
  },
  {
    year: "2024",
    title: "Innovation Excellence",
    organization: "Tech Awards",
    icon: Star,
    color: "from-secondary to-cyan-500",
  },
  {
    year: "2023",
    title: "Best Customer Support",
    organization: "Service Awards",
    icon: Medal,
    color: "from-accent to-yellow-500",
  },
  {
    year: "2023",
    title: "Most Trusted Platform",
    organization: "Trust Awards",
    icon: Crown,
    color: "from-purple-500 to-violet-500",
  },
];

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass font-body text-sm text-secondary mb-4">
            🏆 Industry Recognition
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            <span className="text-text-primary">Award-Winning </span>
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Our commitment to quality has been recognized by leading industry organizations worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-bg-card rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-colors text-center">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${award.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <award.icon size={32} className="text-bg-dark" />
                </div>

                <span className="inline-block px-3 py-1 rounded-full glass font-body text-xs text-text-secondary mb-3">
                  {award.year}
                </span>

                <h3 className="font-heading text-lg font-semibold text-text-primary mb-1 group-hover:text-primary transition-colors">
                  {award.title}
                </h3>

                <p className="font-body text-sm text-text-secondary">
                  {award.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}