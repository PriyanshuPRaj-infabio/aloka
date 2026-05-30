/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { WONDERFUL_WORLD_AUSTRALIA } from "../data";

export default function AlokaPage() {
  const poem = WONDERFUL_WORLD_AUSTRALIA.poetry.poem;

  return (
    <div className="w-full bg-[#FAF9F6] min-h-[70vh] flex flex-col justify-center items-center py-32 md:py-48 px-6 animate-fade-in">
      <div className="max-w-2xl text-center space-y-16">
        {/* Subtle separator */}
        <div className="h-[1px] w-8 bg-[#C5A059]/40 mx-auto" />

        {/* Minimal Poem Presentation */}
        <section className="space-y-12">
          <h1 className="font-serif text-3xl md:text-4xl tracking-[0.3em] uppercase font-light text-charcoal">
            ALOKA
          </h1>
          <div className="font-serif italic font-light text-xl md:text-2xl text-charcoal leading-loose space-y-4 tracking-wide max-w-xl mx-auto">
            {poem.map((line, idx) => (
              <p key={idx} className={line === "" ? "py-2 font-normal" : ""}>
                {line}
              </p>
            ))}
          </div>
        </section>

        {/* Quiet emotional mark */}
        <div className="h-[1px] w-8 bg-[#C5A059]/40 mx-auto" />
      </div>
    </div>
  );
}
