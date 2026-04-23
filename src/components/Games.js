"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, TrendingUp } from "lucide-react";

const games = [
  {
    id: 1,
    title: "Cosmic Riches",
    category: "Slots",
    image: "🌟",
    rating: 4.9,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Live Blackjack",
    category: "Live Casino",
    image: "🃏",
    rating: 4.8,
    color: "from-red-500 to-orange-500",
  },
  {
    id: 3,
    title: "Mega Jackpot",
    category: "Jackpot",
    image: "💰",
    rating: 5.0,
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 4,
    title: "Poker Elite",
    category: "Poker",
    image: "♠️",
    rating: 4.7,
    color: "from-slate-500 to-zinc-500",
  },
  {
    id: 5,
    title: "Sports Arena",
    category: "Sports",
    image: "⚽",
    rating: 4.6,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 6,
    title: "Lucky Spin",
    category: "Slots",
    image: "🎰",
    rating: 4.8,
    color: "from-blue-500 to-cyan-500",
  },
];

export default function Games() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="games" ref={ref} className="py-20 md:py-32 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass font-body text-sm text-secondary mb-4">
            🎯 Popular Games
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Discover </span>
            <span className="text-text-primary">Games</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Explore our vast collection of exciting games with huge payouts
          </p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="flex-shrink-0 w-72 group cursor-pointer"
            >
              <div className="relative bg-bg-card rounded-2xl overflow-hidden border border-white/5">
                <div
                  className={`h-40 bg-gradient-to-br ${game.color} flex items-center justify-center relative`}
                >
                  <span className="text-6xl">{game.image}</span>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 rounded-full glass font-body text-xs text-text-secondary">
                      {game.category}
                    </span>
                    <div className="flex items-center gap-1 text-accent">
                      <Star size={14} fill="currentColor" />
                      <span className="font-body text-sm font-semibold">
                        {game.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>

                  <div className="flex items-center gap-2 text-secondary">
                    <TrendingUp size={16} />
                    <span className="font-body text-sm">Hot</span>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}