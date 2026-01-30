"use client";

import { useEffect, useState, useRef } from "react";
import { FaLocationArrow, FaCalendarAlt } from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import ProfilePhoto from "@/components/ui/ProfilePhoto";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import MagneticWrapper from "@/components/ui/MagneticButton";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { personalInfo } from "@/data";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Expert",
  "Database Architect",
  "API Developer",
];

// Typewriter effect component
function TypewriterText() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <span className="text-primary">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-[3px] h-6 md:h-8 bg-primary ml-1 align-middle"
      />
    </span>
  );
}

// Stats counter - now using AnimatedCounter component
function StatItem({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  return (
    <div className="text-center group">
      <AnimatedCounter
        value={value}
        suffix={suffix}
        duration={2.5}
        className="text-2xl md:text-3xl font-bold gradient-text"
      />
      <div className="text-xs md:text-sm text-white-200/60 group-hover:text-white-200/80 transition-colors">{label}</div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <AnimatedBackground />
      </motion.div>

      {/* Spotlights */}
      <div className="absolute inset-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#6366f1"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#22d3ee" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black-100/50 to-black-100" />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20"
        style={{ y: textY, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-white-200">Available for Freelance Work</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white-200/80 mb-2"
            >
              Hi there! 👋 I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
            >
              <span className="text-white-100">{personalInfo.name.split(' ')[0]}</span>{' '}
              <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 h-10"
            >
              <TypewriterText />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white-200/70 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I build <span className="text-primary font-medium">exceptional digital experiences</span> that combine 
              stunning design with robust functionality. Specialized in React, Node.js, and modern web technologies.
            </motion.p>

            {/* CTA Buttons with Magnetic Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <MagneticWrapper strength={0.2}>
                <a href="#projects">
                  <MagicButton
                    title="View My Work"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
              </MagneticWrapper>
              <MagneticWrapper strength={0.2}>
                <a href="#contact">
                  <button className="px-6 py-3 rounded-lg border border-white/20 text-white-100 font-medium hover:bg-white/5 hover:border-primary/50 transition-all duration-300 flex items-center gap-2 hover:scale-105">
                    <FaCalendarAlt className="text-primary" />
                    Schedule a Call
                  </button>
                </a>
              </MagneticWrapper>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-8 md:gap-12"
            >
              <StatItem value={3} label="Years Experience" suffix="+" />
              <StatItem value={15} label="Projects Completed" suffix="+" />
              <StatItem value={100} label="Client Satisfaction" suffix="%" />
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo on all devices */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <ProfilePhoto />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white-200/50 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
