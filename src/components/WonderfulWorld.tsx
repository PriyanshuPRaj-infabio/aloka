/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { WONDERFUL_WORLD_AUSTRALIA, IMAGES, ALL_LANDSCAPES } from "../data";
import RevealTitle from "./RevealTitle.tsx";
import ParallaxImage from "./ParallaxImage.tsx";

export default function WonderfulWorld() {
  const content = WONDERFUL_WORLD_AUSTRALIA;

  return (
    <div className="w-full bg-soft-parchment animate-fade-in">
      {/* A. CINEMATIC OPENER */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-charcoal">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('${IMAGES.australiaOpener}')` }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-4 max-w-3xl"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-subtle-gold font-medium">
              Wonderful World Series • Volume I
            </span>
            <RevealTitle
              text="Australia"
              className="font-serif text-4xl md:text-6xl font-light tracking-wide text-white leading-tight"
            />
            <p className="font-serif text-lg md:text-2xl text-[#E5DED4] font-light italic leading-relaxed max-w-2xl font-serif">
              “Australia changes one’s understanding of scale.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* B. SELECTED SPREADS */}
      <section className="py-24 bg-museum-white border-b border-charcoal/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="space-y-2 border-b border-charcoal/8 pb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-grey font-semibold">
              Monograph Previews
            </span>
            <RevealTitle
              text="Selected Spreads"
              className="font-serif text-3xl font-light tracking-wide text-charcoal"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4 group">
              <ParallaxImage
                src={IMAGES.australiaSpread1}
                alt="Monograph Spread Preview Left"
                className="aspect-[4/3] bg-prestige-clay border border-charcoal/8 shadow-md"
              />
              <p className="text-[11px] font-mono tracking-widest text-muted-grey uppercase text-center mt-3">
                Spread 01
              </p>
            </div>

            <div className="space-y-4 group">
              <ParallaxImage
                src={IMAGES.australiaSpread2}
                alt="Monograph Spread Preview Right"
                className="aspect-[4/3] bg-prestige-clay border border-charcoal/8 shadow-md"
              />
              <p className="text-[11px] font-mono tracking-widest text-muted-grey uppercase text-center mt-3">
                Spread 02
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* C. POETRY + IMAGE PAIRING (The signature emotional language) */}
      <section className="py-32 bg-[#FCFAF7] border-b border-charcoal/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Poetry Grid Column */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
            <div className="space-y-2">
              <h2 className="font-serif text-xs uppercase tracking-[0.2em] text-subtle-gold">
                Dedicated to Aloka
              </h2>
            </div>

            <div className="font-serif font-light text-lg md:text-xl text-charcoal leading-loose italic space-y-4 max-w-sm pl-4 border-l border-subtle-gold/40">
              {content.poetry.poem.map((line, idx) => (
                <p key={idx} className={line === "" ? "py-2" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Image Pair Column with generous negative space */}
          <div className="lg:col-span-7">
            <ParallaxImage
              src={IMAGES.poetryPairing}
              alt="Poetry Landscape Pairing"
              className="aspect-[4/3] w-full bg-[#EAE6DF]"
            />
          </div>
        </div>
      </section>

      {/* D. REFLECTION */}
      <section className="py-24 bg-soft-parchment border-b border-charcoal/8">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-muted-grey">
              Reflection
            </h3>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal">
              Wonderful World: Australia’s Majestic Landscapes
            </h2>
            <div className="h-[1px] w-12 bg-subtle-gold/50 mx-auto mt-6" />
          </div>

          {/* Body content with comfortable reading spacing and gorgeous typography */}
          <div className="font-serif text-base md:text-lg leading-relaxed text-charcoal space-y-8 font-light tracking-wide max-w-2xl mx-auto">
            {/* Split first 7 paragraphs for the essay */}
            {content.paragraphs.map((p, idx) => (
              <p key={idx} className="indent-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-museum-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
          <div className="space-y-4 text-center">
            <h3 className="font-serif text-3xl font-light tracking-wide text-charcoal">
              {content.dialogue.title}
            </h3>
          </div>

          <div className="bg-soft-parchment p-8 md:p-12 border border-charcoal/8 space-y-8 shadow-sm">
            <div className="font-serif font-light text-base md:text-lg text-charcoal leading-relaxed space-y-6">
              {content.dialogue.paragraphs.map((p, idx) => (
                <p key={idx} className="leading-leading">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
