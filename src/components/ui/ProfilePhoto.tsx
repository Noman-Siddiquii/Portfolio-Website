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
          background: "conic-gradient(from 0deg, #6366f1, #22d3ee, #6366f1)",
          padding: "3px",
        }}
      >
        <div className="w-full h-full rounded-full bg-black-100" />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(99, 102, 241, 0.4)",
            "0 0 40px rgba(99, 102, 241, 0.6)",
            "0 0 20px rgba(99, 102, 241, 0.4)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-2 rounded-full"
      />

      {/* Profile image container */}
      <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-transparent p-1">
        {/* Gradient border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-purple-500 to-cyan p-[3px]">
          <div className="w-full h-full rounded-full bg-black-100 overflow-hidden">
            <Image
              src="/noman-photo.jpeg"
              alt="Noman Siddiqui"
              fill
              className="object-cover object-center scale-110"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black-100/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg"
      >
        <span className="text-xl">💻</span>
      </motion.div>

      <motion.div
        animate={{ y: [5, -5, 5], x: [3, -3, 3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-2 -left-4 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan to-teal-500 flex items-center justify-center shadow-lg"
      >
        <span className="text-lg">🚀</span>
      </motion.div>

      <motion.div
        animate={{ y: [-3, 3, -3], x: [-5, 5, -5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 -right-8 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg"
      >
        <span className="text-sm">⚡</span>
      </motion.div>

      {/* Status indicator */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black-200/80 backdrop-blur-sm border border-green-500/30"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs text-green-400 font-medium">Available</span>
      </motion.div>
    </div>
  );
}
