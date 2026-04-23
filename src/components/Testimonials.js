"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "👨‍💼",
    rating: 5,
    text: "Incredible gaming experience! The graphics are stunning and the payouts are lightning fast. Best platform I've ever used.",
  },
  {
    id: 2,
    name: "Sarah Martinez",
    avatar: "👩‍💻",
    rating: 5,
    text: "The live casino games are amazing. Feels like being in a real casino from home. Customer support is top-notch!",
  },
  {
    id: 3,
    name: "Michael Johnson",
    avatar: "🧑‍💼",
    rating: 5,
    text: "Won a massive jackpot last week! The VIP program is fantastic and the rewards just keep getting better.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="py-20 md:py-32 bg-bg-card relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass font-body text-sm text-secondary mb-4">
            💬 Player Reviews
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="text-text-primary">What </span>
            <span className="gradient-text">Players Say</span>
          </h2>
        </motion.div>

        <div ref={ref} className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-bg-dark rounded-2xl p-8 md:p-10 border border-white/5"
            >
              <Quote
                size={40}
                className="text-primary/20 mb-4"
              />

              <p className="font-body text-xl text-text-primary mb-8 leading-relaxed">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                  {testimonials[current].avatar}
                </div>

                <div>
                  <div className="font-heading text-lg font-semibold text-text-primary">
                    {testimonials[current].name}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                        className="text-accent"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current
                    ? "w-8 bg-primary"
                    : "bg-text-secondary/30 hover:bg-text-secondary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}