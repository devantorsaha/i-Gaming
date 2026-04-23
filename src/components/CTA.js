"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-32 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg-card to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-card to-transparent" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 rounded-full glass font-body text-sm text-secondary mb-4">
            🎯 Get Started
          </span>

          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            <span className="text-text-primary">READY TO </span>
            <span className="gradient-text">WIN?</span>
          </h2>

          <p className="font-body text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            Join millions of players today and start winning big. Sign up for exclusive bonuses and promotions!
          </p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 glass px-8 py-4 rounded-full"
            >
              <CheckCircle size={24} className="text-green-500" />
              <span className="font-body text-lg text-green-500">
                You're in! Check your email for exclusive bonuses.
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-full bg-bg-card border border-white/10 text-text-primary font-body text-lg placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full font-heading font-semibold text-bg-dark flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Join Now
              </motion.button>
            </form>
          )}

          <p className="font-body text-sm text-text-secondary/50 mt-6">
            By signing up, you agree to our Terms & Privacy Policy
          </p>
        </motion.div>
      </div>
    </section>
  );
}