"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data";

const TimelineItem = ({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
    >
      {/* Card */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-black-200 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
        <span className="text-primary font-bold text-sm">{index + 1}</span>
      </div>

      {/* Content */}
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/[0.1] bg-gradient-to-br from-black-200 to-black-100 shadow-lg group-hover:border-primary/30 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-lg font-bold text-white-100">
            {experience.title}
          </h3>
          <span className="text-primary text-sm font-medium">
            {experience.period}
          </span>
        </div>
        <p className="text-cyan font-medium mb-2">
          {experience.company} • {experience.location}
        </p>
        <ul className="space-y-2 mb-4">
          {experience.description.map((item, idx) => (
            <li
              key={idx}
              className="text-white-200/70 text-sm flex items-start gap-2"
            >
              <span className="text-primary mt-1.5">•</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary uppercase tracking-widest text-sm mb-4">
          Career Journey
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          My <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-5 md:left-1/2 transform md:-translate-x-px w-0.5 h-full bg-gradient-to-b from-primary via-cyan to-primary/20" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <TimelineItem key={exp.id} experience={exp} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
