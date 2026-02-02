"use client";

import { useEffect, useRef, useState } from "react";

export function About() {
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
    <section id="about" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-2xl md:text-3xl font-bold text-foreground mb-12 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-mono text-lg">01.</span>
          About Me
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div
          className={`grid md:grid-cols-3 gap-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Text */}
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {
                "Hello! I'm Nikhil, a passionate frontend developer currently pursuing my Bachelor's in Electronics and Communication Engineering at "
              }
              <span className="text-primary">
                Dr. B. R. Ambedkar National Institute of Technology, Jalandhar
              </span>
              .
            </p>
            <p>
              My journey in web development started with curiosity and has
              evolved into a deep passion for creating intuitive, user-centric
              digital experiences. I enjoy working with modern technologies and
              am constantly learning new skills.
            </p>
            <p>
              {"I worked as a Software Development Intern at "}
              <span className="text-primary">Basil Infotech</span>
              {
                ", where I built FoodIO - a full-stack recipe sharing platform using the MERN stack."
              }
            </p>
            <p>
              {
                "I also contributed to my college's hostel allotment system, benefiting over 5,000 students."
              }
            </p>
            <p>
              {
                "When I'm not coding, you'll find me in Gaming, participating in debates, or exploring new technologies."
              }
            </p>
          </div>

          {/* Profile Image Card */}
          <div className="relative group">
            {/* Image */}
            <div className="relative z-10 rounded-lg overflow-hidden aspect-square bg-black">
              <img
                src="/nikhil-profile.jpg.jpeg"
                alt="Nikhil Geddam"
                className="w-full h-full object-cover"
              />
            </div>

            {/* VERY SOFT GRADIENT */}
            <div className="absolute inset-0 rounded-lg bg-primary/20 blur-xl -z-10" />

            {/* LIGHT BORDER FRAME */}
            <div className="absolute inset-0 rounded-lg border border-primary/60 translate-x-3 translate-y-3 -z-20 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
