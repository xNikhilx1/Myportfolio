import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/NIKHILNIKKI76"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-geddam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:geddamnikhil407@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://instagram.com/nikhil.tif_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
        <p className="text-muted-foreground text-sm font-mono">
          Designed & Built by Nikhil Geddam
        </p>
        <p className="text-muted-foreground/60 text-xs">+91 9573717423</p>
      </div>
    </footer>
  );
}
