"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary uppercase tracking-widest text-sm mb-4">
          About Me
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          What I <span className="gradient-text">Bring to the Table</span>
        </h2>
      </motion.div>

      <BentoGrid className="max-w-6xl mx-auto">
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            techStack={item.techStack}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
