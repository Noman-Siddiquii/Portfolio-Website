"use client";

import { useEffect, useState } from "react";

// Lightweight CSS-only animated background - no heavy JS animations or Framer Motion
const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Static gradient orbs - CSS animations only */}
      <div 
        className="absolute top-0 -left-1/4 w-[500px] h-[500px] rounded-full opacity-30 blur-[100px]"
        style={{ 
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-0 -right-1/4 w-[450px] h-[450px] rounded-full opacity-20 blur-[100px]"
        style={{ 
          background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
          animation: 'pulse 8s ease-in-out infinite',
          animationDelay: '3s'
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
        style={{ 
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          animation: 'pulse 8s ease-in-out infinite',
          animationDelay: '5s'
        }}
      />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
