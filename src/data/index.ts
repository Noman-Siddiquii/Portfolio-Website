export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const personalInfo = {
  name: "Noman Siddiqui",
  title: "Full Stack Developer",
  tagline: "Building Digital Experiences That Matter",
  description:
    "I architect and develop high-performance web applications using modern technologies. From AI-powered systems to scalable e-commerce platforms, I transform ideas into seamless digital solutions.",
  email: "nomansiddiqui872@gmail.com",
  phone: "+92 335 3279709",
  location: "Karachi, Pakistan",
  linkedin: "https://www.linkedin.com/in/noman-siddiqui-aa914b250/",
  github: "https://github.com/Noman-Siddiquii",
  resumeLink: "/resume.pdf",
};

export const services = [
  {
    id: 1,
    title: "Full Stack Development",
    description:
      "End-to-end web application development using Next.js, React, Node.js, and modern databases. From frontend to backend, I build it all.",
    icon: "code",
  },
  {
    id: 2,
    title: "AI Integration",
    description:
      "Integrating AI/ML capabilities into applications - from LLMs and chatbots to computer vision and intelligent search systems.",
    icon: "brain",
  },
  {
    id: 3,
    title: "API Development",
    description:
      "Building robust, scalable RESTful APIs and real-time systems with FastAPI, Node.js, and WebSocket integrations.",
    icon: "api",
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications on AWS, Vercel with Docker, Kubernetes, and CI/CD pipelines for seamless delivery.",
    icon: "cloud",
  },
];

