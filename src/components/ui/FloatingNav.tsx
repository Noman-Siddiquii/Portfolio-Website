"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.1] rounded-full bg-black-200/80 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-4 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-300 items-center flex space-x-1 hover:text-primary transition-colors duration-200 text-sm"
            )}
          >
            <span className="block">{navItem.name}</span>
          </Link>
        ))}
        <Link
          href="#contact"
          className="border text-sm font-medium relative border-primary/50 text-white px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
        >
          <span>Hire Me</span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
