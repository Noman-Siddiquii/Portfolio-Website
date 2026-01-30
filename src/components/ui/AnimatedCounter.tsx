"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  label?: string;
  labelClassName?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  delay = 0,
  className = "",
  label,
  labelClassName = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now() + delay * 1000;
    const endTime = startTime + duration * 1000;

    const updateValue = () => {
      const now = Date.now();
      
      if (now < startTime) {
        requestAnimationFrame(updateValue);
        return;
      }

      if (now >= endTime) {
        setDisplayValue(value);
        return;
      }

      const progress = (now - startTime) / (duration * 1000);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easedProgress * value));
      requestAnimationFrame(updateValue);
    };

    requestAnimationFrame(updateValue);
  }, [isInView, value, duration, delay]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay }}
        className={className}
      >
        {prefix}
        <span className="tabular-nums">{displayValue}</span>
        {suffix}
      </motion.div>
      {label && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className={labelClassName}
        >
          {label}
        </motion.div>
      )}
    </div>
  );
}

// Spring-based counter with more fluid animation
interface SpringCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function SpringCounter({
  value,
  suffix = "",
  prefix = "",
  className = "",
}: SpringCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) => Math.round(current));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  useEffect(() => {
    return display.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [display]);

  return (
    <div ref={ref} className={className}>
      {prefix}
      <span className="tabular-nums">{displayValue}</span>
      {suffix}
    </div>
  );
}

// Stats row component
interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
}

interface StatsRowProps {
  stats: Stat[];
  className?: string;
}

export function StatsRow({ stats, className = "" }: StatsRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          {/* Background glow on hover */}
          <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative p-6 text-center">
            {stat.icon && (
              <div className="text-primary mb-3 flex justify-center">
                {stat.icon}
              </div>
            )}
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              delay={index * 0.2}
              className="text-3xl md:text-4xl font-bold gradient-text"
              label={stat.label}
              labelClassName="text-sm text-white-200/60 mt-2"
            />
          </div>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
          />
        </motion.div>
      ))}
    </div>
  );
}

// Circular progress counter
interface CircularCounterProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  label?: string;
}

export function CircularCounter({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  className = "",
  label,
}: CircularCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [progress, setProgress] = useState(0);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = (value / max) * 100;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className={`relative inline-flex flex-col items-center ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-white/5"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <AnimatedCounter
          value={value}
          suffix="%"
          className="text-2xl font-bold text-white-100"
        />
      </div>
      
      {label && (
        <p className="mt-3 text-sm text-white-200/60">{label}</p>
      )}
    </div>
  );
}
