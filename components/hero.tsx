"use client";

import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-mono text-sm mb-4 animate-fade-up opacity-0">
              Hi, my name is
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up opacity-0 animation-delay-200 text-balance">
              Nikhil Geddam
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground mb-6 animate-fade-up opacity-0 animation-delay-400 text-balance">
              I build things for the web.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up opacity-0 animation-delay-600 leading-relaxed">
              {
                "I'm a Final year Student Pursuing Electronics & Communication Engineering at "
              }
              <span className="text-primary">NIT Jalandhar</span>, with a strong focus on building modern, high-quality
              web applications and digital experiences.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-5 mb-8 animate-fade-in opacity-0 animation-delay-600">
              <a
                href="https://github.com/NIKHILNIKKI76"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 text-muted-foreground"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-geddam/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 text-muted-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:geddamnikhil407@gmail.com"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 text-muted-foreground"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://instagram.com/nikhil.tif_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 text-muted-foreground"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium animate-fade-in opacity-0 animation-delay-600"
            >
              Explore My Work
              <ArrowDown size={18} className="animate-bounce" />
            </a>
          </div>

          {/* Profile Photo */}
          <div className="relative group animate-fade-in opacity-0 animation-delay-400">
            <div className="relative z-10 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
              <img
                src="/nikhil-profile.jpg"
                alt="Nikhil Geddam"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
