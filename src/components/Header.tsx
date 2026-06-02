/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Magnetic from "./Magnetic.tsx";

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // When scroll is near/at top, keep header fully transparent and visible
      if (currentScrollY <= 20) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);

        // Hide when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const primaryNavItems = [
    { id: "wonderful-world", label: "Wonderful World" },
    { id: "reflections", label: "Reflections" },
    { id: "about", label: "About" },
  ];

  const secondaryNavItems = [
    { id: "magnum-editions", label: "Magnum Editions" },
    { id: "aloka", label: "Aloka" },
    { id: "aloka-memorial-trust", label: "Aloka Memorial Trust" },
    { id: "press", label: "Press & Recognition" },
    { id: "correspondence", label: "Correspondence" },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setIsOpen(false);
  };

  const isLightTopPage = [
    "reflections",
    "about",
    "magnum-editions",
    "aloka",
    "aloka-memorial-trust",
    "press",
    "correspondence"
  ].includes(currentView);

  const shouldHaveDarkText = isLightTopPage && isAtTop;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        } ${
          isAtTop
            ? "bg-transparent border-b border-transparent shadow-none"
            : "bg-[#1A1A1A]/80 backdrop-blur-md border-b border-white/10 shadow-lg"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="group flex items-center justify-center cursor-pointer text-left py-1"
            id="logo-button"
          >
            <span className={`font-serif text-lg md:text-xl tracking-[0.35em] font-light uppercase transition-colors duration-300 ${shouldHaveDarkText ? "text-charcoal" : "text-white"}`}>
              ALOKA
            </span>
          </button>

          {/* Primary Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {primaryNavItems.map((item) => (
              <Magnetic key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs uppercase tracking-[0.25em] transition-all duration-300 hover:text-subtle-gold cursor-pointer relative py-2 font-bold ${
                    currentView === item.id || (item.id === "wonderful-world" && currentView === "australia")
                      ? "text-subtle-gold"
                      : shouldHaveDarkText ? "text-charcoal" : "text-white"
                  }`}
                >
                  {item.label}
                  {(currentView === item.id || (item.id === "wonderful-world" && currentView === "wonderful-world")) && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 h-[1.5px] w-full bg-subtle-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </Magnetic>
            ))}
          </nav>

          {/* Side Menu Drawer Trigger */}
          <div className="flex items-center space-x-4">
            <Magnetic>
              <button
                onClick={() => setIsOpen(true)}
                className={`flex items-center space-x-2 text-xs uppercase tracking-[0.2em] hover:text-subtle-gold cursor-pointer group font-bold ${shouldHaveDarkText ? "text-charcoal" : "text-white"}`}
                aria-label="Toggle Side Navigation"
                id="menu-trigger-button"
              >
                <span className="hidden sm:inline-block transition-transform duration-300 group-hover:translate-x-[-2px]">
                  Menu
                </span>
                <Menu size={16} className={`group-hover:text-subtle-gold transition-colors duration-300 ${shouldHaveDarkText ? "text-charcoal" : "text-white"}`} />
              </button>
            </Magnetic>
          </div>
        </div>
      </header>

      {/* Slide drawer for Secondary (Discoverable) Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-[#1A1A1A]"
            />

            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[#FAF9F5] p-8 md:p-12 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Close Button */}
                <div className="flex justify-end mb-16">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-muted-grey hover:text-charcoal cursor-pointer"
                    id="menu-close-button"
                  >
                    <span>Close</span>
                    <X size={16} />
                  </button>
                </div>

                {/* Primary navigation mirror in drawer */}
                <div className="mb-12">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-muted-grey mb-6 border-b border-charcoal/8 pb-2">
                    Primary Exploration
                  </h3>
                  <div className="space-y-4">
                    {primaryNavItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`block text-left font-serif text-2xl tracking-wide transition-all hover:text-charcoal py-1 ${
                          currentView === item.id
                            ? "text-subtle-gold italic font-light"
                            : "text-charcoal font-light"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Secondary Discovery Items */}
                <div className="mb-12">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-muted-grey mb-6 border-b border-charcoal/8 pb-2">
                    Secondary Chapters
                  </h3>
                  <div className="space-y-4">
                    {secondaryNavItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`block text-left text-sm uppercase tracking-[0.2em] hover:text-charcoal py-1.5 transition-all w-full flex items-center justify-between group ${
                          currentView === item.id
                            ? "text-subtle-gold font-medium"
                            : "text-muted-grey"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-subtle-gold"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="text-[11px] font-mono text-muted-grey border-t border-charcoal/8 pt-6 flex flex-col gap-1">
                <span>© ALOKA</span>
                <span>Nature. Nations. Memory. Conservation.</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