export const skills = {
  languages: [
    { name: "Python", icon: "/icons/python.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "C++", icon: "/icons/cpp.svg" },
    { name: "SQL", icon: "/icons/sql.svg" },
  ],
  frameworks: [
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "FastAPI", icon: "/icons/fastapi.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "Redis", icon: "/icons/redis.svg" },
  ],
  tools: [
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
    { name: "AWS", icon: "/icons/aws.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Linux", icon: "/icons/linux.svg" },
  ],
  ai: [
    { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
    { name: "PyTorch", icon: "/icons/pytorch.svg" },
    { name: "OpenCV", icon: "/icons/opencv.svg" },
    { name: "LLMs", icon: "/icons/openai.svg" },
  ],
};

export const experiences = [
  {
    id: 1,
    title: "Full Stack Software Engineer",
    company: "Bytes Pak",
    location: "Karachi, Pakistan",
    period: "Jan 2026 - Present",
    description: [
      "Delivering end-to-end full-stack solutions for multiple clients from requirements to deployment",
      "Leveraging AI-assisted development tools to accelerate code generation and refactoring",
      "Utilizing Agile Scrum methodology for project management ensuring timely delivery",
      "Optimizing frontend performance across diverse tech stacks with cross-browser compatibility",
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: 2,
    title: "AI/ML Intern",
    company: "Al Madinah Islamic Research Center (MIRC)",
    location: "Karachi, Pakistan",
    period: "May 2025 - July 2025",
    description: [
      "Developed AI Search - an intelligent retrieval system using LLMs and Embeddings for semantic query matching",
      "Implemented OpenCV-based thumbnail generation and transcript/summary download features",
      "Enhanced user experience with interactive UI, real-time notifications, and robust validation",
    ],
    technologies: ["Python", "FastAPI", "LLMs", "OpenCV", "Embeddings"],
  },
  {
    id: 3,
    title: "AI/ML Intern",
    company: "ITSOLERA Pvt Ltd",
    location: "Karachi, Pakistan",
    period: "Jun 2024 - Sep 2024",
    description: [
      "Developed predictive models for road lane detection and musical therapy using Facial Emotion Recognition",
      "Performed data cleaning, EDA, and feature engineering to optimize model performance",
      "Applied regression, classification, and clustering techniques using Scikit-learn and TensorFlow",
    ],
    technologies: ["Python", "TensorFlow", "Scikit-learn", "OpenCV", "Pandas"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Dawg Team Products",
    description:
      "A professional e-commerce platform for sports team merchandise with modern UI, secure payments, and inventory management. Built with scalability and performance in mind.",
    image: "/projects/dawg-team.png",
    liveUrl: "https://dawgteamproducts.com/",
    githubUrl: "",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "PostgreSQL"],
    category: "E-Commerce",
  },
  {
    id: 2,
    title: "Elite Boost",
    description:
      "Gaming service platform offering boosting and coaching services. Features user authentication, order tracking, and real-time chat for customer communication.",
    image: "/projects/elite-boost.png",
    liveUrl: "https://eliteboost.net/",
    githubUrl: "",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    category: "SaaS Platform",
  },
  {
    id: 3,
    title: "Mountain Rose Herbs",
    description:
      "E-commerce website for organic herbs and botanical products. Includes product filtering, wishlist functionality, and seamless checkout experience.",
    image: "/projects/mountain-rose.png",
    liveUrl: "https://mountainroseherbs.com/",
    githubUrl: "",
    technologies: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL"],
    category: "E-Commerce",
  },
  {
    id: 4,
    title: "FootWhere",
    description:
      "Premium footwear e-commerce platform with advanced product filtering, size guides, and seamless shopping experience. Features fast checkout and order tracking.",
    image: "/projects/footwhere.png",
    liveUrl: "https://www.footwhere.com/",
    githubUrl: "",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "PostgreSQL"],
    category: "E-Commerce",
  },
  {
    id: 5,
    title: "Hydra Pools",
    description:
      "Professional pool services website showcasing pool construction, maintenance, and renovation services. Features service booking and gallery of completed projects.",
    image: "/projects/hydrapools.png",
    liveUrl: "https://www.hydrapools.com/",
    githubUrl: "",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    category: "Business Website",
  },
  {
    id: 6,
    title: "Clay Culture",
    description:
      "Artisan pottery and ceramics e-commerce platform featuring handcrafted products. Elegant design showcasing unique clay artworks with secure checkout.",
    image: "/projects/clay-culture.png",
    liveUrl: "https://www.clay-culture.com/",
    githubUrl: "",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    category: "E-Commerce",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    title: "Founder, Dawg Team Products",
    image: "/testimonials/client1.png",
    quote:
      "Noman delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise transformed our vision into reality. The site handles thousands of orders seamlessly!",
    project: "Dawg Team Products",
  },
  {
    id: 2,
    name: "James Rodriguez",
    title: "Owner, FootWhere",
    image: "/testimonials/client2.png",
    quote:
      "Outstanding work on our footwear e-commerce platform! Noman built a fast, user-friendly site with excellent product filtering and seamless checkout. Sales have increased significantly since launch.",
    project: "FootWhere",
  },
  {
    id: 3,
    name: "Amanda Peterson",
    title: "Director, Hydra Pools",
    image: "/testimonials/client3.png",
    quote:
      "Noman created a stunning website for our pool services business. The design perfectly captures our brand, and the booking system has streamlined our customer inquiries. Highly professional!",
    project: "Hydra Pools",
  },
  {
    id: 4,
    name: "Elena Martinez",
    title: "Founder, Clay Culture",
    image: "/testimonials/client4.png",
    quote:
      "Working with Noman was an absolute pleasure. He understood our artistic vision and created a beautiful e-commerce platform that showcases our pottery perfectly. The site is both elegant and functional!",
    project: "Clay Culture",
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "FAST - National University of Computer and Emerging Sciences",
    location: "Karachi, Pakistan",
    period: "Aug 2022 - Present",
    grade: "CGPA: 3.59 / 4.0",
  },
];

export const certifications = [
  {
    name: "Google Advanced Data Analytics",
    issuer: "Coursera",
    date: "June 2024",
  },
  {
    name: "Google AI Essentials",
    issuer: "Coursera",
    date: "July 2024",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "Client-First Approach",
    description: "I prioritize clear communication and collaboration, ensuring your vision is understood and executed perfectly.",
    techStack: ["Communication", "Collaboration", "Transparency"],
  },
  {
    id: 2,
    title: "Global Availability",
    description: "Flexible with time zones - I adapt my schedule to ensure seamless collaboration with clients worldwide.",
    techStack: ["Flexible Hours", "Quick Response", "Remote Work"],
  },
  {
    id: 3,
    title: "Full Stack Expertise",
    description: "From frontend interfaces to backend APIs and databases, I build complete solutions from the ground up.",
    techStack: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Modern Tech Stack",
    description: "I stay current with the latest technologies and best practices to deliver cutting-edge solutions.",
    techStack: ["TypeScript", "Tailwind", "Docker", "AWS"],
  },
  {
    id: 5,
    title: "Quality & Performance",
    description: "Clean code, optimized performance, and scalable architecture are at the core of every project I deliver.",
    techStack: ["Clean Code", "SEO", "Performance", "Security"],
  },
  {
    id: 6,
    title: "Let's Build Together",
    description: "Ready to transform your ideas into reality? I'm excited to work on challenging projects that make an impact.",
    techStack: ["Web Apps", "E-Commerce", "APIs", "Dashboards"],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Noman-Siddiquii",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/noman-siddiqui-aa914b250/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:nomansiddiqui872@gmail.com",
    icon: "mail",
  },
];
