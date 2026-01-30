"use client";

import { motion } from "framer-motion";
import { projects } from "@/data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-black-200 to-black-100"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-all duration-300 z-10" />
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-cyan/20">
            <span className="text-6xl font-bold gradient-text">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Category Badge */}
        <span className="absolute top-4 right-4 px-3 py-1 text-xs rounded-full bg-primary/80 text-white z-20">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white-100 mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-white-200/70 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs rounded-md bg-black-300 text-white-200/80"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-md bg-black-300 text-primary">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:text-cyan transition-colors duration-200"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white-200/70 hover:text-white transition-colors duration-200"
            >
              <FaGithub className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>
      </div>

      {/* Hover Gradient Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary uppercase tracking-widest text-sm mb-4">
          Featured Work
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-white-200/70 mt-4 max-w-2xl mx-auto">
          A selection of projects that showcase my expertise in building
          production-ready applications
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
