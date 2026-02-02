"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "GitHub", "VS Code", "AWS"],
  },
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 bg-secondary/30"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-2xl md:text-3xl font-bold text-foreground mb-12 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-mono text-lg">02.</span>
          Skills & Technologies
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary text-muted-foreground rounded-full font-mono hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    {skill}
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
