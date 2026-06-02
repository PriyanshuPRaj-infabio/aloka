/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Magnetic from "./Magnetic.tsx";

interface FooterProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

export default function Footer({ onNavigate, currentView }: FooterProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isDropUpOpen, setIsDropUpOpen] = useState(false);
  const [email, setEmail] = useState("");

  const primaryLinks = [
    { id: "home", label: "Home" },
    { id: "wonderful-world", label: "Wonderful World Series" },
    { id: "reflections", label: "Reflections" },
    { id: "about", label: "About" },
  ];

  const secondaryLinks = [
    { id: "magnum-editions", label: "Magnum Editions" },
    { id: "aloka", label: "Aloka" },
    { id: "aloka-memorial-trust", label: "Aloka Memorial Trust" },
    { id: "press", label: "Press & Recognition" },
    { id: "correspondence", label: "Correspondence" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#151515] text-[#E5DED4] pt-24 pb-16 border-t border-charcoal/10">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-16">

        {/* Newsletter Section - Styled like the high-end KNMA footer bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-12 border-b border-charcoal/40 gap-8">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-light tracking-wide text-[#FAF9F5]">
              Correspondence
            </h3>
            <p className="font-serif text-sm italic font-light text-[#A09A90] max-w-md">
              Occasional reflections, essays, and updates from ongoing cultural and conservation work.
            </p>
          </div>
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex w-full lg:w-auto max-w-md items-center border-b border-charcoal/30 pb-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="bg-transparent text-sm font-sans font-light text-[#FAF9F5] focus:outline-none placeholder-[#807970] w-64 pr-4"
              />
              <Magnetic>
                <button
                  type="submit"
                  className="text-[10px] uppercase tracking-[0.25em] text-subtle-gold hover:text-[#FAF9F5] transition-colors font-medium cursor-pointer"
                >
                  Receive Occasional Notes
                </button>
              </Magnetic>
            </form>
          ) : (
            <p className="text-xs font-mono uppercase tracking-[0.15em] text-subtle-gold">
              Subscription Recorded. Thank you.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-charcoal/40">
          {/* Brand/Center */}
          <div className="col-span-1 md:col-span-4 space-y-6">
            <Magnetic>
              <button
                onClick={() => onNavigate("home")}
                className="block text-left transition-opacity hover:opacity-95 cursor-pointer"
              >
                <span className="font-serif text-lg md:text-xl tracking-[0.35em] font-light uppercase text-white">
                  ALOKA
                </span>
              </button>
            </Magnetic>
            <p className="font-serif text-sm italic font-light max-w-xs text-[#A09A90] leading-relaxed">
              Cultural works on nature, nations, memory, and conservation.
            </p>
          </div>

          {/* Primary Exploration */}
          <div className="col-span-1 md:col-span-2 space-y-5">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#807970] font-sans font-semibold">
              Explore
            </h4>
            <ul className="space-y-2">
              {primaryLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className={`text-xs tracking-[0.1em] font-sans transition-colors duration-300 hover:text-[#FAF9F5] text-left cursor-pointer ${currentView === link.id
                      ? "text-subtle-gold font-medium"
                      : "text-[#B0A99F]"
                      }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Chapters */}
          <div className="col-span-1 md:col-span-3 space-y-5">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#807970] font-sans font-semibold">
              More
            </h4>
            <ul className="space-y-2">
              {secondaryLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className={`text-xs tracking-[0.1em] font-sans transition-colors duration-300 hover:text-[#FAF9F5] text-left cursor-pointer ${currentView === link.id
                      ? "text-subtle-gold font-medium"
                      : "text-[#B0A99F]"
                      }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophical Core Statement */}
          <div className="col-span-1 md:col-span-3 space-y-4 text-xl font-serif leading-relaxed text-[#A09A90] font-light italic border-t md:border-t-0 md:border-l border-charcoal/40 pt-6 md:pt-0 md:pl-8">
            <p>
              “Silence survives only where societies consciously protect space, scale, and ecological dignity against the pressures of excess and speed.”
            </p>
          </div>
        </div>

        {/* Closing Footnote info in exact KNMA format */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 text-[10px] font-mono text-[#807970] uppercase tracking-widest pt-4 relative">
          {/* Left Side: Category Footnote & Drop Up Menu */}
          <div className="space-y-3 flex flex-col items-start w-full sm:w-auto">
            <span>Nature. Nations. Memory. Conservation.</span>

            {/* Drop Up Menu */}
            <div className="relative z-30">
              {/* Backdrop for closing dropup */}
              {isDropUpOpen && (
                <div
                  className="fixed inset-0 z-20 cursor-default"
                  onClick={() => setIsDropUpOpen(false)}
                />
              )}

              <button
                onClick={() => setIsDropUpOpen(!isDropUpOpen)}
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-white/20 bg-white/5 text-[#807970] hover:text-[#FAF9F5] hover:border-white/30 hover:bg-white/10 transition-all duration-300 font-mono text-[9px] uppercase tracking-widest cursor-pointer group"
              >
                <span className="font-serif font-black tracking-wider text-[9px] text-white">MAGNUM</span>
                <span className={`text-[6px] transition-transform duration-300 ${isDropUpOpen ? "rotate-180" : ""}`}>▲</span>
              </button>

              <AnimatePresence>
                {isDropUpOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full left-0 mb-2 w-56 bg-[#1A1A1A] border border-white/10 rounded-lg shadow-xl py-1 z-30"
                  >
                  <div className="px-3 py-1.5 border-b border-white/5 text-[9px] font-mono text-[#807970] uppercase tracking-wider">
                    Secondary Chapters
                  </div>
                  {secondaryLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => {
                          onNavigate(link.id);
                          setIsDropUpOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs text-left text-[#B0A99F] hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                      >
                        <span>{link.label}</span>
                        <span className="text-[10px]">→</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Copyright & POWERED BY */}
          <div className="space-y-3 flex flex-col items-start sm:items-end w-full sm:w-auto">
            <span>© {new Date().getFullYear()} aloka. All rights reserved.</span>

            {/* POWERED BY */}
            <div className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 transition-all duration-300 hover:bg-white/10 z-10">
              <a
                href="https://fabulousmedia.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="FabulousMedia"
              >
                <img
                  src="/fabulous-logo.png"
                  alt="FabulousMedia"
                  className="h-3 w-auto"
                />
              </a>

              <span className="h-3 w-px bg-white/30" />

              <a
                href="https://gocommercially.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-200 hover:opacity-200 transition-opacity"
                aria-label="GoCommercially"
              >
                <img
                  src="/go_tm logo white.png"
                  alt="GoCommercially"
                  className="h-3 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
