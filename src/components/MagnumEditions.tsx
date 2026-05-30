/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { IMAGES } from "../data";

export default function MagnumEditions() {
  return (
    <div className="w-full bg-soft-parchment animate-fade-in py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-charcoal">
            Magnum Editions
          </h1>
          <div className="h-[1.5px] w-12 bg-subtle-gold mx-auto my-6" />
        </div>

        {/* Cinematic Monograph Cover Frame */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center pt-8">
          <div className="md:col-span-6 overflow-hidden shadow-xl aspect-[3/4] bg-[#EAE6DF]">
            <img
              src={IMAGES.hero}
              alt="Magnum Editions Book Spine"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="md:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-muted-grey font-mono block">
                Publisher's Statement
              </span>
              <p className="font-serif text-lg md:text-xl text-charcoal font-light leading-relaxed">
                Magnum Editions is an independent cultural publishing platform dedicated to long-form visual works and enduring editions.
              </p>
            </div>

            <p className="text-sm text-muted-grey leading-relaxed">
              We focus on slow, deliberate monograph production. Every volume is conceived and crafted over seasons, serving not simply as a photography collection, but as a deep cultural archive intended to preserve atmosphere, reverence, and a sense of place.
            </p>

            <div className="border-t border-charcoal/8 pt-6 space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-[#807970] font-sans">
                Active & Upcoming Monographs
              </p>
              <ul className="text-xs uppercase tracking-widest text-charcoal font-light space-y-2">
                <li>• Wonderful World: Australia (Active)</li>
                <li className="text-muted-grey opacity-43 select-none">• Wonderful World: Morocco (In Planning)</li>
                <li className="text-muted-grey opacity-43 select-none">• Wonderful World: India (In Planning)</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
