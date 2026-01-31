"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import MagneticWrapper from "@/components/ui/MagneticButton";
import { 
  FaHandshake, 
  FaGlobe, 
  FaCode, 
  FaRocket,
  FaCheckCircle,
  FaLightbulb
} from "react-icons/fa";

const features = [
  {
    icon: FaHandshake,
    title: "Client-First Approach",
    description: "I prioritize clear communication and collaboration, ensuring your vision is understood and executed perfectly.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: FaGlobe,
    title: "Global Availability",
    description: "Flexible with time zones - I adapt my schedule to ensure seamless collaboration with clients worldwide.",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: FaCode,
    title: "Full Stack Expertise",
    description: "From frontend interfaces to backend APIs and databases, I build complete solutions from the ground up.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: FaRocket,
    title: "Modern Tech Stack",
    description: "I stay current with the latest technologies and best practices to deliver cutting-edge solutions.",
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    icon: FaCheckCircle,
    title: "Quality & Performance",
    description: "Clean code, optimized performance, and scalable architecture are at the core of every project.",
    gradient: "from-red-500 to-rose-400",
  },
  {
    icon: FaLightbulb,
    title: "Problem Solver",
    description: "I don't just write code - I solve business problems and create value through technology.",
    gradient: "from-indigo-500 to-violet-400",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative h-full p-6 rounded-2xl glass-card border border-white/[0.08] overflow-hidden card-shine glow-border">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5`} />
        </div>

        {/* Glow effect on hover */}
        <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 skill-icon-glow`}>
            <feature.icon className="w-6 h-6 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white-100 mb-3 group-hover:text-white transition-colors">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-white-200/70 text-sm leading-relaxed group-hover:text-white-200/90 transition-colors">
            {feature.description}
          </p>
        </div>

        {/* Corner accent */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${feature.gradient} opacity-10 rounded-bl-full`} />
      </div>
    </motion.div>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"],
  // });
  // const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  // const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Parallax Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxSection speed={0.3} direction="up">
          <div className="absolute top-1/4 -left-64 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
        </ParallaxSection>
        <ParallaxSection speed={0.5} direction="down">
          <div className="absolute bottom-1/4 -right-64 w-96 h-96 rounded-full bg-cyan/10 blur-[100px]" />
        </ParallaxSection>
        {/* Floating decorative elements */}
        <ParallaxSection speed={0.8} className="absolute top-20 right-20">
          <div className="w-20 h-20 border border-primary/20 rounded-full" />
        </ParallaxSection>
        <ParallaxSection speed={0.6} className="absolute bottom-40 left-10">
          <div className="w-12 h-12 bg-cyan/10 rotate-45" />
        </ParallaxSection>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with scroll reveal */}
        <div className="text-center mb-16">
          <ScrollReveal animation="fadeUp" delay={0}>
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Why Choose Me?
            </motion.span>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What I <span className="gradient-text text-glow">Bring to the Table</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="text-white-200/70 max-w-2xl mx-auto text-lg">
              With years of experience building web applications, I deliver solutions that are not just functional, but exceptional.
            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal animation="scale" delay={0.4}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-cyan/10 border border-white/10">
              <div className="text-left">
                <p className="text-white-100 font-semibold text-lg">Ready to start your project?</p>
                <p className="text-white-200/60 text-sm">Let&apos;s discuss how I can help you achieve your goals.</p>
              </div>
              <MagneticWrapper strength={0.3}>
                <a 
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-primary to-cyan rounded-xl text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap hover:scale-105 transition-transform"
                >
                  Get in Touch
                </a>
              </MagneticWrapper>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
