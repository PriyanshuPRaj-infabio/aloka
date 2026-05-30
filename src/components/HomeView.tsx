/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { IMAGES, ALL_LANDSCAPES, REFLECTION_MOROCCO, WONDERFUL_WORLD_AUSTRALIA, ABOUT_CONTENT, PARALLAX_GALLERY_IMAGES } from "../data";
import RevealTitle from "./RevealTitle.tsx";
import Magnetic from "./Magnetic.tsx";

function ParallaxGallery() {
  const row1 = PARALLAX_GALLERY_IMAGES.slice(0, 6);
  const row2 = PARALLAX_GALLERY_IMAGES.slice(6, 12);

  // Repeat the images 4 times to ensure we have enough width for infinite scrolling without gaps
  const row1Repeated = [...row1, ...row1, ...row1, ...row1];
  const row2Repeated = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="bg-charcoal py-24 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-subtle-gold font-sans font-semibold block mb-2">
          Visual Archives
        </span>
        <RevealTitle
          text="A Journey Through Sixty Nations"
          className="font-serif text-3xl md:text-5xl font-light text-[#FCFBF7] tracking-wide"
        />
      </div>

      <div className="w-full flex flex-col gap-8 overflow-hidden relative py-4">
        {/* Soft vignette overlay to fade left and right edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />

        {/* Row 1: Slower (Left) */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-25%"] }}
            transition={{ ease: "linear", duration: 55, repeat: Infinity }}
            className="flex gap-8 w-max"
          >
            {row1Repeated.map((src, i) => (
              <div key={i} data-cursor-view="true" className="h-[42vh] min-h-[320px] max-h-[520px] overflow-hidden bg-prestige-clay border border-white/10 shadow-lg group flex-shrink-0">
                <img
                  src={src}
                  alt={`Archive R1-${i}`}
                  className="h-full w-auto object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Faster (Right / Reverse) */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            animate={{ x: ["-25%", "0%"] }}
            transition={{ ease: "linear", duration: 55, repeat: Infinity }}
            className="flex gap-8 w-max"
          >
            {row2Repeated.map((src, i) => (
              <div key={i} data-cursor-view="true" className="h-[42vh] min-h-[320px] max-h-[520px] overflow-hidden bg-prestige-clay border border-white/10 shadow-lg group flex-shrink-0">
                <img
                  src={src}
                  alt={`Archive R2-${i}`}
                  className="h-full w-auto object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface HomeViewProps {
  onNavigate: (viewId: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  // Cinematic background slides fade sequence using all user-uploaded landscapes
  const slides = ALL_LANDSCAPES;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 8000); // Very slow, luxurious 8-second pacing for cinematic restraint
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full bg-soft-parchment animate-fade-in">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal">
        {/* Soft fading image queue with restricted Ken Burns effect */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlideIndex}
              initial={{ opacity: 0, scale: 1.01 }}
              animate={{ opacity: 0.45, scale: 1.04 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 2.5, ease: "easeInOut" },
                scale: { duration: 8.5, ease: "linear" },
              }}
              className="absolute inset-0 h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${slides[currentSlideIndex]}')` }}
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          {/* Elegant shadow gradient overlay for museum readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-charcoal/20 z-10" />
        </div>

        {/* Hero Copy (Minimal, zero button above the fold, pure museum entrance feeling) */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-extralight tracking-[0.25em] text-[#FCFBF7] lowercase">
              wonderful world
            </h1>
            <div className="h-[1px] w-24 bg-subtle-gold/53 mx-auto my-6" />
            <p className="font-serif text-base md:text-xl text-[#EFECDF] tracking-[0.12em] font-light italic leading-relaxed max-w-2xl mx-auto">
              Cultural works on nature, nations, memory, and conservation
            </p>
          </motion.div>
        </div>

        {/* Subtle scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-center"
        >
          <div className="w-[1px] h-10 bg-[#EFECDF]/30 mx-auto animate-pulse" />
        </motion.div>
      </section>


      {/* II. FEATURED STORY / FEATURED ESSAY */}
      <section className="bg-soft-parchment py-24 border-b border-charcoal/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-subtle-gold font-sans font-semibold block mb-2">
              Featured Essay
            </span>
            <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
              <RevealTitle
                text="Morocco and the Memory of Landscapes"
                className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-wide"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#0B2545] text-white rounded-none overflow-hidden min-h-[480px] shadow-md relative group">
            <div className="absolute inset-0 bg-[#0B2545]/90 mix-blend-multiply z-10" />

            {/* Text Section Left */}
            <div className="lg:col-span-6 p-10 md:p-16 flex flex-col justify-between items-start space-y-12 z-20">
              <div className="space-y-6">
                <p className="font-serif text-lg md:text-2xl text-[#EFECDF] font-light leading-relaxed italic max-w-lg">
                  “There are countries that impress through scale, and others that remain with you through atmosphere. Morocco belongs to the latter.”
                </p>
              </div>

              <Magnetic>
                <button
                  onClick={() => onNavigate("reflections")}
                  className="px-6 py-2.5 border border-white/20 hover:border-subtle-gold text-[10px] uppercase tracking-[0.25em] text-[#FCFBF7] font-semibold transition-all duration-300 rounded-full bg-white/5 hover:bg-white/15 cursor-pointer"
                >
                  Read Essay.
                </button>
              </Magnetic>
            </div>

            {/* Graphic Image Section Right */}
            <div className="lg:col-span-6 min-h-[300px] lg:min-h-full relative overflow-hidden bg-[#EAE6DF] z-10 flex flex-col justify-end">
              <div
                className="absolute inset-0 bg-cover bg-center filter saturate-[0.8] contrast-[1.03] transition-transform duration-[10000ms] ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('/ChatGPT Image May 30, 2026, 12_40_32 PM.png')` }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0B2545]/10 pointer-events-none" />

              <div className="relative z-20 p-6 bg-gradient-to-t from-black/80 to-transparent text-white/90 text-left">
                <p className="font-serif text-xs italic font-light mt-1 text-[#F4F1EA]">
                  With H.E. the Ambassador of the Kingdom of Morocco to India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* III. WONDERFUL WORLD SERIES */}
      <section className="bg-[#FAF9F5] py-24 border-b border-charcoal/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="space-y-4 text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-subtle-gold font-sans font-semibold block">
              Wonderful World Series
            </span>
            <div className="flex flex-col md:flex-row justify-between items-baseline gap-2">
              <RevealTitle
                text="Visual Entry into the Books"
                className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-wide"
              />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#807970] max-w-xl font-light">
              Cultural works on nature, nations, memory, and conservation.
            </p>
          </div>

          {/* Book Entry layout Grid (Australia first, future countries subtly visible) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-4">

            {/* BOOK 1: Australia (Active & Prominent) */}
            <div className="flex flex-col space-y-6 text-left group">
              <div className="aspect-[4/5] bg-[#EBE8DF] border border-charcoal/10 overflow-hidden shadow-xl relative transition-transform duration-500 hover:-translate-y-1 cursor-pointer"
                onClick={() => onNavigate("wonderful-world")}>
                <img
                  src={IMAGES.australiaOpener}
                  alt="Wonderful World: Australia First Monograph Book"
                  className="w-full h-full object-cover filter saturate-[0.9] contrast-[1.02]"
                  referrerPolicy="no-referrer"
                />
                {/* Book spine aesthetic shadow overlay */}
                <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/25 via-black/5 to-transparent shadow-inner" />
                <div className="absolute inset-0 bg-charcoal/5 hover:bg-transparent transition-colors duration-300" />

                <div className="absolute top-6 left-8 bg-subtle-gold text-charcoal text-[9px] tracking-[0.3em] uppercase py-1 px-3 font-semibold shadow-sm">
                  Volume I
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl tracking-wide text-charcoal group-hover:text-subtle-gold transition-colors">
                  Wonderful World: Australia’s Majestic Landscapes
                </h3>
                <button
                  onClick={() => onNavigate("wonderful-world")}
                  className="text-xs font-mono tracking-widest uppercase text-charcoal hover:text-subtle-gold underline pt-2 block font-semibold"
                >
                  Read More →
                </button>
              </div>
            </div>

            {/* BOOK 2: Morocco (Subtly Visible Future Release) */}
            <div className="flex flex-col space-y-6 text-left group opacity-75 grayscale hover:grayscale-0 hover:opacity-95 transition-all duration-700">
              <div className="aspect-[4/5] bg-[#E3DFD5] border border-charcoal/10 overflow-hidden shadow-md relative">
                <img
                  src={IMAGES.moroccoEssay}
                  alt="Volume II Morocco Book Cover"
                  className="w-full h-full object-cover filter contrast-[0.95]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/25 via-black/5 to-transparent shadow-inner" />
                <div className="absolute inset-0 bg-[#E3DFD5]/35 mix-blend-color" />

                <div className="absolute top-6 left-8 bg-charcoal/40 text-white text-[9px] tracking-[0.3em] uppercase py-1 px-3 font-mono">
                  Volume II
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl tracking-wide text-charcoal">
                  Wonderful World: Morocco
                </h3>
              </div>
            </div>

            {/* BOOK 3: India / Sacred Earth (Subtly Visible Future Release) */}
            <div className="flex flex-col space-y-6 text-left group opacity-50 grayscale hover:grayscale-0 hover:opacity-85 transition-all duration-700">
              <div className="aspect-[4/5] bg-[#DFDBCF] border border-charcoal/10 overflow-hidden shadow-sm relative">
                <img
                  src={IMAGES.trustCover}
                  alt="Volume III India Monograph"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/25 via-black/5 to-transparent shadow-inner" />
                <div className="absolute inset-0 bg-[#FAF9F5]/40 mix-blend-saturation" />

                <div className="absolute top-6 left-8 bg-charcoal/20 text-charcoal text-[9px] tracking-[0.3em] uppercase py-1 px-3 font-mono">
                  Volume III
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl tracking-wide text-charcoal">
                  Wonderful World: India
                </h3>
              </div>
            </div>

          </div>

          {/* Selected Reflection Essay Quotation Section */}
          <div className="pt-16 border-t border-charcoal/8 max-w-4xl mx-auto text-center space-y-8">
            <blockquote className="font-serif text-2xl md:text-4xl font-light text-charcoal leading-relaxed italic px-4">
              “Silence survives only where societies consciously protect it.”
            </blockquote>
            <div className="pt-4">
              <Magnetic>
                <button
                  onClick={() => onNavigate("reflections")}
                  className="px-8 py-3 bg-[#1A1A1A] hover:bg-[#C5A059] text-[#FAF9F5] hover:text-[#1A1A1A] text-[10px] uppercase tracking-[0.3em] font-semibold transition-all duration-300 rounded-none cursor-pointer"
                >
                  Reflections
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* IV. REFLECTIONS / FIELD NOTES */}
      <section className="bg-museum-white py-24 border-b border-charcoal/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-left space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
            <div className="lg:col-span-12 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-subtle-gold font-sans font-semibold block">
                Reflections
              </span>
              <RevealTitle
                text="Essays"
                className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-wide"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Essay Card 1 */}
            <div className="p-8 border border-charcoal/8 bg-[#FCFAF7] space-y-6 flex flex-col justify-between hover:border-subtle-gold transition-colors duration-300">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-light text-charcoal tracking-wide">
                  Morocco and the Memory of Landscapes
                </h3>
                <p className="text-xs text-[#807970] leading-relaxed font-light italic">
                  “There are countries that impress through scale, and others that remain with you through atmosphere. Morocco belongs to the latter.”
                </p>
              </div>
              <button
                onClick={() => onNavigate("reflections")}
                className="text-[10px] font-mono tracking-widest text-charcoal hover:text-subtle-gold uppercase pt-4 block text-left font-semibold"
              >
                Read Essay →
              </button>
            </div>

            {/* Essay Card 2 */}
            <div className="p-8 border border-charcoal/8 bg-[#FCFAF7] space-y-6 flex flex-col justify-between hover:border-subtle-gold transition-colors duration-300">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-light text-charcoal tracking-wide">
                  Australia’s Majestic Landscapes
                </h3>
                <p className="text-xs text-[#807970] leading-relaxed font-light italic">
                  “Australia changes one’s understanding of scale. Not only physical scale, but civilisational scale — the scale at which a nation chooses whether wilderness will survive modernity intact.”
                </p>
              </div>
              <button
                onClick={() => onNavigate("wonderful-world")}
                className="text-[10px] font-mono tracking-widest text-charcoal hover:text-subtle-gold uppercase pt-4 block text-left font-semibold"
              >
                Read Essay →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* V. ABOUT */}
      <section className="py-24 bg-soft-parchment text-left border-b border-charcoal/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.4em] text-subtle-gold font-sans font-semibold block">
                About
              </span>
              <RevealTitle
                text="About"
                className="font-serif text-3xl md:text-5xl font-light tracking-wide text-charcoal leading-tight"
              />
            </div>

            <p className="text-sm md:text-base text-muted-grey font-light leading-relaxed max-w-2xl font-serif">
              Formed to uphold dedicated cultural stewardship, Alok’s journey spans decorated military service (awarded the Vishisht Seva Medal - VSM), international leadership across technological boards, and photographic travels through sixty nations. Each chapter preserves tactile memory dedicated to his sister, Aloka.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Magnetic>
                <button
                  onClick={() => onNavigate("about")}
                  className="px-6 py-2.5 bg-charcoal text-[#FCFAF7] border border-charcoal text-[10px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 hover:bg-subtle-gold hover:text-charcoal cursor-pointer"
                >
                  Read Biography
                </button>
              </Magnetic>
              <Magnetic>
                <button
                  onClick={() => onNavigate("aloka-memorial-trust")}
                  className="px-6 py-2.5 border border-charcoal/20 hover:border-charcoal text-[10px] uppercase tracking-[0.25em] text-charcoal font-semibold transition-all duration-300 rounded-none bg-transparent hover:bg-white/50 cursor-pointer"
                >
                  Aloka Memorial Trust
                </button>
              </Magnetic>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] bg-prestige-clay overflow-hidden border border-charcoal/8 shadow-md">
              <img
                src={IMAGES.founderPortrait}
                alt="Alok Portrait VSM"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-101"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-right text-[10px] font-mono tracking-widest text-[#807970] uppercase mt-3">
              Alok (VSM)
            </p>
          </div>
        </div>
      </section>

      {/* Parallax scroll gallery of archives */}
      <ParallaxGallery />

      {/* VI. MAGNUM EDITIONS, VII. ALOKA, VIII. ALOKA MEMORIAL TRUST (SECONDARY DISCOVERABLES) */}
      <section className="bg-museum-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-left space-y-12">
          <div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Magnum */}
            <div className="p-6 border border-charcoal/5 bg-soft-parchment/30 space-y-4 hover:bg-soft-parchment transition-all cursor-pointer"
              onClick={() => onNavigate("magnum-editions")}>
              <span className="font-mono text-[9px] text-subtle-gold tracking-widest uppercase block">
                Magnum Editions
              </span>
              <h3 className="font-serif text-lg text-charcoal font-medium">Magnum Editions</h3>
              <p className="text-xs text-muted-grey font-light leading-relaxed">
                An independent cultural publishing platform dedicated to long-form visual works and enduring editions.
              </p>
            </div>

            {/* Aloka */}
            <div className="p-6 border border-charcoal/5 bg-soft-parchment/30 space-y-4 hover:bg-soft-parchment transition-all cursor-pointer"
              onClick={() => onNavigate("aloka")}>
              <span className="font-mono text-[9px] text-subtle-gold tracking-widest uppercase block">
                Aloka
              </span>
              <h3 className="font-serif text-lg text-charcoal font-medium">Aloka</h3>
              <p className="text-xs text-muted-grey font-light leading-relaxed">
                All these works are dedicated to my sister, Aloka, whose memory continues to quietly shape the emotional centre of this journey.
              </p>
            </div>

            {/* Trust */}
            <div className="p-6 border border-charcoal/5 bg-soft-parchment/30 space-y-4 hover:bg-soft-parchment transition-all cursor-pointer"
              onClick={() => onNavigate("aloka-memorial-trust")}>
              <span className="font-mono text-[9px] text-subtle-gold tracking-widest uppercase block">
                Aloka Memorial Trust
              </span>
              <h3 className="font-serif text-lg text-charcoal font-medium">Aloka Memorial Trust</h3>
              <p className="text-xs text-muted-grey font-light leading-relaxed">
                Supporting initiatives connected with nature, conservation, and meaningful social contribution.
              </p>
            </div>

            {/* Press */}
            <div className="p-6 border border-charcoal/5 bg-soft-parchment/30 space-y-4 hover:bg-soft-parchment transition-all cursor-pointer"
              onClick={() => onNavigate("press")}>
              <span className="font-mono text-[9px] text-subtle-gold tracking-widest uppercase block">
                Press & Recognition
              </span>
              <h3 className="font-serif text-lg text-charcoal font-medium">Press & Recognition</h3>
              <p className="text-xs text-muted-grey font-light leading-relaxed">
                Featured across selected publications and institutions in India and internationally.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
