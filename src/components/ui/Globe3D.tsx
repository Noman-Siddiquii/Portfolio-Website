"use client";

import { useEffect, useRef, useState } from "react";

// Optimized Globe - only animates when visible in viewport
const Globe3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number>();

  // Only animate when visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 300;
    canvas.width = size;
    canvas.height = size;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.38;
    let rotation = 0;

    // Pre-generate static points once
    const points: { lat: number; lng: number }[] = [];
    for (let i = 0; i < 50; i++) {
      points.push({
        lat: (Math.random() - 0.5) * Math.PI,
        lng: Math.random() * Math.PI * 2,
      });
    }

    // Connection arcs
    const arcs = [
      { from: { lat: 0.4, lng: 1.2 }, to: { lat: -0.6, lng: 4.2 } },
      { from: { lat: 0.3, lng: 0.8 }, to: { lat: -0.3, lng: 2.5 } },
      { from: { lat: 0.5, lng: 1.8 }, to: { lat: 0.2, lng: 5.0 } },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, size, size);

      // Globe glow
      const glow = ctx.createRadialGradient(centerX, centerY, radius * 0.7, centerX, centerY, radius * 1.2);
      glow.addColorStop(0, "rgba(99, 102, 241, 0.08)");
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2);
      ctx.fill();

      // Globe outline
      ctx.strokeStyle = "rgba(99, 102, 241, 0.25)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Latitude lines
      ctx.strokeStyle = "rgba(99, 102, 241, 0.08)";
      for (let lat = -45; lat <= 45; lat += 45) {
        const y = centerY + radius * Math.sin((lat * Math.PI) / 180);
        const r = radius * Math.cos((lat * Math.PI) / 180);
        ctx.beginPath();
        ctx.ellipse(centerX, y, r, r * 0.25, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Dots
      points.forEach((point) => {
        const lng = point.lng + rotation;
        const x = centerX + radius * Math.cos(point.lat) * Math.sin(lng);
        const y = centerY + radius * Math.sin(point.lat);
        const z = Math.cos(point.lat) * Math.cos(lng);

        if (z > 0) {
          const opacity = 0.2 + z * 0.6;
          const dotSize = 0.8 + z * 1.2;
          ctx.fillStyle = `rgba(34, 211, 238, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Connection arcs
      arcs.forEach((arc) => {
        const fromLng = arc.from.lng + rotation;
        const toLng = arc.to.lng + rotation;
        
        const fromZ = Math.cos(arc.from.lat) * Math.cos(fromLng);
        const toZ = Math.cos(arc.to.lat) * Math.cos(toLng);
        
        if (fromZ > -0.1 && toZ > -0.1) {
          const fromX = centerX + radius * Math.cos(arc.from.lat) * Math.sin(fromLng);
          const fromY = centerY + radius * Math.sin(arc.from.lat);
          const toX = centerX + radius * Math.cos(arc.to.lat) * Math.sin(toLng);
          const toY = centerY + radius * Math.sin(arc.to.lat);

          const midX = (fromX + toX) / 2;
          const midY = (fromY + toY) / 2 - 25;

          ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 + (fromZ + toZ) * 0.15})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(fromX, fromY);
          ctx.quadraticCurveTo(midX, midY, toX, toY);
          ctx.stroke();

          // Endpoints
          ctx.fillStyle = "#22d3ee";
          ctx.beginPath();
          ctx.arc(fromX, fromY, 2, 0, Math.PI * 2);
          ctx.arc(toX, toY, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      rotation += 0.004;
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-[260px] h-[260px] md:w-[300px] md:h-[300px]"
      />
      <p className="text-xs text-white/40 mt-2">Serving clients worldwide</p>
    </div>
  );
};

export default Globe3D;
