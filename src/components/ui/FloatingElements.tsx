"use client";

import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaAws,
  FaDocker,
  FaPython
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiMongodb, 
  SiPostgresql,
  SiTailwindcss,
  SiGraphql
} from "react-icons/si";

const techIcons = [
  { Icon: FaReact, color: "#61DAFB", delay: 0 },
  { Icon: SiTypescript, color: "#3178C6", delay: 0.1 },
  { Icon: SiNextdotjs, color: "#ffffff", delay: 0.2 },
  { Icon: FaNodeJs, color: "#339933", delay: 0.3 },
  { Icon: SiMongodb, color: "#47A248", delay: 0.4 },
  { Icon: SiPostgresql, color: "#4169E1", delay: 0.5 },
  { Icon: FaPython, color: "#3776AB", delay: 0.6 },
  { Icon: FaAws, color: "#FF9900", delay: 0.7 },
  { Icon: FaDocker, color: "#2496ED", delay: 0.8 },
  { Icon: SiTailwindcss, color: "#06B6D4", delay: 0.9 },
  { Icon: SiGraphql, color: "#E10098", delay: 1.0 },
  { Icon: FaDatabase, color: "#6366f1", delay: 1.1 },
];

// Generate random positions around a circle
const generatePosition = (index: number, total: number) => {
  const angle = (index / total) * 2 * Math.PI;
  const radius = 280; // Distance from center
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  return { x, y };
};

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techIcons.map((item, index) => {
        const { x, y } = generatePosition(index, techIcons.length);
        const randomDuration = 15 + Math.random() * 10;
        const randomDelay = Math.random() * 5;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1, 0.8],
              x: [x - 20, x + 20, x - 20],
              y: [y - 20, y + 20, y - 20],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "easeInOut"
            }}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div 
              className="p-3 rounded-xl backdrop-blur-sm border border-white/10"
              style={{ 
                background: `rgba(${parseInt(item.color.slice(1, 3), 16)}, ${parseInt(item.color.slice(3, 5), 16)}, ${parseInt(item.color.slice(5, 7), 16)}, 0.1)`,
                boxShadow: `0 0 30px ${item.color}20`
              }}
            >
              <item.Icon 
                size={24} 
                style={{ color: item.color }}
                className="opacity-80"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// Animated gradient orbs for background
export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary Orb */}
      <motion.div
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      
      {/* Secondary Orb */}
      <motion.div
        animate={{
          x: [0, -80, -40, 0],
          y: [0, -60, 80, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Accent Orb */}
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}

// Animated particles
export function Particles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [0, -100],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          className="absolute rounded-full bg-white"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
        />
      ))}
    </div>
  );
}
