"use client";

import { motion } from "framer-motion";
import { skills } from "@/data";
import {
  IconBrandPython,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandTailwind,
  IconBrandDocker,
  IconBrandGit,
  IconDatabase,
  IconBrandAws,
  IconBrain,
  IconCode,
} from "@tabler/icons-react";

const iconMap: { [key: string]: React.ReactNode } = {
  Python: <IconBrandPython className="w-8 h-8" />,
  JavaScript: <IconBrandJavascript className="w-8 h-8" />,
  TypeScript: <IconBrandTypescript className="w-8 h-8" />,
  "Next.js": <IconBrandNextjs className="w-8 h-8" />,
  React: <IconBrandReact className="w-8 h-8" />,
  "Node.js": <IconBrandNodejs className="w-8 h-8" />,
  "Tailwind CSS": <IconBrandTailwind className="w-8 h-8" />,
  Docker: <IconBrandDocker className="w-8 h-8" />,
  Git: <IconBrandGit className="w-8 h-8" />,
  PostgreSQL: <IconDatabase className="w-8 h-8" />,
  MongoDB: <IconDatabase className="w-8 h-8" />,
  AWS: <IconBrandAws className="w-8 h-8" />,
  TensorFlow: <IconBrain className="w-8 h-8" />,
  PyTorch: <IconBrain className="w-8 h-8" />,
};

const SkillCard = ({
  name,
  delay,
}: {
  name: string;
  delay: number;
}) => {
  const icon = iconMap[name] || <IconCode className="w-8 h-8" />;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative p-6 rounded-2xl border border-white/[0.1] bg-gradient-to-br from-black-200 to-black-100 hover:border-primary/50 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex flex-col items-center gap-3">
        <div className="text-primary group-hover:text-cyan transition-colors duration-300">
          {icon}
        </div>
        <span className="text-sm font-medium text-white-200">{name}</span>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.databases,
    ...skills.tools,
    ...skills.ai,
  ];

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary uppercase tracking-widest text-sm mb-4">
          Technical Expertise
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          My <span className="gradient-text">Tech Stack</span>
        </h2>
        <p className="text-white-200/70 mt-4 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {/* Languages */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-white-200"
          >
            Languages
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.languages.map((skill, idx) => (
              <SkillCard key={skill.name} name={skill.name} delay={idx * 0.1} />
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-white-200"
          >
            Frameworks & Libraries
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {skills.frameworks.map((skill, idx) => (
              <SkillCard key={skill.name} name={skill.name} delay={idx * 0.1} />
            ))}
          </div>
        </div>

        {/* Tools & DevOps */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-white-200"
          >
            DevOps & Tools
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.tools.map((skill, idx) => (
              <SkillCard key={skill.name} name={skill.name} delay={idx * 0.1} />
            ))}
          </div>
        </div>

        {/* AI/ML */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-white-200"
          >
            AI & Machine Learning
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.ai.map((skill, idx) => (
              <SkillCard key={skill.name} name={skill.name} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
