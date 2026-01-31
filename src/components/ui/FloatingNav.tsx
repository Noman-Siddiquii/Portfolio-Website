"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export function FloatingNav({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.link.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-4 sm:top-6 inset-x-0 mx-auto z-[5000] px-4",
          className
        )}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex max-w-fit mx-auto items-center gap-6 px-6 py-3 rounded-full bg-black-200/90 backdrop-blur-xl border border-white/10 shadow-lg">
          {navItems.map((navItem, idx) => {
            const sectionId = navItem.link.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative text-sm text-white/70 hover:text-white transition-colors duration-200 py-1",
                  isActive && "text-primary"
                )}
              >
                {navItem.name}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                    style={{ boxShadow: "0 0 8px #6366f1" }}
                  />
                )}
              </Link>
            );
          })}
          
          <Link
            href="#contact"
            className="ml-2 text-sm font-medium text-white px-5 py-2 rounded-full bg-primary hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between max-w-sm mx-auto px-4 py-3 rounded-2xl bg-black-200/95 backdrop-blur-xl border border-white/10 shadow-lg">
          {/* Logo/Initials */}
          <Link href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
              <span className="text-white font-bold text-sm">NS</span>
            </div>
          </Link>

          {/* Center - Current Section */}
          <span className="text-xs text-white/50 uppercase tracking-wider">
            {activeSection || 'Home'}
          </span>

          {/* Right - Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 max-w-sm mx-auto rounded-2xl bg-black-200/95 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden"
            >
              <div className="p-4 space-y-1">
                {navItems.map((navItem, idx) => {
                  const sectionId = navItem.link.replace('#', '');
                  const isActive = activeSection === sectionId;
                  
                  return (
                    <Link
                      key={`mobile-${idx}`}
                      href={navItem.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all",
                        isActive 
                          ? "bg-primary/20 text-primary" 
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-primary/50" />
                      )}
                      <span className={cn(!isActive && "ml-4")}>{navItem.name}</span>
                    </Link>
                  );
                })}
                
                {/* Hire Me CTA */}
                <div className="pt-2 mt-2 border-t border-white/10">
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-all"
                  >
                    <span>Hire Me</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
}
