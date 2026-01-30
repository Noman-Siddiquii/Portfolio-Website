"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  id,
  title,
  description,
  techStack,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  techStack?: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.1] group/bento hover:shadow-xl hover:border-primary/30 transition-all duration-300 p-6 min-h-[220px]",
        className
      )}
      style={{
        background: "linear-gradient(135deg, rgba(19, 19, 26, 0.95) 0%, rgba(10, 10, 15, 0.95) 100%)",
      }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan/5 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 h-full flex flex-col">
        <h3 className="text-lg lg:text-xl font-bold text-white-100 leading-tight mb-3">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-[#94a3b8] mb-4 flex-grow">
            {description}
          </p>
        )}

        {/* Tech stack pills */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {techStack.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* CTA for id === 6 */}
        {id === 6 && (
          <div className="mt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-cyan rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Let&apos;s Connect
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
