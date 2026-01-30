"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { personalInfo } from "@/data";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";

// EmailJS Configuration - Read from environment variables
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: personalInfo.name,
        },
        EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: "Phone",
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Location",
      value: personalInfo.location,
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxSection speed={0.4} direction="up">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
        </ParallaxSection>
        <ParallaxSection speed={0.5} direction="down">
          <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-[100px]" />
        </ParallaxSection>
        <ParallaxSection speed={0.6} className="absolute top-20 right-20">
          <div className="w-16 h-16 border border-primary/10 rotate-45" />
        </ParallaxSection>
        <ParallaxSection speed={0.7} className="absolute bottom-40 left-10">
          <div className="w-24 h-24 border border-cyan/10 rounded-full" />
        </ParallaxSection>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal animation="fadeUp" delay={0}>
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Get In Touch
            </motion.span>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let&apos;s <span className="gradient-text">Work Together</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="text-white-200/70 max-w-2xl mx-auto text-lg">
              Have a project in mind? Let&apos;s discuss how I can help bring your
              ideas to life
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white-100 mb-4">
              Contact Information
            </h3>
            <p className="text-white-200/70">
              I&apos;m available for freelance projects. Feel free to reach out
              via any of the methods below.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-white-200/50">{info.title}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-white-100 hover:text-primary transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white-100">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-white-200/70 mb-4">Follow me on</p>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-black-200 flex items-center justify-center text-white-200/70 hover:text-primary hover:bg-black-300 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-black-200 flex items-center justify-center text-white-200/70 hover:text-primary hover:bg-black-300 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl border border-white/[0.1] bg-gradient-to-br from-black-200 to-black-100"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white-200/70 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black-300 border border-white/10 text-white-100 placeholder-white-200/30 focus:outline-none focus:border-primary transition-colors duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white-200/70 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black-300 border border-white/10 text-white-100 placeholder-white-200/30 focus:outline-none focus:border-primary transition-colors duration-200"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-white-200/70 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black-300 border border-white/10 text-white-100 placeholder-white-200/30 focus:outline-none focus:border-primary transition-colors duration-200"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white-200/70 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-black-300 border border-white/10 text-white-100 placeholder-white-200/30 focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-cyan text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/40 hover:scale-[1.02] hover:brightness-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-green-400"
              >
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.p>
            )}

            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-red-400"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
