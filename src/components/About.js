"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Globe } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      text: "To revolutionize online gaming by providing the most immersive, secure, and rewarding gaming experience in the industry.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      text: "To become the global leader in innovative gaming solutions, pushing boundaries and setting new standards for the entertainment industry.",
    },
    {
      icon: Heart,
      title: "Our Values",
      text: "Built on integrity, fairness, and player-first principles. We believe in transparent gaming and responsible entertainment.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      text: "Serving millions of players across 100+ countries with localized experiences and 24/7 support in multiple languages.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-bg-card relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="inline-block px-4 py-1 rounded-full glass font-body text-sm text-secondary mb-4">
              📖 Our Story
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              <span className="text-text-primary">
                Leading the{" "}
              </span>
              <span className="gradient-text">
                Gaming Revolution
              </span>
            </h2>
            <p className="font-body text-lg text-text-secondary mb-6">
              Founded in 2020, i-Gaming has quickly risen to become one of the most trusted
              and beloved online gaming platforms in the world. We combine cutting-edge
              technology with entertainment to create unforgettable experiences.
            </p>
            <p className="font-body text-lg text-text-secondary mb-8">
              Our team of industry veterans, game developers, and security experts work
              tirelessly to ensure every player enjoys a fair, safe, and thrilling gaming
              journey. With over 10,000 games and $50M+ in total winnings, the
              excitement never stops.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="font-heading text-3xl font-bold gradient-text">5+</div>
                <div className="font-body text-sm text-text-secondary">Years Experience</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold gradient-text">100+</div>
                <div className="font-body text-sm text-text-secondary">Countries</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold gradient-text">50+</div>
                <div className="font-body text-sm text-text-secondary">Partners</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-bg-dark rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-bg-dark" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-text-secondary">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}