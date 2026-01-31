"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className="relative">
      {/* Animated ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, #6366f1, #22d3ee, #a855f7, #6366f1)",
          padding: "3px",
        }}
      >
        <div className="w-full h-full rounded-full bg-black-100" />
      </motion.div>

      {/* Enhanced glow effect */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 30px rgba(99, 102, 241, 0.3), 0 0 60px rgba(34, 211, 238, 0.2)",
            "0 0 50px rgba(99, 102, 241, 0.5), 0 0 80px rgba(34, 211, 238, 0.3)",
            "0 0 30px rgba(99, 102, 241, 0.3), 0 0 60px rgba(34, 211, 238, 0.2)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-2 rounded-full"
      />

      {/* Profile image container */}
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-transparent p-1">
        {/* Gradient border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-purple-500 to-cyan p-[3px]">
          <div className="w-full h-full rounded-full bg-black-100 overflow-hidden">
            <Image
              src="/noman-photo.jpeg"
              alt="Noman Siddiqui"
              fill
              className="object-cover object-center scale-110 hover:scale-115 transition-transform duration-500"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black-100/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Floating decorative elements with glow */}
      <motion.div
        animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg glow"
      >
        <span className="text-xl">💻</span>
      </motion.div>

      <motion.div
        animate={{ y: [5, -5, 5], x: [3, -3, 3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-2 -left-4 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan to-teal-500 flex items-center justify-center shadow-lg glow-cyan"
      >
        <span className="text-lg">🚀</span>
      </motion.div>

      <motion.div
        animate={{ y: [-3, 3, -3], x: [-5, 5, -5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 -right-8 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg hidden sm:flex"
        style={{ boxShadow: "0 0 15px rgba(251, 191, 36, 0.4)" }}
      >
        <span className="text-sm">⚡</span>
      </motion.div>

      {/* Status indicator with enhanced pulse */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-green-500/30"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-xs text-green-400 font-medium">Available</span>
      </motion.div>
    </div>
  );
}
