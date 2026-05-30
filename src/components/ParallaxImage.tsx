/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string; // Applied to outer crop container
  imgClassName?: string; // Applied to inner img tag
}

export default function ParallaxImage({ src, alt, className = "", imgClassName = "" }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position of container relative to viewport bounds
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress from entering screen bottom to leaving screen top to translate Y
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.15 }} // Scaled up slightly to prevent empty margins during panning
        className={`w-full h-full object-cover origin-center ${imgClassName}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
