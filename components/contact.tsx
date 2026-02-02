"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Instagram } from "lucide-react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p
          className={`text-primary font-mono text-sm mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {"04. What's Next?"}
        </p>

        <h2
          className={`text-3xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Get In Touch
        </h2>

        <p
          className={`text-muted-foreground text-lg mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {
            "I'm currently looking for new opportunities and my inbox is always open. Whether you have a question, want to collaborate, or just want to say hi, I'll try my best to get back to you!"
          }
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <a
            href="mailto:geddamnikhil407@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium text-lg"
          >
            <Mail size={20} />
            Say Hello
          </a>

          <a
            href="https://instagram.com/nikhil.tif_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-muted-foreground rounded-lg hover:border-primary hover:text-primary transition-all duration-300 font-medium text-lg"
          >
            <Instagram size={20} />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
