"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "FoodIO",
    description:
      "A full-stack recipe sharing platform built with React, Node.js, Express, and MongoDB. Features JWT authentication, CRUD operations, favorites, search, and social sharing.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/xNikhilx1/FOODIO.git",
    external: "https://foodio-frontend-6ps0.onrender.com/",
    featured: true,
    isLive: true,
  },
  {
    title: "NIT J Hostel Allotment",
    description:
      "Digitized hostel allotment system for NIT Jalandhar, serving 5,000+ students and 200 staff. Reduced allotment time by 85% with admin dashboard managing 2,500+ rooms.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/xNikhilx1/Hostel_website.git",
    external: "https://hostel-frontend-neon.vercel.app/",
    featured: true,
    isLive: true,
  },
  {
    title: "Real-Time Object & Human Detection",
    description:
      "AI-powered real-time detection system using YOLOv8, OpenCV, and PyTorch to identify humans, animals, and vehicles with bounding-box visualization, optimized with GPU acceleration (CUDA) achieving up to 35 FPS.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "CUDA"],
    github: "https://github.com/xNikhilx1/Live_detect.git",
    external: "#",
    featured: false,
  },
  {
    title: "Live Polling Application",
    description:
      "Real-time polling system for classrooms using WebSocket communication. Teachers create timed polls, students participate instantly with live result visualization and vote validation.",
    tech: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/xNikhilx1/LIVE-POLLING-APP.git",
    external: "#",
    featured: false,
  },
  {
    title: "WikiSense",
    description:
      "A fast and minimal Wikipedia search app built with React and Vite. Users can search and instantly read summarized Wikipedia articles through a clean, dark-themed interface.",
    tech: ["React", "Vite", "JavaScript", "Wikipedia API"],
    github: "https://github.com/xNikhilx1/Wikisense.git",
    external: null,
    featured: false,
  },
  {
    title: "Sweet Shop Management",
    description:
      "TDD-driven inventory management system for a sweet shop. Features add/delete sweets, search by name/category/price, sorting, purchase & restock with fully responsive UI.",
    tech: ["JavaScript", "Jest", "HTML/CSS", "TDD"],
    github: "https://github.com/xNikhilx1/SweetShop_Management_System.git",
    external: "#",
    featured: false,
  },
  {
    title: "TrackMyDSA",
    description:
      "Terminal-based C++ application to track DSA problem-solving progress. Add problems, mark solved, filter by topic, and view statistics with local file persistence.",
    tech: ["C++", "STL", "File I/O"],
    github: "https://github.com/xNikhilx1/TrackMyDSA.git",
    featured: false,
  },
];

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-2xl md:text-3xl font-bold text-foreground mb-12 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-mono text-lg">03.</span>
          Featured Projects
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.title}
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
            >
              <div className="p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-primary font-mono text-sm">
                    Featured Project
                  </p>
                  {project.isLive && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                      Live
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm font-mono text-primary/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Noteworthy Projects */}
        <h3
          className={`text-xl font-bold text-foreground text-center mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {otherProjects.map((project, idx) => (
            <div
              key={project.title}
              className={`p-6 rounded-lg bg-card border border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(idx + 3) * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <Folder size={40} className="text-primary" />
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
