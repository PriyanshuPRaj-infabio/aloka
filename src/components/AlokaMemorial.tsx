/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ALOKA_TRUST_CONTENT, IMAGES } from "../data";

export default function AlokaMemorial() {
  const content = ALOKA_TRUST_CONTENT;

  return (
    <div className="w-full bg-soft-parchment animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Header Area */}
        <div className="text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-charcoal">
            {content.title}
          </h1>
          <div className="h-[1.5px] w-12 bg-subtle-gold mx-auto my-6" />
          <p className="text-xs uppercase tracking-widest text-[#807970] max-w-sm mx-auto">
            Nature, conservation, and meaningful social contribution
          </p>
        </div>

        {/* Muted image frame */}
        <div className="aspect-[16/7] w-full bg-[#EAE6DF] overflow-hidden shadow-sm">
          <img
            src={IMAGES.trustCover}
            alt="Aloka Memorial Trust landscape"
            className="w-full h-full object-cover grayscale contrast-95 opacity-80"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Mission Statement blocks */}
        <div className="max-w-2xl mx-auto font-serif text-lg md:text-xl text-charcoal font-light leading-relaxed space-y-8 tracking-wide">
          {content.paragraphs.map((p, idx) => {
            // Give specific spacing design for particular sentences to highlight moral weight
            if (p.startsWith("Some journeys begin long before")) {
              return (
                <p key={idx} className="text-xl md:text-2xl text-charcoal italic border-l border-subtle-gold pl-6 py-1 leading-relaxed my-10">
                  {p}
                </p>
              );
            }
            if (p.startsWith("Because some forms of contribution")) {
              return (
                <p key={idx} className="text-[#C5A059] font-medium italic pt-4">
                  {p}
                </p>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {p}
              </p>
            );
          })}
        </div>

        {/* Quiet institutional sign off */}
        <div className="border-t border-charcoal/8 pt-12 text-center text-[10px] uppercase tracking-[0.25em] text-[#807970] font-sans">
          <span>Stewardship • Sincerity • Continuity</span>
        </div>

      </div>
    </div>
  );
}
