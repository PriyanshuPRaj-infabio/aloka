/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Correspondence() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please specify a valid email address.");
      return;
    }
    setError("");
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <div className="w-full bg-[#FCFAF7] animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-24">
        
        {/* Header Block */}
        <div className="space-y-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-charcoal">
            Correspondence
          </h1>
          <div className="h-[1.5px] w-12 bg-subtle-gold mx-auto my-6" />
        </div>

        {/* 1. SUBSCRIPTION SECTION */}
        <section className="bg-soft-parchment p-8 md:p-16 border border-charcoal/8 space-y-10 shadow-sm max-w-3xl mx-auto">
          
          <div className="space-y-4 text-center max-w-xl mx-auto">
            <p className="font-serif text-lg md:text-xl text-charcoal font-light leading-relaxed">
              Occasional reflections, essays, and updates from ongoing cultural and conservation work.
            </p>
            <p className="text-xs text-[#807970] leading-relaxed font-serif italic max-w-md mx-auto">
              The correspondence remains intentionally infrequent and thoughtful — centred on landscapes, memory, stewardship, publishing, and the evolving journey of the Wonderful World series.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form
                  key="subscribe-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      required
                      placeholder="Your email address"
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 bg-[#FCFAF7] border border-charcoal/8 text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-[#C5A059] placeholder-muted-grey/60 font-sans tracking-wide"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#1A1A1A] hover:bg-subtle-gold hover:text-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 shrink-0"
                    >
                      <span>Receive Occasional Notes</span>
                    </button>
                  </div>
                  {error && (
                    <p className="text-xs text-red-600 font-mono tracking-wider">
                      {error}
                    </p>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="subscribed-success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-[#FAF9F5] border border-subtle-gold/40 text-center space-y-3"
                >
                  <CheckCircle size={24} className="mx-auto text-subtle-gold" />
                  <p className="font-serif text-charcoal text-base font-light">
                    Your request has been quietly recorded.
                  </p>
                  <p className="text-[10px] font-mono tracking-widest text-[#807970] uppercase">
                    You have successfully subscribed to the correspondence.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="text-center pt-2">
            <span className="text-[11px] font-sans tracking-[0.15em] text-[#807970] uppercase">
              No noise. No promotional cadence. Only occasional and meaningful communication.
            </span>
          </div>

        </section>

        {/* 2. CONTACT / INSTITUTIONAL ENQUIRIES */}
        <section className="border-t border-charcoal/8 pt-12 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          
          <div className="space-y-5">
            <h3 className="font-serif text-lg font-light text-charcoal">
              Institutional & Editorial Enquiries
            </h3>
            
            <div className="text-xs space-y-2 text-[#807970] uppercase tracking-widest font-sans font-semibold pt-2">
              <p>Email:</p>
              <a 
                href="mailto:contact@aloka.world"
                className="text-charcoal hover:text-subtle-gold transition-colors duration-300 font-mono text-sm lowercase tracking-wider block font-normal"
              >
                contact@aloka.world
              </a>
            </div>
          </div>

          <div className="space-y-4 border-t md:border-t-0 md:border-l border-charcoal/8 pt-6 md:pt-0 md:pl-8">
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-grey font-semibold">
              For:
            </p>
            <ul className="text-xs text-charcoal font-light space-y-2 border-l border-subtle-gold/30 pl-4 py-1 italic">
              <li>* cultural collaborations,</li>
              <li>* publishing conversations,</li>
              <li>* exhibitions,</li>
              <li>* conservation dialogue,</li>
              <li>* institutional partnerships,</li>
              <li>* and patron enquiries.</li>
            </ul>
          </div>

        </section>

        {/* 3. FINAL LINE */}
        <section className="text-center pt-8 border-t border-charcoal/8 max-w-xl mx-auto">
          <p className="font-serif font-light text-base text-charcoal tracking-wide italic">
            Meaningful work is often built through quiet correspondence.
          </p>
        </section>

      </div>
    </div>
  );
}
