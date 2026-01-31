"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-white/[0.1] flex-shrink-0 px-8 py-8 md:w-[450px] testimonial-card group hover:border-primary/30 transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, rgba(19, 19, 26, 0.95) 0%, rgba(10, 10, 15, 0.95) 100%)",
            }}
            key={idx}
          >
            <blockquote className="relative">
              {/* Large decorative quote mark */}
              <div className="absolute -top-2 -left-2 text-6xl text-primary/20 font-serif leading-none select-none">&ldquo;</div>
              
              {/* Quote text */}
              <span className="relative z-20 text-base leading-[1.8] text-gray-200 font-normal block pl-6">
                {item.quote}
              </span>
              
              {/* Closing quote */}
              <div className="text-right text-4xl text-primary/20 font-serif leading-none select-none -mt-2">&rdquo;</div>
              
              {/* Author info with avatar placeholder */}
              <div className="relative z-20 mt-4 pt-4 border-t border-white/10 flex flex-row items-center gap-3">
                {/* Avatar circle with gradient */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {item.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white-100 group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {item.title}
                  </span>
                </div>
                {/* 5 stars */}
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s)
            var(--animation-direction, forwards) linear infinite;
        }

        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 0.5rem));
          }
        }
      `}</style>
    </div>
  );
}
