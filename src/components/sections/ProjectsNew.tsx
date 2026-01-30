"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "@/data";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import MagneticWrapper from "@/components/ui/MagneticButton";

// 3D Tilt Card Effect
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="relative group perspective-1000"
    >
      <div
        className="relative h-full rounded-2xl bg-gradient-to-br from-black-200 to-black-100 border border-white/[0.08] overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: isHovered
              ? `radial-gradient(600px circle at ${x.get() * 100 + 50}% ${y.get() * 100 + 50}%, rgba(99, 102, 241, 0.15), transparent 40%)`
              : "none",
          }}
        />

        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-black-100/50 to-transparent z-10" />
          
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-cyan/30">
              <span className="text-7xl font-bold gradient-text opacity-50">
                {project.title.charAt(0)}
              </span>
            </div>
          )}

          {/* Category Badge */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-white z-20 backdrop-blur-sm"
          >
            {project.category}
          </motion.span>

          {/* Quick Links on Hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 right-4 flex gap-2 z-20"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary transition-colors"
              >
                <FaExternalLinkAlt className="w-4 h-4 text-white" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <FaGithub className="w-4 h-4 text-white" />
              </a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6" style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-xl font-bold text-white-100 mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-white-200/60 text-sm mb-5 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full bg-white/5 text-white-200/80 border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* View Project Link */}
          <motion.a
            href={project.liveUrl || project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            View Project
            <FaArrowRight className="w-3 h-3" />
          </motion.a>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxSection speed={0.4} direction="up">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[100px]" />
        </ParallaxSection>
        <ParallaxSection speed={0.6} direction="down">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-[100px]" />
        </ParallaxSection>
        {/* Decorative elements */}
        <ParallaxSection speed={0.7} className="absolute top-40 right-10">
          <div className="w-32 h-32 border border-cyan/10 rounded-full" />
        </ParallaxSection>
        <ParallaxSection speed={0.5} className="absolute bottom-20 left-5">
          <div className="w-16 h-16 bg-primary/5 rotate-45" />
        </ParallaxSection>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with Scroll Reveal */}
        <div className="text-center mb-16">
          <ScrollReveal animation="fadeUp" delay={0}>
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Featured Work
            </motion.span>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Projects That <span className="gradient-text">Deliver Results</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="text-white-200/70 max-w-2xl mx-auto text-lg">
              A showcase of real-world applications I&apos;ve built for clients - from concept to deployment.
            </p>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
