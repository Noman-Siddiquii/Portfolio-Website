"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}

export default function MagicButton({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses,
}: MagicButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={cn(
        "relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none group",
        otherClasses
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#22d3ee_50%,#6366f1_100%)]" />
      
      {/* Glow effect on hover */}
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-primary to-cyan" />
      
      <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black-100 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-black-100/90 transition-colors">
        {position === "left" && icon}
        {title}
        {position === "right" && (
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            {icon}
          </span>
        )}
      </span>
    </motion.button>
  );
}
