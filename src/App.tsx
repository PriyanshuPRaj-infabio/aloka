/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// Components imports
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import HomeView from "./components/HomeView.tsx";
import WonderfulWorld from "./components/WonderfulWorld.tsx";
import Reflections from "./components/Reflections.tsx";
import About from "./components/About.tsx";
import AlokaPage from "./components/AlokaPage.tsx";
import AlokaMemorial from "./components/AlokaMemorial.tsx";
import MagnumEditions from "./components/MagnumEditions.tsx";
import PressPage from "./components/PressPage.tsx";
import Correspondence from "./components/Correspondence.tsx";
import CustomCursor from "./components/CustomCursor.tsx";

type ViewSection = 
  | "home"
  | "wonderful-world"
  | "reflections"
  | "about"
  | "magnum-editions"
  | "aloka"
  | "aloka-memorial-trust"
  | "press"
  | "correspondence";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewSection>("home");

  // Sync hash state router for premium browser routing support in the iframe
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as ViewSection;
      const validSections: ViewSection[] = [
        "home",
        "wonderful-world",
        "reflections",
        "about",
        "magnum-editions",
        "aloka",
        "aloka-memorial-trust",
        "press",
        "correspondence"
      ];
      if (hash && validSections.includes(hash)) {
        setCurrentView(hash);
      } else if (!hash) {
        setCurrentView("home");
      }
      // Always scroll cleanly to top upon transition
      window.scrollTo({ top: 0 });
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial verification
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigateTo = (viewId: string) => {
    window.location.hash = viewId;
  };

  const renderContent = () => {
    switch (currentView) {
      case "home":
        return <HomeView onNavigate={navigateTo} />;
      case "wonderful-world":
        return <WonderfulWorld />;
      case "reflections":
        return <Reflections />;
      case "about":
        return <About />;
      case "aloka":
        return <AlokaPage />;
      case "aloka-memorial-trust":
        return <AlokaMemorial />;
      case "magnum-editions":
        return <MagnumEditions />;
      case "press":
        return <PressPage />;
      case "correspondence":
        return <Correspondence />;
      default:
        return <HomeView onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col justify-between selection:bg-[#EAE6DF] selection:text-charcoal selection:bg-opacity-50">
      <CustomCursor />
      {/* Global Header Navigation */}
      <Header currentView={currentView} onNavigate={navigateTo} />

      {/* Main Container with smooth fade effects managed by Framer Motion / Motion */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Quiet Institutional Footer */}
      <Footer currentView={currentView} onNavigate={navigateTo} />
    </div>
  );
}
