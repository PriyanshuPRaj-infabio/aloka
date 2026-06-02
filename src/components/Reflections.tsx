/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { REFLECTION_MOROCCO } from "../data";
import ParallaxImage from "./ParallaxImage";
import RevealTitle from "./RevealTitle";
import Magnetic from "./Magnetic";

function RevealOnScroll({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Reflections() {
  const content = REFLECTION_MOROCCO;

  // Reading progress scroll state tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const sections = [
    { id: "intro", label: "01 Introduction" },
    { id: "reflection", label: "02 Reflection" },
    { id: "preservation", label: "03 Preservation" },
    { id: "conversation", label: "04 Conversation" },
    { id: "memory", label: "05 Memory" },
  ];

  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.15,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full min-h-screen pt-16 bg-gradient-to-b from-[#FAF8F5] via-[#FAF9F6] to-[#FAF8F5] text-charcoal font-serif selection:bg-[#EAE6DF] selection:text-charcoal relative pb-32">
      {/* 1. Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-subtle-gold z-[9999] origin-left"
        style={{ scaleX }}
      />

      {/* 2. Hero Section (Dynamic Hero Enhancement) */}
      <section className="relative h-[90vh] w-full bg-charcoal overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/ChatGPT Image May 30, 2026, 12_40_32 PM.png"
            alt="Cinematic Morocco Opener"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/35 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pb-16">
          <div className="max-w-4xl space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-subtle-gold font-sans font-semibold block">
              Essay • Correspondence
            </span>
            <RevealTitle
              text={content.title}
              className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white tracking-wide leading-tight drop-shadow-sm"
            />
            <div className="h-[1px] w-24 bg-subtle-gold my-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="text-lg md:text-xl font-light italic text-[#EAE6DF] max-w-2xl leading-relaxed font-serif"
            >
              “{content.excerpt}”
            </motion.p>
          </div>
        </div>
      </section>

      {/* 3. Main Layout Container (Desktop Split Navigation) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-16 items-start">
        {/* Sticky Reading Navigation Sidebar */}
        <div className="hidden lg:block w-56 shrink-0 sticky top-32 z-20">
          <div className="space-y-8 pl-2 border-l border-charcoal/5">
            <span className="text-[9px] uppercase tracking-[0.3em] text-subtle-gold font-sans font-semibold block">
              Reader Navigation
            </span>
            <nav className="flex flex-col gap-5">
              {sections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`text-left text-[11px] uppercase tracking-[0.25em] font-sans transition-all duration-500 flex items-center gap-3 cursor-pointer ${
                      isActive ? "text-charcoal font-semibold" : "text-[#807970] hover:text-charcoal"
                    }`}
                  >
                    <span
                      className={`h-[1px] bg-subtle-gold transition-all duration-500 ${
                        isActive ? "w-6" : "w-0"
                      }`}
                    />
                    {sec.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Narrative Flow Segment */}
        <div className="flex-1 w-full space-y-36">
          {/* SECTION 01: INTRODUCTION */}
          <section id="intro" className="space-y-20 pt-8 scroll-mt-24">
            <div className="max-w-4xl space-y-8 font-[300] text-lg md:text-xl text-charcoal leading-loose tracking-wide">
              <RevealOnScroll>
                <p className="first-letter:text-5xl first-letter:font-extralight first-letter:text-subtle-gold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                  {content.paragraphs[0]}
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p>{content.paragraphs[1]}</p>
              </RevealOnScroll>
            </div>

            {/* Pattern C: Full-width Visual Break */}
            <RevealOnScroll>
              <div className="w-full aspect-[16/9] bg-[#EAE6DF] overflow-hidden shadow-sm relative group my-12">
                <ParallaxImage
                  src="/landscapes/turkey.jpg"
                  alt="Atmospheric Moroccan Earth"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-[#0B2545]/5 pointer-events-none" />
              </div>
            </RevealOnScroll>

            {/* Pattern B: Split Columns (Text Left / Image Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-8 font-[300] text-lg text-charcoal leading-loose">
                <RevealOnScroll>
                  <p>{content.paragraphs[2]}</p>
                </RevealOnScroll>
                <RevealOnScroll>
                  <p>{content.paragraphs[3]}</p>
                </RevealOnScroll>
              </div>
              <div className="md:col-span-5">
                <RevealOnScroll>
                  <div className="aspect-[3/4] bg-[#EAE6DF] overflow-hidden shadow-sm relative">
                    <ParallaxImage
                      src="/landscapes/azerbaijan.jpg"
                      alt="Morocco Architecture Detail"
                      className="w-full h-full"
                    />
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </section>

          {/* SECTION 02: REFLECTION */}
          <section id="reflection" className="space-y-16 scroll-mt-24">
            <div className="h-[1px] w-full bg-charcoal/5" />

            {/* Pattern D: Elegant Pull-Quote Treatment */}
            <RevealOnScroll>
              <div className="py-12 border-y border-subtle-gold/30 text-center space-y-6 my-16">
                <span className="text-[10px] uppercase tracking-[0.4em] text-subtle-gold font-sans font-semibold">
                  Aphorism
                </span>
                <p className="font-serif text-3xl md:text-4xl text-charcoal font-light italic leading-normal max-w-4xl mx-auto px-4">
                  “{content.paragraphs[4]}”
                </p>
                <div className="h-1.5 w-1.5 bg-subtle-gold mx-auto rounded-full mt-4" />
              </div>
            </RevealOnScroll>

            {/* Pattern E: Spaced Typographic Grid for Core Values */}
            <div className="max-w-4xl mx-auto space-y-12">
              <RevealOnScroll>
                <p className="text-center font-serif text-xl md:text-2xl text-charcoal font-light italic max-w-xl mx-auto mb-10">
                  {content.paragraphs[5]}
                </p>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className="grid grid-cols-3 gap-6 md:gap-12 text-center py-10 border-t border-charcoal/5">
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-[0.4em] font-sans text-subtle-gold font-semibold block">I</span>
                    <h3 className="font-serif text-2xl md:text-3xl text-charcoal font-light tracking-wide">{content.paragraphs[6]}</h3>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-[0.4em] font-sans text-subtle-gold font-semibold block">II</span>
                    <h3 className="font-serif text-2xl md:text-3xl text-charcoal font-light tracking-wide">{content.paragraphs[7]}</h3>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-[0.4em] font-sans text-subtle-gold font-semibold block">III</span>
                    <h3 className="font-serif text-2xl md:text-3xl text-charcoal font-light tracking-wide">{content.paragraphs[8]}</h3>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </section>

          {/* SECTION 03: PRESERVATION */}
          <section id="preservation" className="space-y-16 scroll-mt-24">
            <div className="h-[1px] w-full bg-charcoal/5" />

            {/* Pattern B: Paragraph flanked by offset images */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <RevealOnScroll>
                  <div className="relative">
                    <div className="aspect-[4/5] bg-prestige-clay overflow-hidden shadow-md">
                      <ParallaxImage
                        src="/landscapes/bhutan.jpg"
                        alt="Heritage Landscape"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="absolute -bottom-8 -right-8 w-1/2 aspect-[4/5] bg-warm-ivory border border-charcoal/5 overflow-hidden shadow-lg hidden md:block">
                      <ParallaxImage
                        src="/landscapes/finland.jpg"
                        alt="Continuity Contrast"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              <div className="md:col-span-7 order-1 md:order-2 space-y-6 font-[300] text-lg text-charcoal leading-loose md:pl-6">
                <RevealOnScroll>
                  <p className="text-xl md:text-2xl font-light leading-relaxed border-l-2 border-subtle-gold/40 pl-6 py-2">
                    {content.paragraphs[9]}
                  </p>
                </RevealOnScroll>
              </div>
            </div>
          </section>

          {/* SECTION 04: CONVERSATION */}
          <section id="conversation" className="space-y-16 scroll-mt-24">
            <div className="h-[1px] w-full bg-charcoal/5" />

            {/* Ambassador Image Enhancement: Documentary style layout */}
            <div className="space-y-8">
              <RevealOnScroll>
                <div className="aspect-[16/10] w-full bg-prestige-clay overflow-hidden shadow-lg relative group">
                  <ParallaxImage
                    src="/with-ambassadors.jpeg"
                    alt="H.E. the Ambassador of Morocco and Alok"
                    className="w-full h-full transition-transform duration-[12000ms] ease-out group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-[#0B2545]/5 pointer-events-none" />
                </div>
              </RevealOnScroll>

              <div className="flex justify-between items-baseline border-b border-charcoal/5 pb-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#807970] font-sans font-medium">
                  Documentary Archive
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#807970] font-sans font-medium">
                  Embassy of Morocco, New Delhi
                </span>
              </div>
            </div>

            {/* Layout B: Split Text beside Image elements */}
            <div className="max-w-4xl mx-auto space-y-8 font-[300] text-lg text-charcoal leading-loose">
              <RevealOnScroll>
                <p>{content.paragraphs[10]}</p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className="text-muted-grey italic">{content.paragraphs[11]}</p>
              </RevealOnScroll>
            </div>
          </section>

          {/* SECTION 05: MEMORY */}
          <section id="memory" className="space-y-16 scroll-mt-24">
            <div className="h-[1px] w-full bg-charcoal/5" />

            <div className="max-w-4xl mx-auto space-y-8 font-[300] text-lg text-charcoal leading-loose">
              <RevealOnScroll>
                <p>{content.paragraphs[12]}</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 py-8 border-y border-charcoal/5">
                  <div className="space-y-3 pr-4">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-subtle-gold font-sans font-medium block">Path A</span>
                    <p className="font-serif text-base text-charcoal italic">{content.paragraphs[13]}</p>
                  </div>
                  <div className="space-y-3 pl-0 md:pl-4 border-t md:border-t-0 md:border-l border-charcoal/5 pt-4 md:pt-0">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-subtle-gold font-sans font-medium block">Path B</span>
                    <p className="font-serif text-base text-charcoal font-light leading-relaxed">{content.paragraphs[14]}</p>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <p>{content.paragraphs[15]}</p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p>{content.paragraphs[16]}</p>
              </RevealOnScroll>
            </div>
          </section>

          {/* 4. Cinematic Ending Block */}
          <RevealOnScroll>
            <section className="relative w-full h-[65vh] bg-charcoal overflow-hidden flex flex-col justify-center items-center text-center px-6">
              <div className="absolute inset-0 z-0">
                <ParallaxImage
                  src="/landscapes/turkey-1.jpg"
                  alt="Closing Memory Landscape"
                  className="w-full h-full opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/40 to-charcoal/95 z-10" />
              </div>

              <div className="relative z-20 max-w-4xl space-y-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-subtle-gold font-sans font-semibold block">
                  Stewardship & Legacy
                </span>
                <div className="space-y-6">
                  <p className="font-serif text-2xl md:text-4xl text-white font-extralight tracking-wide leading-relaxed">
                    “{content.paragraphs[17]}”
                  </p>
                  <p className="font-serif text-2xl md:text-4xl text-white/80 font-extralight tracking-wide leading-relaxed">
                    {content.paragraphs[18]}
                  </p>
                </div>
                <div className="h-[1px] w-12 bg-subtle-gold mx-auto mt-8" />
              </div>
            </section>
          </RevealOnScroll>

          {/* Spacing alignment for smooth footer transition */}
          <div className="pt-24 text-center">
            <div className="h-1 w-1 bg-subtle-gold/50 mx-auto rounded-full" />
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#807970] mt-4">
              Wonderful World • Morocco Essay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
