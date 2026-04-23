"use client";

import { motion } from "framer-motion";
import { Twitter, Instagram, Youtube, Facebook, Github } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Games", href: "#games" },
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Responsible Gaming", href: "#" },
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  const scrollToSection = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="py-16 bg-bg-card border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="font-heading text-2xl font-bold cursor-pointer inline-block mb-4"
            >
              <span className="text-primary">i</span>
              <span className="text-secondary">-Gaming</span>
            </motion.a>

            <p className="font-body text-text-secondary mb-6 max-w-sm">
              Experience the future of gaming with cutting-edge games, massive
              jackpots, and unparalleled excitement.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-primary transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="font-body text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-text-primary mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-text-secondary">
            © 2024 i-Gaming. All rights reserved.
          </p>

          <p className="font-body text-sm text-text-secondary/50">
            18+ | gambling involves risk. Play responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}