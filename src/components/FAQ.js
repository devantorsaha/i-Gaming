"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I create an account?",
    answer: "Simply click the 'Play Now' button and sign up with your email. Verification is instant - you'll be ready to play in under a minute.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, Mastercard, PayPal, Skrill, Neteller, crypto (Bitcoin, Ethereum), and 50+ other payment methods worldwide.",
  },
  {
    question: "How fast are withdrawals?",
    answer: "Most withdrawals are processed within 15 minutes. E-wallets are instant, while card withdrawals may take 1-3 business days.",
  },
  {
    question: "Is the platform fair and secure?",
    answer: "Absolutely. We use RNG certified games, SSL encryption, and are licensed by top gaming authorities. Your security is our top priority.",
  },
  {
    question: "Do you offer bonuses?",
    answer: "Yes! New players get a 100% match bonus up to $500, plus free spins. We also have weekly promotions and a VIP program.",
  },
  {
    question: "Can I play on mobile?",
    answer: "Yes! Our platform is fully optimized for mobile. Play on any device - no download required.",
  },
];

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-white/5"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-body text-lg text-text-primary pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} className="text-secondary flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-body text-base text-text-secondary pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-bg-card relative">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full glass font-body text-sm text-secondary mb-4">
            ❓ Need Help?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            <span className="text-text-primary">Frequently </span>
            <span className="gradient-text">Asked Questions</span>
          </h2>
          <p className="font-body text-lg text-text-secondary">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-bg-dark rounded-2xl p-6 md:p-8 border border-white/5"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}