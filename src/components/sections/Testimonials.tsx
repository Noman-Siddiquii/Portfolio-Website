"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";

export default function Testimonials() {
  const testimonialItems = testimonials.map((t) => ({
    quote: t.quote,
    name: t.name,
    title: t.title,
  }));

  return (
    <section id="testimonials" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary uppercase tracking-widest text-sm mb-4">
          Client Feedback
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          What <span className="gradient-text">Clients Say</span>
        </h2>
        <p className="text-white-200/70 mt-4 max-w-2xl mx-auto">
          Don&apos;t just take my word for it - hear from the people I&apos;ve
          worked with
        </p>
      </motion.div>

      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonialItems}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
