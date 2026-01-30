"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data";
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";

const TimelineItem = ({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative flex gap-6 md:gap-10 group"
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center shadow-lg shadow-primary/30"
        >
          <FaBriefcase className="w-5 h-5 text-white" />
        </motion.div>
        {index !== experiences.length - 1 && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/50 to-transparent min-h-[50px]" />
        )}
      </div>

      {/* Content Card */}
      <motion.div
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
        className="flex-1 pb-12"
      >
        <div className="p-6 rounded-2xl bg-gradient-to-br from-black-200/80 to-black-100/80 border border-white/[0.08] hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white-100 mb-1 group-hover:text-primary transition-colors">
                {experience.title}
              </h3>
              <p className="text-cyan font-medium text-lg">
                {experience.company}
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-primary text-sm font-medium mb-1">
                <FaCalendar className="w-3 h-3" />
                {experience.period}
              </div>
              <div className="flex items-center gap-2 text-white-200/60 text-sm">
                <FaMapMarkerAlt className="w-3 h-3" />
                {experience.location}
              </div>
            </div>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-5">
            {experience.description.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                viewport={{ once: true }}
                className="text-white-200/70 text-sm flex items-start gap-3 leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxSection speed={0.4} direction="up">
          <div className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
        </ParallaxSection>
        <ParallaxSection speed={0.5} direction="down">
          <div className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full bg-cyan/5 blur-[100px]" />
        </ParallaxSection>
        <ParallaxSection speed={0.6} className="absolute top-20 left-10">
          <div className="w-24 h-24 border border-primary/10 rounded-full" />
        </ParallaxSection>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header with Scroll Reveal */}
        <div className="text-center mb-16">
          <ScrollReveal animation="fadeUp" delay={0}>
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Career Journey
            </motion.span>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="text-white-200/70 max-w-2xl mx-auto text-lg">
              A track record of delivering results and growing expertise in full-stack development.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, idx) => (
            <TimelineItem key={exp.id} experience={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
