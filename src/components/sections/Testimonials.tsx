"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import { FaQuoteLeft } from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";

export default function Testimonials() {
  const testimonialItems = testimonials.map((t) => ({
    quote: t.quote,
    name: t.name,
    title: t.title,
  }));

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxSection speed={0.4} direction="up">
          <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
        </ParallaxSection>
        <ParallaxSection speed={0.5} direction="down">
          <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-cyan/5 blur-[100px]" />
        </ParallaxSection>
        <ParallaxSection speed={0.6} className="absolute top-10 left-1/4">
          <div className="w-20 h-20 border border-primary/5 rounded-full" />
        </ParallaxSection>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16 px-6">
          <ScrollReveal animation="fadeUp" delay={0}>
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <FaQuoteLeft className="inline mr-2" />
              Client Feedback
            </motion.span>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What <span className="gradient-text">Clients Say</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="text-white-200/70 max-w-2xl mx-auto text-lg">
              Don&apos;t just take my word for it - hear from the people I&apos;ve worked with
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="scale" delay={0.3}>
          <div className="flex flex-col items-center">
            <InfiniteMovingCards
              items={testimonialItems}
              direction="right"
              speed="slow"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
