"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

// Lightweight scroll reveal using IntersectionObserver - no Framer Motion
const ScrollReveal = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.1,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const animations: Record<string, { hidden: string; visible: string }> = {
    fadeUp: {
      hidden: "opacity-0 translate-y-8",
      visible: "opacity-100 translate-y-0",
    },
    fadeDown: {
      hidden: "opacity-0 -translate-y-8",
      visible: "opacity-100 translate-y-0",
    },
    fadeLeft: {
      hidden: "opacity-0 translate-x-8",
      visible: "opacity-100 translate-x-0",
    },
    fadeRight: {
      hidden: "opacity-0 -translate-x-8",
      visible: "opacity-100 translate-x-0",
    },
    scale: {
      hidden: "opacity-0 scale-95",
      visible: "opacity-100 scale-100",
    },
    fade: {
      hidden: "opacity-0",
      visible: "opacity-100",
    },
  };

  const anim = animations[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className} ${isVisible ? anim.visible : anim.hidden}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

// Stagger wrapper for multiple children
export function StaggerReveal({
  children,
  staggerDelay = 100,
  className = "",
}: {
  children: ReactNode[];
  staggerDelay?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollReveal key={index} delay={index * staggerDelay}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}

// Line reveal for text
export function LineReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <ScrollReveal animation="fadeUp" delay={delay} className={className}>
      {children}
    </ScrollReveal>
  );
}
