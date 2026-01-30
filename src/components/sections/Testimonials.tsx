"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonialItems = testimonials.map((t) => ({
    quote: t.quote,
    name: t.name,
    title: t.title,
  }));

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-cyan/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6"
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <FaQuoteLeft className="inline mr-2" />
            Client Feedback
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-white-200/70 max-w-2xl mx-auto text-lg">
            Don&apos;t just take my word for it - hear from the people I&apos;ve worked with
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <InfiniteMovingCards
            items={testimonialItems}
            direction="right"
            speed="slow"
          />
        </motion.div>
      </div>
    </section>
  );
}
