/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { PRESS_RECOGNITION_CONTENT } from "../data";
import RevealTitle from "./RevealTitle.tsx";

export default function PressPage() {
  const content = PRESS_RECOGNITION_CONTENT;

  // Define the forthcoming Forbes India feature preview using authentic platform copy
  const forbesPreview = {
    title: "Wonderful World Series",
    subtitle: "Forthcoming feature on landscapes, nations, conservation, and memory.",
    excerpt: "“One senses that the protection of natural beauty is understood not as nostalgia, but as responsibility toward future generations. The Australian landscape continues to evoke something increasingly precious in the modern world: wonder without noise.”",
    meta: "Forbes India • Featured Article (Forthcoming)",
    image: "/Press/7bb15cfd-a8af-426f-8fcb-15a27b9b654f_carw_202x158x640.png"
  };

  return (
    <div className="w-full bg-[#FCFAF7] animate-fade-in py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-28">
        
        {/* 1. OPENING AREA */}
        <section className="space-y-12 text-left">
          <div className="space-y-3">
            <RevealTitle
              text="Press & Recognition"
              className="font-serif text-4xl md:text-6xl font-light tracking-wide text-charcoal"
            />
            <div className="h-[1px] w-12 bg-subtle-gold mt-6" />
          </div>

          {/* Introductory block sitting alone with ample breathing room */}
          <div className="space-y-8 max-w-2xl text-charcoal font-serif text-lg md:text-xl font-light leading-relaxed pt-4">
            <p className="text-charcoal leading-relaxed">
              {content.intro}
            </p>
            <p className="text-muted-grey text-base md:text-lg">
              {content.description}
            </p>
            <div className="h-[1px] w-8 bg-charcoal/10 my-8" />
            <p className="font-serif text-base text-muted-grey font-light leading-relaxed italic border-l border-subtle-gold pl-6 py-1">
              {content.meaning}
            </p>
          </div>
        </section>

        {/* 2. PUBLICATION THUMBNAILS & LOGOS GRID */}
        <section className="space-y-10 border-t border-charcoal/8 pt-16">
          <div className="space-y-2">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-[#807970] font-sans font-semibold">
              Selected Publications & Features
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.publications.map((p, index) => (
              <div 
                key={index}
                className="group flex flex-col space-y-4"
              >
                {/* Visual specimen frame */}
                <div className="aspect-[4/3] bg-prestige-clay border border-charcoal/8 overflow-hidden shadow-sm relative transition-all duration-500 group-hover:border-charcoal/20">
                  <img
                    src={p.image}
                    alt={`${p.name} Publication`}
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.03] filter brightness-95 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-charcoal/5 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />
                </div>
                {/* Metadata label */}
                <div className="flex flex-col space-y-1">
                  <span className="font-serif text-base tracking-wide text-charcoal font-light group-hover:text-subtle-gold transition-colors duration-300">
                    {p.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. FEATURED ARTICLE PREVIEW (Forbes India Exclusive Preview) */}
        <section className="border-t border-charcoal/8 pt-16 space-y-10">
          <div className="space-y-2">
            <span className="text-[9px] font-mono tracking-widest text-[#C5A059] uppercase block">
              Forthcoming Release
            </span>
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-[#807970] font-sans font-semibold">
              Featured Article Preview
            </h2>
          </div>

          <div className="p-8 md:p-12 border border-charcoal/8 bg-soft-parchment/40 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center justify-between">
            <div className="lg:col-span-4 aspect-square max-w-xs mx-auto lg:mx-0 w-full bg-prestige-clay border border-charcoal/8 overflow-hidden shadow-sm">
              <img
                src={forbesPreview.image}
                alt="Forbes India Issue Clipping"
                className="w-full h-full object-cover grayscale brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-8 space-y-5 text-left">
              <span className="text-[9px] font-mono tracking-widest text-muted-grey uppercase">
                {forbesPreview.meta}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-light text-charcoal">
                {forbesPreview.title}
              </h3>
              <p className="font-serif text-base text-muted-grey italic leading-relaxed font-light pl-4 border-l border-charcoal/10">
                {forbesPreview.excerpt}
              </p>
              <p className="text-xs uppercase tracking-wider text-[#807970] font-sans font-light">
                {forbesPreview.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* 3.1 PUBLISHING CONTEXT BLOCK */}
        <section className="border-t border-charcoal/8 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#807970] font-sans font-semibold">
              Publishing
            </h3>
            <span className="text-[9px] font-mono tracking-widest text-muted-grey uppercase block mt-1">
              Bloomsbury & Magnum Editions
            </span>
          </div>
          <div className="md:col-span-8 font-serif font-light text-base text-muted-grey leading-relaxed space-y-4">
            <p>
              Earlier photographic work was published internationally by <strong className="text-charcoal font-normal">Bloomsbury Publishing</strong> and continues to remain available internationally years after publication.
            </p>
            <p>
              Current and future works within the Wonderful World series are being developed under <strong className="text-charcoal font-normal">Magnum Editions</strong>.
            </p>
          </div>
        </section>

        {/* 4. RECOGNITION AREA (Quiet, Factual, Unembellished) */}
        <section className="border-t border-charcoal/8 pt-16 space-y-10 text-left">
          <div className="space-y-2">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-[#807970] font-sans font-semibold">
              Selected Recognition
            </h2>
          </div>

          <div className="divide-y divide-charcoal/8 font-serif">
            {content.recognition.map((item, index) => (
              <div 
                key={index} 
                className="py-6 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12"
              >
                
                <div className="flex-1 font-serif text-lg text-charcoal font-light leading-relaxed">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

