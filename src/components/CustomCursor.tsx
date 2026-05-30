/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 45, stiffness: 450, mass: 0.35 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports a fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsMobile(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    // Add class to html body to hide normal cursor
    document.documentElement.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if hovering interactive components
      const interactiveEl = target.closest("a, button, [role='button'], input, select, textarea");
      const viewEl = target.closest("[data-cursor-view='true']");

      if (viewEl) {
        setIsHovered(true);
        setCursorText("VIEW");
      } else if (interactiveEl) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-subtle-gold rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: mouseX, y: mouseY }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 border border-subtle-gold/60 rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-sans"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovered ? (cursorText ? 64 : 32) : 20,
          height: isHovered ? (cursorText ? 64 : 32) : 20,
          backgroundColor: cursorText ? "rgba(176, 139, 71, 0.08)" : "rgba(176, 139, 71, 0)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 35 }}
      >
        {cursorText && (
          <span className="text-[9px] font-semibold tracking-wider text-subtle-gold">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
