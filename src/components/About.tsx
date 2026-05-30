/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ABOUT_CONTENT, IMAGES, PORTRAITS_GALLERY } from "../data";

export default function About() {
  const content = ABOUT_CONTENT;

  return (
    <div className="w-full bg-[#FCFAF7] animate-fade-in py-16 md:py-24">
      <article className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Editorial Image & Quick Meta Details */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32 h-fit">
          <div className="space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-charcoal">
              About
            </h1>
            <div className="h-[1px] w-12 bg-subtle-gold mt-4" />
          </div>

          <div className="space-y-6">
            <div className="aspect-[3/4] bg-[#EAE6DF] overflow-hidden shadow-sm">
              <img
                src={IMAGES.founderPortrait}
                alt="Founder Profile Portrait Frame"
                className="w-full h-full object-cover contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Long-form Editorial Narrative */}
        <div className="lg:col-span-7 space-y-10 lg:pl-6">
          <div className="font-serif text-lg md:text-xl text-charcoal leading-loose space-y-8 font-light tracking-wide">
            {/* Displaying every single parsed paragraph from supplied About logs */}
            {content.paragraphs.map((p, idx) => {
              // Highlight the core question "What deserves to endure?"
              if (p === "What deserves to endure?") {
                return (
                  <div key={idx} className="my-12 py-6 border-y border-charcoal/8 text-center">
                    <p className="text-3xl md:text-4xl italic text-subtle-gold font-light tracking-wider">
                      What deserves to endure?
                    </p>
                  </div>
                );
              }
              
              // Handle other key highlighted statements beautifully
              if (p.startsWith("I do not see this work as departure")) {
                return (
                  <p key={idx} className="text-xl md:text-2xl text-charcoal font-serif tracking-normal font-light italic mt-12 py-4 border-l-2 border-subtle-gold pl-6">
                    {p}
                  </p>
                );
              }

              return (
                <p key={idx} className="indent-0">
                  {p}
                </p>
              );
            })}
          </div>
        </div>

      </article>
    </div>
  );
}
