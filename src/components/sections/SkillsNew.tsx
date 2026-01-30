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
  IconBrandMongodb,
  IconBrandHtml5,
  IconBrandCss3,
} from "@tabler/icons-react";
import { SiExpress, SiFastapi, SiGraphql, SiRedis, SiFirebase, SiVercel } from "react-icons/si";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const allSkillsWithIcons: SkillItem[] = [
  { name: "JavaScript", icon: <IconBrandJavascript className="w-10 h-10" />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <IconBrandTypescript className="w-10 h-10" />, color: "#3178C6" },
  { name: "Python", icon: <IconBrandPython className="w-10 h-10" />, color: "#3776AB" },
  { name: "React", icon: <IconBrandReact className="w-10 h-10" />, color: "#61DAFB" },
  { name: "Next.js", icon: <IconBrandNextjs className="w-10 h-10" />, color: "#ffffff" },
  { name: "Node.js", icon: <IconBrandNodejs className="w-10 h-10" />, color: "#339933" },
  { name: "Express", icon: <SiExpress className="w-8 h-8" />, color: "#ffffff" },
  { name: "FastAPI", icon: <SiFastapi className="w-8 h-8" />, color: "#009688" },
  { name: "MongoDB", icon: <IconBrandMongodb className="w-10 h-10" />, color: "#47A248" },
  { name: "PostgreSQL", icon: <IconDatabase className="w-10 h-10" />, color: "#4169E1" },
  { name: "GraphQL", icon: <SiGraphql className="w-8 h-8" />, color: "#E10098" },
  { name: "Redis", icon: <SiRedis className="w-8 h-8" />, color: "#DC382D" },
  { name: "Docker", icon: <IconBrandDocker className="w-10 h-10" />, color: "#2496ED" },
  { name: "AWS", icon: <IconBrandAws className="w-10 h-10" />, color: "#FF9900" },
  { name: "Git", icon: <IconBrandGit className="w-10 h-10" />, color: "#F05032" },
  { name: "Tailwind", icon: <IconBrandTailwind className="w-10 h-10" />, color: "#06B6D4" },
  { name: "Firebase", icon: <SiFirebase className="w-8 h-8" />, color: "#FFCA28" },
  { name: "Vercel", icon: <SiVercel className="w-8 h-8" />, color: "#ffffff" },
];

// Orbit animation for skills
function OrbitingSkill({ skill, index, total }: { skill: SkillItem; index: number; total: number }) {
  const angle = (index / total) * 360;
  const radius = 200; // Base radius
  const duration = 30 + Math.random() * 10;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="absolute left-1/2 top-1/2"
      style={{
        transformOrigin: "center center",
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        style={{
          width: radius * 2,
          height: radius * 2,
          marginLeft: -radius,
          marginTop: -radius,
        }}
      >
        <motion.div
          className="absolute group"
          style={{
            top: "50%",
            left: "50%",
            transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
          }}
          whileHover={{ scale: 1.3 }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            className="relative p-3 rounded-xl bg-black-200/80 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all cursor-pointer"
            style={{
              boxShadow: `0 0 20px ${skill.color}20`,
            }}
          >
            <div style={{ color: skill.color }}>{skill.icon}</div>
            
            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black-100 rounded text-xs text-white-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {skill.name}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Skill bar with animation
function SkillBar({ category, items, delay }: { category: string; items: { name: string; icon: string }[]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <motion.span
            key={item.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + idx * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -3 }}
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white-200 text-sm hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
          >
            {item.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Technical Expertise
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-white-200/70 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building modern, scalable applications from frontend to backend.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Orbiting Skills (Hidden on mobile) */}
          <div className="hidden lg:block relative h-[500px]">
            {/* Center Element */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 30px rgba(99, 102, 241, 0.3)",
                    "0 0 60px rgba(99, 102, 241, 0.5)",
                    "0 0 30px rgba(99, 102, 241, 0.3)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center"
              >
                <IconCode className="w-16 h-16 text-white" />
              </motion.div>
            </div>

            {/* Orbiting skills - only show first 12 for cleaner look */}
            {allSkillsWithIcons.slice(0, 12).map((skill, idx) => (
              <OrbitingSkill
                key={skill.name}
                skill={skill}
                index={idx}
                total={12}
              />
            ))}

            {/* Orbit rings */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/5" />
          </div>

          {/* Right: Skill Categories */}
          <div>
            <SkillBar 
              category="Languages" 
              items={skills.languages} 
              delay={0} 
            />
            <SkillBar 
              category="Frameworks & Libraries" 
              items={skills.frameworks} 
              delay={0.1} 
            />
            <SkillBar 
              category="Databases" 
              items={skills.databases} 
              delay={0.2} 
            />
            <SkillBar 
              category="Tools & Platforms" 
              items={skills.tools} 
              delay={0.3} 
            />

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { label: "Technologies", value: "20+" },
                { label: "Years Coding", value: "3+" },
                { label: "Always Learning", value: "∞" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-white-200/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
